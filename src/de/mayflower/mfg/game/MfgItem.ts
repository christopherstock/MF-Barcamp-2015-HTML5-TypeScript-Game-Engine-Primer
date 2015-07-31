
    /*****************************************************************************
    *   Represents a collectable item.
    *
    *   @author     C. Heldt
    *   @version    0.0.1
    *****************************************************************************/
    class MfgItem
    {
        /** Location X. */
        private            x               :number             = 0;
        /** Location Y. */
        private            y               :number             = 0;
        /** Points gained by player if collected */
        private            points          :number             = 0;
        /** Flag, which indicates if item is picked up by player */
        private            pickedUp        :boolean            = false;
        /** Current alpha-color-value of item */
        private            alpha           :number             = 1;

        /**
         * @param x
         * @param y
         * @param points
         */
        constructor(x:number, y:number, points:number)
        {
            this.x = x;
            this.y = y;
            this.points = points;
        }

        /**
         * @return {number}
         */
        public getX():number
        {
            return this.x;
        }

        /**
         * @return {number}
         */
        public getY():number
        {
            return this.y;
        }

        /**
         * @return {number}
         */
        public getAlpha():number
        {
            return this.alpha;
        }

        /**
         * @param alpha
         */
        public setAlpha(alpha:number)
        {
            this.alpha = alpha;
        }

        /**
         * @return {MfgItem[]}
         */
        public static generateRandomItems():Array<MfgItem>
        {
            var itemList = new Array<MfgItem>();

            var iBreakCounter = 0;

            while(true) {
                var newX   = LibMath.generateRandomNumber(0, MfgSettings.LEVEL_WIDTH - MfgSettings.ITEM_WIDTH);
                var newY   = LibMath.generateRandomNumber(0, MfgSettings.LEVEL_HEIGHT - MfgSettings.ITEM_HEIGHT);
                var points = LibMath.generateRandomNumber(
                    MfgSettings.MIN_ITEM_POINS,
                    MfgSettings.MAX_ITEM_POINS
                );

                var newItem = new MfgItem(newX, newY, points);

                if (itemList.length == 0) {
                    itemList.push(newItem);
                } else {
                    var newItemOverlaps = false;

                    for(var i:number = 0; i < itemList.length; i++) {
                        newItemOverlaps = newItem.doesItemOverlap(itemList[i]);
                        if ( newItemOverlaps ) break;
                    }
                    
                    if (!newItemOverlaps) {
                        itemList.push(newItem);
                    }
                }

                if (itemList.length == MfgSettings.ITEM_COUNT) {
                    return itemList;
                }

                iBreakCounter ++;

                if (iBreakCounter == 1000) {
                    return itemList;
                }
            }
        }

        /**
         * @param item
         */
        public doesItemOverlap(item:MfgItem):boolean
        {
            return (
                    item.x + MfgSettings.ITEM_WIDTH  >= this.x
                &&  item.y + MfgSettings.ITEM_HEIGHT >= this.y
                &&  item.x                           <= this.x + MfgSettings.ITEM_WIDTH
                &&  item.y                           <= this.y + MfgSettings.ITEM_HEIGHT
            );
/*
            return !(
                   item.getX()                           > this.x + MfgSettings.ITEM_HEIGHT
                || item.getX() + MfgSettings.ITEM_HEIGHT < this.x
                || item.getY()                           > this.y + MfgSettings.ITEM_WIDTH
                || item.getY() + MfgSettings.ITEM_WIDTH  < this.y
            );
*/

        }

        /**
         * Checks of player collides with item
         *
         * @param player
         * @return {boolean}
         */
        public collidesWithPlayer( player:MfgPlayer ):boolean
        {
            return (
                    player.getX() + player.getWidth()  >= this.x
                &&  player.getY() + player.getHeight() >= this.y
                &&  player.getX()                      <= this.x + MfgSettings.ITEM_WIDTH
                &&  player.getY()                      <= this.y + MfgSettings.ITEM_HEIGHT
            );
        }

        /**
         * Changes the alpha-color-value
         */
        public render()
        {
            //check if item is picked
            if ( this.pickedUp )
            {
                this.alpha -= MfgSettings.ITEM_FADE_OUT_DELAY;
                if ( this.alpha < 0 )
                {
                    this.alpha = 0;
                }
            }
            else
            {
                if ( this.collidesWithPlayer( MfgGame.player ) )
                {
                    this.pickedUp = true;

                    MfgSound.playSound( MfgSound.PICK_UP );

                    MfgDebug.log( "Picked up item with point value [" + this.points + "]" );
                    MfgGame.player.increasePoints( this.points );
                    MfgDebug.log( "Player's point account is now [" + MfgGame.player.getPoints() + "]" );
                }
            }
        }

        /**
         * @param ctx
         */
        public static drawAll(ctx:CanvasRenderingContext2D)
        {
            for ( var i:number = 0; i < MfgGame.items.length; ++i )
            {
                if ( MfgGame.items[i].getAlpha() == 0 )
                {
                    continue;
                }

                if ( MfgSettings.DEBUG_DRAW_RECTS_ITEMS )
                {
                    LibDrawing.fillRect(
                        ctx,
                        MfgSettings.COLOR_ITEM,
                        MfgGame.items[i].getX(),
                        MfgGame.items[i].getY(),
                        MfgSettings.ITEM_WIDTH,
                        MfgSettings.ITEM_HEIGHT
                    );
                }
/*
                LibDrawing.drawImage(
                    ctx,
                    MfgImage.getImage( MfgImage.ITEM_MAYFLOWER_STATIC ),
                    MfgGame.items[ i ].getX(),
                    MfgGame.items[ i ].getY(),
                    MfgGame.items[ i ].alpha
                );
*/
                MfgSprite.ITEM_MF_LOGO.draw(
                    ctx,
                    MfgGame.items[ i ].getX(),
                    MfgGame.items[ i ].getY(),
                    MfgGame.items[ i ].alpha
                );

            }
        }
    }
