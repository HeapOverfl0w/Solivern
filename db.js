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
    "cheese" : new Vector2D(12,0),
    "foldingchair" : new Vector2D(13,0),
    "trainingdummy" : new Vector2D(14,0),

    "bust" : new Vector2D(0,1),
    "darkcandle" : new Vector2D(1,1),
    "bonsaitree" : new Vector2D(2,1),
    "mountedbear" : new Vector2D(3,1),
    "portapotty" : new Vector2D(4,1),
    "stonetable" : new Vector2D(5,1),
    "gametable" : new Vector2D(6,1),
    "fancystool" : new Vector2D(7,1),
    "foosballtable" : new Vector2D(8,1),
    "onionringtower" : new Vector2D(9,1),
    "candles" : new Vector2D(10,1),
    "keg" : new Vector2D(11,1),

    "swordinstone" : new Vector2D(13,1),
    "kingschair" : new Vector2D(14,1),
    "darkskull" : new Vector2D(15,1),
    "discoball" : new Vector2D(16,1),
    "chocolatefountain" : new Vector2D(17,1),
    "magicflower" : new Vector2D(18,1),
    "buckhunter" : new Vector2D(19,1)
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
    "snake" : new Vector2D(17,5),
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
    "beholder" : new Vector2D(0,7),
    "orcbehemoth" : new Vector2D(1,7),
    "skeletonking" : new Vector2D(2,7),
    "drake" : new Vector2D(3,7),
    "dwarfchampion" : new Vector2D(4,7),
    "fireelemental" : new Vector2D(5,7),
    "windelemental" : new Vector2D(6,7)
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
    "brewpotion" : new Vector2D(2,9),
    "wrestlebear" : new Vector2D(3,9),
    "breakdance" : new Vector2D(4,9),
    "sextant" : new Vector2D(5,9),
    "rubiks" : new Vector2D(6,9),
    "aligator" : new Vector2D(7,9),
    "goblinhorde" : new Vector2D(8,9),

    "slaydragon" : new Vector2D(0,10),
    "compiler" : new Vector2D(1,10),
    "needle" : new Vector2D(2,10),
    "buckhunterquest" : new Vector2D(3,10),
    "moveturtle" : new Vector2D(4,10),
    "irontogold" : new Vector2D(5,10)
}

var ITEMCARDSPRITES = {
    "uglystick" : new Vector2D(0,11),
    "thiefdagger" : new Vector2D(1,11),
    "scroll" : new Vector2D(2,11),
    "shortsword" : new Vector2D(3,11), 
    "huntersbow" : new Vector2D(4,11),
    "apprenticewand" : new Vector2D(5,11),
    "shortsword1" : new Vector2D(6,11), 
    "huntersbow1" : new Vector2D(7,11),
    "apprenticewand1" : new Vector2D(8,11),
    "longsword" : new Vector2D(0,12),
    "dualdaggers" : new Vector2D(1,12),
    "spellbook" : new Vector2D(2,12),
    "battleaxe" : new Vector2D(3,12),
    "katana" : new Vector2D(4,12),
    "scepter" : new Vector2D(5,12),
    "shield" : new Vector2D(6,12),
    "visor" : new Vector2D(7,12),
    "cuirass" : new Vector2D(8,12),
    "justicebringer" : new Vector2D(0,13),
    "trueaim" : new Vector2D(1,13),
    "monsterbook" : new Vector2D(2,13)
}

var RSCTYPECHANCE = 0.5;
var OBJECTTYPECHANCE = RSCTYPECHANCE + 0.3;
var BUFFTYPECHANCE = OBJECTTYPECHANCE + 0.15;
var TYPECHANCEMOD = 0.007;

var NOCHARCHANCE = 0.1;
var ONECHARCHANCE = NOCHARCHANCE + 0.5;
var TWOCHARCHANCE = ONECHARCHANCE + 0.3;

