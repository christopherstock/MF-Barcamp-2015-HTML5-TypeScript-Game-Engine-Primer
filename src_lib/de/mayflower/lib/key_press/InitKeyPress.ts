class InitKeyPress
{
    /**
     * Init handlers
     *
     * @param handlers
     */
    public static init(handlers:Array<KeyEventHandler> = [])
    {
        window.onkeyup = function (e) {
            for (var index in handlers) {
                var handler = handlers[index];

                handler.onKeyUp(e.keyCode);
            }
        };

        window.onkeydown = function (e) {
            for (var index in handlers) {
                var handler = handlers[index];

                handler.onKeyDown(e.keyCode);
            }
        };
    }
}
