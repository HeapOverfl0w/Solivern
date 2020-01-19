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
var RESOURCETEXTOFFSET = 8;

var CARDTYPE_BUFF = 0;
var CARDTYPE_CURSE = 1;
var CARDTYPE_OBJECT = 2;
var CARDTYPE_RESOURCE = 3;
var CARDTYPE_NONE = 4;
var CARDTYPE_CHARACTER = 5;

var HANDSIZE = 7;

var TEXTCOLOR = "#000000";
var BUTTONCOLOR = "#39BF5E";
var TEXTFONT = "8px Arial";

var SMALLCARDSPRITESHEET = document.getElementById("smallcard");
var LARGECARDSPRITESHEET = document.getElementById("largecard");
var RESOURCESPRITESHEET = document.getElementById("resources");
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
        ctx.fillStyle = TEXTCOLOR;
        ctx.fillText(this.count, locX + RESOURCETEXTOFFSET, locY);
    }
}

class ResourceCollection
{
  constructor(resources)
  {
    this.resources = resources;
  }

  Get(i)
  {
    return this.resources[i];
  }

  GetByName(name)
  {
    for (let i = 0; i < this.resources.length; i++)
    {
      if (name.toUpperCase() == this.resources[i].name.toUpperCase())
        return this.resources[i];
    }

    return undefined;
  }

  Draw(ctx)
  {
    let TEXT_OFFSET = 24;
    let fullRscBarWidth = RESOURCEWIDTH + RESOURCETEXTOFFSET + TEXT_OFFSET;
    for(let i = 0; i < this.resources.length; i++)
    {
      let x = ctx.canvas.width - (fullRscBarWidth * ( this.resources.length - i));
      this.resources[i].Draw(x, 0, ctx);
    }
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
        this.smallCardSpriteLocX = smCardSpriteX * TILEWIDTH;
        this.smallCardSpriteLocY = smCardSpriteY * TILEHEIGHT;
        this.largeCardSpriteLocX = lgCardSpriteX * LARGECARDWIDTH;
        this.largeCardSpriteLocY = lgCardSpriteY * LARGECARDHEIGHT;
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

    DrawLargeCardWithOffset(locX, locY, ctx)
    {
      //first check if we're at the edge of the game, if so draw it on the left instead
      //of normally drawing it on the right
      if (locX + LARGECARDWIDTH >= TILESX * TILEWIDTH)
      {
        ctx.drawImage(LARGECARDSPRITESHEET, this.largeCardSpriteLocX, this.largeCardSpriteLocY, 
          LARGECARDWIDTH, LARGECARDHEIGHT, locX - LARGECARDWIDTH, locY, LARGECARDWIDTH, LARGECARDHEIGHT);
      }
      else
      {
        ctx.drawImage(LARGECARDSPRITESHEET, this.largeCardSpriteLocX, this.largeCardSpriteLocY, 
          LARGECARDWIDTH, LARGECARDHEIGHT, locX + LARGECARDWIDTH, locY, LARGECARDWIDTH, LARGECARDHEIGHT);
      }
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
        rscUp, rscDown, amountUp, amountDown)
    {
        super(smCardSpriteX, smCardSpriteY, lgCardSpriteX, lgCardSpriteY);
        this.cardType = CARDTYPE_BUFF;
        this.resourceUp = rscUp;
        this.resourceDown = rscDown;
        this.amountUp = amountUp;
        this.amountDown = amountDown;
    }

    Activate()
    {
        if (CanActivate())
        {
            this.resourceDown.count -= this.amountDown;
            this.resourceUp.count += this.amountUp;
        }
    }

    CanActivate()
    {
        return (this.resourceDown.count - amountDown) >= 0;
    }

    PayFor()
    {
      if (this.CanActivate())
      {
        this.Activate();
        return "Purchased resources!"
      }
      else
        return "Insufficient funds."
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

    DrawObjectPlacement(locX, locY, ctx)
    {
      this.DrawSmallCard(locX * TILEWIDTH, locY * TILEHEIGHT, ctx);
      let startX = locX * TILEWIDTH - this.satisfactionRadius * TILEWIDTH;
      let startY = locY * TILEHEIGHT - this.satisfactionRadius * TILEHEIGHT;
      ctx.beginPath();
      ctx.strokeStyle = "green";
      ctx.rect(startX, startY, this.satisfactionRadius * 2 * TILEWIDTH, this.satisfactionRadius * 2 * TILEHEIGHT);
      ctx.stroke();
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

    /*DrawLargeCard(locX, locY, ctx)
    {
        super(locX, locY, ctx);
        //TODO: Add drawing logic for resource upkeeps and satisfaction bar.
    }*/

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
    this.objectMap = new Array();
    for (let x = 0; x < TILESX; x++)
    {
      this.objectMap[x] = new Array();
    }
    this.characterMap = new Array();
    for (let x = 0; x < TILESX; x++)
    {
      this.characterMap[x] = new Array();
    }
    this.focusedVector = undefined;
  }

  Update()
  {
    let returnMessage = "";

    for (let x = 0; x < TILESX; x++)
    {
      for (let y = 0; y < TILESY; y++)
      {
        if (this.objectMap[x][y] != undefined)
          this.objectMap[x][y].Update();
        if (this.characterMap[x][y] != undefined)
          this.characterMap[x][y].Update(this.objectMap);

        //Determine if characters need to be removed
        if (this.characterMap[x][y] != undefined && !this.characterMap[x][y].IsSatisfied() && !this.characterMap[x][y].firstAppearance)
        {
          returnMessage += this.characterMap[x][y].name + " was unsatisfied and left.\n";
          this.characterMap[x][y] = undefined;
        }
      }
    }

    return returnMessage;
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
          if (this.focusedVector != undefined && this.focusedVector.x == x && this.focusedVector.y == y)
          {
            this.objectMap[x][y].DrawLargeCard(x * TILEWIDTH, y * TILEHEIGHT, ctx);
            if (this.characterMap[x][y] != undefined)
              this.characterMap[x][y].DrawLargeCardWithOffset(x * TILEWIDTH, y * TILEHEIGHT, ctx);
          }
          else
          {
            this.objectMap[x][y].DrawSmallCard(x * TILEWIDTH, y * TILEHEIGHT, ctx);
            if (this.characterMap[x][y] != undefined)
              this.characterMap[x][y].DrawShiftedSmallCard(x * TILEWIDTH, y * TILEHEIGHT, ctx);
          }
        }
        else if (this.characterMap[x][y] != undefined)
        {
          if (this.focusedVector != undefined && this.focusedVector.x == x && this.focusedVector.y == y)
            this.characterMap[x][y].DrawLargeCard(x * TILEWIDTH, y * TILEHEIGHT, ctx);
          else
            this.characterMap[x][y].DrawSmallCard(x * TILEWIDTH, y * TILEHEIGHT, ctx);
        }
      }
    }
  }

  PlaceObject(objectCard, tilex, tiley)
  {
    let placed = objectCard.PayFor();
    if (placed)
    {
      //check if something already exists
      if (this.objectMap[tilex][tiley] != undefined)
        return "Object already at location.";
      else if (!objectCard.passable && this.characterMap[tilex][tiley] != undefined)
        return "Cannot place unusable object where patron resides.";
      else
      {
        this.objectMap[tilex][tiley] = objectCard;
        return "Purchased.";
      }
    }
    else
      return "Insufficient " + objectCard.rscCost.resource.name + ".";
  }

  HandleMouseOver(tilex, tiley)
  {
    if (this.characterMap[tilex][tiley] != undefined)
    {
      this.focusedVector = new Vector2D(tilex, tiley);
      return true;
    }
    else if (this.objectMap[tilex][tiley] != undefined)
    {
      this.focusedVector = new Vector2D(tilex, tiley);
      return true;
    }
    else
    {
      this.focusedCard = undefined;
      return false;
    }
  }
}

