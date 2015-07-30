
    /*****************************************************************************
    *   Contains all settings for the application.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    class MfgSettings
    {
        /** The width of the canvas element. */
        public          static          CANVAS_WIDTH            :number             = 800;

        /** The height of the canvas element. */
        public          static          CANVAS_HEIGHT           :number             = 600;

        /** The color of the player. */
        public          static          COLOR_PLAYER            :string             = "rgba( 255, 0, 0, 1.0  )";
        /** The color of the player. */
        public          static          COLOR_BG                :string             = "rgba( 0,   0, 0, 1.0  )";
        /** The color of a collectable item. */
        public          static          COLOR_ITEM              :string             = "green";

        /** The delay of the game. The less this variable is set the faster runs the game. */
        public          static          THREAD_DELAY            :number             = 40;

        /** The title of the web page. */
        public          static          WEBPAGE_TITLE           :string             = "Mayflower Barcamp 2015 - HTML5 TypeScript Game Engine Primer";
    }
