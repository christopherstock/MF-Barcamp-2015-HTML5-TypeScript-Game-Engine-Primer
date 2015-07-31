
    /*****************************************************************************
    *   Specifies all independent drawing operations.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    class LibDrawing
    {
        /*****************************************************************************
        *   Fills a rect on the given canvas context.
        *
        *   @param  ctx     The canvas drawing context.
        *   @param  color   The color to fill the rect with.
        *   @param  x       The rect's X.
        *   @param  y       The rect's Y.
        *   @param  width   The rect's width.
        *   @param  height  The rect's height.
        *****************************************************************************/
        public static fillRect( ctx:CanvasRenderingContext2D, color:string, x:number, y:number, width:number, height:number ):void
        {
            ctx.fillStyle = color;
            ctx.fillRect( x, y, width, height );
        }

        /*****************************************************************************
        *   Draws an image on the given canvas context.
        *
        *   @param  ctx     The canvas drawing context.
        *   @param  img     The image to draw.
        *   @param  x       The rect's X.
        *   @param  y       The rect's Y.
        *   @param  alpha   The alpha value to draw this image with.
        *****************************************************************************/
        public static drawImage( ctx:CanvasRenderingContext2D, img:HTMLImageElement, x:number, y:number, alpha:number ):void
        {
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.drawImage(img, x, y);
            ctx.restore();
        }

        /*****************************************************************************
        *   Draws an image at the specified location with a specified anchor
        *   and scales it to the given destiny dimensions.
        *
        *   @param  ctx         The rendering context
        *   @param  img         The image to draw.
        *   @param  destX       Drawing position x.
        *   @param  destY       Drawing position y.
        *   @param  srcX        Clipping position x.
        *   @param  srcY        Clipping position y.
        *   @param  srcWidth    Clipping width.
        *   @param  srcHeight   Clipping height.
        *   @param  destWidth   Destination width.
        *   @param  destHeight  Destination height.
        *   @param  alpha       The desired alpha value to draw the image.
        *                       This value has a range of 0.0 to 1.0.
        *****************************************************************************/
        public static drawImageScaledClipped
        (
            ctx         :CanvasRenderingContext2D,
            img         :HTMLImageElement,
            destX       :number,
            destY       :number,
            srcX        :number,
            srcY        :number,
            srcWidth    :number,
            srcHeight   :number,
            destWidth   :number,
            destHeight  :number,
            alpha       :number
        )
        {
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.drawImage( img, srcX, srcY, srcWidth, srcHeight, destX, destY, destWidth, destHeight );
            ctx.restore();
        }
    }
