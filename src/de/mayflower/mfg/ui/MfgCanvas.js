/*****************************************************************************
*   Represents the 2d drawing surface.
*
*   @author     Christopher Stock
*   @version    0.0.8
*****************************************************************************/
var MfgCanvas = (function () {
    /*****************************************************************************
    *   Inits the canvas.
    *
    *   @param  aTargetWidth    The target width for this canvas to assign.
    *   @param  aTargetHeight   The target height for this canvas to assign.
    *****************************************************************************/
    function MfgCanvas(aTargetWidth, aTargetHeight) {
        /** The HTML canvas tag that can be added to the website's body. */
        this.iCanvasTag = null;
        /** The canvas rendering context. */
        this.iContext = null;
        //create an HTML canvas element and assign it's dimensions
        this.iCanvasTag = document.createElement('canvas');
        this.iCanvasTag.width = aTargetWidth;
        this.iCanvasTag.height = aTargetHeight;
        //assign paramounts
        this.iContext = this.iCanvasTag.getContext('2d');
        //output log message
        MfgDebug.log("Canvas initialized with dimensions [" + this.iCanvasTag.width + "][" + this.iCanvasTag.height + "]");
    }
    /*****************************************************************************
    *   Returns the HTML Canvas Tag element.
    *
    *   @return     The HTML-canvas-tag.
    *****************************************************************************/
    MfgCanvas.prototype.getCanvasTag = function () {
        return this.iCanvasTag;
    };
    /*****************************************************************************
    *   Returns the canvas' 2D drawing context.
    *
    *   @return     The drawing context for this canvas.
    *****************************************************************************/
    MfgCanvas.prototype.getContext = function () {
        return this.iContext;
    };
    /*****************************************************************************
    *   Returns the canvas' width.
    *
    *   @return     The width of this canvas in px.
    *****************************************************************************/
    MfgCanvas.prototype.getWidth = function () {
        return this.iCanvasTag.width;
    };
    /*****************************************************************************
    *   Returns the canvas' height.
    *
    *   @return     The height of this canvas in px.
    *****************************************************************************/
    MfgCanvas.prototype.getHeight = function () {
        return this.iCanvasTag.height;
    };
    return MfgCanvas;
})();
//# sourceMappingURL=MfgCanvas.js.map