class MfgImage
{
    public static PLAYER1_LEFT:string = "standLeft.png";
    public static PLAYER1_RIGHT:string = "standRight.png";
    public static PLAYER1_WALKLEFT:string = "walkLeft.png";
    public static PLAYER1_WALKRIGHT:string = "walkRight.png";

    private static CONST_LIST:Array<string> = [MfgImage.PLAYER1_LEFT, MfgImage.PLAYER1_RIGHT, MfgImage.PLAYER1_WALKLEFT, MfgImage.PLAYER1_WALKRIGHT];
    private static imglist:Array<string> = new Array<string>();

    private static callback:any = null;
    private static imgCount:number = 0;

    public static getImage(key:string):HTMLImageElement
    {
        return MfgImage.imglist[key];
    }

    public static loadImages(callback:any):void
    {
        MfgImage.callback = callback;



        for (var i = 0; i < MfgImage.CONST_LIST.length; i++)
        {
            MfgImage.imglist[MfgImage.CONST_LIST[i]] = new Image();
            MfgImage.imglist[MfgImage.CONST_LIST[i]].src = "res/image/" + MfgImage.CONST_LIST[i];
            MfgImage.imglist[MfgImage.CONST_LIST[i]].onload = MfgImage.onLoadImage;
        }
    }

    private static onLoadImage():void
    {
        if (++MfgImage.imgCount == MfgImage.CONST_LIST.length) MfgImage.callback();
    }
}