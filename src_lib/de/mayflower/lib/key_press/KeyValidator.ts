class KeyValidator
{
    private currentlyPressed:number;

    public press(keyCode:number)
    {
        this.currentlyPressed = keyCode;
    }

    public unpress()
    {
        this.currentlyPressed = null;
    }

    public assertIsPressed(code:number):boolean
    {
        return code === this.currentlyPressed;
    }

    public getBareCode():number
    {
        return this.currentlyPressed;
    }
}
