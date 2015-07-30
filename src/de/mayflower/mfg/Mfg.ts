
    /*****************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO ASAP   Create folder for lib sources.
    *   TODO HIGH   Image system.
    *   TODO INIT   Implement Globbing for dynamic js loading in index.html.
    *   TODO LOW    Sound system.
    *   TODO LOW    Input (key) system.
    *   TODO WEAK   Main-Thread system.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    class Mfg
    {
        /*****************************************************************************
        *   This method is invoked when the application starts.
        *****************************************************************************/
        public static main():void
        {
            MfgDebug.log( "Welcome to the HTML5 TypeScript Game Engine Primer." );

            MfgGame.init();
        }
    }

    /*****************************************************************************
    *   This is the application's point of entry.
    *****************************************************************************/
    window.onload = function()
    {
        //invoke main method
        Mfg.main();
    };

    /*****************************************************************************
    *   This is the application's point of termination.
    *****************************************************************************/
    window.onunload = function()
    {
    };
