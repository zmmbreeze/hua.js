
/**
 * Hua
 * @constructor
 * @param {Element} root
 */
var Hua = function (root) {
    if (!util.isSupport()) {
        throw new Error('Browser is not support Hua.js.');
        return;
    }
    /**
     * @type {Element}
     */
    this.root = root;
    if (typeof root === 'string') {
        this.root = document.getElementById(root);
    }

    /**
     * layer stacks
     * @type {Array.<Layer>}
     */
    this.stack = [];

    this.init();
};

/**
 * init
 */
Hua.prototype.init = function () {
    this.root.style.position = 'relative';
    this.createLayer();
};

/**
 * create layer.
 */
Hua.prototype.createLayer = function () {
    var l = new Layer(this.stack.length);
    this.stack.push(l);
    this.root.appendChild(l.canvas);
};

/**
 * remove layer.
 * @param {number} zIndex
 */
Hua.prototype.removeLayer = function (zIndex) {
    var layer = this.stack[zIndex];
    util.removeDom(layer.canvas);
    util.removeArray(this.stack, zIndex, function (layer, zIndex) {
        layer = /** @type {Layer} */(layer);
        layer.setZIndex(zIndex);
    });
};

/**
 * Get layer.
 * @param {number=} opt_zIndex
 * @return {Layer} layer
 */
Hua.prototype.getLayer = function (opt_zIndex) {
    var zIndex = opt_zIndex || (this.stack.length - 1);
    return this.stack[zIndex];
};

/**
 * @param {Object} pen
 * @param {number=} opt_zIndex
 */
Hua.prototype.draw = function (pen, opt_zIndex) {
    var layer = this.getLayer(opt_zIndex);
    if (!layer) {
        return;
    }

    var render = new Render(pen);
    layer.addRender(render);
    layer.rend();
};

Hua.prototype.update = function () {
    this.stack.forEach(function (layer) {
        layer = /** @type {Layer} */(layer);
        layer.update();
    });
};
