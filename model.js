var TILESX = 32;
var TILESY = 18;
var DEFAULTSMALLCARDX = 0;
var DEFAULTSMALLCARDY = 0;
var DEFAULTLARGECARDX = 0;
var DEFAULTLARGECARDY = 0;
var DEFAULTRESOURCEX = 0;
var DEFAULTRESOURCEY = 0;

var CARDUSEBORDERX = 0;
var CARDUSEBORDERY = 0;
var CARDUSEWIDTH = 37;
var CARDUSEHEIGHT = 43;
var FIGHTX = 48;
var FIGHTY = 0;

var TILEWIDTH = 16;
var TILEHEIGHT = 16;
var LARGECARDWIDTH = 32;
var LARGECARDHEIGHT = 38;
var RESOURCEWIDTH = 12;
var RESOURCEHEIGHT = 12;
var RESOURCETEXTOFFSET = 14;

var CARDTYPE_BUFF = 0;
var CARDTYPE_CURSE = 1;
var CARDTYPE_OBJECT = 2;
var CARDTYPE_RESOURCE = 3;
var CARDTYPE_NONE = 4;
var CARDTYPE_CHARACTER = 5;
var CARDTYPE_QUEST = 6;

var BOARDBORDER = 3;

var STATTYPE_INT = 0;
var STATTYPE_STR = 1;
var STATTYPE_DEX = 2;

var HANDSIZE = 7;

var TEXTCOLOR = "#FFFFFF";
var BUTTONCOLOR = "#000000";
var TEXTFONT = "10px MS Gothic";

var NIGHTCOLOR = "#00000099";
var LIGHTCOLOR = "#fbf7a300";
const LIGHTEDGE = "#00000044";

var RANDOMLEAVESATISFACTION = -99999;

var SMALLCARDSPRITESHEET = document.getElementById("smallcard");
var LARGECARDSPRITESHEET = document.getElementById("largecard");
var RESOURCESPRITESHEET = document.getElementById("resources");
var BACKGROUNDIMAGE = document.getElementById("background");
var EXTRASSPRITESHEET = document.getElementById("extras");

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
        ctx.fillStyle = BUTTONCOLOR;
        ctx.fillRect(locX, locY, RESOURCEWIDTH + 34, 14);
        ctx.drawImage(RESOURCESPRITESHEET, this.resourceSpriteX, this.resourceSpriteY, 
            RESOURCEWIDTH, RESOURCEHEIGHT, locX, locY, RESOURCEWIDTH, RESOURCEHEIGHT);
        ctx.fillStyle = TEXTCOLOR;
        ctx.fillText(this.count + "", locX + RESOURCETEXTOFFSET, locY + 11);
    }
}

