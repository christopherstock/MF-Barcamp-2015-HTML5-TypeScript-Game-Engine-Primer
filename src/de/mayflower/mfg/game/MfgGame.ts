
    /*****************************************************************************
    *   Handles the main game logic.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    class MfgGame
    {
        /*****************************************************************************
        *   The canvas context.
        *****************************************************************************/
        public      static      canvas              :MfgCanvas                  = null;

        /*****************************************************************************
         *   The canvas context.
         *****************************************************************************/
        public      static      player              :MfgPlayer                  = null;



        /*****************************************************************************
        *   Inits the game engine.
        *****************************************************************************/
        public static init():void
        {
            //set document's title
            document.title = 'Mayflower Barcamp 2015 - HTML5 TypeScript Game Engine Primer';

            MfgGame.canvas = new MfgCanvas( MfgSettings.CANVAS_WIDTH, MfgSettings.CANVAS_HEIGHT );

            MfgGame.player = new MfgPlayer( 40, 80, 60, 150 );

            document.body.appendChild( MfgGame.canvas.getCanvasTag() );

            LibDrawing.fillRect(
                MfgGame.canvas.getContext(),
                MfgSettings.COLOR_PLAYER,
                MfgGame.player.getX(),
                MfgGame.player.getY(),
                MfgGame.player.getWidth(),
                MfgGame.player.getHeight()
            );


            setInterval(MfgGame.tick,MfgSettings.GAME_SPEED);




        }

        private static tickCounter:number=0;

        /*****************************************************************************
        *   Inits the game engine.
        *****************************************************************************/
        public static tick():void
        {
            this.tickCounter++;
            console.log("test: "+this.tickCounter);
            MfgGame.render();
            MfgGame.draw();

        }

        /*****************************************************************************
        *   Specifies all rendering operations.
        *****************************************************************************/
        public static render():void
        {


        }

        /*****************************************************************************
        *   Specifies all drawing operations.
        *****************************************************************************/
        public static draw():void
        {


        }
    }
