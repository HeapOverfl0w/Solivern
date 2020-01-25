var OBJECTSPRITES = {
    "counter" : new Vector2D(0, 0),
    "chair" : new Vector2D(1, 0),
    "candle" : new Vector2D(2, 0)
}

var BUFFCURSESPRITES = {
    "testBuff" : new Vector2D(0, 1),
    "testBuff1" : new Vector2D(1, 1),
    "testBuff2" : new Vector2D(2,1),
    "testCurse" : new Vector2D(0, 2),
    "testCurse1" : new Vector2D(1, 2),
    "testCurse2" : new Vector2D(2, 2)
}

var RSCCARDSPRITES = {
    "chicken" : new Vector2D(0, 3),
    "keg" : new Vector2D(1,3)
}

var CHARCARDSPRITES = {
    "bat" : new Vector2D(0, 4),
    "rat" : new Vector2D(1, 4),
    "goblin" : new Vector2D(2, 4),
    "skeleton" : new Vector2D(3, 4),
    "ghost" : new Vector2D(4,4),
    "wolf" : new Vector2D(5,4),
    "goblinmage" : new Vector2D(6,4)
}

var QUESTCARDSPRITES = {
    "sweep" : new Vector2D(0, 6),
    "cave" : new Vector2D(1,6),
    "book" : new Vector2D(2,6)
}

var RSCTYPECHANCE = 0.5;
var OBJECTTYPECHANCE = RSCTYPECHANCE + 0.3;
var BUFFTYPECHANCE = OBJECTTYPECHANCE + 0.15;
var TYPECHANCEMOD = 0.005;

var NOCHARCHANCE = 0.1;
var ONECHARCHANCE = NOCHARCHANCE + 0.7;
var TWOCHARCHANCE = ONECHARCHANCE + 0.15;

var NOQUESTCHANCE = 0.6;
var ONEQUESTCHANCE = NOQUESTCHANCE + 0.3;

class Database
{
    constructor(resourceCollection)
    {
        this.resourceCollection = resourceCollection;

        //find the resource objects in the resource collection for easy access to load data
        this.gold = this.resourceCollection.GetByName("gold");
        this.beer = this.resourceCollection.GetByName("beer");
        this.food = this.resourceCollection.GetByName("food");
        this.objectCards = [];
        this.buffCards = [];
        this.curseCards = [];
        this.rscCards = [];
        this.charCards = [];
        this.questCards = [];
    }

    GetRandomCharacterCards(turn)
    {
        let cardCount = Math.random();
        if (cardCount < NOCHARCHANCE)
            return [];
        if (cardCount < ONECHARCHANCE)
            return [this.GetRandomCard(this.charCards)];
        if (cardCount < TWOCHARCHANCE)
            return [this.GetRandomCard(this.charCards), 
                this.GetRandomCard(this.charCards)];
        else
            return [this.GetRandomCard(this.charCards), 
                this.GetRandomCard(this.charCards), 
                this.GetRandomCard(this.charCards)];
    }

    GetRandomQuestCards(turn)
    {
        let cardCount = Math.random();
        if (cardCount < NOQUESTCHANCE)
            return [];
        if (cardCount < ONEQUESTCHANCE)
            return [this.GetRandomCard(this.questCards)];
        else
            return [this.GetRandomCard(this.questCards), this.GetRandomCard(this.questCards)];
    }

    GetRandomHandCard(turn)
    {
        //first use a different type chance based on turn:
        let turnModifier = (turn > 100 ? 100 : turn) * TYPECHANCEMOD;
        let rscTypeChance = RSCTYPECHANCE - turnModifier/3;
        let objectTypeChance = OBJECTTYPECHANCE - turnModifier/3;
        let buffTypeChance = BUFFTYPECHANCE - turnModifier/3;
        //decide card type:
        let cardType = Math.random();
        if (cardType < rscTypeChance)
            return this.GetRandomCard(this.rscCards);
        else if (cardType < objectTypeChance)
            return this.GetRandomCard(this.objectCards);
        else if (cardType < buffTypeChance)
            return this.GetRandomCard(this.buffCards);
        else
            return this.GetRandomCard(this.curseCards);
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
        this.LoadObjectCards();
        this.LoadBuffCards();
        this.LoadCurseCards();
        this.LoadResourceCards();
        this.LoadCharacterCards();
        this.LoadQuestCards();
    }

