class Drawing
{

    /**
     * Fills a rect on canvas
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {string} color
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     */
    public static fillRect(ctx:CanvasRenderingContext2D, color:string, x:number, y:number, width:number, height:number):void
    {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }

}