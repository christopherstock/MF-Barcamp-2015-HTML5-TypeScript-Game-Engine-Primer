/*****************************************************************************
 *   Represents a collectable item.
 *
 *   @author     C. Heldt
 *   @version    0.0.1
 *****************************************************************************/
class MfgItem
{
    /** Location X. */
    private            x               :number             = 0;
    /** Location Y. */
    private            y               :number             = 0;
    /** Points gained by player if collected */
    private            points          :number             = 0;
    /** Item's width. */
    private     static ITEM_WIDTH      :number             = 10;
    /** Item's height. */
    private     static ITEM_HEIGHT     :number             = 10;

    /**
     * @param x
     * @param y
     * @param points
     */
    constructor(x:number, y:number, points:number)
    {
        this.x = x;
        this.y = y;
        this.points = points;
    }
}
