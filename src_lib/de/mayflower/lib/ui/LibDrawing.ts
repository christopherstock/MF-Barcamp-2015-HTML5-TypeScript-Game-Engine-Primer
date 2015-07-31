
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
    }