class Hand
{
  constructor()
  {
    this.cards = [];
    this.selectedCardIndex = -1;
    this.EDGE_OFFSET = 5;
  }

  Update(turnCount, db)
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

    this.GenerateNewHand(turnCount, db);
  }

  GenerateNewHand(turnCount, db)
  {
    //clear hand
    if (this.cards.length > 0)
      this.cards.splice(0, this.cards.length);

    for (let i = 0; i < HANDSIZE; i++)
    {
      this.cards.push(db.GetRandomHandCard(turnCount));
    }
  }

  Draw(ctx)
  {
    let width = ctx.canvas.width;
    let height = ctx.canvas.height;
    let widthSeparation = width / this.cards.length;
    let heightFromBottom = height - LARGECARDHEIGHT;

    for (let i = 0; i < this.cards.length; i++)
    {
      if (this.selectedCardIndex == -1 || this.selectedCardIndex == i && this.cards[i] != undefined)
        this.cards[i].DrawLargeCard(i * widthSeparation + this.EDGE_OFFSET, heightFromBottom - this.EDGE_OFFSET, ctx);
    }
  }

  DrawObjectPlacement(x, y, ctx)
  {
    if (this.selectedCardIndex != -1)
      this.cards[this.selectedCardIndex].DrawObjectPlacement(x, y, ctx);
  }

  ClickedOnCard(pointx, pointy, ctx)
  {
    let width = ctx.canvas.width;
    let height = ctx.canvas.height;
    let widthSeparation = width / this.cards.length;
    let heightFromBottom = height - LARGECARDHEIGHT;
    let cardy = heightFromBottom - this.EDGE_OFFSET;
    for (let i = 0; i < this.cards.length; i++)
    {
      let cardx = i * widthSeparation + this.EDGE_OFFSET;
      
      if (cardx <= pointx && cardx + LARGECARDWIDTH >= pointx &&
          cardy <= pointy && cardy + LARGECARDHEIGHT >= pointy)
      {
        if (this.cards[i].cardType == CARDTYPE_RESOURCE)
        {
          return this.cards[i].PayFor();
        }
        else if (this.cards[i].cardType == CARDTYPE_OBJECT)
        {
          this.selectedCardIndex = i;
          return "Place card...";
        }
          
        return "";
      }
    }    

    return "";
  }

  CancelCardPlacement()
  {
    this.selectedCardIndex = -1;
  }

  RemoveSelectedCard()
  {
    if (this.selectedCardIndex != -1)
    {
      this.cards.splice(this.selectedCardIndex);
    }
  }

  GetSelectedCard()
  {
    if (this.selectedCardIndex == -1)
      return undefined;
    else
      return this.cards[this.selectedCardIndex];
  }
}

class Vector2D
{
  constructor (x, y)
  {
    this.x = x;
    this.y = y;
  }
}

class Button
{
  constructor(x, y, width, height, text, color)
  {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.visible = true;
    this.color = color;
  }

  Draw(ctx)
  {
    if (this.visible)
    {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.fillStyle = TEXTCOLOR;
      ctx.fillText(this.text, this.x, this.y, this.width);
    }
  }

  IsInside(pointx, pointy)
  {
    return (this.x <= pointx && (this.x + this.width) >= pointx &&
        this.y <= pointy && (this.y + this.height) >= pointy);
  }
}