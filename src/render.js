
/**
 * Render
 * @constructor
 * @param {Object} pen
 */
var Render = function (pen) {
    this.pen = pen;
};

/**
 * rend
 * @param {Layer} layer
 */
Render.prototype.rend = function (layer) {
    this.pen.rend(layer);
};
