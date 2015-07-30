class Key
{
    private code:number;

    constructor(keyCode:number) {
        this.code = keyCode;
    }

    public compare(keyCode:number):boolean {
        return this.code === keyCode;
    }

    public getCode():number
    {
        return this.code;
    }
}
