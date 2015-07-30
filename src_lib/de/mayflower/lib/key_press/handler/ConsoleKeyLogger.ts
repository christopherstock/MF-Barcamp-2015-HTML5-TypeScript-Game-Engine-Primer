class ConsoleKeyLogger implements KeyEventHandler
{
    public onKeyUp(keyCode:number):void {
        console.log('Key Code triggered at onKeyUp():' + keyCode);
    }

    public onKeyDown(keyCode:number):void {
        console.log('Key Code triggered at onKeyDown():' + keyCode);
    }
}
