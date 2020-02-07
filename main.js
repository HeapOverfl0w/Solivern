class Game
{
  constructor(ctx)
  {
    this.audio = new AudioHandler();
    this.audio.Mute();
    this.hand = new Hand();
    this.board = new Board();
    this.quests = new Quests();
    this.endTurnButton = new ImageButton(ctx.canvas.width / 2 - 25, 0, 45, 16, 48, 32);
    this.destroyButton = new ImageButton(ctx.canvas.width / 2 - 50, 0, 16, 16, 48, 16);

    this.audioOnButton = new ImageButton(ctx.canvas.width - 10, ctx.canvas.height - 10, 8, 8, 48, 48);
    this.audioOnButton.visible = false;
    this.audioOffButton = new ImageButton(ctx.canvas.width - 10, ctx.canvas.height - 10, 8, 8, 56, 48)

    this.goldResource = new Resource(0,0,"Gold");
    this.goldResource.count = 10;
    this.beerResource = new Resource(RESOURCEWIDTH, 0, "Beer");
    this.foodResource = new Resource(RESOURCEWIDTH * 2, 0, "Food");
    this.resourceCollection = new ResourceCollection([this.goldResource, this.beerResource, this.foodResource]);

    this.db = new Database(this.resourceCollection);
    this.gameMessages = [];
    this.gameMessageTimeout = undefined;
    this.ctx = ctx;
    this.ctx.font = TEXTFONT;
    this.ctx.imageSmoothingEnabled = false;

    this.endTurnTimeout = undefined;
    this.destructionMode = false;
    this.gameOver = false;

    this.focusedCardText = "";

    this.drawSecondaryBackdrop = false;
    this.drawSecondaryTimeout = undefined;

    this.turn = 0;
  }

  Initialize()
  {
      this.LoadAllData();
      this.Update();
      this.SecondaryDrawTimeout(this);
  }

  LoadAllData()
  {
      this.db.LoadAllData();
  }

  SecondaryDrawTimeout(game)
  {
    game.drawSecondaryBackdrop = !game.drawSecondaryBackdrop;
    game.Draw();
    game.drawSecondaryTimeout = setTimeout(game.SecondaryDrawTimeout, 1500, game);
  }

  StopSecondaryDrawTimeout()
  {
    clearTimeout(this.drawSecondaryTimeout);
    this.drawSecondaryTimeout = undefined;
  }

  Draw()
  {
    this.board.Draw(this.ctx, this.hand.selectedCardIndex != -1, this.drawSecondaryBackdrop);

    if (this.gameOver)
      return;
      
    if (this.quests.selectedCardIndex == -1)
      this.hand.Draw(this.ctx);

    if (this.hand.selectedCardIndex == -1)
      this.quests.Draw(this.ctx);

    this.resourceCollection.Draw(this.ctx, this.turn);
    this.endTurnButton.Draw(this.ctx);
    this.destroyButton.Draw(this.ctx);

    //draw message
    this.ctx.fillStyle = TEXTCOLOR;
    let yindex = 0;
    for(let m = 0; m < this.gameMessages.length; m++)
    {
      if (this.gameMessages[m] != undefined && this.gameMessages[m] != "")
      {
        this.ctx.fillStyle = BUTTONCOLOR;
        this.ctx.fillRect(0, yindex * 12, this.gameMessages[m].length * 5, 12);
        this.ctx.fillStyle = TEXTCOLOR;
        this.ctx.fillText(this.gameMessages[m], 0, yindex++ * 12 - 2 + 11);
      }
    }

    this.audioOnButton.Draw(this.ctx);
    this.audioOffButton.Draw(this.ctx);

    //draw mouse over text
    if (this.focusedCardText != undefined && this.focusedCardText != "")
    {
      let textBoxLength = this.focusedCardText.length * 5;
      this.ctx.fillStyle = BUTTONCOLOR;
      this.ctx.fillRect(this.ctx.canvas.width/2 - textBoxLength/2, 22, textBoxLength, 14);
      this.ctx.fillStyle = TEXTCOLOR;
      this.ctx.fillText(this.focusedCardText, this.ctx.canvas.width/2 - textBoxLength/2, 32);
    }
  }

  Update()
  {
    this.gameMessages = [ "Calculating Next Turn..." ];
    if (this.gameMessageTimeout != undefined)
      clearTimeout(this.gameMessageTimeout);
    this.endTurnButton.visible = false;
    this.destroyButton.visible = false;
    this.Draw();
    this.hand.Update(this.turn, this.db, this.ctx);
    let boardMessages = this.board.Update(this.turn, this.db, this.audio);
    let questMessages = this.quests.Update(this.turn, this.db, this.board, this.ctx);
    if (this.turn == 0)
    {
      this.endTurnButton.visible = true;
      this.destroyButton.visible = true;
      this.resourceCollection.Update(this.board);
      this.Draw();
      this.turn++;
    }
    else
    {
      this.endTurnTimeout = setTimeout(this.EndTurnTimeout, 3000, this);
    }

    if (this.turn > 10 && !this.board.PatronsExist())
    {
      //end game
      this.gameMessages = [ "You have reached pass turn 10 and no longer have patrons. GAME OVER.", "Lasted Turns : " + this.turn ];
      this.gameOver = true;
      this.Draw();
      return;
    }

    this.resourceCollection.Update(this.board);
    
    this.SetGameMessages(questMessages.concat(boardMessages));
  }

  EndTurnTimeout(game)
  {
    game.endTurnButton.visible = true;
    game.destroyButton.visible = true;
    game.turn++;
    game.Draw();
    game.endTurnTimeout = undefined;
    game.SetTimeoutBeginGameMessage();
    game.SecondaryDrawTimeout(game);
  }

  HandleMouseOver(pointx, pointy)
  {
    if (this.endTurnTimeout == undefined)
    {
      let tilex = this.TranslatePointCoordinatesToTile(true, pointx);
      let tiley = this.TranslatePointCoordinatesToTile(false, pointy);

      let originalFocusedCardText = this.focusedCardText;

      let questMouseOverText = this.quests.HandleMouseOver(pointx, pointy, this.ctx);
      this.focusedCardText = questMouseOverText == undefined ? "" : questMouseOverText;
      if (this.focusedCardText == "")
        this.focusedCardText = this.hand.GetMouseOverText(pointx, pointy, this.ctx);

      if (this.hand.selectedCardIndex != -1 || this.board.HandleMouseOver(tilex, tiley) || questMouseOverText != undefined || this.focusedCardText != originalFocusedCardText)
      {
        this.Draw();
        this.hand.DrawObjectPlacement(tilex, tiley, ctx);
      }
    }
  }

  HandleMouseClick(pointx, pointy)
  {
    if (this.endTurnTimeout == undefined && !this.gameOver)
    {
      if (this.destructionMode)
      {
        let returnMessage = this.board.SellObjectAt(this.TranslatePointCoordinatesToTile(true, pointx), this.TranslatePointCoordinatesToTile(false, pointy));
        this.SetGameMessage(returnMessage);
        this.Draw();
        this.audio.PlayActivate();
        this.SecondaryDrawTimeout(this);
      }
      else if (this.hand.selectedCardIndex != -1)
      {
        let message = this.board.PlaceObject(this.hand.GetSelectedCard(), 
        this.TranslatePointCoordinatesToTile(true, pointx), this.TranslatePointCoordinatesToTile(false, pointy));
        this.SetGameMessage(message);
      
          //TODO: I don't like this check here, but this will work for right now
          if (message.includes("Purchased"))
          {
              this.hand.RemoveSelectedCard();
          }

        this.Draw();
        this.audio.PlayActivate();
        this.SecondaryDrawTimeout(this);
      }
      else if (this.quests.selectedCardIndex != -1)
      {
        let message = this.board.SelectForQuest(this.quests.GetSelectedCard(),
        this.TranslatePointCoordinatesToTile(true, pointx), this.TranslatePointCoordinatesToTile(false, pointy));
        this.SetGameMessage(message);
        this.quests.CancelCardPlacement();
        this.resourceCollection.Update(this.board);
        this.Draw();
        this.audio.PlayActivate();
        this.SecondaryDrawTimeout(this);
      }
      else if (this.endTurnButton.IsInside(pointx, pointy))
      {
          this.StopSecondaryDrawTimeout();
          this.Update();
          this.audio.PlayActivate();
      }
      else if (this.destroyButton.IsInside(pointx, pointy))
      {
        this.StopSecondaryDrawTimeout();
        this.gameMessages = ["Sell mode started - hit ESC to cancel."];
        this.Draw();
        this.destructionMode = true;
        this.audio.PlayActivate();
      }
      else if (this.audioOffButton.IsInside(pointx, pointy) || this.audioOnButton.IsInside(pointx, pointy))
      {
        this.ToggleAudio();
        this.Draw();
      }
      else
      {
        let message = this.hand.ClickedOnCard(pointx, pointy, this.ctx);

        if (message != "")
        {
          //TODO: again, don't like using the string comparison here
          if (message == "Purchased")
          {
            this.hand.RemoveSelectedCard();
            this.audio.PlayActivate();
          }
          else
            this.StopSecondaryDrawTimeout();
          this.SetGameMessage(message);
          this.Draw();
        }
        else //same logic for quests
        {
          message = this.quests.ClickedOnCard(pointx, pointy, this.ctx);

          if (message != "")
          {
            this.StopSecondaryDrawTimeout();
            this.SetGameMessage(message);
            this.Draw();
            this.audio.PlayActivate();
          }
        }
      }
    }
  }

  ToggleAudio()
  {
    if (this.audioOnButton.visible)
    {
      this.audioOffButton.visible = true;
      this.audioOnButton.visible = false;
      this.audio.Mute();
    }
    else
    {
      this.audioOffButton.visible = false;
      this.audioOnButton.visible = true;
      this.audio.UnMute();
      this.board.HandleAudio(this.audio);
    }
  }

  HandleKeyboardInput(keyCode)
  {
    if (keyCode == 27 && this.endTurnTimeout == undefined)
    {
      if (this.SecondaryDrawTimeout == undefined)
        this.SecondaryDrawTimeout(this);

      this.destructionMode = false;
      this.hand.CancelCardPlacement();
      this.quests.CancelCardPlacement();
      this.audio.PlayActivate();
      this.ResetGameMessage(this);
    }
  }

  SetGameMessage(message)
  {
      this.gameMessages = this.gameMessages.concat([message]);
      if (this.endTurnTimeout == undefined)
        this.SetTimeoutBeginGameMessage();
  }

  SetGameMessages(messages)
  {
    this.gameMessages = this.gameMessages.concat(messages);
    if (this.endTurnTimeout == undefined)
      this.SetTimeoutBeginGameMessage();
  }

  SetTimeoutBeginGameMessage()
  {
    clearTimeout(this.gameMessageTimeout)
    this.gameMessageTimeout = setTimeout(this.ResetGameMessage, this.gameMessages.length < 4 ? 5000 : this.gameMessages.length * 1500, this);
  }

  ResetGameMessage(game)
  {
    game.gameMessages = [];
    game.Draw();
  }

  TranslatePointCoordinatesToTile(isX, point)
  {
    if (isX)
      return Math.floor(point / TILEWIDTH);
    else
      return Math.floor(point / TILEHEIGHT);
  }
}
