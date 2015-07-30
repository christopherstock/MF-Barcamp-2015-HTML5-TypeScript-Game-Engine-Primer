class LibKeys
{
    /**
     * Init handlers
     *
     * @param handlers
     */
    public static init(handlers:Array<KeyEventHandler> = [])
    {
        var observer = new KeyValidator();

        window.onkeyup = function (e) {
            for (var index in handlers) {
                var handler = handlers[index];

                observer.unpress(e.keyCode);
                if (observer.assertIsPressed(e.keyCode)) {
                    return;
                }

                handler.onKeyUp(e.keyCode);
            }
        };

        window.onkeydown = function (e) {
            for (var index in handlers) {
                var handler = handlers[index];

                if (observer.assertIsPressed(e.keyCode)) {
                    return;
                }

                observer.press(e.keyCode);
                handler.onKeyDown(e.keyCode);
            }
        };
    }
}
