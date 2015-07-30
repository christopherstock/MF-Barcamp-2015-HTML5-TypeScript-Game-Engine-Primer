
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
         *   The player object.
         *****************************************************************************/
        public      static      player              :MfgPlayer                  = null;

        private     static      tickCounter         :number                     = 0;

        /*****************************************************************************
        *   Inits the game engine.
        *****************************************************************************/
        public static init():void
        {
            //set document's title
            document.title = MfgSettings.WEBPAGE_TITLE;

            //create and add canvas context
            MfgGame.canvas = new MfgCanvas( MfgSettings.CANVAS_WIDTH, MfgSettings.CANVAS_HEIGHT );
            document.body.appendChild( MfgGame.canvas.getCanvasTag() );
            
            //create player instance
            MfgGame.player = new MfgPlayer( 40, 80, 60, 150 );
            
            //try drawing a rectangle
            LibDrawing.fillRect(
                MfgGame.canvas.getContext(),
                MfgSettings.COLOR_PLAYER,
                MfgGame.player.getX(),
                MfgGame.player.getY(),
                MfgGame.player.getWidth(),
                MfgGame.player.getHeight()
            );

            //try drawing an image
            var imageZelda=new Image();
            imageZelda.src = "res/image/player1.png";
            imageZelda.onload=function(){
                MfgGame.canvas.getContext().drawImage(imageZelda,0,0);
            };

            //init key system
            LibKeys.init( [ new ConsoleKeyLogger() ] );

            //start game loop
            setInterval( MfgGame.tick, MfgSettings.THREAD_DELAY );
        }

        /*****************************************************************************
        *   Inits the game engine.
        *****************************************************************************/
        public static tick():void
        {
            MfgGame.tickCounter++;
            console.log( "test: " + MfgGame.tickCounter );
            MfgGame.render();
            MfgGame.draw( MfgGame.canvas.getContext() );
        }

        /*****************************************************************************
        *   Specifies all rendering operations.
        *****************************************************************************/
        public static render():void
        {
            MfgGame.player.setX( MfgGame.player.getX() + 2 );
            MfgGame.player.setY( MfgGame.player.getY() + 1 );
        }

        /*****************************************************************************
        *   Specifies all drawing operations.
        *****************************************************************************/
        public static draw( ctx:CanvasRenderingContext2D ):void
        {
            LibDrawing.fillRect(
                ctx,
                MfgSettings.COLOR_BG,
                0,
                0,
                MfgGame.canvas.getWidth(),
                MfgGame.canvas.getHeight()
            );

            LibDrawing.fillRect(
                MfgGame.canvas.getContext(),
                MfgSettings.COLOR_PLAYER,
                MfgGame.player.getX(),
                MfgGame.player.getY(),
                MfgGame.player.getWidth(),
                MfgGame.player.getHeight()
            );
        }
    }
