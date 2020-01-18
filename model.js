var TILESX = 32;
var TILESY = 18;
var DEFAULTSMALLCARDX = 0;
var DEFAULTSMALLCARDY = 0;
var DEFAULTLARGECARDX = 0;
var DEFAULTLARGECARDY = 0;
var DEFAULTRESOURCEX = 0;
var DEFAULTRESOURCEY = 0;

var TILEWIDTH = 16;
var TILEHEIGHT = 16;
var LARGECARDWIDTH = 32;
var LARGECARDHEIGHT = 38;
var RESOURCEWIDTH = 8;
var RESOURCEHEIGHT = 8;

var CARDTYPE_BUFF = 0;
var CARDTYPE_CURSE = 1;
var CARDTYPE_OBJECT = 2;
var CARDTYPE_RESOURCE = 3;
var CARDTYPE_NONE = 4;
var CARDTYPE_CHARACTER = 5;

var SMALLCARDSPRITESHEET;
var LARGECARDSPRITESHEET;
var RESOURCESPRITESHEET;
var BACKGROUNDIMAGE = document.getElementById("background");

class Resource
{
    constructor(rscSpriteX, rscSpriteY, name)
    {
        this.resourceSpriteX = rscSpriteX;
        this.resourceSpriteY = rscSpriteY;
        this.count = 0;
        this.name = name;
    }

    Draw(locX, locY, ctx)
    {
        ctx.drawImage(RESOURCESPRITESHEET, this.resourceSpriteX, this.resourceSpriteY, 
            RESOURCEWIDTH, RESOURCEHEIGHT, locX, locY, RESOURCEWIDTH, RESOURCEHEIGHT);
        ctx.fillText(this.count, locX + 32, locY);
    }
}

class ResourceUpkeep
{
    constructor(rsc, amount)
    {
        this.resource = rsc;
        this.amount = amount;
    }

    Update()
    {
        if (this.resource.count + this.amount < 0)
        {
            this.resource.count = 0;
            return false;
        }
        else
        {
            this.resource.count += this.amount;
            return true;
        }
    }

    HaveEnough()
    {
      return this.resource.count - this.amount >= 0;
    }
}


class Card
{
    constructor(smCardSpriteX, smCardSpriteY, lgCardSpriteX, lgCardSpriteY)
    {
        this.smallCardSpriteLocX = smCardSpriteX;
        this.smallCardSpriteLocY = smCardSpriteY;
        this.largeCardSpriteLocX = lgCardSpriteX;
        this.largeCardSpriteLocY = lgCardSpriteY;
        this.cardType = CARDTYPE_NONE;
    }

    DrawSmallCard(locX, locY, ctx)
    {
        ctx.drawImage(SMALLCARDSPRITESHEET, this.smallCardSpriteLocX, this.smallCardSpriteLocY, 
            TILEWIDTH, TILEHEIGHT, locX, locY, TILEWIDTH, TILEHEIGHT);
    }

    DrawLargeCard(locX, locY, ctx)
    {
        ctx.drawImage(LARGECARDSPRITESHEET, this.largeCardSpriteLocX, this.largeCardSpriteLocY, 
            LARGECARDWIDTH, LARGECARDHEIGHT, locX, locY, LARGECARDWIDTH, LARGECARDHEIGHT);
    }
}

class BuffCard extends Card
{
    constructor(smCardSpriteX, smCardSpriteY, lgCardSpriteX, lgCardSpriteY, 
        rsc, amount)
    {
        super(smCardSpriteX, smCardSpriteY, lgCardSpriteX, lgCardSpriteY);
        this.cardType = CARDTYPE_CURSE;
        this.resource = rsc;
        this.amount = amount;
    }

    Update()
    {
        this.resource.count += this.amount;
    }
}

class CurseCard extends Card
{
    constructor(smCardSpriteX, smCardSpriteY, lgCardSpriteX, lgCardSpriteY, 
        rsc, amount)
    {
        super(smCardSpriteX, smCardSpriteY, lgCardSpriteX, lgCardSpriteY);
        this.cardType = CARDTYPE_BUFF;
        this.resource = rsc;
        this.amount = amount;
    }

    Update()
    {
        this.resource.count -= this.amount;
    }
}

class ResourceCard extends Card
{
    constructor(smCardSpriteX, smCardSpriteY, lgCardSpriteX, lgCardSpriteY, 
        rscUp, rscDown, amount)
    {
        super(smCardSpriteX, smCardSpriteY, lgCardSpriteX, lgCardSpriteY);
        this.cardType = CARDTYPE_BUFF;
        this.resourceUp = rscUp;
        this.resourceDown = rscDown;
        this.amount = amount;
    }

    Activate()
    {
        if (CanActivate())
        {
            this.resourceDown.count -= this.amount;
            this.resourceUp.count += this.amount;
        }
    }

    CanActivate()
    {
        return (this.resourceDown - amount) >= 0;
    }
}

