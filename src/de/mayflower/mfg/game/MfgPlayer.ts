/*****************************************************************************
 *   Handles the main game logic.
 *
 *   @author     C. Heldt
 *   @version    0.0.1
 *****************************************************************************/
class MfgPlayer
{
    private xCoordinate : number;
    private yCoordinate : number;
    private width :       number;
    private height :      number;

    /**
     *
     * @param xCoordinate
     * @param yCoordinate
     * @param width
     * @param height
     */
    constructor(xCoordinate:number, yCoordinate:number, width:number, height:number)
    {
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.width       = width;
        this.height      = height;
    }

    /**
     * @return {number}
     */
    getXCoordinate():number
    {
        return this.xCoordinate;
    }

    /**
     * @param xCoordinate
     */
    setXCoordinate(xCoordinate:number)
    {
        this.xCoordinate = xCoordinate;
    }

    /**
     * @return {number}
     */
    getYCoordinate():number
    {
        return this.yCoordinate;
    }

    /**
     * @param yCoordinate
     */
    setYCoordinate(yCoordinate:number)
    {
        this.yCoordinate = yCoordinate;
    }

    /**
     * @return {number}
     */
    getWidth():number
    {
        return this.width;
    }

    /**
     * @param width
     */
    setWidth(width:number)
    {
        this.width = width;
    }

    /**
     * @return {number}
     */
    getHeight():number
    {
        return this.height;
    }

    /**
     * @param height
     */
    setHeight(height:number)
    {
        this.height = height;
    }
}