    LoadObjectCards()
    {
        this.objectCards.push(new ObjectCard(OBJECTSPRITES["counter"].x, OBJECTSPRITES["counter"].y,
                                            OBJECTSPRITES["counter"].x, OBJECTSPRITES["counter"].y, 2, 1, false, -1,
                                            new ResourceUpkeep(this.gold, -3)));
        this.objectCards.push(new ObjectCard(OBJECTSPRITES["chair"].x, OBJECTSPRITES["chair"].y,
                                            OBJECTSPRITES["chair"].x, OBJECTSPRITES["chair"].y, 3, 0, true, -1,
                                            new ResourceUpkeep(this.gold, -5)));
        this.objectCards.push(new ObjectCard(OBJECTSPRITES["candle"].x, OBJECTSPRITES["candle"].y,
                                            OBJECTSPRITES["candle"].x, OBJECTSPRITES["candle"].y, 1, 3, false, -1,
                                            new ResourceUpkeep(this.gold, -6)));
    }

    LoadBuffCards()
    {
        this.buffCards.push(new BuffCard(BUFFCURSESPRITES["testBuff"].x, BUFFCURSESPRITES["testBuff"].y,
                                         BUFFCURSESPRITES["testBuff"].x, BUFFCURSESPRITES["testBuff"].y, this.gold, 5));
        this.buffCards.push(new BuffCard(BUFFCURSESPRITES["testBuff1"].x, BUFFCURSESPRITES["testBuff1"].y,
                                         BUFFCURSESPRITES["testBuff1"].x, BUFFCURSESPRITES["testBuff1"].y, this.food, 5));
        this.buffCards.push(new BuffCard(BUFFCURSESPRITES["testBuff2"].x, BUFFCURSESPRITES["testBuff2"].y,
                                         BUFFCURSESPRITES["testBuff2"].x, BUFFCURSESPRITES["testBuff2"].y, this.beer, 5));
    }

    LoadCurseCards()
    {
        this.curseCards.push(new CurseCard(BUFFCURSESPRITES["testCurse"].x, BUFFCURSESPRITES["testCurse"].y,
                                           BUFFCURSESPRITES["testCurse"].x, BUFFCURSESPRITES["testCurse"].y, this.gold, 5));
        this.curseCards.push(new BuffCard(BUFFCURSESPRITES["testCurse1"].x, BUFFCURSESPRITES["testCurse1"].y,
                                           BUFFCURSESPRITES["testCurse1"].x, BUFFCURSESPRITES["testCurse1"].y, this.food, 5));
        this.curseCards.push(new BuffCard(BUFFCURSESPRITES["testCurse2"].x, BUFFCURSESPRITES["testCurse2"].y,
                                           BUFFCURSESPRITES["testCurse2"].x, BUFFCURSESPRITES["testCurse2"].y, this.beer, 5));
    }

    LoadResourceCards()
    {
        this.rscCards.push(new ResourceCard(RSCCARDSPRITES["chicken"].x, RSCCARDSPRITES["chicken"].y,
                                            RSCCARDSPRITES["chicken"].x, RSCCARDSPRITES["chicken"].y, this.food, this.gold, 10, 5));
        this.rscCards.push(new ResourceCard(RSCCARDSPRITES["keg"].x, RSCCARDSPRITES["keg"].y,
                                            RSCCARDSPRITES["keg"].x, RSCCARDSPRITES["keg"].y, this.beer, this.gold, 10, 5));
    }