class ObjectCard extends Card
{
    constructor(smCardSpriteX, smCardSpriteY, lgCardSpriteX, lgCardSpriteY, 
        satisfactionBuff, satisfactionRadius, passable, expiration, rscUpkeep)
    {
        super(smCardSpriteX, smCardSpriteY, lgCardSpriteX, lgCardSpriteY);
        this.cardType = CARDTYPE_OBJECT;
        this.satisfactionBuff = satisfactionBuff;
        this.satisfactionRadius = satisfactionRadius;
        this.passable = passable;
        this.expiration = expiration;
        this.rscCost = rscUpkeep;
    }

    PayFor()
    {
      if (this.rscCost.HaveEnough())
      {
        this.rscCost.Update();
        return true;
      }
      else
        return false;        
    }

    Update()
    {
      expiration--;
      return expiration > 0;
    }

    IsCardInside(card)
    {
        if (this.locX == undefined || this.locY == undefined)
        {
            let startX = this.locX - this.satisfactionRadius * TILEWIDTH;
            let startY = this.locY - this.satisfactionRadius * TILEHEIGHT;
            let endX = startX + this.satisfactionRadius * 2 * TILEWIDTH;
            let endY = startY + this.satisfactionRadius * 2 * TILEHEIGHT;
            return (card.locX > startX && card.locY > startY && card.locX < endX && card.locY < endY);
        }
        else
            return false;
    }

    IsLocationInsdie(locX, locY)
    {
        if (this.locX == undefined || this.locY == undefined)
        {
            let startX = this.locX - this.satisfactionRadius * TILEWIDTH;
            let startY = this.locY - this.satisfactionRadius * TILEHEIGHT;
            let endX = startX + this.satisfactionRadius * 2 * TILEWIDTH;
            let endY = startY + this.satisfactionRadius * 2 * TILEHEIGHT;
            return (locX > startX && locY > startY && locX < endX && locY < endY);
        }
        else
            return false;
    }

    DrawObjectPlacement(locX, locY, ctx)
    {
        this.DrawSmallCard(locX, locY, ctx);
        let startX = locX - this.satisfactionRadius * TILEWIDTH;
        let startY = locY - this.satisfactionRadius * TILEHEIGHT;
        ctx.beginPath();
        ctx.strokeStyle = "green";
        ctx.rect(startX, startY, this.satisfactionRadius * 2 * TILEWIDTH, this.satisfactionRadius * 2 * TILEHEIGHT);
        ctx.stroke();
    }
}

class CharacterCard extends Card
{
    constructor(smCardSpriteX, smCardSpriteY, lgCardSpriteX, lgCardSpriteY, 
        satisfactionRequirement, satisfactionThreshold, locX, locY, rscUpkeeps, name)
    {
        super(smCardSpriteX, smCardSpriteY, lgCardSpriteX, lgCardSpriteY);
        this.cardType = CARDTYPE_CHARACTER;
        this.satisfactionRequirement = satisfactionRequirement;
        this.satisfactionLevel = 0;
        this.satisfactionThreshold = satisfactionThreshold;
        this.locX = locX;
        this.locY = locY;
        this.resourceUpkeeps = rscUpkeeps;
        this.firstAppearance = true;
        this.name = name;
    }

    Update(objectMap)
    {
        //pay upkeeps
        let unpaidUpkeep = false;
        this.satisfactionLevel = 0;
        for (let i = 0; i < this.resourceUpkeeps.length; i++)
        {
            unpaidUpkeep = !this.resourceUpkeeps[i].Update();
        }
        if (unpaidUpkeep)
            this.satisfactionLevel -= 3;
        else
            this.satisfactionLevel += 1;

        //determine satisfaction buffs from objects
        //TODO: Determine most efficient way to calculate radius buffs.
        for (let x = 0; x < TILESX; x++)
        {
            for (let y = 0; y < TILESY; y++)
            {
                if (objectMap[x][y] != undefined && objectMap[x][y].IsCardInside(this))
                  this.satisfactionLevel += objectMap[x][y].satisfactionBuff;                  
            }
        }
    }

    IsSatisfied()
    {
      return this.satisfactionLevel >= this.satisfactionThreshold;
    }

    DrawLargeCard(locX, locY, ctx)
    {
        super(locX, locY, ctx);
        //TODO: Add drawing logic for resource upkeeps and satisfaction bar.
    }

    DrawShiftedSmallCard(locX, locY, ctx)
    {
      ctx.drawImage(SMALLCARDSPRITESHEET, this.smallCardSpriteLocX, this.smallCardSpriteLocY - 3, 
        TILEWIDTH, TILEHEIGHT - 3, locX, locY - 3, TILEWIDTH, TILEHEIGHT - 3);
    }
}

class Board
{
  constructor()
  {
    this.objectMap = new Array(TILESX, TILESY);
    this.characterMap = new Array(TILESX, TILESY);
  }

