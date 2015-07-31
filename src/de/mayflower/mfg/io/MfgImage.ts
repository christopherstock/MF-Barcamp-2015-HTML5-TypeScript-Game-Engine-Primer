class MfgImage
{
    public static PLAYER1_LEFT = "standLeft.png";
    public static PLAYER1_RIGHT = "standRight.png";
    public static PLAYER1_WALKLEFT = "walkLeft.png";
    public static PLAYER1_WALKRIGHT = "walkRight.png";

    private static player1:HTMLImageElement = null;

    public static getImage():HTMLImageElement
    {
        return MfgImage.player1;
    }

    public static loadImage(callback:any):void
    {
        var src:string = "res/image/player1.png";

        //try drawing an imageheight
        MfgImage.player1 = new Image();
        MfgImage.player1.src = src;
        MfgImage.player1.onload = function(){
            callback();
        };
    }
}