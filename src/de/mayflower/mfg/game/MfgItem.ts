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

    /**
     * @return {number}
     */
    public getX():number
    {
        return this.x;
    }

    /**
     * @return {number}
     */
    public getY():number
    {
        return this.y;
    }

    /**
     * @return {MfgItem[]}
     */
    public static generateRandomItems():Array<MfgItem>
    {
        var itemList = new Array<MfgItem>();

        for(var listIndex:number = 0; listIndex < MfgSettings.ITEM_COUNT; listIndex++) {
            var newX   = LibMath.generateRandomNumber(0, MfgGame.canvas.getWidth());
            var newY   = LibMath.generateRandomNumber(0, MfgGame.canvas.getHeight());
            var points = LibMath.generateRandomNumber(
                MfgSettings.MIN_ITEM_POINS,
                MfgSettings.MAX_ITEM_POINS
            );

            itemList.push(new MfgItem(newX, newY, points));
        }

        return itemList;
    }

    /**
     * Checks of given item collides with instance-item
     *
     * @param item
     * @return {boolean}
     */
    public collidesWithItem(item:MfgItem):boolean
    {
        if (item.getX() >= this.x || item.getX() <= (this.x + MfgSettings.ITEM_WIDTH)) {
            return true;
        }

        if (item.getY() >= this.y || item.getY() <= (this.y + MfgSettings.ITEM_HEIGHT)) {
            return true;
        }

        return false;
    }
}
