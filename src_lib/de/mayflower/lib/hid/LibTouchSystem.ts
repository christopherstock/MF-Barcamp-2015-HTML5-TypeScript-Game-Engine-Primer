
    /*****************************************************************************
    *   Represents the touch system that provides touch gestures on smartphones.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    class LibTouchSystem
    {
        /** Flags of the touch is pressed. */
        private         static              touchPressed:boolean                    = false;

        private         static              gestureUp:boolean                       = false;
        private         static              gestureDown:boolean                     = false;
        private         static              gestureLeft:boolean                     = false;
        private         static              gestureRight:boolean                    = false;

        private         static              lastX:number                            = -1;
        private         static              lastY:number                            = -1;

        /*****************************************************************************
        *   Inits the touch system.
        *****************************************************************************/
        public static init()
        {
            window.ontouchdown = function( e )
            {
                LibTouchSystem.touchPressed = true;

                LibTouchSystem.gestureUp    = false;
                LibTouchSystem.gestureDown  = false;
                LibTouchSystem.gestureLeft  = false;
                LibTouchSystem.gestureRight = false;
            };

            window.ontouchup = function( e )
            {
                LibTouchSystem.touchPressed = false;

                LibTouchSystem.gestureUp    = false;
                LibTouchSystem.gestureDown  = false;
                LibTouchSystem.gestureLeft  = false;
                LibTouchSystem.gestureRight = false;
            };

            window.ontouchmove = function( e )
            {
                if ( LibTouchSystem.touchPressed )
                {
                    console.log( "onTouchMove [" + e.screenX + "][" + e.screenY + "]" );

                    if ( LibTouchSystem.lastX != -1 )
                    {
                        LibTouchSystem.gestureLeft  = ( e.screenX < LibTouchSystem.lastX );
                        LibTouchSystem.gestureRight = ( e.screenX > LibTouchSystem.lastX );
                    }
                    LibTouchSystem.lastX = e.screenX;

                    if ( LibTouchSystem.lastY != -1 )
                    {
                        LibTouchSystem.gestureUp   = ( e.screenY < LibTouchSystem.lastY );
                        LibTouchSystem.gestureDown = ( e.screenY > LibTouchSystem.lastY );
                    }
                    LibTouchSystem.lastY = e.screenY;
                }
            };
        }

        /*****************************************************************************
        *   Checks if the specified gesture is performed.
        *
        *   @return         <code>true</code> if this gesture is currently performed.
        *                   Otherwise <code>false</code>.
        *****************************************************************************/
        public static activeGestureUp()
        {
            return LibTouchSystem.gestureUp;
        }

        /*****************************************************************************
         *   Checks if the specified gesture is performed.
         *
         *   @return         <code>true</code> if this gesture is currently performed.
         *                   Otherwise <code>false</code>.
         *****************************************************************************/
        public static activeGestureDown()
        {
            return LibTouchSystem.gestureDown;
        }

        /*****************************************************************************
         *   Checks if the specified gesture is performed.
         *
         *   @return         <code>true</code> if this gesture is currently performed.
         *                   Otherwise <code>false</code>.
         *****************************************************************************/
        public static activeGestureLeft()
        {
            return LibTouchSystem.gestureLeft;
        }

        /*****************************************************************************
         *   Checks if the specified gesture is performed.
         *
         *   @return         <code>true</code> if this gesture is currently performed.
         *                   Otherwise <code>false</code>.
         *****************************************************************************/
        public static activeGestureRight()
        {
            return LibTouchSystem.gestureRight;
        }
    }
