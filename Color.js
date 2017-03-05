/**
 * Color - A "data type" for Javascript
 * @author  André Vinícius <andrelimamail@gmail.com>
 * @license MIT license
 */

//NOTE: It's not a compiled version from TS
var Color = (function () {
    function Color(color) {
        function extractHexFromArr(colorArr) {
            var hex = "";
            for(var key in colorArr) {
                var colorValue = parseInt(colorArr[key]).toString(16);
                hex = hex.concat(colorValue.length < 2 ? "0" + colorValue : colorValue);
            }
            return hex;
        }
        var hex = "";
		if(color instanceof Array) {
			hex = extractHexFromArr(color);
        } else if (typeof color == "string" && color.indexOf(",") > 0) {
            hex = extractHexFromArr(color.split(","));
        } else {
			hex = color;
        }
        this.color = hex + "0".repeat(6 - (hex.length > 6 ? 0 : hex.length));
    }
    function invertColor(hex) {
        var color = parseInt(hex, 16);
        var max_color = parseInt("ffffff", 16);
        var inverted = (color - max_color) * -1;
        var new_hex = inverted.toString(16);
        return "0".repeat(6 - (new_hex.length > 6 ? 0 : new_hex.length)) + new_hex;
    }
    Color.prototype.toHex = function () {
        return this.color;
    };
	Color.prototype.toRGB = {
         toObj : function() {
            return {
                R: parseInt(this.color.substr(0,2), 16),
                G: parseInt(this.color.substr(2,2), 16),
                B: parseInt(this.color.substr(4,2), 16),
            };
        },
        toArray : function() {
            return [parseInt(this.color.substr(0,2), 16), 
                    parseInt(this.color.substr(2,2), 16), 
                    parseInt(this.color.substr(4,2), 16)];
        }
    };
    Color.prototype.toInt = function () {
        return parseInt(this.toHex(), 16);
    };
	Color.prototype.invert = function () {
        this.color = invertColor(this.color);
        return this;
    };
	Color.prototype.toString = function () {
        return this.toHex();
    };
    return Color;
}());