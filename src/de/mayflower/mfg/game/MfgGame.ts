
    /*****************************************************************************
    *   Handles the main game logic.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    class MfgGame
    {
        /** The canvas context. */
        public      static      canvas              :MfgCanvas                  = null;

        /** The player object. */
        public      static      player              :MfgPlayer                  = null;

        /** List of collectable items */
        public      static      items               :Array<MfgItem>             = null;

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
            MfgGame.player = new MfgPlayer( MfgSettings.PLAYER_START_X, MfgSettings.PLAYER_START_Y , 60, 150 );

            //load all images
            MfgImage.loadImage(MfgGame.initRest);
        }

        /*****************************************************************************
        *   Inits all game components after all images have been invoked.
        *****************************************************************************/
        private static initRest():void
        {
            //create player instance
            MfgGame.player = new MfgPlayer( MfgSettings.PLAYER_START_X, MfgSettings.PLAYER_START_Y , MfgImage.getImage().width, MfgImage.getImage().height);

            //create all items
            MfgGame.items  = MfgItem.generateRandomItems();

            //init key system
            LibKeySystem.init();

            //start game loop
            setInterval( MfgGame.tick, MfgSettings.THREAD_DELAY );
        }

        /*****************************************************************************
        *   Being invoked each tick, this method specifies the 'game loop'.
        *****************************************************************************/
        public static tick():void
        {
            MfgGame.render();
            MfgGame.draw( MfgGame.canvas.getContext() );
        }

        /*****************************************************************************
        *   Specifies all rendering operations being invoked each tick.
        *****************************************************************************/
        public static render():void
        {
            //move player
            if ( LibKeySystem.isKeyPressed( MfgSettings.KEY_RIGHT ) ) MfgGame.player.setX( MfgGame.player.getX() + MfgSettings.PLAYER_SPEED );
            if ( LibKeySystem.isKeyPressed( MfgSettings.KEY_LEFT  ) ) MfgGame.player.setX( MfgGame.player.getX() - MfgSettings.PLAYER_SPEED );
            if ( LibKeySystem.isKeyPressed( MfgSettings.KEY_UP    ) ) MfgGame.player.setY( MfgGame.player.getY() - MfgSettings.PLAYER_SPEED );
            if ( LibKeySystem.isKeyPressed( MfgSettings.KEY_DOWN  ) ) MfgGame.player.setY( MfgGame.player.getY() + MfgSettings.PLAYER_SPEED );

            //clip level bounds
            if ( MfgGame.player.getX() >= MfgSettings.LEVEL_WIDTH  - MfgGame.player.getWidth()  ) MfgGame.player.setX( MfgSettings.LEVEL_WIDTH  - MfgGame.player.getWidth()  );
            if ( MfgGame.player.getY() >= MfgSettings.LEVEL_HEIGHT - MfgGame.player.getHeight() ) MfgGame.player.setY( MfgSettings.LEVEL_HEIGHT - MfgGame.player.getHeight() );
            if ( MfgGame.player.getX() < 0 ) MfgGame.player.setX( 0 );
            if ( MfgGame.player.getY() < 0 ) MfgGame.player.setY( 0 );
        }

        /*****************************************************************************
        *   Specifies all drawing operations being invoked each tick.
        *****************************************************************************/
        public static draw( ctx:CanvasRenderingContext2D ):void
        {
            //clear the canvas
            LibDrawing.fillRect(
                ctx,
                MfgSettings.COLOR_BG_CANVAS,
                0,
                0,
                MfgGame.canvas.getWidth(),
                MfgGame.canvas.getHeight()
            );

            //draw the level
            LibDrawing.fillRect( ctx, MfgSettings.COLOR_BG_LEVEL,     0, 0, MfgSettings.LEVEL_WIDTH, MfgSettings.LEVEL_HEIGHT      );
            LibDrawing.fillRect( ctx, MfgSettings.COLOR_BORDER_LEVEL, 0, 0, MfgSettings.LEVEL_WIDTH, MfgSettings.LEVEL_BORDER_SIZE );
            LibDrawing.fillRect( ctx, MfgSettings.COLOR_BORDER_LEVEL, 0, MfgSettings.LEVEL_HEIGHT - MfgSettings.LEVEL_BORDER_SIZE, MfgSettings.LEVEL_WIDTH, MfgSettings.LEVEL_BORDER_SIZE );
            LibDrawing.fillRect( ctx, MfgSettings.COLOR_BORDER_LEVEL, 0, 0, MfgSettings.LEVEL_BORDER_SIZE, MfgSettings.LEVEL_HEIGHT );
            LibDrawing.fillRect( ctx, MfgSettings.COLOR_BORDER_LEVEL, MfgSettings.LEVEL_WIDTH - MfgSettings.LEVEL_BORDER_SIZE, 0, MfgSettings.LEVEL_BORDER_SIZE, MfgSettings.LEVEL_HEIGHT );

            //draw the player
            LibDrawing.fillRect(
                MfgGame.canvas.getContext(),
                MfgSettings.COLOR_PLAYER,
                MfgGame.player.getX(),
                MfgGame.player.getY(),
                MfgGame.player.getWidth(),
                MfgGame.player.getHeight()
            );

            // draw image
            LibDrawing.drawImage(ctx, MfgImage.getImage(), MfgGame.player.getX(), MfgGame.player.getY());
        }
    }
