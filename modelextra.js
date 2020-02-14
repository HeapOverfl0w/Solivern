class ItemCard extends Card
{
    constructor(smCardSpriteX, smCardSpriteY, lgCardSpriteX, lgCardSpriteY, 
        statBuffs, resourceUpkeeps, iLevel, name)
    {
        super(smCardSpriteX, smCardSpriteY, lgCardSpriteX, lgCardSpriteY);
        this.stats = statBuffs;
        this.resourceUpkeeps = resourceUpkeeps;
        this.name = name;
        this.itemLevel = iLevel;
    }

    Clone()
    {
        return new ItemCard(this.smallCardSpriteLocX / TILEWIDTH, this.smallCardSpriteLocY / TILEHEIGHT, 
                            this.largeCardSpriteLocX / LARGECARDWIDTH, this.largeCardSpriteLocY / LARGECARDHEIGHT,
                            this.stats.Clone(), this.resourceUpkeeps, this.itemLevel, this.name);
    }
}