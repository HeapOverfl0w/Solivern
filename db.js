var OBJECTSPRITES = {
    "counter" : new Vector2D(0, 0),
    "chair" : new Vector2D(1, 0),
    "candle" : new Vector2D(2, 0),
    "flowerpot" : new Vector2D(3,0),
    "weaponrack" : new Vector2D(4,0),
    "firepit" : new Vector2D(5,0),
    "lazboy" : new Vector2D(6,0),
    "8ball" : new Vector2D(7,0),
    "stool" : new Vector2D(8,0),
    "table" : new Vector2D(9,0),
    "coatrack" : new Vector2D(10,0),
    "jackalope" : new Vector2D(11,0)
}

var BUFFCURSESPRITES = {
    "goldBuff" : new Vector2D(0, 1),
    "foodBuff" : new Vector2D(1, 1),
    "beerBuff" : new Vector2D(2,1),
    "goldCurse" : new Vector2D(0, 2),
    "foodCurse" : new Vector2D(1, 2),
    "beerCurse" : new Vector2D(2, 2),
    "goldBuffUnc" : new Vector2D(3, 1),
    "foodBuffUnc" : new Vector2D(4, 1),
    "beerBuffUnc" : new Vector2D(5,1),
    "goldCurseUnc" : new Vector2D(3, 2),
    "foodCurseUnc" : new Vector2D(4, 2),
    "beerCurseUnc" : new Vector2D(5, 2)
}

var RSCCARDSPRITES = {
    "chicken" : new Vector2D(0, 3),
    "keg" : new Vector2D(1,3),
    "chickenmed" : new Vector2D(2,3),
    "kegmed" : new Vector2D(3,3),
    "chickensmall" : new Vector2D(4,3),
    "kegsmall" : new Vector2D(5,3)
}

var CHARCARDSPRITES = {
    "bat" : new Vector2D(0, 4),
    "rat" : new Vector2D(1, 4),
    "goblin" : new Vector2D(2, 4),
    "skeleton" : new Vector2D(3, 4),
    "ghost" : new Vector2D(4,4),
    "wolf" : new Vector2D(5,4),
    "goblinmage" : new Vector2D(6,4),
    "peasantmale" : new Vector2D(7,4),
    "peasantfemale" : new Vector2D(8,4),
    "slime" : new Vector2D(9,4),
    "iceskeleton" : new Vector2D(10,4),
    "orcpleb" : new Vector2D(11,4),
    "skeletonwarrior" : new Vector2D(0,5),
    "skeletonmage" : new Vector2D(1,5),
    "humanwarrior" : new Vector2D(2,5),
    "spider" : new Vector2D(3,5),
    "icebeast" : new Vector2D(4,5),
    "orcwarrior" : new Vector2D(5,5)
}

var QUESTCARDSPRITES = {
    "sweep" : new Vector2D(0, 6),
    "cave" : new Vector2D(1,6),
    "book" : new Vector2D(2,6),
    "darts" : new Vector2D(3,6),
    "trainingdummy" : new Vector2D(4,6),
    "armwrestle" : new Vector2D(5,6),
    "dressage" : new Vector2D(6,6),
    "cook" : new Vector2D(7,6)
}

var RSCTYPECHANCE = 0.5;
var OBJECTTYPECHANCE = RSCTYPECHANCE + 0.3;
var BUFFTYPECHANCE = OBJECTTYPECHANCE + 0.15;
var TYPECHANCEMOD = 0.007;

var NOCHARCHANCE = 0.1;
var ONECHARCHANCE = NOCHARCHANCE + 0.5;
var TWOCHARCHANCE = ONECHARCHANCE + 0.3;

var NOQUESTCHANCE = 0.6;
var ONEQUESTCHANCE = NOQUESTCHANCE + 0.3;

var UNCOMMONSTARTTURN = 10;
var RARESTARTTURN = 30;
var EPICSTARTTURN = 50;

