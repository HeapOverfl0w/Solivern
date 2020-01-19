var OBJECTSPRITES = {
    "test" : new Vector2D(0,0)
}

var BUFFCURSESPRITES = {
    "testBuff" : new Vector2D(0, 1),
    "testCurse" : new Vector2D(0, 2)
}

var RSCCARDSPRITES = {
    "testRsc" : new Vector2D(0, 3)
}

var RSCTYPECHANCE = 0.5;
var OBJECTTYPECHANCE = RSCTYPECHANCE + 0.3;
var BUFFTYPECHANCE = OBJECTTYPECHANCE + 0.15;
var TYPECHANCEMOD = 0.002;

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
    }

    GetRandomHandCard(turn)
    {
        //first use a different type chance based on turn:
        let turnModifier = (turn > 200 ? 200 : turn) * TYPECHANCEMOD;
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
        return cardArray[i];
    }

    LoadAllData()
    {
        this.LoadObjectCards();
        this.LoadBuffCards();
        this.LoadCurseCards();
        this.LoadResourceCards();
    }

    LoadObjectCards()
    {
        this.objectCards.push(new ObjectCard(OBJECTSPRITES["test"].x, OBJECTSPRITES["test"].y,
                                            OBJECTSPRITES["test"].x, OBJECTSPRITES["test"].y, 1, 5, true, -1,
                                            new ResourceUpkeep(this.gold, 0)));
    }

    LoadBuffCards()
    {
        this.buffCards.push(new BuffCard(BUFFCURSESPRITES["testBuff"].x, BUFFCURSESPRITES["testBuff"].y,
                                             BUFFCURSESPRITES["testBuff"].x, BUFFCURSESPRITES["testBuff"].y, this.gold, 5));
    }

    LoadCurseCards()
    {
        this.curseCards.push(new CurseCard(BUFFCURSESPRITES["testCurse"].x, BUFFCURSESPRITES["testCurse"].y,
                                           BUFFCURSESPRITES["testCurse"].x, BUFFCURSESPRITES["testCurse"].y, this.gold, 5));
    }

    LoadResourceCards()
    {
        this.rscCards.push(new ResourceCard(RSCCARDSPRITES["testRsc"].x, RSCCARDSPRITES["testRsc"].y,
                                            RSCCARDSPRITES["testRsc"].x, RSCCARDSPRITES["testRsc"].y, this.beer, this.gold, 10, 5));
    }
}