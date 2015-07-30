
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
        *   Inits the game engine.
        *****************************************************************************/
        public static init():void
        {
            //set document's title
            document.title = 'Mayflower Barcamp 2015 - HTML5 TypeScript Game Engine Primer';

            MfgGame.canvas = new MfgCanvas( 600, 250 );


            MfgGame.canvas.getContext().fillStyle = "rgba( 255,   255, 0,   1.0  )";
            MfgGame.canvas.getContext().fillRect( 10, 50, 30, 70 );



        }
    }
