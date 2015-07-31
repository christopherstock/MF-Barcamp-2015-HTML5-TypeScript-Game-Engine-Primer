
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
        /** Current point count. */
        private     points          :number             = 0;
        /** Current player sprite. */
        private     sprite          :MfgSprite          = null;

        /** Lookingdirection-Left = 1; LookingdirectionRight = 0 */
        public     lookingdirection:number             = 0;


        /*****************************************************************************
        *   Creates a player instance.
        *
        *   @param  sprite  The initial player sprite.
        *   @param  x       Location X.
        *   @param  y       Location Y.
        *   @param  width   Player width.
        *   @param  height  Player height.
        *****************************************************************************/
        constructor( sprite:MfgSprite, x:number, y:number, width:number, height:number )
        {
            this.sprite = sprite;
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

        public getPoints():number
        {
            return this.points;
        }

        public increasePoints( delta:number )
        {
            this.points += delta;
        }

        public draw( ctx:CanvasRenderingContext2D )
        {
            //draw player rect
            if ( MfgSettings.DEBUG_DRAW_RECTS_PLAYER )
            {
                LibDrawing.fillRect(
                    MfgGame.canvas.getContext(),
                    MfgSettings.COLOR_PLAYER,
                    this.x - MfgCamera.offsetX,
                    this.y - MfgCamera.offsetY,
                    this.width,
                    this.height
                );
            }

            //draw player sprite
            this.sprite.draw
            (
                ctx,
                this.x - MfgCamera.offsetX,
                this.y - MfgCamera.offsetY,
                1.0
            );
        }

        public setNewSprite( sprite:MfgSprite )
        {
            this.sprite = sprite;
            //this.sprite.reset();
        }

    }
