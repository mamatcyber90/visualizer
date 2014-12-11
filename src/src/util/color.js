'use strict';

/**
 * Color manipulation
 * @module src/util/color
 */
define([], function () {

    var exports = {};

    exports.hex2rgb = function hex2rgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)

        ] : [0, 0, 0];
    };

    exports.rgb2hex = function rgb2hex(r, g, b) {
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };

    exports.hue2rgb = function hue2rgb(p, q, t) {
        if (t < 0)
            t += 1;
        if (t > 1)
            t -= 1;
        if (t < 1 / 6)
            return p + (q - p) * 6 * t;
        if (t < 1 / 2)
            return q;
        if (t < 2 / 3)
            return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    };

    exports.hsl2rgb = function hsl2rgb(h, s, l) {
        var m1, m2, hue, r, g, b;
        s /= 100;
        l /= 100;

        if (s === 0)
            r = g = b = (l * 255);
        else {
            if (l <= 0.5)
                m2 = l * (s + 1);
            else
                m2 = l + s - l * s;

            m1 = l * 2 - m2;
            hue = h / 360;
            r = this.hueToRgb(m1, m2, hue + 1 / 3);
            g = this.hueToRgb(m1, m2, hue);
            b = this.hueToRgb(m1, m2, hue - 1 / 3);
        }
        return {r: r, g: g, b: b};
    };

    exports.getDistinctColors = function getDistinctColors(numColors) {

        var colors = new Array(numColors), j = 0;
        for (var i = 0; i < 360; i += 360 / numColors) {
            j++;
            var color = this.hsl2rgb(i, 100, 30 + j % 4 * 15);
            colors.push([Math.round(color.r * 255), Math.round(color.g * 255), Math.round(color.b * 255)]);
        }
        return colors;
    };

    exports.getNextColorRGB = function getNextColorRGB(colorNumber, numColors) {
        return this.getDistinctColors(numColors)[colorNumber];
    };

    exports.getColor = function getColor(color) {

        if (Array.isArray(color)) {
            switch (color.length) {
                case 3:
                    return 'rgb(' + color.join(',') + ')';
                    break;
                case 4:
                    return 'rgba(' + color.join(',') + ')';
                    break;
            }
        } else if (typeof(color) == 'object') {
            return 'rgb(' + Math.round(color.r * 255) + ', ' + Math.round(color.g * 255) + ', ' + Math.round(color.b * 255) + ')';
        }

        return color;
    };

    return exports;

});