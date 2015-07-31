
    /*****************************************************************************
    *   Represents the game level.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    class MfgLevel
    {
        /*****************************************************************************
        *   Draws the level.
        *****************************************************************************/
        public static draw( ctx:CanvasRenderingContext2D )
        {
/*
            LibDrawing.fillRect( ctx, MfgSettings.COLOR_BG_LEVEL,     0, 0, MfgSettings.LEVEL_WIDTH, MfgSettings.LEVEL_HEIGHT      );
            LibDrawing.fillRect( ctx, MfgSettings.COLOR_BORDER_LEVEL, 0, 0, MfgSettings.LEVEL_WIDTH, MfgSettings.LEVEL_BORDER_SIZE );
            LibDrawing.fillRect( ctx, MfgSettings.COLOR_BORDER_LEVEL, 0, MfgSettings.LEVEL_HEIGHT - MfgSettings.LEVEL_BORDER_SIZE, MfgSettings.LEVEL_WIDTH, MfgSettings.LEVEL_BORDER_SIZE );
            LibDrawing.fillRect( ctx, MfgSettings.COLOR_BORDER_LEVEL, 0, 0, MfgSettings.LEVEL_BORDER_SIZE, MfgSettings.LEVEL_HEIGHT );
            LibDrawing.fillRect( ctx, MfgSettings.COLOR_BORDER_LEVEL, MfgSettings.LEVEL_WIDTH - MfgSettings.LEVEL_BORDER_SIZE, 0, MfgSettings.LEVEL_BORDER_SIZE, MfgSettings.LEVEL_HEIGHT );
*/
            LibDrawing.drawImage
            (
                ctx,
                MfgImage.getImage( MfgImage.LEVEL_BG_ZAUBERWALD ),
                -MfgCamera.offsetX,
                -MfgCamera.offsetY,
                1.0
            );
        }
    }
