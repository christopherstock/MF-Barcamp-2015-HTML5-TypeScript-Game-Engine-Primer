
    /*****************************************************************************
    *   Manages the scrolling offset.
    *
    *   @author     Christopher Stock
    *   @version    0.0.8
    *****************************************************************************/
    class MfgCamera
    {
        /** The scrolling offset X. */
        public          static          offsetX         :number                         = 0;

        /** The scrolling offset Y. */
        public          static          offsetY         :number                         = 0;

        /*****************************************************************************
        *   Renders the camera for this tick.
        *****************************************************************************/
        public static update()
        {
            MfgCamera.offsetX = MfgGame.player.getX() + MfgGame.player.getWidth()  / 2 - MfgGame.canvas.getWidth()  / 2;
            MfgCamera.offsetY = MfgGame.player.getY() + MfgGame.player.getHeight() / 2 - MfgGame.canvas.getHeight() / 2;

            if ( MfgCamera.offsetX < 0 ) MfgCamera.offsetX = 0;
            if ( MfgCamera.offsetY < 0 ) MfgCamera.offsetY = 0;
            if ( MfgCamera.offsetX > MfgSettings.LEVEL_WIDTH  - MfgGame.canvas.getWidth()  ) MfgCamera.offsetX = MfgSettings.LEVEL_WIDTH  - MfgGame.canvas.getWidth();
            if ( MfgCamera.offsetY > MfgSettings.LEVEL_HEIGHT - MfgGame.canvas.getHeight() ) MfgCamera.offsetY = MfgSettings.LEVEL_HEIGHT - MfgGame.canvas.getHeight();
        }
    }
