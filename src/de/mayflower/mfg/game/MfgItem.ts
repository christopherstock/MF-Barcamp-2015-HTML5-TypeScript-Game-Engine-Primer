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
     * @param numberOfItems
     * @param canvas
     * @return {MfgItem[]}
     */
    public static generateRandomItems(numberOfItems:number, canvas:MfgCanvas):Array<MfgItem>
    {
        var itemList = new Array<MfgItem>();

        var canvasWidth  = canvas.getWidth();
        var canvasHeight = canvas.getHeight();

        while(true) {
            var newX   = LibMath.generateRandomNumber(0, canvasWidth);
            var newY   = LibMath.generateRandomNumber(0, canvasHeight);
            var points = LibMath.generateRandomNumber(
                MfgSettings.MIN_ITEM_POINS,
                MfgSettings.MAX_ITEM_POINS
            );

            var newItem = new MfgItem(newX, newY, points);

            for(let existingItem in itemList) {
                if (!newItem.collidesWithItem(existingItem)) {
                    itemList.push(newItem);
                }
            }

            if (itemList.length == numberOfItems) {
                return itemList;
            }
        }
    }

    /**
     * Checks of given item collides with instance-item
     *
     * @param item
     * @return {boolean}
     */
    public collidesWithItem(item:MfgItem):boolean
    {
        if (item.getX() >= this.x || item.getX() <= (this.x + MfgItem.ITEM_WIDTH)) {
            return true;
        }

        if (item.getY() >= this.y || item.getY() <= (this.y + MfgItem.ITEM_HEIGHT)) {
            return true;
        }

        return false;
    }
}
