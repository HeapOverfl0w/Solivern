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
var RESOURCEWIDTH = 12;
var RESOURCEHEIGHT = 12;
var RESOURCETEXTOFFSET = 24;

var CARDTYPE_BUFF = 0;
var CARDTYPE_CURSE = 1;
var CARDTYPE_OBJECT = 2;
var CARDTYPE_RESOURCE = 3;
var CARDTYPE_NONE = 4;
var CARDTYPE_CHARACTER = 5;

var HANDSIZE = 7;

var TEXTCOLOR = "#000000";
var BUTTONCOLOR = "rgb(254,193,7)";
var TEXTFONT = "10px Arial";

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
        ctx.fillText(this.count + "", locX + RESOURCETEXTOFFSET, locY + 12);
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
      return this.resource.count + this.amount >= 0;
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

    DrawLargeCardOnBoard(locX, locY, ctx)
    {
      ctx.drawImage(LARGECARDSPRITESHEET, this.largeCardSpriteLocX, this.largeCardSpriteLocY, 
        LARGECARDWIDTH, LARGECARDHEIGHT, locX - LARGECARDWIDTH/4, locY - LARGECARDHEIGHT/4, 
        LARGECARDWIDTH, LARGECARDHEIGHT);
    }

    DrawLargeCardWithOffset(locX, locY, ctx)
    {
      //first check if we're at the edge of the game, if so draw it on the left instead
      //of normally drawing it on the right
      if (locX + LARGECARDWIDTH >= TILESX * TILEWIDTH)
      {
        ctx.drawImage(LARGECARDSPRITESHEET, this.largeCardSpriteLocX, this.largeCardSpriteLocY, 
          LARGECARDWIDTH, LARGECARDHEIGHT, locX - LARGECARDWIDTH - LARGECARDWIDTH/4, locY - LARGECARDHEIGHT/4, LARGECARDWIDTH, LARGECARDHEIGHT);
      }
      else
      {
        ctx.drawImage(LARGECARDSPRITESHEET, this.largeCardSpriteLocX, this.largeCardSpriteLocY, 
          LARGECARDWIDTH, LARGECARDHEIGHT, locX + LARGECARDWIDTH - LARGECARDWIDTH/4, locY - LARGECARDHEIGHT/4, LARGECARDWIDTH, LARGECARDHEIGHT);
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

    Clone()
    {
      return new BuffCard(this.smallCardSpriteLocX / TILEWIDTH, this.smallCardSpriteLocY / TILEHEIGHT, this.largeCardSpriteLocX / LARGECARDWIDTH,
                          this.largeCardSpriteLocY / LARGECARDHEIGHT,this.resource, this.amount);
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

    Clone()
    {
      return new CurseCard(this.smallCardSpriteLocX / TILEWIDTH, this.smallCardSpriteLocY / TILEHEIGHT, this.largeCardSpriteLocX / LARGECARDWIDTH,
                          this.largeCardSpriteLocY / LARGECARDHEIGHT, this.resource, this.amount);
    }
}

class ResourceCard extends Card
{
    constructor(smCardSpriteX, smCardSpriteY, lgCardSpriteX, lgCardSpriteY, 
        rscUp, rscDown, amountUp, amountDown)
    {
        super(smCardSpriteX, smCardSpriteY, lgCardSpriteX, lgCardSpriteY);
        this.cardType = CARDTYPE_RESOURCE;
        this.resourceUp = rscUp;
        this.resourceDown = rscDown;
        this.amountUp = amountUp;
        this.amountDown = amountDown;
    }

    Activate()
    {
        if (this.CanActivate())
        {
            this.resourceDown.count -= this.amountDown;
            this.resourceUp.count += this.amountUp;
        }
    }

    CanActivate()
    {
        return (this.resourceDown.count - this.amountDown) >= 0;
    }

    PayFor()
    {
      if (this.CanActivate())
      {
        this.Activate();
        return "Purchased."
      }
      else
        return "Insufficient funds."
    }

    Clone()
    {
      return new ResourceCard(this.smallCardSpriteLocX / TILEWIDTH, this.smallCardSpriteLocY / TILEHEIGHT, this.largeCardSpriteLocX / LARGECARDWIDTH,
                              this.largeCardSpriteLocY / LARGECARDHEIGHT,this.resourceUp, this.resourceDown, this.amountUp, this.amountDown);
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
      this.expiration--;
      return this.expiration > 0;
    }

    IsCardInside(card)
    {
        if (this.locX == undefined || this.locY == undefined)
        {
            return (this.IsLocationInside(card.locX, card.locY));
        }
        else
            return false;
    }

    DrawObjectPlacement(locX, locY, ctx)
    {
      this.DrawSmallCard(locX * TILEWIDTH, locY * TILEHEIGHT, ctx);
      this.DrawSatisfactionRange(locX, locY, ctx);
    }

    DrawSatisfactionRange(locX, locY, ctx)
    {
      let startX = locX * TILEWIDTH - this.satisfactionRadius * TILEWIDTH;
      let startY = locY * TILEHEIGHT - this.satisfactionRadius * TILEHEIGHT;
      ctx.beginPath();
      ctx.strokeStyle = "green";
      ctx.rect(startX, startY, this.satisfactionRadius * 2 * TILEWIDTH + TILEWIDTH, this.satisfactionRadius * 2 * TILEHEIGHT + TILEHEIGHT);
      ctx.stroke();
    }

    IsLocationInside(locX, locY)
    {
      if (this.locX != undefined && this.locY != undefined)
      {
          let startX = this.locX - this.satisfactionRadius;
          let startY = this.locY - this.satisfactionRadius;
          let endX = startX + this.satisfactionRadius * 2 + 1;
          let endY = startY + this.satisfactionRadius * 2 + 1;
          if (this.passable && locX == this.locX && locY == this.locY)
            return true;
          else if (!this.passble && locX == this.locX && locY == this.locY)
            return false;
          return (locX >= startX && locY >= startY && locX <= endX && locY <= endY);
      }
      else
          return false;
    }

    Clone()
    {
      return new ObjectCard(this.smallCardSpriteLocX / TILEWIDTH, this.smallCardSpriteLocY / TILEHEIGHT, this.largeCardSpriteLocX / LARGECARDWIDTH,
                            this.largeCardSpriteLocY / LARGECARDHEIGHT, this.satisfactionBuff, this.satisfactionRadius, this.passable,
                            this.expiration, this.rscCost);
    }
}

class CharacterCard extends Card
{
    constructor(smCardSpriteX, smCardSpriteY, lgCardSpriteX, lgCardSpriteY, 
        satisfactionRequirement, satisfactionThreshold, rscUpkeeps, name)
    {
        super(smCardSpriteX, smCardSpriteY, lgCardSpriteX, lgCardSpriteY);
        this.cardType = CARDTYPE_CHARACTER;
        this.satisfactionRequirement = satisfactionRequirement;
        this.satisfactionLevel = 0;
        this.satisfactionThreshold = satisfactionThreshold;
        this.locX = 0;
        this.locY = 0;
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
            this.satisfactionLevel -= 10;

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

        //random chance to just leave
        if (Math.random() > 0.95)
          this.satisfactionLevel = -1;
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
      ctx.drawImage(SMALLCARDSPRITESHEET, this.smallCardSpriteLocX, this.smallCardSpriteLocY, 
        TILEWIDTH, TILEHEIGHT - 3, locX, locY + 3, TILEWIDTH, TILEHEIGHT - 3);
    }

    Clone()
    {
      return new CharacterCard(this.smallCardSpriteLocX / TILEWIDTH, this.smallCardSpriteLocY / TILEHEIGHT, this.largeCardSpriteLocX / LARGECARDWIDTH,
                               this.largeCardSpriteLocY / LARGECARDHEIGHT, this.satisfactionRequirement, this.satisfactionThreshold, 
                               this.resourceUpkeeps, this.name);
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

  Update(turnCount, db)
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
        if (this.characterMap[x][y] != undefined && !this.characterMap[x][y].IsSatisfied() && !this.characterMap[x][y].firstAppearance)
        {
          returnMessages.push(this.characterMap[x][y].name + " was unsatisfied and left.\n");
          this.characterMap[x][y] = undefined;
        }
        else if (this.characterMap[x][y] != undefined && this.characterMap[x][y].firstAppearance)
        {
          this.characterMap[x][y].firstAppearance = false;
        }
      }
    }

    //let the user get their bearings and buy some objects on turn 1
    //this will allow them to have two different hands of cards before
    //patrons arrive
    if (turnCount > 1)
    {
      let newCharCards = db.GetRandomCharacterCards(turnCount);

      for (let c = 0; c < newCharCards.length; c++)
      {
        let bestLocation = undefined;
        //5% chance to just go random
        if (Math.random() > 0.95)
        {
          let randx = Math.floor(Math.random() * TILESX);
          randx = randx == TILESX ? TILESX - 1 : randx;
          let randy = Math.floor(Math.random() * TILESY);
          randy = randy == TILESY ? TILESY - 1 : randy;
          bestLocation = new Vector2D(randx, randy);
        }
        else
          bestLocation = this.DetermineMostSatisfactoryLocation();
        newCharCards[c].locX = bestLocation.x;
        newCharCards[c].locY = bestLocation.y;
        this.characterMap[bestLocation.x][bestLocation.y] = newCharCards[c];
        returnMessages.push(newCharCards[c].name + " has joined the merriment.\n");
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

    if (this.focusedVector != undefined)
    {
      let x = this.focusedVector.x;
      let y = this.focusedVector.y;
      if (this.objectMap[x][y] != undefined)
      {
        this.objectMap[x][y].DrawLargeCardOnBoard(x * TILEWIDTH, y * TILEHEIGHT, ctx);
        this.objectMap[x][y].DrawSatisfactionRange(x, y, ctx);
        if (this.characterMap[x][y] != undefined)
        this.characterMap[x][y].DrawLargeCardWithOffset(x * TILEWIDTH, y * TILEHEIGHT, ctx);
      }
      else if (this.characterMap[x][y] != undefined)
        this.characterMap[x][y].DrawLargeCardOnBoard(x * TILEWIDTH, y * TILEHEIGHT, ctx);
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
        objectCard.locX = tilex;
        objectCard.locY = tiley;
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
    else if (this.focusedVector != undefined)
    {
      this.focusedVector = undefined;
      return true;
    }
    return false;
  }

  DetermineMostSatisfactoryLocation()
  {
    let highestSatisfactionLevel = 0;
    let highestSatisfactionLocation = new Vector2D(0,0);
    for (let x = 0; x < TILESX; x++)
    {
      for (let y = 0; y < TILESY; y++)
      {
        let currentSatisfactionLevel = 0;
        //can't be here if another guy is here
        if (this.characterMap[x][y] == undefined)
        {
          for (let objectx = 0; objectx < TILESX; objectx++)
          {
            for (let objecty = 0; objecty < TILESY; objecty++)
            {
              if (this.objectMap[objectx][objecty] != undefined && this.objectMap[objectx][objecty].IsLocationInside(x, y))
              {
                currentSatisfactionLevel += this.objectMap[objectx][objecty].satisfactionBuff;
              }
            }
          }
        }
        if (currentSatisfactionLevel > highestSatisfactionLevel)
        {
          highestSatisfactionLevel = currentSatisfactionLevel;
          highestSatisfactionLocation = new Vector2D(x, y);
        } 
      }
            
    }
    //this is in case there's no satisfaction buffs on the board or we couldn't find 
    //a great place to stand/sit because all the satisfaction spaces are taken up
    if (highestSatisfactionLocation.x == 0 && highestSatisfactionLocation.y == 0)
    {
      let randx = Math.floor(Math.random() * TILESX);
      randx = randx == TILESX ? TILESX - 1 : randx;
      let randy = Math.floor(Math.random() * TILESY);
      randy = randy == TILESY ? TILESY - 1 : randy;
      highestSatisfactionLocation = new Vector2D(randx, randy);
    }

    return highestSatisfactionLocation;
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
      if (this.selectedCardIndex == -1 || this.selectedCardIndex == i)
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
          let message = this.cards[i].PayFor();
          if (message == "Purchased.")
            this.selectedCardIndex = i;
          
          return message;
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
      this.cards.splice(this.selectedCardIndex, 1);
      this.selectedCardIndex = -1;
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
  constructor(x, y, width, height, text, textOffsetX, textOffsetY, color)
  {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.visible = true;
    this.color = color;
    this.textOffsetX = textOffsetX;
    this.textOffsetY = textOffsetY;
  }

  Draw(ctx)
  {
    if (this.visible)
    {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.fillStyle = TEXTCOLOR;
      ctx.fillText(this.text, this.x + this.textOffsetX, this.y + this.textOffsetY, this.width);
    }
  }

  IsInside(pointx, pointy)
  {
    return (this.x <= pointx && (this.x + this.width) >= pointx &&
        this.y <= pointy && (this.y + this.height) >= pointy);
  }
}