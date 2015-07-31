
    /*****************************************************************************
    *   Represents the player of the game.
    *
    *   @author     C. Heldt
    *   @version    0.0.1
    *****************************************************************************/
    class MfgPlayer
    {
        /** Location X. */
        private     x               :number             = 0;
        /** Location Y. */
        private     y               :number             = 0;
        /** Player's width. */
        private     width           :number             = 0;
        /** Player's height. */
        private     height          :number             = 0;

        /*****************************************************************************
        *   Creates a player instance.
        *
        *   @param  x       Location X.
        *   @param  y       Location Y.
        *   @param  width   Player width.
        *   @param  height  Player height.
        *****************************************************************************/
        constructor( x:number, y:number, width:number, height:number )
        {
            this.x      = x;
            this.y      = y;
            this.width  = width;
            this.height = height;
        }

        /*****************************************************************************
        *   Returns location X.
        *
        *   @return The player's location X.
        *****************************************************************************/
        public getX():number
        {
            return this.x;
        }

        /*****************************************************************************
        *   Sets location X.
        *
        *   @param  x   The player's new location X.
        *****************************************************************************/
        public setX( x:number )
        {
            this.x = x;
        }

        /*****************************************************************************
        *   Returns location Y.
        *
        *   @return The player's location Y.
        *****************************************************************************/
        public getY():number
        {
            return this.y;
        }

        /*****************************************************************************
        *   Sets location Y.
        *
        *   @param  y   The player's new location Y.
        *****************************************************************************/
        public setY( y:number )
        {
            this.y = y;
        }

        /*****************************************************************************
        *   Returns player's width.
        *
        *   @return The player's width.
        *****************************************************************************/
        public getWidth():number
        {
            return this.width;
        }

        /*****************************************************************************
        *   Sets width.
        *
        *   @param  width   The player's new width.
        *****************************************************************************/
        public setWidth( width:number )
        {
            this.width = width;
        }

        /*****************************************************************************
        *   Returns player's height.
        *
        *   @return The player's height.
        *****************************************************************************/
        public getHeight():number
        {
            return this.height;
        }

        /*****************************************************************************
        *   Sets height.
        *
        *   @param  height      The player's new height.
        *****************************************************************************/
        public setHeight( height:number )
        {
            this.height = height;
        }

        public static draw( ctx:CanvasRenderingContext2D )
        {
            //draw player rect
            if ( MfgSettings.DEBUG_DRAW_RECTS_PLAYER )
            {
                LibDrawing.fillRect(
                    MfgGame.canvas.getContext(),
                    MfgSettings.COLOR_PLAYER,
                    MfgGame.player.getX(),
                    MfgGame.player.getY(),
                    MfgGame.player.getWidth(),
                    MfgGame.player.getHeight()
                );
            }

            //draw player image
            LibDrawing.drawImage
            (
                ctx,
                MfgImage.getImage( MfgImage.PLAYER1_LEFT ),
                MfgGame.player.getX(),
                MfgGame.player.getY(),
                1.0
            );
        }
    }
