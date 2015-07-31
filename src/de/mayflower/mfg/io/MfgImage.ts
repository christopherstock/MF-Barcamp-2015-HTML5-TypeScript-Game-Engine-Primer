class MfgImage
{
    private static image:HTMLImageElement = null;

    public static getImage():HTMLImageElement
    {
        return MfgImage.image;
    }

    public static loadImage(callback:() => void):void
    {
        var src:string = "res/image/player1.png";

        //try drawing an image
        var img = new Image();
        img.src = src;
        img.onload = function(){
            callback();
        };

        MfgImage.image = img;
    }
}