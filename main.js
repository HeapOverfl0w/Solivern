class Game
{
  constructor(ctx)
  {
    this.audio = new AudioHandler();
    this.hand = new Hand();
    this.board = new Board();
    this.quests = new Quests();
    this.endTurnButton = new ImageButton(ctx.canvas.width / 2 - 25, 5, 45, 16, 48, 32);
    this.destroyButton = new ImageButton(ctx.canvas.width / 2 - 50, 5, 16, 16, 48, 16);

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

    this.turn = 0;
  }

  Initialize()
  {
      this.LoadAllData();
      this.Update();
  }

  LoadAllData()
  {
      this.db.LoadAllData();
  }

  Draw()
  {
    this.board.Draw(this.ctx);

    if (this.gameOver)
      return;
      
    if (this.quests.selectedCardIndex == -1)
      this.hand.Draw(this.ctx);

    if (this.hand.selectedCardIndex == -1)
      this.quests.Draw(this.ctx);

    this.resourceCollection.Draw(this.ctx);
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
        this.ctx.fillRect(0, yindex * 12, this.gameMessages[m].length * 5, 16);
        this.ctx.fillStyle = TEXTCOLOR;
        this.ctx.fillText(this.gameMessages[m], 0, ++yindex * 12);
      }
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
    let questMessages = this.quests.Update(this.turn, this.db, this.board, this.ctx);
    let boardMessages = this.board.Update(this.turn, this.db);
    if (this.turn == 0)
    {
      this.endTurnButton.visible = true;
      this.destroyButton.visible = true;
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
      this.gameMessages = [ "You have reached pass turn 10 and no longer have patrons. GAME OVER." ];
      this.gameOver = true;
      this.Draw();
    }
    
    this.SetGameMessages(questMessages.concat(boardMessages));
  }

  EndTurnTimeout(game)
  {
    game.endTurnButton.visible = true;
    game.destroyButton.visible = true;
    game.Draw();
    game.turn++;
    game.endTurnTimeout = undefined;
    game.SetTimeoutBeginGameMessage();
  }

  HandleMouseOver(pointx, pointy)
  {
    if (this.endTurnTimeout == undefined)
    {
      let tilex = this.TranslatePointCoordinatesToTile(true, pointx);
      let tiley = this.TranslatePointCoordinatesToTile(false, pointy);

      if (this.hand.selectedCardIndex != -1 || this.board.HandleMouseOver(tilex, tiley) || this.quests.HandleMouseOver(pointx, pointy, this.ctx))
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
      }
      else if (this.hand.selectedCardIndex != -1)
      {
        let message = this.board.PlaceObject(this.hand.GetSelectedCard(), 
        this.TranslatePointCoordinatesToTile(true, pointx), this.TranslatePointCoordinatesToTile(false, pointy));
        this.SetGameMessage(message);
      
          //TODO: I don't like this check here, but this will work for right now
          if (message == "Purchased.")
          {
              this.hand.RemoveSelectedCard();
          }

        this.Draw();
        this.audio.PlayActivate();
      }
      else if (this.quests.selectedCardIndex != -1)
      {
        let message = this.board.SelectForQuest(this.quests.GetSelectedCard(),
        this.TranslatePointCoordinatesToTile(true, pointx), this.TranslatePointCoordinatesToTile(false, pointy));
        this.SetGameMessage(message);
        this.quests.CancelCardPlacement();
        this.Draw();
        this.audio.PlayActivate();
      }
      else if (this.endTurnButton.IsInside(pointx, pointy))
      {
          this.Update();
          this.audio.PlayActivate();
      }
      else if (this.destroyButton.IsInside(pointx, pointy))
      {
        this.gameMessages = ["Sell mode started - hit ESC to cancel."];
        this.Draw();
        this.destructionMode = true;
        this.audio.PlayActivate();
      }
      else
      {
        let message = this.hand.ClickedOnCard(pointx, pointy, this.ctx);

        if (message != "")
        {
          //TODO: again, don't like using the string comparison here
          if (message == "Purchased.")
          {
            this.hand.RemoveSelectedCard();
            this.audio.PlayActivate();
          }
          this.SetGameMessage(message);
          this.Draw();
        }
        else //same logic for quests
        {
          message = this.quests.ClickedOnCard(pointx, pointy, this.ctx);

          if (message != "")
          {
            this.SetGameMessage(message);
            this.Draw();
            this.audio.PlayActivate();
          }
        }
      }
    }
  }

  HandleKeyboardInput(keyCode)
  {
    if (keyCode == 27 && this.endTurnTimeout == undefined)
    {
      this.destructionMode = false;
      this.hand.CancelCardPlacement();
      this.quests.CancelCardPlacement();
      this.audio.PlayActivate();
      this.Draw();
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
    this.gameMessageTimeout = setTimeout(this.ResetGameMessage, 5000, this);
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