  Update()
  {
    let returnMessages = [];

    for (let x = 0; x < TILESX; x++)
    {
      for (let y = 0; y < TILESY; y++)
      {
        if (this.objectMap[x][y] != undefined)
          this.objectMap[x][y].Update();
        if (this.characterMap[x][y] != undefined)
          this.characterMap[x][y].Update(this.objectMap);

        //Determine if characters need to be removed
        if (!this.characterMap[x][y].IsSatisfied() && !this.characterMap[x][y].firstAppearance)
        {
          returnMessages.push(this.characterMap[x][y].name + " was unsatisfied and left.");
          this.characterMap[x][y] = undefined;
        }
      }
    }

    return returnMessages;
  }

  Draw(ctx)
  {
    ctx.drawImage(BACKGROUNDIMAGE, 0, 0, TILESX * TILEWIDTH, TILESY * TILEHEIGHT, 0, 0, TILESX * TILEWIDTH, TILESY * TILEHEIGHT);
    for (let x = 0; x < TILESX; x++)
    {
      for (let y = 0; y < TILESY; y++)
      {
        if (this.objectMap[x][y] != undefined)
        {
          this.objectMap[x][y].DrawSmallCard(x * TILEWIDTH, y * TILEHEIGHT, ctx);
          if (this.characterMap[x][y] != undefined)
            this.characterMap[x][y].DrawShiftedSmallCard(x * TILEWIDTH, y * TILEHEIGHT, ctx);
        }
        else if (this.characterMap[x][y] != undefined)
        {
          this.characterMap[x][y].DrawSmallCard(x * TILEWIDTH, y * TILEHEIGHT, ctx);
        }
      }
    }
  }

  PlaceObject(objectCard, x, y)
  {
    let placed = objectCard.PayFor();
    if (placed)
    {
      //check if something already exists
      if (this.objectMap[x][y] != undefined)
        return "Object already at location.";
      else if (!objectCard.passable && this.characterMap[x][y] != undefined)
        return "Cannot place unusable object where patron resides.";
      else
        return "Purchased.";
    }
    else
      return "Insufficient " + objectCard.rscCost.resource.name + ".";
  }
}

class Hand
{
  constructor()
  {
    this.cards = [];
    this.selectedCardIndex = -1;
  }

  Update()
  {
    let handLength = this.cards.length;
    //run buffs/curses and then remove all cards from the hand
    for(let i = handLength - 1; i >= 0; i--)
    {
      if (this.cards[i].cardType == CARDTYPE_BUFF || 
          this.cards[i].cardType == CARDTYPE_CURSE)
      {
        this.cards[i].Update();
      }
      this.cards.splice(i, 1);
    }

    this.GenerateNewHand();
  }

  GenerateNewHand()
  {

  }

  Draw(ctx)
  {
    let EDGE_OFFSET = 5;
    let width = ctx.canvas.clientWidth;
    let height = ctx.canvas.clientHeight;
    let widthSeparation = width / this.cards.length;
    let heightFromBottom = height - LARGECARDHEIGHT;

    for (let i = 0; i < this.cards.length; i++)
    {
      if (this.selectedCardIndex == -1 || this.selectedCardIndex == i && this.cards[i] != undefined)
        this.cards[i].DrawLargeCard(i * widthSeparation + EDGE_OFFSET, heightFromBottom - EDGE_OFFSET, ctx);
    }
  }

  ClickedOnCard(pointx, pointy)
  {

  }

  GetSelectedCard()
  {
    if (this.selectedCardIndex == -1)
      return undefined;
    else
      return this.cards[this.selectedCardIndex];
  }
}

class Game
{
  constructor()
  {
    this.hand = new Hand();
    this.board = new Board();
    this.gameMessage = "";
  }

  Draw(ctx)
  {
    this.board.Draw(ctx);
    this.hand.Draw(ctx);
  }

  Update()
  {
    this.hand.Update();
    return this.board.Update();
  }

  HandleMouseOver(pointx, pointy)
  {

  }

  HandleMouseClick(pointx, pointy)
  {
    if (this.hand.selectedCardIndex != -1)
    {
      this.gameMessage =  this.board.PlaceObject(this.hand.GetSelectedCard(), 
      TranslatePointCoordinatesToTile(true, pointx), TranslatePointCoordinatesToTile(false, pointy));
      this.hand.selectedCardIndex = -1;
    }
    else
    {
      this.hand.ClickedOnCard(pointx, pointy);
    }

    this.Draw();
  }

  SetTimeoutBeginGameMessage()
  {
    setTimeout(ResetGameMessage, 5000);
  }

  ResetGameMessage()
  {
    this.gameMessage = "";
  }

  TranslatePointCoordinatesToTile(isX, point)
  {
    if (isX)
      return Math.floor(point / TILESX);
    else
      return Math.floor(point / TILESY)
  }
}