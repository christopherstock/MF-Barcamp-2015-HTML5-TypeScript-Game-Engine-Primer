
    class LibDrawing
    {
        /**
         * Fills a rect on canvas
         *
         * @param ctx
         * @param color
         * @param x
         * @param y
         * @param width
         * @param height
         */
        public static fillRect( ctx:CanvasRenderingContext2D, color:string, x:number, y:number, width:number, height:number ):void
        {
            ctx.fillStyle = color;
            ctx.fillRect( x, y, width, height );
        }
    }