class Database
{
    constructor(resourceCollection)
    {
        this.resourceCollection = resourceCollection;

        //find the resource objects in the resource collection for easy access to load data
        this.gold = this.resourceCollection.GetByName("gold");
        this.beer = this.resourceCollection.GetByName("beer");
        this.food = this.resourceCollection.GetByName("food");
        this.objectCardsCommon = [];
        this.objectCardsUncommon = [];
        this.objectCardsRare = [];
        this.objectCardsEpic = [];

        this.buffCardsCommon = [];
        this.buffCardsUncommon = [];
        this.buffCardsRare = [];
        this.buffCardsEpic = [];

        this.curseCardsCommon = [];
        this.curseCardsUncommon = [];
        this.curseCardsRare = [];
        this.curseCardsEpic = [];

        this.rscCardsCommon = [];
        this.rscCardsUncommon = [];
        this.rscCardsRare = [];
        this.rscCardsEpic = [];

        this.charCardsCommon = [];
        this.charCardsUncommon = [];
        this.charCardsRare = [];
        this.charCardsEpic = [];

        this.questCardsCommon = [];
        this.questCardsUncommon = [];
        this.questCardsRare = [];
        this.questCardsEpic = [];
    }

    GetRandomCharacterCards(turn)
    {
        let cardCount = Math.random();
        if (cardCount < NOCHARCHANCE)
            return [];
        if (cardCount < ONECHARCHANCE)
            return [this.GetRandomCard(this.ChooseRarityGroup(turn, CARDTYPE_CHARACTER))];
        if (cardCount < TWOCHARCHANCE)
            return [this.GetRandomCard(this.ChooseRarityGroup(turn, CARDTYPE_CHARACTER)), 
                this.GetRandomCard(this.ChooseRarityGroup(turn, CARDTYPE_CHARACTER))];
        else
            return [this.GetRandomCard(this.ChooseRarityGroup(turn, CARDTYPE_CHARACTER)), 
                this.GetRandomCard(this.ChooseRarityGroup(turn, CARDTYPE_CHARACTER)), 
                this.GetRandomCard(this.ChooseRarityGroup(turn, CARDTYPE_CHARACTER))];
    }

    GetRandomQuestCards(turn)
    {
        let cardCount = Math.random();
        if (cardCount < NOQUESTCHANCE)
            return [];
        if (cardCount < ONEQUESTCHANCE)
            return [this.GetRandomCard(this.ChooseRarityGroup(turn, CARDTYPE_QUEST))];
        else
            return [this.GetRandomCard(this.ChooseRarityGroup(turn, CARDTYPE_QUEST)), this.GetRandomCard(this.ChooseRarityGroup(turn, CARDTYPE_QUEST))];
    }

    GetRandomHandCard(turn)
    {
        //first use a different type chance based on turn:
        let turnModifier = (turn > 150 ? 150 : turn) * TYPECHANCEMOD;
        let rscTypeChance = RSCTYPECHANCE - turnModifier/3;
        let objectTypeChance = OBJECTTYPECHANCE - turnModifier/3;
        let buffTypeChance = BUFFTYPECHANCE - turnModifier/3;
        //decide card type:
        let cardType = Math.random();
        if (cardType < rscTypeChance)
            return this.GetRandomCard(this.ChooseRarityGroup(turn, CARDTYPE_RESOURCE));
        else if (cardType < objectTypeChance)
            return this.GetRandomCard(this.ChooseRarityGroup(turn, CARDTYPE_OBJECT));
        else if (cardType < buffTypeChance)
            return this.GetRandomCard(this.ChooseRarityGroup(turn, CARDTYPE_BUFF));
        else
            return this.GetRandomCard(this.ChooseRarityGroup(turn, CARDTYPE_CURSE));
    }

