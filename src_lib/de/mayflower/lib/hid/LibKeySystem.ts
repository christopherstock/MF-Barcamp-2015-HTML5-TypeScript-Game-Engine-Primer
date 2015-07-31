
    /*****************************************************************************
    *   Represents the key system that provides independent multiple key presses.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    class LibKeySystem
    {
        /** Stores all pressed keys. */
        private         static              keys:Array<boolean>                 = null;

        /*****************************************************************************
        *   Inits the key system.
        *****************************************************************************/
        public static init()
        {
            LibKeySystem.keys = new Array<boolean>();

            window.onkeydown = function( e )
            {
                LibKeySystem.keys[ e.keyCode ] = true;
            };

            window.onkeyup = function( e )
            {
                LibKeySystem.keys[ e.keyCode ] = false;
            };
        }

        /*****************************************************************************
        *   Checks if the specified key is pressed.
        *
        *   @param  keyCode The keycode of the key to check the pressed state for.
        *   @return         <code>true</code> if this key is currently pressed.
        *                   Otherwise <code>false</code>.
        *****************************************************************************/
        public static isKeyPressed( keyCode:number )
        {
            return LibKeySystem.keys[ keyCode ];
        }
    }
