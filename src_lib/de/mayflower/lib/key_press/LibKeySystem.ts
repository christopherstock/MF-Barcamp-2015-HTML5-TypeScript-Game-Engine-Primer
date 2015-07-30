
    class LibKeySystem
    {
        private static              keys:Array<boolean>                 = null;


        public static init()
        {
            LibKeySystem.keys = new Array<boolean>();

            window.onkeydown = function (e)
            {
                LibKeySystem.keys[e.keyCode] = true;
            };

            window.onkeyup = function (e)
            {
                LibKeySystem.keys[e.keyCode] = false;
            };
        }

        public static isKeyPressed(keyCode:number)
        {
            return LibKeySystem.keys[ keyCode ];
        }
    }
