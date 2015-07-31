
    /*****************************************************************************
    *   Represents the image system.
    *
    *   @author     Jeremy Gauchel
    *   @version    0.0.1
    *****************************************************************************/
    class MfgImage
    {
        public  static  PLAYER1_LEFT            :string                 = "res/image/standLeft.png";
        public  static  PLAYER1_RIGHT           :string                 = "res/image/standRight.png";
        public  static  PLAYER1_WALK_LEFT        :string                 = "res/image/walkLeft.png";
        public  static  PLAYER1_WALK_RIGHT       :string                 = "res/image/walkRight.png";

        private static  FILENAMES               :Array<string>          =
        [
            MfgImage.PLAYER1_LEFT,
            MfgImage.PLAYER1_RIGHT,
            MfgImage.PLAYER1_WALK_LEFT,
            MfgImage.PLAYER1_WALK_RIGHT
        ];

        private static  images                  :Array<string>          = new Array<string>();
        private static  callback                :any                    = null;
        private static  imgCount                :number                 = 0;

        public static getImage( key:string ):HTMLImageElement
        {
            return MfgImage.images[ key ];
        }

        public static loadImages( callback:any ):void
        {
            MfgImage.callback = callback;

            for ( var i = 0; i < MfgImage.FILENAMES.length; i++ )
            {
                MfgImage.images[ MfgImage.FILENAMES[ i ] ]        = new Image();
                MfgImage.images[ MfgImage.FILENAMES[ i ] ].src    = MfgImage.FILENAMES[ i ];
                MfgImage.images[ MfgImage.FILENAMES[ i ] ].onload = MfgImage.onLoadImage;
            }
        }

        private static onLoadImage():void
        {
            if ( ++MfgImage.imgCount == MfgImage.FILENAMES.length )
            {
                MfgImage.callback();
            }
        }
    }
