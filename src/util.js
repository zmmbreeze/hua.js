var util = {
    /**
     * inherit
     * @param {Function} Son
     * @param {Function} Father
     */
    inherit: function (Son, Father) {
        Son.prototype = Object.create(Father.prototype);
        Son.superClass = Father.prototype;
    },

    /**
     * hua is supported by this browser or not.
     */
    isSupport: function () {
        if (!Object.create || !Array.prototype.forEach) {
            return false;
        }

        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    },

    /**
     * remove dom element.
     * @param {Element} element
     */
    removeDom: function (element) {
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    },

    /**
     * remove item in array.
     *
     * @param {Array} arr
     * @param {number} index
     * @param {function(*, number)} updateFunc
     */
    removeArray: function (arr, index, updateFunc) {
        var i = arr.length - 1;
        var l = i;
        var tmp = [];
        while (i > index) {
            tmp.push(arr.pop());
            i--;
        }
        arr.pop();

        var item;
        while (tmp.length) {
            item = tmp.pop();
            updateFunc(item, arr.length);
            arr.push(item);
        }
    }
};
