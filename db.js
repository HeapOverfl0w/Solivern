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
    "jackalope" : new Vector2D(11,0),
    "bust" : new Vector2D(0,1),
    "darkcandle" : new Vector2D(1,1),
    "bonsaitree" : new Vector2D(2,1),
    "mountedbear" : new Vector2D(3,1),
    "portapotty" : new Vector2D(4,1)
}

var BUFFCURSESPRITES = {
    "goldBuff" : new Vector2D(0, 2),
    "foodBuff" : new Vector2D(1, 2),
    "beerBuff" : new Vector2D(2,2),
    "goldCurse" : new Vector2D(0, 3),
    "foodCurse" : new Vector2D(1, 3),
    "beerCurse" : new Vector2D(2, 3),
    "goldBuffUnc" : new Vector2D(3, 2),
    "foodBuffUnc" : new Vector2D(4, 2),
    "beerBuffUnc" : new Vector2D(5,2),
    "goldCurseUnc" : new Vector2D(3, 3),
    "foodCurseUnc" : new Vector2D(4, 3),
    "beerCurseUnc" : new Vector2D(5, 3),
    "goldBuffRare" : new Vector2D(6, 2),
    "foodBuffRare" : new Vector2D(7, 2),
    "beerBuffRare" : new Vector2D(8,2),
    "goldCurseRare" : new Vector2D(6, 3),
    "foodCurseRare" : new Vector2D(7, 3),
    "beerCurseRare" : new Vector2D(8, 3)
}

var RSCCARDSPRITES = {
    "chicken" : new Vector2D(0, 4),
    "keg" : new Vector2D(1,4),
    "chickenmed" : new Vector2D(2,4),
    "kegmed" : new Vector2D(3,4),
    "chickensmall" : new Vector2D(4,4),
    "kegsmall" : new Vector2D(5,4),
    "chickenUnc" : new Vector2D(6, 4),
    "kegUnc" : new Vector2D(7,4),
    "chickenmedUnc" : new Vector2D(8,4),
    "kegmedUnc" : new Vector2D(9,4),
    "chickensmallUnc" : new Vector2D(10,4),
    "kegsmallUnc" : new Vector2D(11,4),
    "chickenRare" : new Vector2D(12, 4),
    "kegRare" : new Vector2D(13,4),
    "chickenmedRare" : new Vector2D(14,4),
    "kegmedRare" : new Vector2D(15,4),
    "chickensmallRare" : new Vector2D(16,4),
    "kegsmallRare" : new Vector2D(17,4)
}

var CHARCARDSPRITES = {
    "bat" : new Vector2D(0, 5),
    "rat" : new Vector2D(1, 5),
    "goblin" : new Vector2D(2, 5),
    "skeleton" : new Vector2D(3, 5),
    "ghost" : new Vector2D(4,5),
    "wolf" : new Vector2D(5,5),
    "goblinmage" : new Vector2D(6,5),
    "peasantmale" : new Vector2D(7,5),
    "peasantfemale" : new Vector2D(8,5),
    "slime" : new Vector2D(9,5),
    "iceskeleton" : new Vector2D(10,5),
    "orcpleb" : new Vector2D(11,5),
    "lesserwillowisp" : new Vector2D(12,5),
    "halflingvillager" : new Vector2D(13,5),
    "halflingvillagerfemale" : new Vector2D(14,5),
    "dwarfminer" : new Vector2D(15, 5),
    "dwarfbaker" : new Vector2D(16,5),
    "skeletonwarrior" : new Vector2D(0,6),
    "skeletonmage" : new Vector2D(1,6),
    "humanwarrior" : new Vector2D(2,6),
    "spider" : new Vector2D(3,6),
    "icebeast" : new Vector2D(4,6),
    "orcwarrior" : new Vector2D(5,6),
    "greaterwillowisp" : new Vector2D(6,6),
    "trollberserker" : new Vector2D(7,6),
    "blackbear" : new Vector2D(8,6),
    "dwarfwarrior" : new Vector2D(9,6),
    "elfarcher" : new Vector2D(10,6),
    "dwarfpriest" : new Vector2D(11,6),
    "halflingburgler" : new Vector2D(12,6),
    "slimecube" : new Vector2D(13, 6),
    "humanmage" : new Vector2D(14, 6),
    "headlessman" : new Vector2D(15,6),
    "beholder" : new Vector2D(0,7)
}