var NOQUESTCHANCE = 0.55;
var ONEQUESTCHANCE = NOQUESTCHANCE + 0.35;

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

        this.itemCardsCommon = [];
        this.itemCardsUncommon = [];
        this.itemCardsRare = [];
        this.itemCardsEpic = [];
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

    GetRandomLevel(group)
    {
        if (group == this.charCardsCommon)
            return 1;
        else if (group == this.charCardsUncommon)
            return Math.ceil(Math.random() * 3);
        else if (group == this.charCardsRare)
            return Math.ceil(Math.random() * 5);
        else if (group == this.charCardsEpic)
            return Math.ceil(Math.random() * 7);

        return 0;
    }

    GetRandomQuestCards(turn)
    {
        let cardCount = Math.random();
        if (cardCount < NOQUESTCHANCE)
            return [];
        if (cardCount < ONEQUESTCHANCE)
            return [this.GetQuestWithItemBasedOffQuestGroup(this.ChooseRarityGroup(turn, CARDTYPE_QUEST))];
        else
            return [this.GetQuestWithItemBasedOffQuestGroup(this.ChooseRarityGroup(turn, CARDTYPE_QUEST)), 
                    this.GetQuestWithItemBasedOffQuestGroup(this.ChooseRarityGroup(turn, CARDTYPE_QUEST))];
    }

    GetQuestWithItemBasedOffQuestGroup(questGroup)
    {
        //30% chance to get an item.
        if (Math.random() < 0.3)
        {
            //Get a random item card that's within the same rarity
            let itemGroup = []
            if (questGroup == this.questCardsCommon)
                itemGroup = this.itemCardsCommon;
            else if (questGroup == this.questCardsUncommon)
                itemGroup = this.itemCardsUncommon;
            else if (questGroup == this.questCardsRare)
                itemGroup = this.itemCardsRare;
            else if (questGroup == this.questCardsEpic)
                itemGroup = this.itemCardsEpic;
            //fallback case
            if (itemGroup.length == 0)
                itemGroup = this.questCardsCommon;
            let returnQuest = this.GetRandomCard(questGroup);
            returnQuest.item = this.GetRandomCard(itemGroup);
            return returnQuest;
        }
        else
            return this.GetRandomCard(questGroup);
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

        //Random level ups for cards uncommon and above
        let level = this.GetRandomLevel(cardArray);
        if (level != 0)
        {
            for (let i = 1; i < level; i++)
            {
                clone.stats.LevelUp();
            }
        }

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
        this.LoadItemCards();
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
                                            new ResourceUpkeep(this.beer, -15), "Magic 8 Ball"));
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
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["cheese"].x, OBJECTSPRITES["cheese"].y,
                                            OBJECTSPRITES["cheese"].x, OBJECTSPRITES["cheese"].y, 3, 1, false, undefined,
                                            new ResourceUpkeep(this.food, -15), "Gourmet Cheese Wheel"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["foldingchair"].x, OBJECTSPRITES["foldingchair"].y,
                                            OBJECTSPRITES["foldingchair"].x, OBJECTSPRITES["foldingchair"].y, 1, 0, true, undefined,
                                            new ResourceUpkeep(this.gold, -1), "Folding Chair"));
        this.objectCardsCommon.push(new ObjectCard(OBJECTSPRITES["trainingdummy"].x, OBJECTSPRITES["trainingdummy"].y,
                                            OBJECTSPRITES["trainingdummy"].x, OBJECTSPRITES["trainingdummy"].y, 3, 1, false, undefined,
                                            new ResourceUpkeep(this.gold, -6), "Training Dummy"));

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
        this.objectCardsUncommon.push(new ObjectCard(OBJECTSPRITES["stonetable"].x, OBJECTSPRITES["stonetable"].y,
                                            OBJECTSPRITES["stonetable"].x, OBJECTSPRITES["stonetable"].y, 4, 1, false, undefined,
                                            new ResourceUpkeep(this.gold, -12), "Elegant Stone Table"));
        this.objectCardsUncommon.push(new ObjectCard(OBJECTSPRITES["gametable"].x, OBJECTSPRITES["gametable"].y,
                                            OBJECTSPRITES["gametable"].x, OBJECTSPRITES["gametable"].y, 4, 1, false, undefined,
                                            new ResourceUpkeep(this.gold, -12), "Board Game Table"));
        this.objectCardsUncommon.push(new ObjectCard(OBJECTSPRITES["fancystool"].x, OBJECTSPRITES["fancystool"].y,
                                            OBJECTSPRITES["fancystool"].x, OBJECTSPRITES["fancystool"].y, 4, 0, true, undefined,
                                            new ResourceUpkeep(this.gold, -6), "Fancy Stool"));
        this.objectCardsUncommon.push(new ObjectCard(OBJECTSPRITES["foosballtable"].x, OBJECTSPRITES["foosballtable"].y,
                                            OBJECTSPRITES["foosballtable"].x, OBJECTSPRITES["foosballtable"].y, 6, 1, false, undefined,
                                            new ResourceUpkeep(this.gold, -17), "Foosball Table"));
        this.objectCardsUncommon.push(new ObjectCard(OBJECTSPRITES["onionringtower"].x, OBJECTSPRITES["onionringtower"].y,
                                            OBJECTSPRITES["onionringtower"].x, OBJECTSPRITES["onionringtower"].y, 6, 1, false, undefined,
                                            new ResourceUpkeep(this.food, -22), "Onion Ring Tower"));
        this.objectCardsUncommon.push(new ObjectCard(OBJECTSPRITES["candles"].x, OBJECTSPRITES["candles"].y,
                                            OBJECTSPRITES["candles"].x, OBJECTSPRITES["candles"].y, 2, 4, false, LIGHTCOLOR,
                                            new ResourceUpkeep(this.gold, -12), "Raised Candles"));
        this.objectCardsUncommon.push(new ObjectCard(OBJECTSPRITES["keg"].x, OBJECTSPRITES["keg"].y,
                                            OBJECTSPRITES["keg"].x, OBJECTSPRITES["keg"].y, 5, 2, false, LIGHTCOLOR,
                                            new ResourceUpkeep(this.beer, -22), "Keg"));

        this.objectCardsRare.push(new ObjectCard(OBJECTSPRITES["swordinstone"].x, OBJECTSPRITES["swordinstone"].y,
                                            OBJECTSPRITES["swordinstone"].x, OBJECTSPRITES["swordinstone"].y, 5, 5, false, undefined,
                                            new ResourceUpkeep(this.gold, -30), "Sword in the Stone"));
        this.objectCardsRare.push(new ObjectCard(OBJECTSPRITES["kingschair"].x, OBJECTSPRITES["kingschair"].y,
                                            OBJECTSPRITES["kingschair"].x, OBJECTSPRITES["kingschair"].y, 12, 0, true, undefined,
                                            new ResourceUpkeep(this.gold, -22), "King's Chair"));
        this.objectCardsRare.push(new ObjectCard(OBJECTSPRITES["darkskull"].x, OBJECTSPRITES["darkskull"].y,
                                            OBJECTSPRITES["darkskull"].x, OBJECTSPRITES["darkskull"].y, 5, 4, false, "#b60c1e33",
                                            new ResourceUpkeep(this.gold, -25), "The Dark Skull"));
        this.objectCardsRare.push(new ObjectCard(OBJECTSPRITES["discoball"].x, OBJECTSPRITES["discoball"].y,
                                            OBJECTSPRITES["discoball"].x, OBJECTSPRITES["discoball"].y, 3, 6, true, "#b67348ac",
                                            new ResourceUpkeep(this.gold, -23), "Disco Ball"));
        this.objectCardsRare.push(new ObjectCard(OBJECTSPRITES["chocolatefountain"].x, OBJECTSPRITES["chocolatefountain"].y,
                                            OBJECTSPRITES["chocolatefountain"].x, OBJECTSPRITES["chocolatefountain"].y, 5, 2, false, undefined,
                                            new ResourceUpkeep(this.food, -20), "Chocolate Fountain"));
        this.objectCardsRare.push(new ObjectCard(OBJECTSPRITES["magicflower"].x, OBJECTSPRITES["magicflower"].y,
                                            OBJECTSPRITES["magicflower"].x, OBJECTSPRITES["magicflower"].y, 6, 2, false, undefined,
                                            new ResourceUpkeep(this.gold, -24), "Magic Flower"));
        this.objectCardsRare.push(new ObjectCard(OBJECTSPRITES["buckhunter"].x, OBJECTSPRITES["buckhunter"].y,
                                            OBJECTSPRITES["buckhunter"].x, OBJECTSPRITES["buckhunter"].y, 8, 2, false, "#f2f2d098",
                                            new ResourceUpkeep(this.gold, -30), "Buck Hunter Game Cabinet"));
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
                                              [ new ResourceUpkeep(this.food, -2), new ResourceUpkeep(this.gold, 2) ], "Dwarf Miner",
                                              new CharacterStats(1,3,1))); 
        this.charCardsCommon.push(new CharacterCard(CHARCARDSPRITES["dwarfbaker"].x, CHARCARDSPRITES["dwarfbaker"].y,
                                              CHARCARDSPRITES["dwarfbaker"].x, CHARCARDSPRITES["dwarfbaker"].y, 4, 
                                              [ new ResourceUpkeep(this.food, 2), new ResourceUpkeep(this.beer, -2) ], "Dwarf Baker",
                                              new CharacterStats(1,3,1)));
        this.charCardsCommon.push(new CharacterCard(CHARCARDSPRITES["snake"].x, CHARCARDSPRITES["snake"].y,
                                              CHARCARDSPRITES["snake"].x, CHARCARDSPRITES["snake"].y, 1, 
                                              [ new ResourceUpkeep(this.beer, 1), new ResourceUpkeep(this.food, -1) ], "Snake",
                                              new CharacterStats(1,1,1)));
                                              
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
                                              CHARCARDSPRITES["beholder"].x, CHARCARDSPRITES["beholder"].y, 25, 
                                              [ new ResourceUpkeep(this.food, -19), new ResourceUpkeep(this.gold, 15) ], "Beholder",
                                              new CharacterStats(6,3,3)));
        this.charCardsRare.push(new CharacterCard(CHARCARDSPRITES["orcbehemoth"].x, CHARCARDSPRITES["orcbehemoth"].y,
                                              CHARCARDSPRITES["orcbehemoth"].x, CHARCARDSPRITES["orcbehemoth"].y, 23, 
                                              [ new ResourceUpkeep(this.food, -10), new ResourceUpkeep(this.beer, -8), new ResourceUpkeep(this.gold, 15) ], "Orc Behemoth",
                                              new CharacterStats(1,7,3)));
        this.charCardsRare.push(new CharacterCard(CHARCARDSPRITES["skeletonking"].x, CHARCARDSPRITES["skeletonking"].y,
                                              CHARCARDSPRITES["skeletonking"].x, CHARCARDSPRITES["skeletonking"].y, 22, 
                                              [ new ResourceUpkeep(this.food, 12), new ResourceUpkeep(this.gold, -15) ], "Skeleton King",
                                              new CharacterStats(5,3,5)));
        this.charCardsRare.push(new CharacterCard(CHARCARDSPRITES["drake"].x, CHARCARDSPRITES["drake"].y,
                                              CHARCARDSPRITES["drake"].x, CHARCARDSPRITES["drake"].y, 25, 
                                              [ new ResourceUpkeep(this.food, -5), new ResourceUpkeep(this.beer, 13), new ResourceUpkeep(this.gold, -10) ], "Drake",
                                              new CharacterStats(4,4,4)));
        this.charCardsRare.push(new CharacterCard(CHARCARDSPRITES["dwarfchampion"].x, CHARCARDSPRITES["dwarfchampion"].y,
                                              CHARCARDSPRITES["dwarfchampion"].x, CHARCARDSPRITES["dwarfchampion"].y, 25, 
                                              [ new ResourceUpkeep(this.food, 3), new ResourceUpkeep(this.beer, -17), new ResourceUpkeep(this.gold, 10) ], "Dwarf Champion",
                                              new CharacterStats(2,6,4)));
        this.charCardsRare.push(new CharacterCard(CHARCARDSPRITES["fireelemental"].x, CHARCARDSPRITES["fireelemental"].y,
                                              CHARCARDSPRITES["fireelemental"].x, CHARCARDSPRITES["fireelemental"].y, 25, 
                                              [ new ResourceUpkeep(this.beer, 6), new ResourceUpkeep(this.food, -16), new ResourceUpkeep(this.gold, 7) ], "Fire Elemental",
                                              new CharacterStats(3,4,4)));
        this.charCardsRare.push(new CharacterCard(CHARCARDSPRITES["windelemental"].x, CHARCARDSPRITES["windelemental"].y,
                                              CHARCARDSPRITES["windelemental"].x, CHARCARDSPRITES["windelemental"].y, 25, 
                                              [ new ResourceUpkeep(this.food, 6), new ResourceUpkeep(this.beer, -16), new ResourceUpkeep(this.gold, 7) ], "Wind Elemental",
                                              new CharacterStats(4,4,3)));
                                              
                                              
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
        this.questCardsUncommon.push(new QuestCard(QUESTCARDSPRITES["wrestlebear"].x, QUESTCARDSPRITES["wrestlebear"].y,
                                       QUESTCARDSPRITES["wrestlebear"].x, QUESTCARDSPRITES["wrestlebear"].y,
                                      9, 12, STATTYPE_STR, 2, [new ResourceUpkeep(this.gold, 16)], "Wrestle a Bear")); 
        this.questCardsUncommon.push(new QuestCard(QUESTCARDSPRITES["breakdance"].x, QUESTCARDSPRITES["breakdance"].y,
                                       QUESTCARDSPRITES["breakdance"].x, QUESTCARDSPRITES["breakdance"].y,
                                      9, 12, STATTYPE_DEX, 2, [new ResourceUpkeep(this.gold, 16)], "Win a Break Dance Battle")); 
        this.questCardsUncommon.push(new QuestCard(QUESTCARDSPRITES["sextant"].x, QUESTCARDSPRITES["sextant"].y,
                                       QUESTCARDSPRITES["sextant"].x, QUESTCARDSPRITES["sextant"].y,
                                      9, 12, STATTYPE_INT, 2, [new ResourceUpkeep(this.gold, 16)], "Invent the Sextant")); 
        this.questCardsUncommon.push(new QuestCard(QUESTCARDSPRITES["rubiks"].x, QUESTCARDSPRITES["rubiks"].y,
                                      QUESTCARDSPRITES["rubiks"].x, QUESTCARDSPRITES["rubiks"].y,
                                     6, 8, STATTYPE_INT, 3, [new ResourceUpkeep(this.gold, 14)], "Solve a Rubik's Cube")); 
        this.questCardsUncommon.push(new QuestCard(QUESTCARDSPRITES["aligator"].x, QUESTCARDSPRITES["aligator"].y,
                                     QUESTCARDSPRITES["aligator"].x, QUESTCARDSPRITES["aligator"].y,
                                    6, 8, STATTYPE_DEX, 3, [new ResourceUpkeep(this.gold, 14)], "Perform in an Aligator Show")); 
        this.questCardsUncommon.push(new QuestCard(QUESTCARDSPRITES["goblinhorde"].x, QUESTCARDSPRITES["goblinhorde"].y,
                                    QUESTCARDSPRITES["goblinhorde"].x, QUESTCARDSPRITES["goblinhorde"].y,
                                   6, 8, STATTYPE_STR, 3, [new ResourceUpkeep(this.gold, 14)], "Fight a Horde of Goblins")); 
                                      
        this.questCardsRare.push(new QuestCard(QUESTCARDSPRITES["slaydragon"].x, QUESTCARDSPRITES["slaydragon"].y,
                                       QUESTCARDSPRITES["slaydragon"].x, QUESTCARDSPRITES["slaydragon"].y,
                                      15, 20, STATTYPE_STR, 5, [new ResourceUpkeep(this.gold, 40)], "Slay a Dragon")); 
        this.questCardsRare.push(new QuestCard(QUESTCARDSPRITES["compiler"].x, QUESTCARDSPRITES["compiler"].y,
                                       QUESTCARDSPRITES["compiler"].x, QUESTCARDSPRITES["compiler"].y,
                                      15, 20, STATTYPE_INT, 5, [new ResourceUpkeep(this.gold, 40)], "Write a 486 Assembler Compiler"));
        this.questCardsRare.push(new QuestCard(QUESTCARDSPRITES["needle"].x, QUESTCARDSPRITES["needle"].y,
                                       QUESTCARDSPRITES["needle"].x, QUESTCARDSPRITES["needle"].y,
                                      15, 20, STATTYPE_DEX, 5, [new ResourceUpkeep(this.gold, 40)], "Find the Needle in the Haystack")); 
        this.questCardsRare.push(new QuestCard(QUESTCARDSPRITES["buckhunterquest"].x, QUESTCARDSPRITES["buckhunterquest"].y,
                                      QUESTCARDSPRITES["buckhunterquest"].x, QUESTCARDSPRITES["buckhunterquest"].y,
                                     16, 21, STATTYPE_DEX, 1, [new ResourceUpkeep(this.beer, 16)], "Buck Hunter Cabinet High Score")); 
        this.questCardsRare.push(new QuestCard(QUESTCARDSPRITES["moveturtle"].x, QUESTCARDSPRITES["moveturtle"].y,
                                      QUESTCARDSPRITES["moveturtle"].x, QUESTCARDSPRITES["moveturtle"].y,
                                     16, 21, STATTYPE_STR, 1, [new ResourceUpkeep(this.food, 16)], "Move Giant Turtle out of the Road")); 
        this.questCardsRare.push(new QuestCard(QUESTCARDSPRITES["irontogold"].x, QUESTCARDSPRITES["irontogold"].y,
                                      QUESTCARDSPRITES["irontogold"].x, QUESTCARDSPRITES["irontogold"].y,
                                     16, 21, STATTYPE_INT, 1, [new ResourceUpkeep(this.gold, 16)], "Turn Iron to Gold")); 
    }

    LoadItemCards()
    {
        this.itemCardsCommon.push(new ItemCard(ITEMCARDSPRITES["uglystick"].x, ITEMCARDSPRITES["uglystick"].y,
                                    ITEMCARDSPRITES["uglystick"].x, ITEMCARDSPRITES["uglystick"].y,
                                    new CharacterStats(0,1,0), [new ResourceUpkeep(this.food, 1)],1,"Ugly Stick"));
        this.itemCardsCommon.push(new ItemCard(ITEMCARDSPRITES["thiefdagger"].x, ITEMCARDSPRITES["thiefdagger"].y,
                                    ITEMCARDSPRITES["thiefdagger"].x, ITEMCARDSPRITES["thiefdagger"].y,
                                    new CharacterStats(0,0,1), [new ResourceUpkeep(this.gold, 1)],1,"Thief's Dagger"));
        this.itemCardsCommon.push(new ItemCard(ITEMCARDSPRITES["scroll"].x, ITEMCARDSPRITES["scroll"].y,
                                    ITEMCARDSPRITES["scroll"].x, ITEMCARDSPRITES["scroll"].y,
                                    new CharacterStats(1,0,0), [new ResourceUpkeep(this.beer, 1)],1,"Old Scroll"));
        this.itemCardsCommon.push(new ItemCard(ITEMCARDSPRITES["shortsword"].x, ITEMCARDSPRITES["shortsword"].y,
                                    ITEMCARDSPRITES["shortsword"].x, ITEMCARDSPRITES["shortsword"].y,
                                    new CharacterStats(0,2,0), [new ResourceUpkeep(this.gold, 2)],2,"Short Sword"));
        this.itemCardsCommon.push(new ItemCard(ITEMCARDSPRITES["huntersbow"].x, ITEMCARDSPRITES["huntersbow"].y,
                                    ITEMCARDSPRITES["huntersbow"].x, ITEMCARDSPRITES["huntersbow"].y,
                                    new CharacterStats(0,0,2), [new ResourceUpkeep(this.food, 2)],2,"Hunting Bow"));
        this.itemCardsCommon.push(new ItemCard(ITEMCARDSPRITES["apprenticewand"].x, ITEMCARDSPRITES["apprenticewand"].y,
                                    ITEMCARDSPRITES["apprenticewand"].x, ITEMCARDSPRITES["apprenticewand"].y,
                                    new CharacterStats(2,0,0), [new ResourceUpkeep(this.beer, 2)],2,"Apprentice Wand"));
        this.itemCardsCommon.push(new ItemCard(ITEMCARDSPRITES["shortsword1"].x, ITEMCARDSPRITES["shortsword1"].y,
                                    ITEMCARDSPRITES["shortsword1"].x, ITEMCARDSPRITES["shortsword1"].y,
                                    new CharacterStats(0,3,0), [new ResourceUpkeep(this.gold, 2)],3,"Short Sword +1"));
        this.itemCardsCommon.push(new ItemCard(ITEMCARDSPRITES["huntersbow1"].x, ITEMCARDSPRITES["huntersbow1"].y,
                                    ITEMCARDSPRITES["huntersbow1"].x, ITEMCARDSPRITES["huntersbow1"].y,
                                    new CharacterStats(0,0,3), [new ResourceUpkeep(this.food, 2)],3,"Hunting Bow +1"));
        this.itemCardsCommon.push(new ItemCard(ITEMCARDSPRITES["apprenticewand1"].x, ITEMCARDSPRITES["apprenticewand1"].y,
                                    ITEMCARDSPRITES["apprenticewand1"].x, ITEMCARDSPRITES["apprenticewand1"].y,
                                    new CharacterStats(3,0,0), [new ResourceUpkeep(this.beer, 2)],3,"Apprentice Wand +1"));

        this.itemCardsUncommon.push(new ItemCard(ITEMCARDSPRITES["longsword"].x, ITEMCARDSPRITES["longsword"].y,
                                    ITEMCARDSPRITES["longsword"].x, ITEMCARDSPRITES["longsword"].y,
                                    new CharacterStats(0,3,0), [new ResourceUpkeep(this.food, 3)],4,"Long Sword"));
        this.itemCardsUncommon.push(new ItemCard(ITEMCARDSPRITES["dualdaggers"].x, ITEMCARDSPRITES["dualdaggers"].y,
                                    ITEMCARDSPRITES["dualdaggers"].x, ITEMCARDSPRITES["dualdaggers"].y,
                                    new CharacterStats(0,0,3), [new ResourceUpkeep(this.beer, 3)],4,"Dual Daggers"));
        this.itemCardsUncommon.push(new ItemCard(ITEMCARDSPRITES["spellbook"].x, ITEMCARDSPRITES["spellbook"].y,
                                    ITEMCARDSPRITES["spellbook"].x, ITEMCARDSPRITES["spellbook"].y,
                                    new CharacterStats(3,0,0), [new ResourceUpkeep(this.gold, 3)],4,"Spell Book"));
        this.itemCardsUncommon.push(new ItemCard(ITEMCARDSPRITES["battleaxe"].x, ITEMCARDSPRITES["battleaxe"].y,
                                    ITEMCARDSPRITES["battleaxe"].x, ITEMCARDSPRITES["battleaxe"].y,
                                    new CharacterStats(0,3,0), [new ResourceUpkeep(this.beer, 3)],4,"Battle Axe"));
        this.itemCardsUncommon.push(new ItemCard(ITEMCARDSPRITES["katana"].x, ITEMCARDSPRITES["katana"].y,
                                    ITEMCARDSPRITES["katana"].x, ITEMCARDSPRITES["katana"].y,
                                    new CharacterStats(0,0,3), [new ResourceUpkeep(this.food, 3)],4,"Katana"));
        this.itemCardsUncommon.push(new ItemCard(ITEMCARDSPRITES["scepter"].x, ITEMCARDSPRITES["scepter"].y,
                                    ITEMCARDSPRITES["scepter"].x, ITEMCARDSPRITES["scepter"].y,
                                    new CharacterStats(3,0,0), [new ResourceUpkeep(this.gold, 3)],4,"Scepter"));
        this.itemCardsUncommon.push(new ItemCard(ITEMCARDSPRITES["shield"].x, ITEMCARDSPRITES["shield"].y,
                                    ITEMCARDSPRITES["shield"].x, ITEMCARDSPRITES["shield"].y,
                                    new CharacterStats(0,3,3), [],4,"Centurion's Shield"));
        this.itemCardsUncommon.push(new ItemCard(ITEMCARDSPRITES["visor"].x, ITEMCARDSPRITES["visor"].y,
                                    ITEMCARDSPRITES["visor"].x, ITEMCARDSPRITES["visor"].y,
                                    new CharacterStats(3,0,3), [],4,"Centurion's Visor"));
        this.itemCardsUncommon.push(new ItemCard(ITEMCARDSPRITES["cuirass"].x, ITEMCARDSPRITES["cuirass"].y,
                                    ITEMCARDSPRITES["cuirass"].x, ITEMCARDSPRITES["cuirass"].y,
                                    new CharacterStats(3,3,0), [],4,"Centurion's Cuirass"));

        this.itemCardsUncommon.push(new ItemCard(ITEMCARDSPRITES["justicebringer"].x, ITEMCARDSPRITES["justicebringer"].y,
                                    ITEMCARDSPRITES["justicebringer"].x, ITEMCARDSPRITES["justicebringer"].y,
                                    new CharacterStats(0,6,0), [new ResourceUpkeep(this.food, 6)],8,"Justice Bringer"));
        this.itemCardsUncommon.push(new ItemCard(ITEMCARDSPRITES["trueaim"].x, ITEMCARDSPRITES["trueaim"].y,
                                    ITEMCARDSPRITES["trueaim"].x, ITEMCARDSPRITES["trueaim"].y,
                                    new CharacterStats(0,0,6), [new ResourceUpkeep(this.gold, 6)],8,"True Aim"));
        this.itemCardsUncommon.push(new ItemCard(ITEMCARDSPRITES["monsterbook"].x, ITEMCARDSPRITES["monsterbook"].y,
                                    ITEMCARDSPRITES["monsterbook"].x, ITEMCARDSPRITES["monsterbook"].y,
                                    new CharacterStats(6,0,0), [new ResourceUpkeep(this.gold, 6)],8,"Book of Monsters"));
    }
}