class LibKeys
{
    public static keyVO:KeyValidator;

    /**
     * Init handlers
     *
     * @param handlers
     */
    public static init(handlers:Array<KeyEventHandler> = [])
    {
        LibKeys.keyVO = new KeyValidator();

        window.onkeyup = function (e) {
            for (var index in handlers) {
                var handler = handlers[index];

                LibKeys.keyVO.unpress(e.keyCode);
                if (LibKeys.keyVO.assertIsPressed(e.keyCode)) {
                    return;
                }

                handler.onKeyUp(e.keyCode);
            }
        };

        window.onkeydown = function (e) {
            for (var index in handlers) {
                var handler = handlers[index];

                if (LibKeys.keyVO.assertIsPressed(e.keyCode)) {
                    return;
                }

                LibKeys.keyVO.press(e.keyCode);
                handler.onKeyDown(e.keyCode);
            }
        };
    }

    public static getCurrentKey():Key
    {
        if (null === this.keyVO) {
            throw new Error('Please call init() first!');
        }

        return new Key(this.keyVO.getBareCode());
    }
}