var QUESTCARDSPRITES = {
    "sweep" : new Vector2D(0, 8),
    "cave" : new Vector2D(1,8),
    "book" : new Vector2D(2,8),
    "darts" : new Vector2D(3,8),
    "trainingdummy" : new Vector2D(4,8),
    "armwrestle" : new Vector2D(5,8),
    "dressage" : new Vector2D(6,8),
    "cook" : new Vector2D(7,8),
    "brew" : new Vector2D(8,8),
    "tenderize" : new Vector2D(9,8),
    "beerpong" : new Vector2D(10,8),
    "learnspell" : new Vector2D(11,8),
    "boatinabottle" : new Vector2D(0, 9),
    "graverob" : new Vector2D(1,9),
    "brewpotion" : new Vector2D(2,9)
}

var RSCTYPECHANCE = 0.5;
var OBJECTTYPECHANCE = RSCTYPECHANCE + 0.3;
var BUFFTYPECHANCE = OBJECTTYPECHANCE + 0.15;
var TYPECHANCEMOD = 0.007;

var NOCHARCHANCE = 0.1;
var ONECHARCHANCE = NOCHARCHANCE + 0.5;
var TWOCHARCHANCE = ONECHARCHANCE + 0.3;

var NOQUESTCHANCE = 0.5;
var ONEQUESTCHANCE = NOQUESTCHANCE + 0.4;

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
                                            OBJECTSPRITES["counter"].x, OBJECTSPRITES["counter"].y, 2, 1, false, undefined,
                                            new ResourceUpkeep(this.gold, -3), "Counter"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["chair"].x, OBJECTSPRITES["chair"].y,
                                            OBJECTSPRITES["chair"].x, OBJECTSPRITES["chair"].y, 3, 0, true, undefined,
                                            new ResourceUpkeep(this.gold, -5), "Chair"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["candle"].x, OBJECTSPRITES["candle"].y,
                                            OBJECTSPRITES["candle"].x, OBJECTSPRITES["candle"].y, 1, 3, false, LIGHTCOLOR,
                                            new ResourceUpkeep(this.gold, -6), "Candle"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["flowerpot"].x, OBJECTSPRITES["flowerpot"].y,
                                            OBJECTSPRITES["flowerpot"].x, OBJECTSPRITES["flowerpot"].y, 1, 2, false, undefined,
                                            new ResourceUpkeep(this.gold, -4), "Flower Pot"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["weaponrack"].x, OBJECTSPRITES["weaponrack"].y,
                                            OBJECTSPRITES["weaponrack"].x, OBJECTSPRITES["weaponrack"].y, 2, 3, false, undefined,
                                            new ResourceUpkeep(this.gold, -10), "Weapon Rack"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["firepit"].x, OBJECTSPRITES["firepit"].y,
                                            OBJECTSPRITES["firepit"].x, OBJECTSPRITES["firepit"].y, 1, 5, false, LIGHTCOLOR,
                                            new ResourceUpkeep(this.gold, -10), "Fire Pit"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["lazboy"].x, OBJECTSPRITES["lazboy"].y,
                                            OBJECTSPRITES["lazboy"].x, OBJECTSPRITES["lazboy"].y, 5, 0, true, undefined,
                                            new ResourceUpkeep(this.gold, -8), "Relaxing Chair"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["8ball"].x, OBJECTSPRITES["8ball"].y,
                                            OBJECTSPRITES["8ball"].x, OBJECTSPRITES["8ball"].y, 3, 1, true, undefined,
                                            new ResourceUpkeep(this.beer, -15), "The Magic 8 Ball!!"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["stool"].x, OBJECTSPRITES["stool"].y,
                                            OBJECTSPRITES["stool"].x, OBJECTSPRITES["stool"].y, 1, 0, true, undefined,
                                            new ResourceUpkeep(this.gold, -1), "Stool"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["table"].x, OBJECTSPRITES["table"].y,
                                            OBJECTSPRITES["table"].x, OBJECTSPRITES["table"].y, 2, 1, false, undefined,
                                            new ResourceUpkeep(this.gold, -3), "Table"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["coatrack"].x, OBJECTSPRITES["coatrack"].y,
                                            OBJECTSPRITES["coatrack"].x, OBJECTSPRITES["coatrack"].y, 1, 3, false, undefined,
                                            new ResourceUpkeep(this.gold, -5), "Coat Rack"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["jackalope"].x, OBJECTSPRITES["jackalope"].y,
                                            OBJECTSPRITES["jackalope"].x, OBJECTSPRITES["jackalope"].y, 1, 4, false, undefined,
                                            new ResourceUpkeep(this.gold, -7), "Mounted Jackalope Head"));

        this.objectCardsUncommon.push(new ObjectCard(OBJECTSPRITES["bust"].x, OBJECTSPRITES["bust"].y,
                                            OBJECTSPRITES["bust"].x, OBJECTSPRITES["bust"].y, 3, 3, false, undefined,
                                            new ResourceUpkeep(this.gold, -15), "Bust of a Great Warrior"));
        this.objectCardsUncommon.push(new ObjectCard(OBJECTSPRITES["darkcandle"].x, OBJECTSPRITES["darkcandle"].y,
                                            OBJECTSPRITES["darkcandle"].x, OBJECTSPRITES["darkcandle"].y, 4, 3, false, "#b60c1e33",
                                            new ResourceUpkeep(this.gold, -20), "The Dark Candle!!"));
        this.objectCardsUncommon.push(new ObjectCard(OBJECTSPRITES["bonsaitree"].x, OBJECTSPRITES["bonsaitree"].y,
                                            OBJECTSPRITES["bonsaitree"].x, OBJECTSPRITES["bonsaitree"].y, 2, 2, false, undefined,
                                            new ResourceUpkeep(this.gold, -10), "Mounted Bear"));
        this.objectCardsUncommon.push(new ObjectCard(OBJECTSPRITES["mountedbear"].x, OBJECTSPRITES["mountedbear"].y,
                                            OBJECTSPRITES["mountedbear"].x, OBJECTSPRITES["mountedbear"].y, 2, 4, false, undefined,
                                            new ResourceUpkeep(this.gold, -15), "Mounted Bear"));
        this.objectCardsUncommon.push(new ObjectCard(OBJECTSPRITES["portapotty"].x, OBJECTSPRITES["portapotty"].y,
                                            OBJECTSPRITES["portapotty"].x, OBJECTSPRITES["portapotty"].y, 3, 5, false, undefined,
                                            new ResourceUpkeep(this.gold, -20), "Porta-Potty"));
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

        this.buffCardsRare.push(new BuffCard(BUFFCURSESPRITES["goldBuffRare"].x, BUFFCURSESPRITES["goldBuffRare"].y,
                                         BUFFCURSESPRITES["goldBuffRare"].x, BUFFCURSESPRITES["goldBuffRare"].y, this.gold, 13));
        this.buffCardsRare.push(new BuffCard(BUFFCURSESPRITES["foodBuffRare"].x, BUFFCURSESPRITES["foodBuffRare"].y,
                                         BUFFCURSESPRITES["foodBuffRare"].x, BUFFCURSESPRITES["foodBuffRare"].y, this.food, 13));
        this.buffCardsRare.push(new BuffCard(BUFFCURSESPRITES["beerBuffRare"].x, BUFFCURSESPRITES["beerBuffRare"].y,
                                         BUFFCURSESPRITES["beerBuffRare"].x, BUFFCURSESPRITES["beerBuffRare"].y, this.beer, 13));
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

        this.curseCardsRare.push(new CurseCard(BUFFCURSESPRITES["goldCurseRare"].x, BUFFCURSESPRITES["goldCurseRare"].y,
                                           BUFFCURSESPRITES["goldCurseRare"].x, BUFFCURSESPRITES["goldCurseRare"].y, this.gold, 15));
        this.curseCardsRare.push(new CurseCard(BUFFCURSESPRITES["foodCurseRare"].x, BUFFCURSESPRITES["foodCurseRare"].y,
                                           BUFFCURSESPRITES["foodCurseRare"].x, BUFFCURSESPRITES["foodCurseRare"].y, this.food, 15));
        this.curseCardsRare.push(new CurseCard(BUFFCURSESPRITES["beerCurseRare"].x, BUFFCURSESPRITES["beerCurseRare"].y,
                                           BUFFCURSESPRITES["beerCurseRare"].x, BUFFCURSESPRITES["beerCurseRare"].y, this.beer, 15));
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

        this.rscCardsUncommon.push(new ResourceCard(RSCCARDSPRITES["chickenUnc"].x, RSCCARDSPRITES["chickenUnc"].y,
                                            RSCCARDSPRITES["chickenUnc"].x, RSCCARDSPRITES["chickenUnc"].y, this.food, this.gold, 20, 12));
        this.rscCardsUncommon.push(new ResourceCard(RSCCARDSPRITES["kegUnc"].x, RSCCARDSPRITES["kegUnc"].y,
                                            RSCCARDSPRITES["kegUnc"].x, RSCCARDSPRITES["kegUnc"].y, this.beer, this.gold, 20, 12));
        this.rscCardsUncommon.push(new ResourceCard(RSCCARDSPRITES["chickenmedUnc"].x, RSCCARDSPRITES["chickenmedUnc"].y,
                                            RSCCARDSPRITES["chickenmedUnc"].x, RSCCARDSPRITES["chickenmedUnc"].y, this.food, this.gold, 15, 10));
        this.rscCardsUncommon.push(new ResourceCard(RSCCARDSPRITES["kegmedUnc"].x, RSCCARDSPRITES["kegmedUnc"].y,
                                            RSCCARDSPRITES["kegmedUnc"].x, RSCCARDSPRITES["kegmedUnc"].y, this.beer, this.gold, 15, 10));
        this.rscCardsUncommon.push(new ResourceCard(RSCCARDSPRITES["chickensmallUnc"].x, RSCCARDSPRITES["chickensmallUnc"].y,
                                            RSCCARDSPRITES["chickensmallUnc"].x, RSCCARDSPRITES["chickensmallUnc"].y, this.food, this.gold, 10, 7));
        this.rscCardsUncommon.push(new ResourceCard(RSCCARDSPRITES["kegsmallUnc"].x, RSCCARDSPRITES["kegsmallUnc"].y,
                                            RSCCARDSPRITES["kegsmallUnc"].x, RSCCARDSPRITES["kegsmallUnc"].y, this.beer, this.gold, 10, 7));

        this.rscCardsRare.push(new ResourceCard(RSCCARDSPRITES["chickenRare"].x, RSCCARDSPRITES["chickenRare"].y,
                                            RSCCARDSPRITES["chickenRare"].x, RSCCARDSPRITES["chickenRare"].y, this.food, this.gold, 30, 21));
        this.rscCardsRare.push(new ResourceCard(RSCCARDSPRITES["kegRare"].x, RSCCARDSPRITES["kegRare"].y,
                                            RSCCARDSPRITES["kegRare"].x, RSCCARDSPRITES["kegRare"].y, this.beer, this.gold, 30, 21));
        this.rscCardsRare.push(new ResourceCard(RSCCARDSPRITES["chickenmedRare"].x, RSCCARDSPRITES["chickenmedRare"].y,
                                            RSCCARDSPRITES["chickenmedRare"].x, RSCCARDSPRITES["chickenmedRare"].y, this.food, this.gold, 22, 15));
        this.rscCardsRare.push(new ResourceCard(RSCCARDSPRITES["kegmedRare"].x, RSCCARDSPRITES["kegmedRare"].y,
                                            RSCCARDSPRITES["kegmedRare"].x, RSCCARDSPRITES["kegmedRare"].y, this.beer, this.gold, 22, 15));
        this.rscCardsRare.push(new ResourceCard(RSCCARDSPRITES["chickensmallRare"].x, RSCCARDSPRITES["chickensmallRare"].y,
                                            RSCCARDSPRITES["chickensmallRare"].x, RSCCARDSPRITES["chickensmallRare"].y, this.food, this.gold, 15, 10));
        this.rscCardsRare.push(new ResourceCard(RSCCARDSPRITES["kegsmallRare"].x, RSCCARDSPRITES["kegsmallRare"].y,
                                            RSCCARDSPRITES["kegsmallRare"].x, RSCCARDSPRITES["kegsmallRare"].y, this.beer, this.gold, 15, 10));
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
        this.charCardsCommon.push(new CharacterCard(CHARCARDSPRITES["lesserwillowisp"].x, CHARCARDSPRITES["lesserwillowisp"].y,
                                              CHARCARDSPRITES["lesserwillowisp"].x, CHARCARDSPRITES["lesserwillowisp"].y, 5, 
                                              [ new ResourceUpkeep(this.beer, 1), new ResourceUpkeep(this.food, 1) ], "Lesser Will-O-Wisp",
                                              new CharacterStats(1,0,0))); 
        this.charCardsCommon.push(new CharacterCard(CHARCARDSPRITES["halflingvillager"].x, CHARCARDSPRITES["halflingvillager"].y,
                                              CHARCARDSPRITES["halflingvillager"].x, CHARCARDSPRITES["halflingvillager"].y, 3, 
                                              [ new ResourceUpkeep(this.gold, 1), new ResourceUpkeep(this.beer, -1) ], "Halfling Villager",
                                              new CharacterStats(1,1,3))); 
        this.charCardsCommon.push(new CharacterCard(CHARCARDSPRITES["halflingvillagerfemale"].x, CHARCARDSPRITES["halflingvillagerfemale"].y,
                                              CHARCARDSPRITES["halflingvillagerfemale"].x, CHARCARDSPRITES["halflingvillagerfemale"].y, 3, 
                                              [ new ResourceUpkeep(this.gold, 1), new ResourceUpkeep(this.beer, -1) ], "Halfling Villager",
                                              new CharacterStats(1,1,3))); 
        this.charCardsCommon.push(new CharacterCard(CHARCARDSPRITES["dwarfminer"].x, CHARCARDSPRITES["dwarfminer"].y,
                                              CHARCARDSPRITES["dwarfminer"].x, CHARCARDSPRITES["dwarfminer"].y, 4, 
                                              [ new ResourceUpkeep(this.food, 2), new ResourceUpkeep(this.beer, -2) ], "Dwarf Miner",
                                              new CharacterStats(1,3,1))); 
        this.charCardsCommon.push(new CharacterCard(CHARCARDSPRITES["dwarfbaker"].x, CHARCARDSPRITES["dwarfbaker"].y,
                                              CHARCARDSPRITES["dwarfbaker"].x, CHARCARDSPRITES["dwarfbaker"].y, 4, 
                                              [ new ResourceUpkeep(this.food, 2), new ResourceUpkeep(this.beer, -2) ], "Dwarf Baker",
                                              new CharacterStats(1,3,1)));
                                              
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
                                              [ new ResourceUpkeep(this.gold, 7), new ResourceUpkeep(this.beer, -5), new ResourceUpkeep(this.food, -4)], "Orc Warrior",
                                              new CharacterStats(1,5,1)));   
        this.charCardsUncommon.push(new CharacterCard(CHARCARDSPRITES["greaterwillowisp"].x, CHARCARDSPRITES["greaterwillowisp"].y,
                                              CHARCARDSPRITES["greaterwillowisp"].x, CHARCARDSPRITES["greaterwillowisp"].y, 20, 
                                              [ new ResourceUpkeep(this.beer, 3), new ResourceUpkeep(this.food, 3) ], "Greater Will-O-Wisp",
                                              new CharacterStats(2,0,0)));
        this.charCardsUncommon.push(new CharacterCard(CHARCARDSPRITES["trollberserker"].x, CHARCARDSPRITES["trollberserker"].y,
                                              CHARCARDSPRITES["trollberserker"].x, CHARCARDSPRITES["trollberserker"].y, 9, 
                                              [ new ResourceUpkeep(this.beer, -9), new ResourceUpkeep(this.gold, 8) ], "Troll Berserker",
                                              new CharacterStats(1,3,5)));
        this.charCardsUncommon.push(new CharacterCard(CHARCARDSPRITES["blackbear"].x, CHARCARDSPRITES["blackbear"].y,
                                              CHARCARDSPRITES["blackbear"].x, CHARCARDSPRITES["blackbear"].y, 7, 
                                              [ new ResourceUpkeep(this.food, -10), new ResourceUpkeep(this.gold, 8) ], "Black Bear",
                                              new CharacterStats(2,4,2)));
        this.charCardsUncommon.push(new CharacterCard(CHARCARDSPRITES["dwarfwarrior"].x, CHARCARDSPRITES["dwarfwarrior"].y,
                                              CHARCARDSPRITES["dwarfwarrior"].x, CHARCARDSPRITES["dwarfwarrior"].y, 9, 
                                              [ new ResourceUpkeep(this.beer, -9), new ResourceUpkeep(this.food, 7) ], "Dwarf Warrior",
                                              new CharacterStats(1,4,2)));
        this.charCardsUncommon.push(new CharacterCard(CHARCARDSPRITES["elfarcher"].x, CHARCARDSPRITES["elfarcher"].y,
                                              CHARCARDSPRITES["elfarcher"].x, CHARCARDSPRITES["elfarcher"].y, 15, 
                                              [ new ResourceUpkeep(this.gold, -8), new ResourceUpkeep(this.beer, 9) ], "Elven Archer",
                                              new CharacterStats(1,1,5)));
        this.charCardsUncommon.push(new CharacterCard(CHARCARDSPRITES["dwarfpriest"].x, CHARCARDSPRITES["dwarfpriest"].y,
                                              CHARCARDSPRITES["dwarfpriest"].x, CHARCARDSPRITES["dwarfpriest"].y, 9, 
                                              [ new ResourceUpkeep(this.beer, -9), new ResourceUpkeep(this.food, 7) ], "Dwarf War Priest",
                                              new CharacterStats(3,4,1)));
        this.charCardsUncommon.push(new CharacterCard(CHARCARDSPRITES["halflingburgler"].x, CHARCARDSPRITES["halflingburgler"].y,
                                              CHARCARDSPRITES["halflingburgler"].x, CHARCARDSPRITES["halflingburgler"].y, 10, 
                                              [ new ResourceUpkeep(this.beer, 3), new ResourceUpkeep(this.food, 5), new ResourceUpkeep(this.gold, -10) ], "Halfling Burgler",
                                              new CharacterStats(3,1,5)));
        this.charCardsUncommon.push(new CharacterCard(CHARCARDSPRITES["slimecube"].x, CHARCARDSPRITES["slimecube"].y,
                                              CHARCARDSPRITES["slimecube"].x, CHARCARDSPRITES["slimecube"].y, 5, 
                                              [ new ResourceUpkeep(this.beer, -3), new ResourceUpkeep(this.food, -3) ], "Giant Gelatinous Cube",
                                              new CharacterStats(0,2,0)));
        this.charCardsUncommon.push(new CharacterCard(CHARCARDSPRITES["humanmage"].x, CHARCARDSPRITES["humanmage"].y,
                                              CHARCARDSPRITES["humanmage"].x, CHARCARDSPRITES["humanmage"].y, 10, 
                                              [ new ResourceUpkeep(this.gold, 8), new ResourceUpkeep(this.food, -6) ], "Human Mage",
                                              new CharacterStats(4,2,2)));
        this.charCardsUncommon.push(new CharacterCard(CHARCARDSPRITES["headlessman"].x, CHARCARDSPRITES["headlessman"].y,
                                              CHARCARDSPRITES["headlessman"].x, CHARCARDSPRITES["headlessman"].y, 15, 
                                              [ new ResourceUpkeep(this.beer, 3), new ResourceUpkeep(this.food, 3), new ResourceUpkeep(this.gold, -6) ], "Headless Spooky Man",
                                              new CharacterStats(4,1,1)));

        this.charCardsRare.push(new CharacterCard(CHARCARDSPRITES["beholder"].x, CHARCARDSPRITES["beholder"].y,
                                              CHARCARDSPRITES["beholder"].x, CHARCARDSPRITES["beholder"].y, 15, 
                                              [ new ResourceUpkeep(this.food, -19), new ResourceUpkeep(this.gold, 15) ], "Beholder",
                                              new CharacterStats(6,3,3)));
                                              
                                              
    }

    LoadquestCardsCommon()
    {
        this.questCardsCommon.push(new QuestCard(QUESTCARDSPRITES["sweep"].x, QUESTCARDSPRITES["sweep"].y,
                                           QUESTCARDSPRITES["sweep"].x, QUESTCARDSPRITES["sweep"].y,
                                           1, 2, STATTYPE_STR, 3, [new ResourceUpkeep(this.gold, 5)], "Clean the Cellar"));
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
        this.questCardsCommon.push(new QuestCard(QUESTCARDSPRITES["brew"].x, QUESTCARDSPRITES["brew"].y,
                                       QUESTCARDSPRITES["brew"].x, QUESTCARDSPRITES["brew"].y,
                                      1, 2, STATTYPE_INT, 3, [new ResourceUpkeep(this.beer, 5)], "Brew Beer"));
        this.questCardsCommon.push(new QuestCard(QUESTCARDSPRITES["tenderize"].x, QUESTCARDSPRITES["tenderize"].y,
                                       QUESTCARDSPRITES["tenderize"].x, QUESTCARDSPRITES["tenderize"].y,
                                      2, 4, STATTYPE_STR, 4, [new ResourceUpkeep(this.food, 10)], "Tenderize Meat"));     
        this.questCardsCommon.push(new QuestCard(QUESTCARDSPRITES["beerpong"].x, QUESTCARDSPRITES["beerpong"].y,
                                       QUESTCARDSPRITES["beerpong"].x, QUESTCARDSPRITES["beerpong"].y,
                                      2, 4, STATTYPE_DEX, 4, [new ResourceUpkeep(this.beer, 10)], "Play Beer Pong"));
        this.questCardsCommon.push(new QuestCard(QUESTCARDSPRITES["learnspell"].x, QUESTCARDSPRITES["learnspell"].y,
                                       QUESTCARDSPRITES["learnspell"].x, QUESTCARDSPRITES["learnspell"].y,
                                      2, 4, STATTYPE_INT, 4, [new ResourceUpkeep(this.gold, 10)], "Learn a Spell"));
                                        
        this.questCardsUncommon.push(new QuestCard(QUESTCARDSPRITES["boatinabottle"].x, QUESTCARDSPRITES["boatinabottle"].y,
                                       QUESTCARDSPRITES["boatinabottle"].x, QUESTCARDSPRITES["boatinabottle"].y,
                                      7, 10, STATTYPE_DEX, 4, [new ResourceUpkeep(this.gold, 17)], "Build a Boat in a Bottle"));
        this.questCardsUncommon.push(new QuestCard(QUESTCARDSPRITES["graverob"].x, QUESTCARDSPRITES["graverob"].y,
                                       QUESTCARDSPRITES["graverob"].x, QUESTCARDSPRITES["graverob"].y,
                                      7, 10, STATTYPE_STR, 4, [new ResourceUpkeep(this.gold, 17)], "Grave Rob a Catacomb")); 
        this.questCardsUncommon.push(new QuestCard(QUESTCARDSPRITES["brewpotion"].x, QUESTCARDSPRITES["brewpotion"].y,
                                       QUESTCARDSPRITES["brewpotion"].x, QUESTCARDSPRITES["brewpotion"].y,
                                      7, 10, STATTYPE_INT, 4, [new ResourceUpkeep(this.gold, 17)], "Brew a Potion")); 
    }
}