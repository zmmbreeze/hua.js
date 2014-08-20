
/**
 * Layer
 * @constructor
 * @param {number} zIndex
 */
var Layer = function (zIndex) {
    /**
     * @type {number}
     */
    this.zIndex = zIndex;

    /**
     * @type {Element}
     */
    this.canvas = null;

    /**
     * @type {CanvasRenderingContext2D}
     */
    this.context = null;

    /**
     * @type {Array.<Render>}
     */
    this.renders = [];

    this.init();
};

/**
 * init
 */
Layer.prototype.init = function () {
    this.canvas = document.createElement('canvas');
    // this.canvas.setAttribute('data-index', this.zIndex);
    this.canvas.style.cssText = ''
        + 'z-index:' + this.zIndex + ';'
        + 'position: absolute;'
        + 'top: 0;'
        + 'left: 0;'
        + 'width: 100%;'
        + 'height: 100%;';
    this.context = this.canvas.getContext('2d');
};

/**
 * add render
 * @param {Render} render
 */
Layer.prototype.addRender = function (render) {
    this.renders.push(render);
};

/**
 * set zIndex
 * @param {number} zIndex
 */
Layer.prototype.setZIndex = function (zIndex) {
    this.zIndex = zIndex;
    this.canvas.style.zIndex = zIndex;
};

/**
 * rend
 */
Layer.prototype.rend = function () {
    var that = this;
    that.renders.forEach(function (render) {
        render.rend(that);
    });
};

/**
 * update
 */
Layer.prototype.clear = function () {
    this.context.clearRect(0, 0, this.getWidth(), this.getHeight());
};

/**
 * update
 */
Layer.prototype.update = function () {
    this.clear();
    this.rend();
};

/**
 * Get layer width
 * @return {number} width
 */
Layer.prototype.getWidth = function () {
    return this.canvas.width;
};

/**
 * Get layer height
 * @return {number} height
 */
Layer.prototype.getHeight = function () {
    return this.canvas.height;
};

Layer.prototype.getBoundWidth = function () {
    return this.canvas.offsetWidth;
};

Layer.prototype.getBoundHeight = function () {
    return this.canvas.offsetHeight;
};

