
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
        public          static          COLOR_PLAYER            :string             = "rgba( 255, 0, 0, 1.0 )";
        /** The color of the canvas. */
        public          static          COLOR_BG_CANVAS         :string             = "rgba( 0,   0, 0, 1.0  )";
        /** Level background color */
        public          static          COLOR_BG_LEVEL          :string            = "rgba( 0, 255, 128, 1.0 )";
        /** The color of a collectable item. */
        public          static          COLOR_ITEM              :string             = "green";


        /** The delay of the game. The less this variable is set the faster runs the game. */
        public          static          THREAD_DELAY            :number             = 40;

        /** The title of the web page. */
        public          static          WEBPAGE_TITLE           :string             = "Mayflower Barcamp 2015 - HTML5 TypeScript Game Engine Primer";

        /** The keycode that represents the 'ARROW LEFT' key. */
        public          static          KEY_LEFT                :number             = 37;
        /** The keycode that represents the 'ARROW UP' key. */
        public          static          KEY_UP                  :number             = 38;
        /** The keycode that represents the 'ARROW RIGHT' key. */
        public          static          KEY_RIGHT               :number             = 39;
        /** The keycode that represents the 'ARROW DOWN' key. */
        public          static          KEY_DOWN                :number             = 40;

        /** Plaeyer speed pixel pro tick. */
        public          static          PLAYER_SPEED            :number            = 15;
        /** Player start X position. */
        public          static          PLAYER_START_X          :number            = 0;
        /** Player start Y position. */
        public          static          PLAYER_START_Y          :number            = 0;

        /** Level width. */
        public          static          LEVEL_WIDTH             :number            = 400;
        /** Level height. */
        public          static          LEVEL_HEIGHT            :number            = 250;


    }
