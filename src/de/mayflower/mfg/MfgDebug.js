/*****************************************************************************
*   The debug system wraps all access to debug instruments.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
var MfgDebug = (function () {
    function MfgDebug() {
    }
    /*****************************************************************************
    *   Logs the specified message to the debug console.
    *
    *   @param  logMessage  The message to log to the debug console.
    *****************************************************************************/
    MfgDebug.log = function (logMessage) {
        console.log(logMessage);
    };
    return MfgDebug;
})();
//# sourceMappingURL=MfgDebug.js.map