class ResourceCollection
{
  constructor(resources)
  {
    this.resources = resources;
    this.resourceUpkeepCounts = [];
    this.GOLDRESOURCEUPKEEP = 0;
    this.BEERRESOURCEUPKEEP = 1;
    this.FOODRESOURCEUPKEEP = 2;
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

  Update(board)
  {
    this.resourceUpkeepCounts = [0,0,0];
    for (let x = 0; x < TILESX; x++)
    {
      for (let y = 0; y < TILESY; y++)
      {
        if (board.characterMap[x][y] != undefined)
        {
          for (let u = 0; u < board.characterMap[x][y].resourceUpkeeps.length; u++)
          {
            let resourceType = -1;
            if (board.characterMap[x][y].resourceUpkeeps[u].resource.name.toUpperCase() == "GOLD")
            {
              resourceType = this.GOLDRESOURCEUPKEEP;
            }
            else if (board.characterMap[x][y].resourceUpkeeps[u].resource.name.toUpperCase() == "BEER")
            {
              resourceType = this.BEERRESOURCEUPKEEP;
            }
            else if (board.characterMap[x][y].resourceUpkeeps[u].resource.name.toUpperCase() == "FOOD")
            {
              resourceType = this.FOODRESOURCEUPKEEP;
            }
            if (resourceType != -1)
              this.resourceUpkeepCounts[resourceType] += board.characterMap[x][y].resourceUpkeeps[u].amount;
          }
        }
      }
    }
  }

  Draw(ctx, turn)
  {
    let TEXT_OFFSET = 24;
    let fullRscBarWidth = RESOURCEWIDTH + RESOURCETEXTOFFSET + TEXT_OFFSET;
    //draw turn count
    let turnx = ctx.canvas.width - (fullRscBarWidth * ( this.resources.length + 1));
    ctx.fillStyle = BUTTONCOLOR;
    ctx.fillRect(turnx, 0, RESOURCEWIDTH + 34, 14);
    ctx.fillStyle = TEXTCOLOR;
    ctx.fillText("TURN  " + turn, turnx, 11);
    for(let i = 0; i < this.resources.length; i++)
    {
      let x = ctx.canvas.width - (fullRscBarWidth * ( this.resources.length - i));
      this.resources[i].Draw(x, 0, ctx);
      if (this.resourceUpkeepCounts[i] != undefined)
      {
        ctx.fillStyle = this.resourceUpkeepCounts[i] < 0 ? "red" : "green";
        ctx.fillText(Math.abs(this.resourceUpkeepCounts[i]), x + 32, 11);
      }
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

class CharacterStats
{
  constructor(int, str, dex)
  {
    this.baseint = int;
    this.basestr = str;
    this.basedex = dex;
    this.int = int;
    this.str = str;
    this.dex = dex;
    this.level = 1;
    this.STATWIDTH = 34;
    this.STATSEPARATION = 9;
  }

  LevelUp()
  {
    this.level++;
    this.int += Math.ceil(this.baseint * 0.3);
    this.str += Math.ceil(this.basestr * 0.3);
    this.dex += Math.ceil(this.basedex * 0.3);
  }

  Draw(locX, locY, ctx)
  {
    let x = locX - this.STATWIDTH;
    let y = locY;
    ctx.fillStyle = BUTTONCOLOR;
    ctx.fillRect(x, y, this.STATWIDTH, LARGECARDHEIGHT);
    ctx.fillStyle = TEXTCOLOR;
    ctx.fillText("LVL " + this.level, x, y+=this.STATSEPARATION);
    ctx.fillText("INT " + this.int, x, y+=this.STATSEPARATION);
    ctx.fillText("STR " + this.str, x, y+=this.STATSEPARATION);
    ctx.fillText("DEX " + this.dex, x, y+=this.STATSEPARATION);
  }

  GetCombinedStats()
  {
    return this.int + this.str + this.dex;
  }

  Clone()
  {
    return new CharacterStats(this.int, this.str, this.dex);
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
        LARGECARDWIDTH, LARGECARDHEIGHT, locX - Math.floor(LARGECARDWIDTH/4), locY - Math.floor(LARGECARDHEIGHT), 
        LARGECARDWIDTH, LARGECARDHEIGHT);

      if (this.cardType == CARDTYPE_CHARACTER)
        this.stats.Draw(locX - LARGECARDWIDTH / 4, locY - LARGECARDHEIGHT, ctx);
    }

    DrawLargeCardWithOffset(locX, locY, ctx)
    {
      //first check if we're at the edge of the game, if so draw it on the left instead
      //of normally drawing it on the right
      if ((locX + LARGECARDWIDTH*2) >= TILESX * TILEWIDTH)
      {
        ctx.drawImage(LARGECARDSPRITESHEET, this.largeCardSpriteLocX, this.largeCardSpriteLocY, 
          LARGECARDWIDTH, LARGECARDHEIGHT, locX - LARGECARDWIDTH, locY, LARGECARDWIDTH, LARGECARDHEIGHT);
        if (this.cardType == CARDTYPE_CHARACTER)
          this.stats.Draw(locX - LARGECARDWIDTH, locY, ctx);
      }
      else
      {
        ctx.drawImage(LARGECARDSPRITESHEET, this.largeCardSpriteLocX, this.largeCardSpriteLocY, 
          LARGECARDWIDTH, LARGECARDHEIGHT, locX + LARGECARDWIDTH, locY, LARGECARDWIDTH, LARGECARDHEIGHT);
          if (this.cardType == CARDTYPE_CHARACTER)
            this.stats.Draw(locX, locY, ctx);
      }
    }

    DrawLargeCardOnBoardWithOffset(locX, locY, ctx)
    {
      //first check if we're at the edge of the game, if so draw it on the left instead
      //of normally drawing it on the right
      if ((locX + LARGECARDWIDTH*2) >= TILESX * TILEWIDTH)
      {
        ctx.drawImage(LARGECARDSPRITESHEET, this.largeCardSpriteLocX, this.largeCardSpriteLocY, 
          LARGECARDWIDTH, LARGECARDHEIGHT, locX - LARGECARDWIDTH - Math.floor(LARGECARDWIDTH/4), locY - Math.floor(LARGECARDHEIGHT), LARGECARDWIDTH, LARGECARDHEIGHT);
        if (this.cardType == CARDTYPE_CHARACTER)
          this.stats.Draw(locX - LARGECARDWIDTH - LARGECARDWIDTH / 4, locY - LARGECARDHEIGHT, ctx);
      }
      else
      {
        ctx.drawImage(LARGECARDSPRITESHEET, this.largeCardSpriteLocX, this.largeCardSpriteLocY, 
          LARGECARDWIDTH, LARGECARDHEIGHT, locX + LARGECARDWIDTH - Math.floor(LARGECARDWIDTH/4), locY - Math.floor(LARGECARDHEIGHT), LARGECARDWIDTH, LARGECARDHEIGHT);
          if (this.cardType == CARDTYPE_CHARACTER)
            this.stats.Draw(locX - LARGECARDWIDTH / 4, locY - LARGECARDHEIGHT, ctx);
      }
    }
}

class QuestCard extends Card
{
  constructor(smCardSpriteX, smCardSpriteY, lgCardSpriteX, lgCardSpriteY, 
      minRange, maxRange, statRequirement, turnLength, rscUpkeeps, name)
  {
    super(smCardSpriteX, smCardSpriteY, lgCardSpriteX, lgCardSpriteY);
    this.minRange = minRange;
    this.maxRange = maxRange;
    this.statRequirement = statRequirement;
    this.assignedPatron = undefined;
    this.turnLength = turnLength;
    this.cardType = CARDTYPE_QUEST;
    this.rscUpkeeps = rscUpkeeps;
    this.name = name;
    this.currentTurn = 0;
  }

  Update()
  {
    if (this.assignedPatron != undefined)
    {
      this.currentTurn++;
      if (this.currentTurn == this.turnLength)
      {
        let statPower = 0;
        switch (this.statRequirement)
        {
          case STATTYPE_INT:
            statPower = this.assignedPatron.stats.int;
            break;
          case STATTYPE_STR:
            statPower = this.assignedPatron.stats.str;
            break;
          case STATTYPE_DEX:
            statPower = this.assignedPatron.stats.dex;
            break;
        }

        //give them some chance for success if they're at the min range
        if (statPower == this.minRange)
          statPower += 0.3;

        let rangeModifier = Math.random() * (this.maxRange - this.minRange);

        if (statPower >= (this.maxRange - rangeModifier))
        {
          for (let i = 0; i < this.rscUpkeeps.length; i++)
          {
            this.rscUpkeeps[i].Update();
          }
          this.assignedPatron.stats.LevelUp();
          return this.assignedPatron.name + " completed " + this.name + " and grew stronger.";
        }
        else
        {
          let message = this.assignedPatron.name + " died attempting to " + this.name + ".";
          this.assignedPatron = undefined;
          return message;
        }
      }
    }
    return "";
  }

  DrawQuestAndPatron(locX, locY, ctx)
  {
    this.DrawLargeCard(locX, locY, ctx);
    if (this.assignedPatron != undefined)
      this.assignedPatron.DrawLargeCardWithOffset(locX, locY, ctx);
  }

  Clone()
  {
    return new QuestCard(this.smallCardSpriteLocX / TILEWIDTH, this.smallCardSpriteLocY / TILEHEIGHT, 
                        this.largeCardSpriteLocX / LARGECARDWIDTH, this.largeCardSpriteLocY / LARGECARDHEIGHT,
                        this.minRange, this.maxRange, this.statRequirement, this.turnLength, this.rscUpkeeps, this.name);
  }
}

class BuffCard extends Card
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
        this.cardType = CARDTYPE_CURSE;
        this.resource = rsc;
        this.amount = amount;
    }

    Update()
    {
        this.resource.count -= this.amount;
        if (this.resource.count < 0)
          this.resource.count = 0;
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
        return "Purchased"
      }
      else
        return "Insufficient Funds"
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
        satisfactionBuff, satisfactionRadius, passable, isLit, rscUpkeep, name)
    {
        super(smCardSpriteX, smCardSpriteY, lgCardSpriteX, lgCardSpriteY);
        this.cardType = CARDTYPE_OBJECT;
        this.satisfactionBuff = satisfactionBuff;
        this.satisfactionRadius = satisfactionRadius;
        this.passable = passable;
        this.isLit = isLit;
        this.rscCost = rscUpkeep;
        this.name = name;
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
            return false;
        }
        else
            return (this.IsLocationInside(card.locX, card.locY));
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
          let endX = startX + this.satisfactionRadius * 2;
          let endY = startY + this.satisfactionRadius * 2;
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
                            this.isLit, this.rscCost, this.name);
    }
}

