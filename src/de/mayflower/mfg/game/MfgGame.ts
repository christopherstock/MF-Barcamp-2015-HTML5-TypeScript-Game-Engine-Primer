
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
            console.log();
            var locationSite=window.location.pathname.replace("index.html","");


            var imageZelda=new Image();
            imageZelda.src=locationSite+"res/image/player1.png";
            imageZelda.onload=function(){
                MfgGame.canvas.getContext().drawImage(imageZelda,0,0);
            };


            var handlers = [
                new ConsoleKeyLogger()
            ];

            InitKeyPress.init(handlers);
            
            var testCounter:number=0;
            setInterval(function(){
                testCounter++;
                console.log("test: "+testCounter);

            },1000);



        }
    }
