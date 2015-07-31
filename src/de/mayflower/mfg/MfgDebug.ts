
    /*****************************************************************************
    *   The debug system wraps all access to debug instruments.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    class MfgDebug
    {
        /*****************************************************************************
        *   Logs the specified message to the debug console.
        *
        *   @param  logMessage  The message to log to the debug console.
        *****************************************************************************/
        public static log( logMessage:string ):void
        {
            console.log( logMessage );
        }
    }
