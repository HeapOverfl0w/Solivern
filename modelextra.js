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

class ImageCheckbox
{
  constructor(x, y, width, height, spritesheetx, spritesheety, spritesheetcheckx, spritesheetchecky)
  {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.spritesheetx = spritesheetx;
    this.spritesheety = spritesheety;
    this.spritesheetcheckx = spritesheetcheckx;
    this.spritesheetchecky = spritesheetchecky;
    this.visible = true;
    this.checked = false;
  }

  SetupLinks(othercheckboxes)
  {
      this.othercheckboxes = othercheckboxes;
  }

  Check()
  {
      if (this.othercheckboxes != undefined)
        this.checked = true;
      else
        this.checked = !this.checked;
      if (this.othercheckboxes != undefined && this.checked)
      {
          for (let i = 0; i < this.othercheckboxes.length; i++)
          {
              if (this.othercheckboxes[i] != this)
                this.othercheckboxes[i].checked = false;
          }
      }
  }

  Draw(ctx)
  {
    if (this.visible)
    {
        if (!this.checked)
            ctx.drawImage(EXTRASSPRITESHEET, this.spritesheetx, this.spritesheety, this.width, this.height, this.x, this.y, this.width, this.height);
        else
            ctx.drawImage(EXTRASSPRITESHEET, this.spritesheetcheckx, this.spritesheetchecky, this.width, this.height, this.x, this.y, this.width, this.height);
    }
  }

  IsInside(pointx, pointy)
  {
    if (!this.visible)
      return false;

    return (this.x <= pointx && (this.x + this.width) >= pointx &&
        this.y <= pointy && (this.y + this.height) >= pointy);
  }

  IsInsideAndCheck(pointx, pointy)
  {
    if (this.IsInside(pointx, pointy))
      this.Check();
  }
}