class Menu
{
    constructor(ctx, playButtonCallback)
    {
        this.twentyFiveTurnCheckbox = new ImageCheckbox(10, 10, 8, 8, 0, 64, 16, 64);
        this.fiftyTurnCheckbox = new ImageCheckbox(10, 25, 8, 8, 0, 64, 16, 64);
        this.hundredTurnCheckbox = new ImageCheckbox(10, 40, 8, 8, 0, 64, 16, 64);
        this.hundredFiftyTurnCheckbox = new ImageCheckbox(10, 55, 8, 8, 0, 64, 16, 64);
        this.tillLossCheckbox = new ImageCheckbox(10, 70, 8, 8, 0, 64, 16, 64);
        let allCheckboxes = [this.twentyFiveTurnCheckbox, this.fiftyTurnCheckbox, this.hundredTurnCheckbox, this.hundredFiftyTurnCheckbox, this.tillLossCheckbox];
        this.twentyFiveTurnCheckbox.checked = true;
        this.twentyFiveTurnCheckbox.SetupLinks(allCheckboxes);
        this.fiftyTurnCheckbox.SetupLinks(allCheckboxes);
        this.hundredTurnCheckbox.SetupLinks(allCheckboxes);
        this.hundredFiftyTurnCheckbox.SetupLinks(allCheckboxes);
        this.tillLossCheckbox.SetupLinks(allCheckboxes);

        let goldResource = new Resource(0,0,"Gold");
        let beerResource = new Resource(RESOURCEWIDTH, 0, "Beer");
        let foodResource = new Resource(RESOURCEWIDTH * 2, 0, "Food");
        let resourceCollection = new ResourceCollection([goldResource, beerResource, foodResource]);
        this.db = new Database(resourceCollection);
        this.db.LoadAllData();

        this.checkboxText = ["25 Turn Game", "50 Turn Game", "100 Turn Game", "150 Turn Game", "Unlimited Game"];

        this.selection = 0;

        this.playButtonCallback = playButtonCallback;

        this.playButton = new ImageButton(10, 85, 45, 16, 0, 80);
        this.ctx = ctx;
        this.ctx.font = TEXTFONT;
        this.ctx.imageSmoothingEnabled = false;
    }

    Initialize()
    {
        this.backdropItems = [];
        this.backdropActors = [];

        let backdropItemCount = Math.round(Math.random() * 20) + 10;
        let backdropActorsCount = Math.round(Math.random() * 15) + 8;
        let turn = Math.round(Math.random() * 149) + 1
        for (let i = 0; i < backdropItemCount; i++)
        {
            this.backdropItems.push(this.db.GetRandomCard(this.db.ChooseRarityGroup(turn, CARDTYPE_OBJECT)));
            this.backdropItems[i].locX = Math.round(Math.random() * (TILESX - BOARDBORDER * 2 - 1)) + BOARDBORDER;
            this.backdropItems[i].locY = Math.round(Math.random() * (TILESY - BOARDBORDER * 2 - 1)) + BOARDBORDER;
        }
        for (let i = 0; i < backdropActorsCount; i++)
        {
            this.backdropActors.push(this.db.GetRandomCard(this.db.ChooseRarityGroup(turn, CARDTYPE_CHARACTER)));
            this.backdropActors[i].locX = Math.round(Math.random() * (TILESX - BOARDBORDER * 2 - 1)) + BOARDBORDER ;
            this.backdropActors[i].locY = Math.round(Math.random() * (TILESY - BOARDBORDER * 2 - 1)) + BOARDBORDER;
        }

        this.Draw(this.ctx);
    }

    HandleMouseClick(pointx, pointy)
    {
        this.fiftyTurnCheckbox.IsInsideAndCheck(pointx, pointy);
        this.hundredTurnCheckbox.IsInsideAndCheck(pointx, pointy);
        this.hundredFiftyTurnCheckbox.IsInsideAndCheck(pointx, pointy);
        this.tillLossCheckbox.IsInsideAndCheck(pointx, pointy);

        if (this.playButton.IsInside(pointx, pointy))
        {
            if (this.twentyFiveTurnCheckbox.checked)
                this.selection = 25;
            else if (this.fiftyTurnCheckbox.checked)
                this.selection = 50;
            else if (this.hundredTurnCheckbox.checked)
                this.selection = 100;
            else if (this.hundredFiftyTurnCheckbox.checked)
                this.selection = 150;
            else if (this.tillLossCheckbox.checked)
                this.selection = 999999;

            this.playButtonCallback();
        }

        this.Draw(this.ctx);
    }

    Reset()
    {
        this.selection = 0;
        this.Initialize();
    }

    Draw(ctx)
    {
        if (this.selection == 0)
        {
            //Draw background
            ctx.drawImage(BACKGROUNDIMAGE, 0, 0, TILESX * TILEWIDTH, TILESY * TILEHEIGHT, 
                0, 0, TILESX * TILEWIDTH, TILESY * TILEHEIGHT);

            //Draw random backdrop items
            for (let i = 0; i < this.backdropItems.length; i++)
            {
                this.backdropItems[i].DrawSmallCard(this.backdropItems[i].locX * TILEWIDTH, this.backdropItems[i].locY * TILEHEIGHT, this.ctx);
            }
            for (let i = 0; i < this.backdropActors.length; i++)
            {
                this.backdropActors[i].DrawSmallCard(this.backdropActors[i].locX * TILEWIDTH, this.backdropActors[i].locY * TILEHEIGHT, this.ctx);
            }
            //Draw Solivern name
            ctx.drawImage(EXTRASSPRITESHEET, 64, 64, 160, 33, TILESX * TILEWIDTH - 180, 15, 160, 33);
            //Draw buttons
            this.twentyFiveTurnCheckbox.Draw(ctx);
            this.fiftyTurnCheckbox.Draw(ctx);
            this.hundredTurnCheckbox.Draw(ctx);
            this.hundredFiftyTurnCheckbox.Draw(ctx);
            this.tillLossCheckbox.Draw(ctx);
            this.playButton.Draw(ctx);

            for (let i = 0; i < this.checkboxText.length; i++)
            {
                this.ctx.fillStyle = BUTTONCOLOR;
                this.ctx.fillRect(28, i * 15 + 10, this.checkboxText[i].length * 5, 12);
                this.ctx.fillStyle = TEXTCOLOR;
                this.ctx.fillText(this.checkboxText[i], 28, i * 15 + 20);
            }
        }
    }


}