    LoadCharacterCards()
    {
        this.charCards.push(new CharacterCard(CHARCARDSPRITES["bat"].x, CHARCARDSPRITES["bat"].y,
                                              CHARCARDSPRITES["bat"].x, CHARCARDSPRITES["bat"].y, 3, 
                                              [ new ResourceUpkeep(this.gold, 1), new ResourceUpkeep(this.food, -2) ], "Dire Bat",
                                              new CharacterStats(1,1,1)));
        this.charCards.push(new CharacterCard(CHARCARDSPRITES["rat"].x, CHARCARDSPRITES["rat"].y,
                                              CHARCARDSPRITES["rat"].x, CHARCARDSPRITES["rat"].y, 3, 
                                              [ new ResourceUpkeep(this.gold, -1), new ResourceUpkeep(this.beer, 2) ], "Dire Rat",
                                              new CharacterStats(1,1,1)));
        this.charCards.push(new CharacterCard(CHARCARDSPRITES["goblin"].x, CHARCARDSPRITES["goblin"].y,
                                              CHARCARDSPRITES["goblin"].x, CHARCARDSPRITES["goblin"].y, 1, 
                                              [ new ResourceUpkeep(this.gold, 2), new ResourceUpkeep(this.beer, -3) ], "Goblin",
                                              new CharacterStats(1,2,1))); 
        this.charCards.push(new CharacterCard(CHARCARDSPRITES["skeleton"].x, CHARCARDSPRITES["skeleton"].y,
                                              CHARCARDSPRITES["skeleton"].x, CHARCARDSPRITES["skeleton"].y, 4, 
                                              [ new ResourceUpkeep(this.gold, -2), new ResourceUpkeep(this.beer, 3) ], "Skeleton",
                                              new CharacterStats(1,2,2)));
        this.charCards.push(new CharacterCard(CHARCARDSPRITES["ghost"].x, CHARCARDSPRITES["ghost"].y,
                                              CHARCARDSPRITES["ghost"].x, CHARCARDSPRITES["ghost"].y, 5, 
                                              [ new ResourceUpkeep(this.gold, 3), new ResourceUpkeep(this.beer, -3) ], "Ghost",
                                              new CharacterStats(2,1,3)));
        this.charCards.push(new CharacterCard(CHARCARDSPRITES["wolf"].x, CHARCARDSPRITES["wolf"].y,
                                              CHARCARDSPRITES["wolf"].x, CHARCARDSPRITES["wolf"].y, 5, 
                                              [ new ResourceUpkeep(this.gold, 3), new ResourceUpkeep(this.food, -3) ], "Dire Wolf",
                                              new CharacterStats(1,3,2)));
        this.charCards.push(new CharacterCard(CHARCARDSPRITES["goblinmage"].x, CHARCARDSPRITES["goblinmage"].y,
                                              CHARCARDSPRITES["goblinmage"].x, CHARCARDSPRITES["goblinmage"].y, 5, 
                                              [ new ResourceUpkeep(this.gold, 4), new ResourceUpkeep(this.beer, -4) ], "Goblin Mage",
                                              new CharacterStats(3,1,2)));                                   
    }

    LoadQuestCards()
    {
        this.questCards.push(new QuestCard(QUESTCARDSPRITES["sweep"].x, QUESTCARDSPRITES["sweep"].y,
                                           QUESTCARDSPRITES["sweep"].x, QUESTCARDSPRITES["sweep"].y,
                                           1, 2, STATTYPE_STR, 3, [new ResourceUpkeep(this.gold, 10)]));
        this.questCards.push(new QuestCard(QUESTCARDSPRITES["cave"].x, QUESTCARDSPRITES["cave"].y,
                                           QUESTCARDSPRITES["cave"].x, QUESTCARDSPRITES["cave"].y,
                                           3, 5, STATTYPE_STR, 2, [new ResourceUpkeep(this.gold, 10)]));
        this.questCards.push(new QuestCard(QUESTCARDSPRITES["book"].x, QUESTCARDSPRITES["book"].y,
                                           QUESTCARDSPRITES["book"].x, QUESTCARDSPRITES["book"].y,
                                           3, 5, STATTYPE_INT, 2, [new ResourceUpkeep(this.gold, 10)]));
    }
}