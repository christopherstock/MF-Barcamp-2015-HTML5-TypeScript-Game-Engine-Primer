/*****************************************************************************
 *   Library for math functions.
 *
 *   @author     C. Heldt
 *   @version    0.0.1
 *****************************************************************************/
class LibMath
{
    /**
     * Returns a random integer between given mininum and maximum.
     *
     * @param min
     * @param max
     * @return {number}
     */
    public static generateRandomNumber(min:number, max:number)
    {
        return Math.floor((Math.random() * (max - min)) + min);
    }
}
