
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
            
            //load all sounds
            MfgSound.loadSounds();

            //load all images
            MfgImage.loadImages(MfgGame.initRest);
        }

        /*****************************************************************************
        *   Inits all game components after all images have been invoked.
        *****************************************************************************/
        private static initRest():void
        {
            //create all sprites
            MfgSprite.init();

            //create player instance
            MfgGame.player = new MfgPlayer
            (
                MfgSprite.PLAYER_STAND_RIGHT,
                MfgSettings.PLAYER_START_X,
                MfgSettings.PLAYER_START_Y,
                MfgSprite.PLAYER_WALK_LEFT.iFrameWidth,
                MfgSprite.PLAYER_WALK_LEFT.iFrameHeight
            );

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
            //render all sprites
            MfgSprite.ITEM_MF_LOGO.nextTick();
            MfgSprite.PLAYER_WALK_LEFT.nextTick();
            MfgSprite.PLAYER_WALK_RIGHT.nextTick();


            if ( LibKeySystem.isKeyPressed( MfgSettings.KEY_RIGHT ) )
            {
                MfgGame.player.setNewSprite(MfgSprite.PLAYER_WALK_RIGHT);
                MfgGame.player.setX( MfgGame.player.getX() + MfgSettings.PLAYER_SPEED );
                MfgGame.player.lookingdirection = 0; // Right
            }
            if ( LibKeySystem.isKeyPressed( MfgSettings.KEY_LEFT  ) )
            {
                MfgGame.player.setNewSprite(MfgSprite.PLAYER_WALK_LEFT);
                MfgGame.player.setX( MfgGame.player.getX() - MfgSettings.PLAYER_SPEED );
                MfgGame.player.lookingdirection = 1; // Left
            }
            if ( LibKeySystem.isKeyPressed( MfgSettings.KEY_UP    ) ) MfgGame.player.setY( MfgGame.player.getY() - MfgSettings.PLAYER_SPEED );
            if ( LibKeySystem.isKeyPressed( MfgSettings.KEY_DOWN  ) ) MfgGame.player.setY( MfgGame.player.getY() + MfgSettings.PLAYER_SPEED );

            if (!LibKeySystem.isKeyPressed( MfgSettings.KEY_LEFT  ) && !LibKeySystem.isKeyPressed( MfgSettings.KEY_RIGHT  ))
            {
                if (MfgGame.player.lookingdirection == 0) MfgGame.player.setNewSprite(MfgSprite.PLAYER_STAND_RIGHT); // Looks right
                if (MfgGame.player.lookingdirection == 1) MfgGame.player.setNewSprite(MfgSprite.PLAYER_STAND_LEFT); // Looks right
            }



            //clip level bounds
            if ( MfgGame.player.getX() >= MfgSettings.LEVEL_WIDTH  - MfgGame.player.getWidth()  ) MfgGame.player.setX( MfgSettings.LEVEL_WIDTH  - MfgGame.player.getWidth()  );
            if ( MfgGame.player.getY() >= MfgSettings.LEVEL_HEIGHT - MfgGame.player.getHeight() ) MfgGame.player.setY( MfgSettings.LEVEL_HEIGHT - MfgGame.player.getHeight() );
            if ( MfgGame.player.getX() < 0 ) MfgGame.player.setX( 0 );
            if ( MfgGame.player.getY() < 0 ) MfgGame.player.setY( 0 );

            //render items
            for ( var i:number = 0; i < MfgGame.items.length; i++ )
            {
                MfgGame.items[ i ].render();
            }
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
            MfgLevel.draw( ctx );

            //draw all items
            MfgItem.drawAll( ctx );

            //draw player
            MfgGame.player.draw( ctx );
        }
    }
