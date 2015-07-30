
    /*****************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO ASAP   Create folder for lib sources.
    *   TODO ASAP   Image system.
    *   TODO ASAP   Sound system.
    *   TODO ASAP   Input (key) system.
    *   TODO ASAP   Main-Thread system.
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
            console.log( "Mfg::main() being invoked!" );

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