    ChooseRarityGroup(turn, cardType)
    {
        let uncommonCoefficient = Math.ceil((turn - UNCOMMONSTARTTURN) / 10) * 0.10;
        let rareCoefficient = Math.ceil((turn - RARESTARTTURN) / 10) * 0.10;
        let epicCoefficient = Math.ceil((turn - EPICSTARTTURN) / 10) * 0.10;
        let returnArray = [];

        let rand = Math.random();

        if (rand < epicCoefficient)
        {
            switch (cardType)
            {
                case CARDTYPE_RESOURCE:
                    returnArray = this.rscCardsEpic;
                    break;
                case CARDTYPE_OBJECT:
                    returnArray = this.objectCardsEpic;
                    break;
                case CARDTYPE_BUFF:
                    returnArray = this.buffCardsEpic;
                    break;
                case CARDTYPE_CURSE:
                    returnArray = this.curseCardsEpic;
                    break;
                case CARDTYPE_CHARACTER:
                    returnArray = this.charCardsEpic;
                    break;
                case CARDTYPE_QUEST:
                    returnArray = this.questCardsEpic;
                    break;
            }
        }
        else if (rand < rareCoefficient)
        {
            switch (cardType)
            {
                case CARDTYPE_RESOURCE:
                    returnArray = this.rscCardsRare;
                    break;
                case CARDTYPE_OBJECT:
                    returnArray = this.objectCardsRare;
                    break;
                case CARDTYPE_BUFF:
                    returnArray = this.buffCardsRare;
                    break;
                case CARDTYPE_CURSE:
                    returnArray = this.curseCardsRare;
                    break;
                case CARDTYPE_CHARACTER:
                    returnArray = this.charCardsRare;
                    break;
                case CARDTYPE_QUEST:
                    returnArray = this.questCardsRare;
                    break;
            }
        }
        else if (rand < uncommonCoefficient)
        {
            switch (cardType)
            {
                case CARDTYPE_RESOURCE:
                    returnArray = this.rscCardsUncommon;
                    break;
                case CARDTYPE_OBJECT:
                    returnArray = this.objectCardsUncommon;
                    break;
                case CARDTYPE_BUFF:
                    returnArray = this.buffCardsUncommon;
                    break;
                case CARDTYPE_CURSE:
                    returnArray = this.curseCardsUncommon;
                    break;
                case CARDTYPE_CHARACTER:
                    returnArray = this.charCardsUncommon;
                    break;
                case CARDTYPE_QUEST:
                    returnArray = this.questCardsUncommon;
                    break;
            }
        }
        
        if (returnArray.length == 0) //common
        {
            switch (cardType)
            {
                case CARDTYPE_RESOURCE:
                    returnArray = this.rscCardsCommon;
                    break;
                case CARDTYPE_OBJECT:
                    returnArray = this.objectCardsCommon;
                    break;
                case CARDTYPE_BUFF:
                    returnArray = this.buffCardsCommon;
                    break;
                case CARDTYPE_CURSE:
                    returnArray = this.curseCardsCommon;
                    break;
                case CARDTYPE_CHARACTER:
                    returnArray = this.charCardsCommon;
                    break;
                case CARDTYPE_QUEST:
                    returnArray = this.questCardsCommon;
                    break;
            }
        }

        return returnArray;
    }

    GetRandomCard(cardArray)
    {
        let i = Math.floor(Math.random() * cardArray.length);
        if (i == cardArray.length)
            i--;

        let clone = cardArray[i].Clone();
        return clone;
    }

    LoadAllData()
    {
        this.LoadobjectCardsCommon();
        this.LoadbuffCardsCommon();
        this.LoadcurseCardsCommon();
        this.LoadResourceCards();
        this.LoadCharacterCards();
        this.LoadquestCardsCommon();
    }

