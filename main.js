class Game
{
  constructor(ctx)
  {
    this.hand = new Hand();
    this.board = new Board();
    this.endTurnButton = new Button(ctx.canvas.width - 100, 20, 50, 16, "End Turn", 5, 12, BUTTONCOLOR);

    this.goldResource = new Resource(0,0,"Gold");
    this.beerResource = new Resource(RESOURCEWIDTH, 0, "Beer");
    this.foodResource = new Resource(RESOURCEWIDTH * 2, 0, "Food");
    this.resourceCollection = new ResourceCollection([this.goldResource, this.beerResource, this.foodResource]);

    this.db = new Database(this.resourceCollection);
    this.gameMessage = "";
    this.ctx = ctx;
    this.ctx.font = TEXTFONT;
    this.ctx.imageSmoothingEnabled = false;

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
    this.hand.Draw(this.ctx);

    this.resourceCollection.Draw(this.ctx);
    this.endTurnButton.Draw(this.ctx);

    //draw message
    this.ctx.fillStyle = TEXTCOLOR;
    for(let m = 0; m < this.gameMessages.length; m++)
    {
      this.ctx.fillText(this.gameMessages[m], 0, m * 12 + 12);
    }
  }

  Update()
  {
    this.hand.Update(this.turn, this.db);
    this.SetGameMessages(this.board.Update(this.turn, this.db));
    this.Draw();
    this.turn++;
  }

  HandleMouseOver(pointx, pointy)
  {
    let tilex = this.TranslatePointCoordinatesToTile(true, pointx);
    let tiley = this.TranslatePointCoordinatesToTile(false, pointy);

    if (this.hand.selectedCardIndex != -1 || this.board.HandleMouseOver(tilex, tiley))
    {
        this.Draw();
        this.hand.DrawObjectPlacement(tilex, tiley, ctx);
    }
  }

  HandleMouseClick(pointx, pointy)
  {
    if (this.hand.selectedCardIndex != -1)
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
    }
    else if (this.endTurnButton.IsInside(pointx, pointy))
    {
        this.Update();
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
        }
        this.SetGameMessage(message);
        this.Draw();
      }
    }
  }

  HandleKeyboardInput(keyCode)
  {
    if (keyCode == 27)
        this.hand.CancelCardPlacement();
  }

  SetGameMessage(message)
  {
      this.gameMessages = [message];
      this.SetTimeoutBeginGameMessage();
  }

  SetGameMessages(messages)
  {
    this.gameMessages = messages;
    this.SetTimeoutBeginGameMessage();
  }

  SetTimeoutBeginGameMessage()
  {
    setTimeout(this.ResetGameMessage, 5000, this);
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