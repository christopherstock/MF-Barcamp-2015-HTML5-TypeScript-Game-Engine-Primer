/*****************************************************************************
 *   Represents one player.
 *
 *   @author     C. Heldt
 *   @version    0.0.1
 *****************************************************************************/
class MfgPlayer
{
    private x           :number         = 0;
    private y           :number         = 0;
    private width       :number         = 0;
    private height      :number         = 0;

    /**
     *
     * @param x
     * @param y
     * @param width
     * @param height
     */
    constructor(x:number, y:number, width:number, height:number)
    {
        this.x      = x;
        this.y      = y;
        this.width  = width;
        this.height = height;
    }

    /**
     * @return {number}
     */
    public getX():number
    {
        return this.x;
    }

    /**
     * @param x
     */
    public setX(x:number)
    {
        this.x = x;
    }

    /**
     * @return {number}
     */
    public getY():number
    {
        return this.y;
    }

    /**
     * @param y
     */
    public setY(y:number)
    {
        this.y = y;
    }

    /**
     * @return {number}
     */
    public getWidth():number
    {
        return this.width;
    }

    /**
     * @param width
     */
    public setWidth(width:number)
    {
        this.width = width;
    }

    /**
     * @return {number}
     */
    public getHeight():number
    {
        return this.height;
    }

    /**
     * @param height
     */
    public setHeight(height:number)
    {
        this.height = height;
    }
}