class CharacterCard extends Card
{
    constructor(smCardSpriteX, smCardSpriteY, lgCardSpriteX, lgCardSpriteY, 
                satisfactionThreshold, rscUpkeeps, name, stats)
    {
        super(smCardSpriteX, smCardSpriteY, lgCardSpriteX, lgCardSpriteY);
        this.cardType = CARDTYPE_CHARACTER;
        this.satisfactionLevel = 0;
        this.satisfactionThreshold = satisfactionThreshold;
        this.locX = 0;
        this.locY = 0;
        this.resourceUpkeeps = rscUpkeeps;
        this.firstAppearance = true;
        this.name = name;
        this.stats = stats;
    }

    Update(objectMap)
    {
        //pay upkeeps
        let canPayUpkeep = true;
        this.satisfactionLevel = 0;
        for (let i = 0; i < this.resourceUpkeeps.length; i++)
        {
          if (this.resourceUpkeeps[i].amount < 0)
            canPayUpkeep = this.resourceUpkeeps[i].HaveEnough();
          if (!canPayUpkeep)
            break;
        }

        if (!canPayUpkeep)
          this.satisfactionLevel -= 100;
        else
        {
          for (let i = 0; i < this.resourceUpkeeps.length; i++)
          {
            this.resourceUpkeeps[i].Update();
          }
        }        

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
          this.satisfactionLevel = RANDOMLEAVESATISFACTION;
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
        TILEWIDTH, TILEHEIGHT - 2, locX, locY + 2, TILEWIDTH, TILEHEIGHT - 2);
    }

    Clone()
    {
      return new CharacterCard(this.smallCardSpriteLocX / TILEWIDTH, this.smallCardSpriteLocY / TILEHEIGHT, this.largeCardSpriteLocX / LARGECARDWIDTH,
                               this.largeCardSpriteLocY / LARGECARDHEIGHT, this.satisfactionThreshold, 
                               this.resourceUpkeeps, this.name, this.stats.Clone());
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

    for (let x = BOARDBORDER; x < TILESX - BOARDBORDER; x++)
    {
      for (let y = BOARDBORDER; y < TILESY - BOARDBORDER; y++)
      {
        //if (this.objectMap[x][y] != undefined)
          //this.objectMap[x][y].Update();
        if (this.characterMap[x][y] != undefined)
          this.characterMap[x][y].Update(this.objectMap);

        //Determine if characters need to be removed
        if (this.characterMap[x][y] != undefined && !this.characterMap[x][y].IsSatisfied() && !this.characterMap[x][y].firstAppearance)
        {
          if (this.characterMap[x][y].satisfactionLevel == RANDOMLEAVESATISFACTION)
            returnMessages.push(this.characterMap[x][y].name + " had other things to do and left.");
          else
            returnMessages.push(this.characterMap[x][y].name + " was unsatisfied and left.");
          this.characterMap[x][y] = undefined;
        }
        else if (this.characterMap[x][y] != undefined && this.characterMap[x][y].firstAppearance)
        {
          this.characterMap[x][y].firstAppearance = false;
        }
      }
    }

    returnMessages = returnMessages.concat(this.UpdateAndDrawBarFights(ctx));

    //let the user get their bearings and buy some objects on turn 1
    //this will allow them to have two different hands of cards before
    //patrons arrive
    if ((turnCount > 10 && this.PatronsExist()) || (turnCount > 1 && turnCount < 10))
    {
      let newCharCards = db.GetRandomCharacterCards(turnCount);

      for (let c = 0; c < newCharCards.length; c++)
      {
        let bestLocation = undefined;
        //5% chance to just go random
        if (Math.random() > 0.95)
        {
          let tryCount = 0;
          let randx;
          let randy;
          do
          {
            randx = Math.floor(Math.random() * (TILESX - BOARDBORDER*2)) + BOARDBORDER;
            randx = randx == TILESX ? TILESX - 1 : randx;
            randy = Math.floor(Math.random() * (TILESY - BOARDBORDER*2)) + BOARDBORDER;
            randy = randy == TILESY ? TILESY - 1 : randy;
            tryCount++;
          }
          while ((!this.IsLocationBlankOrPassable(randx, randy)) && tryCount < 10)
          
          if (tryCount < 10)
            bestLocation = new Vector2D(randx, randy);
        }
        else
          bestLocation = this.DetermineMostSatisfactoryLocation();
        
        if (bestLocation != undefined)
        {
          newCharCards[c].locX = bestLocation.x;
          newCharCards[c].locY = bestLocation.y;
          this.characterMap[bestLocation.x][bestLocation.y] = newCharCards[c];
          returnMessages.push(newCharCards[c].name + " has joined the merriment.\n");
        }
      }
    }

    return returnMessages;
  }

  PatronsExist()
  {
    for (let x = BOARDBORDER; x < TILESX - BOARDBORDER; x++)
    {
      for (let y = BOARDBORDER; y < TILESY - BOARDBORDER; y++)
      {
        if (this.characterMap[x][y] != undefined)
          return true;
      }
    }
    return false;
  }

  UpdateAndDrawBarFights(ctx)
  {
    let battleMessages = [];
    for (let x = BOARDBORDER; x < TILESX - BOARDBORDER; x++)
    {
      for (let y = BOARDBORDER; y < TILESY - BOARDBORDER; y++)
      {
        if (this.characterMap[x][y] != undefined && !this.characterMap[x][y].firstAppearance)
        {
          let alreadyFought = false;
          for (let modx = -1; modx < 2; modx++)
          {
            for (let mody = -1; mody < 2; mody++)
            {
              let adjacentx = x + modx;
              let adjacenty = y + mody;
              if ((x != adjacentx || y != adjacenty) && 0 <= adjacentx && adjacentx < TILESX &&
                  0 <= adjacenty && adjacenty < TILESY && 
                  this.characterMap[adjacentx][adjacenty] != undefined && !this.characterMap[adjacentx][adjacenty].firstAppearance &&
                  Math.random() < .08) //8% chance for a bar fight
              {
                ctx.drawImage(EXTRASSPRITESHEET, FIGHTX, FIGHTY, TILEWIDTH, TILEHEIGHT, 
                  x * TILEWIDTH, y * TILEHEIGHT, TILEWIDTH, TILEHEIGHT);
                ctx.drawImage(EXTRASSPRITESHEET, FIGHTX, FIGHTY, TILEWIDTH, TILEHEIGHT, 
                  adjacentx * TILEWIDTH, adjacenty * TILEHEIGHT, TILEWIDTH, TILEHEIGHT);
                let battleDecision = Math.random();
                if (battleDecision < 0.05)
                {
                  battleMessages.push(this.characterMap[x][y].name + " won a fight against " + this.characterMap[adjacentx][adjacenty].name);
                  this.characterMap[x][y].stats.LevelUp();
                  this.characterMap[adjacentx][adjacenty] = undefined;
                }
                else if (battleDecision < 0.1)
                {
                  battleMessages.push(this.characterMap[adjacentx][adjacenty].name + " won a fight against " + this.characterMap[x][y].name);
                  this.characterMap[adjacentx][adjacenty].stats.LevelUp();
                  this.characterMap[x][y] = undefined;
                }
                else
                {
                  let adjacentFullStats = this.characterMap[adjacentx][adjacenty].stats.GetCombinedStats();
                  let fullStats = this.characterMap[x][y].stats.GetCombinedStats();
                  if (adjacentFullStats > fullStats)
                  {
                    battleMessages.push(this.characterMap[adjacentx][adjacenty].name + " won a fight against " + this.characterMap[x][y].name);
                    this.characterMap[adjacentx][adjacenty].stats.LevelUp();
                    this.characterMap[x][y] = undefined;
                  }
                  else
                  {
                    battleMessages.push(this.characterMap[x][y].name + " won a fight against " + this.characterMap[adjacentx][adjacenty].name);
                    this.characterMap[x][y].stats.LevelUp();
                    this.characterMap[adjacentx][adjacenty] = undefined;
                  }
                }
                alreadyFought = true;
                break;
              }
            }
            if (alreadyFought)
              break;
          }
        }
      }
    }
    return battleMessages;
  }

  Draw(ctx, placingObject, turn)
  {
    ctx.drawImage(BACKGROUNDIMAGE, 0, 0, TILESX * TILEWIDTH, TILESY * TILEHEIGHT, 0, 0, TILESX * TILEWIDTH, TILESY * TILEHEIGHT);

    for (let x = BOARDBORDER; x < TILESX - BOARDBORDER; x++)
    {
      for (let y = BOARDBORDER; y < TILESY - BOARDBORDER; y++)
      {
        if (this.objectMap[x][y] != undefined)
        {
          if (placingObject)
            this.objectMap[x][y].DrawObjectPlacement(x, y, ctx);
          else
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

    //Draw Night
    if (Math.floor(turn / 3) % 2 == 0)
    {
      let lightingImageDatas = [];
      for (let x = BOARDBORDER; x < TILESX - BOARDBORDER; x++)
      {
        for (let y = BOARDBORDER; y < TILESY - BOARDBORDER; y++)
        {
          if (this.objectMap[x][y] != undefined && this.objectMap[x][y].isLit)
          {
            let lightingData = {
              x : (x * TILEWIDTH) - this.objectMap[x][y].satisfactionRadius * TILEWIDTH,
              y : (y * TILEHEIGHT) - this.objectMap[x][y].satisfactionRadius * TILEHEIGHT,
              radius : (this.objectMap[x][y].satisfactionRadius * 2 + 1) * TILEWIDTH
            };
            lightingData.imageData = ctx.getImageData(lightingData.x, lightingData.y, lightingData.radius, lightingData.radius);
            lightingImageDatas.push(lightingData);            
          }
        }
      }
      ctx.fillStyle = NIGHTCOLOR;
      ctx.fillRect(0,0, TILESX * TILEWIDTH, TILESY * TILEHEIGHT);

      for (let i = lightingImageDatas.length - 1; i > -1; i--)
      {
        ctx.putImageData(lightingImageDatas[i].imageData, lightingImageDatas[i].x, lightingImageDatas[i].y);
      }
    }

    //Moused Over Card
    if (this.focusedVector != undefined)
    {
      let x = this.focusedVector.x;
      let y = this.focusedVector.y;
      if (this.objectMap[x][y] != undefined)
      {
        this.objectMap[x][y].DrawSatisfactionRange(x, y, ctx);
        this.objectMap[x][y].DrawLargeCardOnBoard(x * TILEWIDTH, y * TILEHEIGHT, ctx);
        if (this.characterMap[x][y] != undefined)
        this.characterMap[x][y].DrawLargeCardOnBoardWithOffset(x * TILEWIDTH, y * TILEHEIGHT, ctx);
      }
      else if (this.characterMap[x][y] != undefined)
        this.characterMap[x][y].DrawLargeCardOnBoard(x * TILEWIDTH, y * TILEHEIGHT, ctx);
    }
  }

  PlaceObject(objectCard, tilex, tiley)
  {
    //check if something already exists
    if (this.objectMap[tilex][tiley] != undefined)
      return "Object already at location.";
    else if (!objectCard.passable && this.characterMap[tilex][tiley] != undefined)
      return "Cannot place impassable object where patron resides.";
    else if (tilex < BOARDBORDER || tilex >= TILESX - BOARDBORDER || 
      tiley < BOARDBORDER || tiley >= TILESY - BOARDBORDER)
      return "Cannot place outside of tavern.";
    else
    {
      let placed = objectCard.PayFor();
      if (placed)
      {
        this.objectMap[tilex][tiley] = objectCard;
        objectCard.locX = tilex;
        objectCard.locY = tiley;
        return "Purchased " + objectCard.name;
      }
      else
        return "Insufficient " + objectCard.rscCost.resource.name + "";
    }
    
  }

  SellObjectAt(tilex, tiley)
  {
    let returnMessage = "No object at location.";
    if (this.objectMap[tilex][tiley] != undefined)
    {
      this.objectMap[tilex][tiley].rscCost.resource.count += Math.abs(Math.floor(this.objectMap[tilex][tiley].rscCost.amount / 2));

      returnMessage =  "Sold";
      this.objectMap[tilex][tiley] = undefined;
    }
    return returnMessage;
  }

  SelectForQuest(questCard, tilex, tiley)
  {
    if (this.characterMap[tilex][tiley] != undefined)
    {
      questCard.assignedPatron = this.characterMap[tilex][tiley];
      this.characterMap[tilex][tiley] = undefined;
      return questCard.assignedPatron.name + " assigned to quest.";
    }
    else
    {
      return "No patron at location.";
    }
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

  GetFocusedCardText()
  {
    if (this.focusedVector != undefined)
    {
      let x = this.focusedVector.x;
      let y = this.focusedVector.y;
      let returnValue = "";
      if (this.objectMap[x][y] != undefined && this.objectMap[x][y].name != undefined)
      {
        returnValue += this.objectMap[x][y].name;
      }
      if (returnValue.length > 0)
      {
        returnValue += " - ";
      }
      if (this.characterMap[x][y] != undefined && this.characterMap[x][y].name != undefined)
      {
        returnValue += this.characterMap[x][y].name;
      }
    }
    else
      return "";
  }

  DetermineMostSatisfactoryLocation()
  {
    let highestSatisfactionLevel = 0;
    let highestSatisfactionLocation = undefined;
    for (let x = BOARDBORDER; x < TILESX - BOARDBORDER; x++)
    {
      for (let y = BOARDBORDER; y < TILESY - BOARDBORDER; y++)
      {
        let currentSatisfactionLevel = 0;
        //can't be here if another guy is here
        if (this.characterMap[x][y] == undefined && (this.objectMap[x][y] == undefined || this.objectMap[x][y].passable))
        {
          for (let objectx = BOARDBORDER; objectx < TILESX - BOARDBORDER; objectx++)
          {
            for (let objecty = BOARDBORDER; objecty < TILESY - BOARDBORDER; objecty++)
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
    if (highestSatisfactionLocation == undefined)
    {
      let tryCount = 0;
      let randx;
      let randy;
      do
      {
        randx = Math.floor(Math.random() * (TILESX - BOARDBORDER*2)) + BOARDBORDER;
        randx = randx == TILESX ? TILESX - 1 : randx;
        randy = Math.floor(Math.random() * (TILESY - BOARDBORDER*2)) + BOARDBORDER;
        randy = randy == TILESY ? TILESY - 1 : randy;
        tryCount++;
      }
      while ((!this.IsLocationBlankOrPassable(randx, randy)) && tryCount < 10)
      
      if (tryCount < 10)
        highestSatisfactionLocation = new Vector2D(randx, randy);
    }

    return highestSatisfactionLocation;
  }

  IsLocationBlankOrPassable(x, y)
  {
    return (this.objectMap[x][y] == undefined || this.objectMap[x][y].passable) && this.characterMap[x][y] == undefined;
  }

  PlaceCharacterBackOnBoard(character)
  {
    let newLocation = this.DetermineMostSatisfactoryLocation();
    character.firstAppearance = true;
    this.characterMap[newLocation.x][newLocation.y] = character;
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

  Update(turnCount, db, ctx)
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
    }

    this.DrawBetweenTurnsOverlay(ctx);

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

  DrawBetweenTurnsOverlay(ctx)
  {
    //loop through buff and curse cards and draw the border around them
    let width = ctx.canvas.width;
    let height = ctx.canvas.height;
    let widthSeparation = width / this.cards.length;
    let heightFromBottom = height - CARDUSEHEIGHT - 3;

    for (let i = 0; i < this.cards.length; i++)
    {
      if (this.cards[i].cardType == CARDTYPE_BUFF || 
          this.cards[i].cardType == CARDTYPE_CURSE)
      {
        ctx.drawImage(EXTRASSPRITESHEET, CARDUSEBORDERX, CARDUSEBORDERY, CARDUSEWIDTH, CARDUSEHEIGHT, 
          i * widthSeparation + this.EDGE_OFFSET - Math.floor((CARDUSEWIDTH - LARGECARDWIDTH) / 2) - 1, heightFromBottom,
          CARDUSEWIDTH, CARDUSEHEIGHT);
      }
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
          if (message == "Purchased")
            this.selectedCardIndex = i;
          
          return message;
        }
        else if (this.cards[i].cardType == CARDTYPE_OBJECT)
        {
          this.selectedCardIndex = i;
          return "Place Card - ESC to Cancel";
        }
          
        return "";
      }
    }    

    return "";
  }

  GetMouseOverText(pointx, pointy, ctx)
  {
    let returnValue = "";
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
        switch (this.cards[i].cardType)
        {
          case CARDTYPE_RESOURCE:
            returnValue = "Resource";
            break;
          case CARDTYPE_BUFF:
            returnValue = "Buff";
            break;
          case CARDTYPE_CURSE:
            returnValue = "Curse";
            break;
          case CARDTYPE_OBJECT:
            returnValue = this.cards[i].name;
            break;
        }
        break;
      }
    }
    return returnValue;
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

class Quests
{
  constructor()
  {
    this.cards = [];
    this.selectedCardIndex = -1;
    this.focusedCard = -1;
    this.EDGE_OFFSET = 5;
    this.GAPFROMTOP = 10;
  }

  Update(turn, db, board, ctx)
  {
    this.DrawBetweenTurnsOverlay(ctx);

    let updateResults = []
    let handLength = this.cards.length;
    for(let i = handLength - 1; i >= 0; i--)
    {
      let updateResult = this.cards[i].Update();
      if (updateResult != "")
      {
        updateResults.push(updateResult);
        //patron survived, let's put him back on board
        if (this.cards[i].assignedPatron != undefined)
        {
          board.PlaceCharacterBackOnBoard(this.cards[i].assignedPatron);
        }
        this.cards.splice(i, 1);
      }
    }

    if (this.cards.length < 5)
    {
      //maybe get a new quest or two
      let newQuestCards = db.GetRandomQuestCards(turn);
      for (let i = 0; i < newQuestCards.length; i++)
      {
        if (this.cards.length < 5)
          this.cards.push(newQuestCards[i]);
      }
    }
    return updateResults;
  }

  AreAnyPatronsOnQuests()
  {
    for(let q = 0; q < this.cards.length; q++)
    {
      if (q.assignedPatron != undefined)
        return true;
    }
    
    return false;
  }

  ClickedOnCard(pointx, pointy, ctx)
  {
    let width = ctx.canvas.width;
    let height = ctx.canvas.height;
    let heightSeparation = height / this.cards.length;
    let widthFromSide = width - LARGECARDWIDTH;
    let cardx = widthFromSide - this.EDGE_OFFSET;
    for (let i = 0; i < this.cards.length; i++)
    {
      let cardy = i * heightSeparation + this.EDGE_OFFSET + this.GAPFROMTOP;
      
      if (cardx <= pointx && cardx + LARGECARDWIDTH >= pointx &&
          cardy <= pointy && cardy + LARGECARDHEIGHT >= pointy)
      {
        if (this.cards[i].cardType == CARDTYPE_QUEST && this.cards[i].assignedPatron == undefined)
        {
          this.selectedCardIndex = i;
          return "Select patron for quest - ESC to Cancel";
        }
          
        return "";
      }
    }    

    return "";
  }

  HandleMouseOver(pointx, pointy, ctx)
  {
    let width = ctx.canvas.width;
    let height = ctx.canvas.height;
    let heightSeparation = height / this.cards.length;
    let widthFromSide = width - LARGECARDWIDTH;
    let cardx = widthFromSide - this.EDGE_OFFSET;
    for (let i = 0; i < this.cards.length; i++)
    {
      let cardy = i * heightSeparation + this.EDGE_OFFSET + this.GAPFROMTOP;
      
      if (cardx <= pointx && cardx + LARGECARDWIDTH >= pointx &&
          cardy <= pointy && cardy + LARGECARDHEIGHT >= pointy)
      {
        if (this.cards[i].cardType == CARDTYPE_QUEST)
        {
          this.focusedCard = i;
          return this.cards[i].name;
        }
      }
    }
    if (this.focusedCard != -1)  
    {
      this.focusedCard = -1;  
      return "";
    }
    else
    {
      return undefined;
    }
  }


  Draw(ctx)
  {
    let width = ctx.canvas.width;
    let height = ctx.canvas.height;
    let heightSeparation = height / this.cards.length;
    let widthFromSide = width - LARGECARDWIDTH;

    for (let i = 0; i < this.cards.length; i++)
    {
      if (this.selectedCardIndex == -1 || this.selectedCardIndex == i)
      {
        if (this.focusedCard == i)
          this.cards[i].DrawQuestAndPatron(widthFromSide - this.EDGE_OFFSET, i * heightSeparation + this.EDGE_OFFSET + this.GAPFROMTOP, ctx);
        else
          this.cards[i].DrawLargeCard(widthFromSide - this.EDGE_OFFSET, i * heightSeparation + this.EDGE_OFFSET + this.GAPFROMTOP, ctx);
      }        
    }
  }

  DrawBetweenTurnsOverlay(ctx)
  {
    let width = ctx.canvas.width;
    let height = ctx.canvas.height;
    let heightSeparation = height / this.cards.length;
    let widthFromSide = width - LARGECARDWIDTH;

    for (let i = 0; i < this.cards.length; i++)
    {
      this.cards[i].DrawQuestAndPatron(widthFromSide - this.EDGE_OFFSET, i * heightSeparation + this.EDGE_OFFSET + this.GAPFROMTOP, ctx);
      if (this.cards[i].assignedPatron != undefined)
      {
        ctx.fillStyle = BUTTONCOLOR;
        ctx.fillRect(widthFromSide - this.EDGE_OFFSET - 5, i * heightSeparation + this.EDGE_OFFSET + this.GAPFROMTOP + LARGECARDHEIGHT, LARGECARDWIDTH + 6, 13);
        ctx.fillStyle = TEXTCOLOR;
        ctx.fillText("TURN" + (this.cards[i].currentTurn + 1), widthFromSide - this.EDGE_OFFSET, 
        i * heightSeparation + this.EDGE_OFFSET + this.GAPFROMTOP + LARGECARDHEIGHT + 9);
      }      
    }
  }

  GetSelectedCard()
  {
    if (this.selectedCardIndex != -1)
      return this.cards[this.selectedCardIndex];
    else
      return undefined;
  }

  CancelCardPlacement()
  {
    this.selectedCardIndex = -1;
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
    if (!this.visible)
      return false;

    return (this.x <= pointx && (this.x + this.width) >= pointx &&
        this.y <= pointy && (this.y + this.height) >= pointy);
  }
}

class ImageButton
{
  constructor(x, y, width, height, spritesheetx, spritesheety)
  {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.spritesheetx = spritesheetx;
    this.spritesheety = spritesheety;
    this.visible = true;
  }

  Draw(ctx)
  {
    if (this.visible)
      ctx.drawImage(EXTRASSPRITESHEET, this.spritesheetx, this.spritesheety, this.width, this.height, this.x, this.y, this.width, this.height);
  }

  IsInside(pointx, pointy)
  {
    if (!this.visible)
      return false;

    return (this.x <= pointx && (this.x + this.width) >= pointx &&
        this.y <= pointy && (this.y + this.height) >= pointy);
  }
}
