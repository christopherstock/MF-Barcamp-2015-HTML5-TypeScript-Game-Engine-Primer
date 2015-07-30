class LibKeys
{
    public static keyVO:KeyValidator = null;
    public static keySkeleton:PressedKey = null;

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

    public static getCurrentKey():PressedKey
    {
        if (null === this.keyVO) {
            throw new Error('Please call init() first!');
        }

        if (null === this.keySkeleton) {
            this.keySkeleton = new PressedKey();
        }

        this.keySkeleton.fill(this.keyVO.getBareCode());
        return this.keySkeleton;
    }
}