    LoadobjectCardsCommon()
    {
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["counter"].x, OBJECTSPRITES["counter"].y,
                                            OBJECTSPRITES["counter"].x, OBJECTSPRITES["counter"].y, 2, 1, false, -1,
                                            new ResourceUpkeep(this.gold, -3), "Counter"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["chair"].x, OBJECTSPRITES["chair"].y,
                                            OBJECTSPRITES["chair"].x, OBJECTSPRITES["chair"].y, 3, 0, true, -1,
                                            new ResourceUpkeep(this.gold, -5), "Chair"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["candle"].x, OBJECTSPRITES["candle"].y,
                                            OBJECTSPRITES["candle"].x, OBJECTSPRITES["candle"].y, 1, 3, false, -1,
                                            new ResourceUpkeep(this.gold, -6), "Candle"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["flowerpot"].x, OBJECTSPRITES["flowerpot"].y,
                                            OBJECTSPRITES["flowerpot"].x, OBJECTSPRITES["flowerpot"].y, 1, 2, false, -1,
                                            new ResourceUpkeep(this.gold, -4), "Flower Pot"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["weaponrack"].x, OBJECTSPRITES["weaponrack"].y,
                                            OBJECTSPRITES["weaponrack"].x, OBJECTSPRITES["weaponrack"].y, 2, 3, false, -1,
                                            new ResourceUpkeep(this.gold, -10), "Weapon Rack"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["firepit"].x, OBJECTSPRITES["firepit"].y,
                                            OBJECTSPRITES["firepit"].x, OBJECTSPRITES["firepit"].y, 1, 5, false, -1,
                                            new ResourceUpkeep(this.gold, -10), "Fire Pit"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["lazboy"].x, OBJECTSPRITES["lazboy"].y,
                                            OBJECTSPRITES["lazboy"].x, OBJECTSPRITES["lazboy"].y, 5, 0, true, -1,
                                            new ResourceUpkeep(this.gold, -8), "Relaxing Chair"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["8ball"].x, OBJECTSPRITES["8ball"].y,
                                            OBJECTSPRITES["8ball"].x, OBJECTSPRITES["8ball"].y, 3, 1, true, -1,
                                            new ResourceUpkeep(this.beer, -15), "The Magic 8 Ball!!"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["stool"].x, OBJECTSPRITES["stool"].y,
                                            OBJECTSPRITES["stool"].x, OBJECTSPRITES["stool"].y, 1, 0, true, -1,
                                            new ResourceUpkeep(this.gold, -1), "Stool"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["table"].x, OBJECTSPRITES["table"].y,
                                            OBJECTSPRITES["table"].x, OBJECTSPRITES["table"].y, 2, 1, false, -1,
                                            new ResourceUpkeep(this.gold, -3), "Table"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["coatrack"].x, OBJECTSPRITES["coatrack"].y,
                                            OBJECTSPRITES["coatrack"].x, OBJECTSPRITES["coatrack"].y, 1, 3, false, -1,
                                            new ResourceUpkeep(this.gold, -5), "Coat Rack"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["jackalope"].x, OBJECTSPRITES["jackalope"].y,
                                            OBJECTSPRITES["jackalope"].x, OBJECTSPRITES["jackalope"].y, 1, 4, false, -1,
                                            new ResourceUpkeep(this.gold, -7), "Mounted Jackalope Head"));
    }

    LoadbuffCardsCommon()
    {
        this.buffCardsCommon.push(new BuffCard(BUFFCURSESPRITES["goldBuff"].x, BUFFCURSESPRITES["goldBuff"].y,
                                         BUFFCURSESPRITES["goldBuff"].x, BUFFCURSESPRITES["goldBuff"].y, this.gold, 5));
        this.buffCardsCommon.push(new BuffCard(BUFFCURSESPRITES["foodBuff"].x, BUFFCURSESPRITES["foodBuff"].y,
                                         BUFFCURSESPRITES["foodBuff"].x, BUFFCURSESPRITES["foodBuff"].y, this.food, 5));
        this.buffCardsCommon.push(new BuffCard(BUFFCURSESPRITES["beerBuff"].x, BUFFCURSESPRITES["beerBuff"].y,
                                         BUFFCURSESPRITES["beerBuff"].x, BUFFCURSESPRITES["beerBuff"].y, this.beer, 5));

        this.buffCardsUncommon.push(new BuffCard(BUFFCURSESPRITES["goldBuffUnc"].x, BUFFCURSESPRITES["goldBuffUnc"].y,
                                         BUFFCURSESPRITES["goldBuffUnc"].x, BUFFCURSESPRITES["goldBuffUnc"].y, this.gold, 7));
        this.buffCardsUncommon.push(new BuffCard(BUFFCURSESPRITES["foodBuffUnc"].x, BUFFCURSESPRITES["foodBuffUnc"].y,
                                         BUFFCURSESPRITES["foodBuffUnc"].x, BUFFCURSESPRITES["foodBuffUnc"].y, this.food, 7));
        this.buffCardsUncommon.push(new BuffCard(BUFFCURSESPRITES["beerBuffUnc"].x, BUFFCURSESPRITES["beerBuffUnc"].y,
                                         BUFFCURSESPRITES["beerBuffUnc"].x, BUFFCURSESPRITES["beerBuffUnc"].y, this.beer, 7));
    }

    LoadcurseCardsCommon()
    {
        this.curseCardsCommon.push(new CurseCard(BUFFCURSESPRITES["goldCurse"].x, BUFFCURSESPRITES["goldCurse"].y,
                                           BUFFCURSESPRITES["goldCurse"].x, BUFFCURSESPRITES["goldCurse"].y, this.gold, 5));
        this.curseCardsCommon.push(new CurseCard(BUFFCURSESPRITES["foodCurse"].x, BUFFCURSESPRITES["foodCurse"].y,
                                           BUFFCURSESPRITES["foodCurse"].x, BUFFCURSESPRITES["foodCurse"].y, this.food, 5));
        this.curseCardsCommon.push(new CurseCard(BUFFCURSESPRITES["beerCurse"].x, BUFFCURSESPRITES["beerCurse"].y,
                                           BUFFCURSESPRITES["beerCurse"].x, BUFFCURSESPRITES["beerCurse"].y, this.beer, 5));
        
        this.curseCardsUncommon.push(new CurseCard(BUFFCURSESPRITES["goldCurseUnc"].x, BUFFCURSESPRITES["goldCurseUnc"].y,
                                           BUFFCURSESPRITES["goldCurseUnc"].x, BUFFCURSESPRITES["goldCurseUnc"].y, this.gold, 10));
        this.curseCardsUncommon.push(new CurseCard(BUFFCURSESPRITES["foodCurseUnc"].x, BUFFCURSESPRITES["foodCurseUnc"].y,
                                           BUFFCURSESPRITES["foodCurseUnc"].x, BUFFCURSESPRITES["foodCurseUnc"].y, this.food, 10));
        this.curseCardsUncommon.push(new CurseCard(BUFFCURSESPRITES["beerCurseUnc"].x, BUFFCURSESPRITES["beerCurseUnc"].y,
                                           BUFFCURSESPRITES["beerCurseUnc"].x, BUFFCURSESPRITES["beerCurseUnc"].y, this.beer, 10));
    }

    LoadResourceCards()
    {
        this.rscCardsCommon.push(new ResourceCard(RSCCARDSPRITES["chicken"].x, RSCCARDSPRITES["chicken"].y,
                                            RSCCARDSPRITES["chicken"].x, RSCCARDSPRITES["chicken"].y, this.food, this.gold, 10, 5));
        this.rscCardsCommon.push(new ResourceCard(RSCCARDSPRITES["keg"].x, RSCCARDSPRITES["keg"].y,
                                            RSCCARDSPRITES["keg"].x, RSCCARDSPRITES["keg"].y, this.beer, this.gold, 10, 5));
        this.rscCardsCommon.push(new ResourceCard(RSCCARDSPRITES["chickenmed"].x, RSCCARDSPRITES["chickenmed"].y,
                                            RSCCARDSPRITES["chickenmed"].x, RSCCARDSPRITES["chickenmed"].y, this.food, this.gold, 7, 5));
        this.rscCardsCommon.push(new ResourceCard(RSCCARDSPRITES["kegmed"].x, RSCCARDSPRITES["kegmed"].y,
                                            RSCCARDSPRITES["kegmed"].x, RSCCARDSPRITES["kegmed"].y, this.beer, this.gold, 7, 5));
        this.rscCardsCommon.push(new ResourceCard(RSCCARDSPRITES["chickensmall"].x, RSCCARDSPRITES["chickensmall"].y,
                                            RSCCARDSPRITES["chickensmall"].x, RSCCARDSPRITES["chickensmall"].y, this.food, this.gold, 5, 3));
        this.rscCardsCommon.push(new ResourceCard(RSCCARDSPRITES["kegsmall"].x, RSCCARDSPRITES["kegsmall"].y,
                                            RSCCARDSPRITES["kegsmall"].x, RSCCARDSPRITES["kegsmall"].y, this.beer, this.gold, 5, 3));
    }

    LoadCharacterCards()
    {
        this.charCardsCommon.push(new CharacterCard(CHARCARDSPRITES["bat"].x, CHARCARDSPRITES["bat"].y,
                                              CHARCARDSPRITES["bat"].x, CHARCARDSPRITES["bat"].y, 1, 
                                              [ new ResourceUpkeep(this.gold, 1), new ResourceUpkeep(this.food, -2) ], "Dire Bat",
                                              new CharacterStats(1,1,1)));
        this.charCardsCommon.push(new CharacterCard(CHARCARDSPRITES["rat"].x, CHARCARDSPRITES["rat"].y,
                                              CHARCARDSPRITES["rat"].x, CHARCARDSPRITES["rat"].y, 3, 
                                              [ new ResourceUpkeep(this.food, -1), new ResourceUpkeep(this.beer, 2) ], "Dire Rat",
                                              new CharacterStats(1,1,1)));
        this.charCardsCommon.push(new CharacterCard(CHARCARDSPRITES["goblin"].x, CHARCARDSPRITES["goblin"].y,
                                              CHARCARDSPRITES["goblin"].x, CHARCARDSPRITES["goblin"].y, 1, 
                                              [ new ResourceUpkeep(this.gold, 2), new ResourceUpkeep(this.beer, -3) ], "Goblin",
                                              new CharacterStats(1,2,1))); 
        this.charCardsCommon.push(new CharacterCard(CHARCARDSPRITES["skeleton"].x, CHARCARDSPRITES["skeleton"].y,
                                              CHARCARDSPRITES["skeleton"].x, CHARCARDSPRITES["skeleton"].y, 4, 
                                              [ new ResourceUpkeep(this.gold, -2), new ResourceUpkeep(this.beer, 3) ], "Skeleton",
                                              new CharacterStats(1,2,2)));
        this.charCardsCommon.push(new CharacterCard(CHARCARDSPRITES["ghost"].x, CHARCARDSPRITES["ghost"].y,
                                              CHARCARDSPRITES["ghost"].x, CHARCARDSPRITES["ghost"].y, 5, 
                                              [ new ResourceUpkeep(this.gold, 3), new ResourceUpkeep(this.beer, -3) ], "Ghost",
                                              new CharacterStats(2,1,3)));
        this.charCardsCommon.push(new CharacterCard(CHARCARDSPRITES["wolf"].x, CHARCARDSPRITES["wolf"].y,
                                              CHARCARDSPRITES["wolf"].x, CHARCARDSPRITES["wolf"].y, 5, 
                                              [ new ResourceUpkeep(this.gold, 3), new ResourceUpkeep(this.food, -3) ], "Dire Wolf",
                                              new CharacterStats(1,3,2)));
        this.charCardsCommon.push(new CharacterCard(CHARCARDSPRITES["goblinmage"].x, CHARCARDSPRITES["goblinmage"].y,
                                              CHARCARDSPRITES["goblinmage"].x, CHARCARDSPRITES["goblinmage"].y, 5, 
                                              [ new ResourceUpkeep(this.gold, 4), new ResourceUpkeep(this.beer, -4) ], "Goblin Mage",
                                              new CharacterStats(3,1,2)));  
        this.charCardsCommon.push(new CharacterCard(CHARCARDSPRITES["peasantmale"].x, CHARCARDSPRITES["peasantmale"].y,
                                              CHARCARDSPRITES["peasantmale"].x, CHARCARDSPRITES["peasantmale"].y, 3, 
                                              [ new ResourceUpkeep(this.gold, 1), new ResourceUpkeep(this.food, -1) ], "Human Peasant",
                                              new CharacterStats(2,2,1)));    
        this.charCardsCommon.push(new CharacterCard(CHARCARDSPRITES["peasantfemale"].x, CHARCARDSPRITES["peasantfemale"].y,
                                              CHARCARDSPRITES["peasantfemale"].x, CHARCARDSPRITES["peasantfemale"].y, 3, 
                                              [ new ResourceUpkeep(this.gold, 1), new ResourceUpkeep(this.food, -1) ], "Human Peasant",
                                              new CharacterStats(2,1,2)));      
        this.charCardsCommon.push(new CharacterCard(CHARCARDSPRITES["slime"].x, CHARCARDSPRITES["slime"].y,
                                              CHARCARDSPRITES["slime"].x, CHARCARDSPRITES["slime"].y, 1, 
                                              [ new ResourceUpkeep(this.beer, -1), new ResourceUpkeep(this.food, -1) ], "Slime",
                                              new CharacterStats(1,1,1)));  
        this.charCardsCommon.push(new CharacterCard(CHARCARDSPRITES["iceskeleton"].x, CHARCARDSPRITES["iceskeleton"].y,
                                              CHARCARDSPRITES["iceskeleton"].x, CHARCARDSPRITES["iceskeleton"].y, 4, 
                                              [ new ResourceUpkeep(this.beer, 1), new ResourceUpkeep(this.food, 1), new ResourceUpkeep(this.gold, -2) ], "Ice Skeleton",
                                              new CharacterStats(2,1,2)));  
        this.charCardsCommon.push(new CharacterCard(CHARCARDSPRITES["orcpleb"].x, CHARCARDSPRITES["orcpleb"].y,
                                              CHARCARDSPRITES["orcpleb"].x, CHARCARDSPRITES["orcpleb"].y, 2, 
                                              [ new ResourceUpkeep(this.beer, -2), new ResourceUpkeep(this.food, -1), new ResourceUpkeep(this.gold, 3) ], "Orc Pleb",
                                              new CharacterStats(1,4,1))); 
                                              
        this.charCardsUncommon.push(new CharacterCard(CHARCARDSPRITES["skeletonwarrior"].x, CHARCARDSPRITES["skeletonwarrior"].y,
                                              CHARCARDSPRITES["skeletonwarrior"].x, CHARCARDSPRITES["skeletonwarrior"].y, 9, 
                                              [ new ResourceUpkeep(this.gold, -8), new ResourceUpkeep(this.beer, 7) ], "Skeleton Warrior",
                                              new CharacterStats(2,4,3)));
        this.charCardsUncommon.push(new CharacterCard(CHARCARDSPRITES["skeletonmage"].x, CHARCARDSPRITES["skeletonmage"].y,
                                              CHARCARDSPRITES["skeletonmage"].x, CHARCARDSPRITES["skeletonmage"].y, 9, 
                                              [ new ResourceUpkeep(this.gold, -8), new ResourceUpkeep(this.food, 7) ], "Skeleton Mage",
                                              new CharacterStats(4,2,3)));
        this.charCardsUncommon.push(new CharacterCard(CHARCARDSPRITES["humanwarrior"].x, CHARCARDSPRITES["humanwarrior"].y,
                                              CHARCARDSPRITES["humanwarrior"].x, CHARCARDSPRITES["humanwarrior"].y, 10, 
                                              [ new ResourceUpkeep(this.gold, 8), new ResourceUpkeep(this.food, -6) ], "Human Warrior",
                                              new CharacterStats(3,4,2)));
        this.charCardsUncommon.push(new CharacterCard(CHARCARDSPRITES["spider"].x, CHARCARDSPRITES["spider"].y,
                                              CHARCARDSPRITES["spider"].x, CHARCARDSPRITES["spider"].y, 7, 
                                              [ new ResourceUpkeep(this.gold, 7), new ResourceUpkeep(this.food, -9) ], "Huge Spider",
                                              new CharacterStats(1,4,4)));  
        this.charCardsUncommon.push(new CharacterCard(CHARCARDSPRITES["icebeast"].x, CHARCARDSPRITES["icebeast"].y,
                                              CHARCARDSPRITES["icebeast"].x, CHARCARDSPRITES["icebeast"].y, 8, 
                                              [ new ResourceUpkeep(this.gold, 7), new ResourceUpkeep(this.beer, 2), new ResourceUpkeep(this.food, -10) ], "Ice Beast",
                                              new CharacterStats(3,3,3))); 
        this.charCardsUncommon.push(new CharacterCard(CHARCARDSPRITES["orcwarrior"].x, CHARCARDSPRITES["orcwarrior"].y,
                                              CHARCARDSPRITES["orcwarrior"].x, CHARCARDSPRITES["orcwarrior"].y, 7, 
                                              [ new ResourceUpkeep(this.gold, 7), new ResourceUpkeep(this.beer, -9)], "Orc Warrior",
                                              new CharacterStats(1,5,1)));                                            
    }

    LoadquestCardsCommon()
    {
        this.questCardsCommon.push(new QuestCard(QUESTCARDSPRITES["sweep"].x, QUESTCARDSPRITES["sweep"].y,
                                           QUESTCARDSPRITES["sweep"].x, QUESTCARDSPRITES["sweep"].y,
                                           1, 2, STATTYPE_STR, 3, [new ResourceUpkeep(this.gold, 10)], "Clean the Cellar"));
        this.questCardsCommon.push(new QuestCard(QUESTCARDSPRITES["cave"].x, QUESTCARDSPRITES["cave"].y,
                                            QUESTCARDSPRITES["cave"].x, QUESTCARDSPRITES["cave"].y,
                                           3, 5, STATTYPE_STR, 2, [new ResourceUpkeep(this.gold, 10)], "Delve in a Cave"));
        this.questCardsCommon.push(new QuestCard(QUESTCARDSPRITES["book"].x, QUESTCARDSPRITES["book"].y,
                                            QUESTCARDSPRITES["book"].x, QUESTCARDSPRITES["book"].y,
                                           3, 5, STATTYPE_INT, 2, [new ResourceUpkeep(this.gold, 10)], "Write a Book"));
        this.questCardsCommon.push(new QuestCard(QUESTCARDSPRITES["darts"].x, QUESTCARDSPRITES["darts"].y,
                                            QUESTCARDSPRITES["darts"].x, QUESTCARDSPRITES["darts"].y,
                                           3, 5, STATTYPE_DEX, 2, [new ResourceUpkeep(this.gold, 10)], "Play Darts"));
        this.questCardsCommon.push(new QuestCard(QUESTCARDSPRITES["trainingdummy"].x, QUESTCARDSPRITES["trainingdummy"].y,
                                           QUESTCARDSPRITES["trainingdummy"].x, QUESTCARDSPRITES["trainingdummy"].y,
                                          1, 1, STATTYPE_STR, 3, [new ResourceUpkeep(this.gold, 5)], "Basic Training"));
        this.questCardsCommon.push(new QuestCard(QUESTCARDSPRITES["armwrestle"].x, QUESTCARDSPRITES["armwrestle"].y,
                                          QUESTCARDSPRITES["armwrestle"].x, QUESTCARDSPRITES["armwrestle"].y,
                                         4, 7, STATTYPE_STR, 1, [new ResourceUpkeep(this.gold, 8)], "Arm Wrestle"));
        this.questCardsCommon.push(new QuestCard(QUESTCARDSPRITES["dressage"].x, QUESTCARDSPRITES["dressage"].y,
                                         QUESTCARDSPRITES["dressage"].x, QUESTCARDSPRITES["dressage"].y,
                                        4, 7, STATTYPE_DEX, 2, [new ResourceUpkeep(this.gold, 10)], "Horse Dressage"));
        this.questCardsCommon.push(new QuestCard(QUESTCARDSPRITES["cook"].x, QUESTCARDSPRITES["cook"].y,
                                        QUESTCARDSPRITES["cook"].x, QUESTCARDSPRITES["cook"].y,
                                       1, 2, STATTYPE_DEX, 3, [new ResourceUpkeep(this.food, 5)], "Cook Stew"));         
    }
}