/**
 * Color - A "data type" for Javascript
 * @author  André Vinícius <andrelimamail@gmail.com>
 * @license MIT license
 */

class Color {
    color: string;
    constructor(color: any) {
        function extractHexFromArr(colorArr) : string {
            var hex = "";
            for(var key in colorArr) {
                var colorValue = parseInt(colorArr[key]).toString(16);
                hex = hex.concat(colorValue.length < 2 ? "0" + colorValue : colorValue);
            }
            return hex;
        }
        var hex: string;
		if(color instanceof Array) {
			hex = extractHexFromArr(color);
        } else if (typeof color == "string" && color.indexOf(",") > 0) {
            hex = extractHexFromArr(color.split(","));
        } else {
			hex = color;
        }
        this.color = hex + "0".repeat(6 - (hex.length > 6 ? 0 : hex.length));
    }
    private invertColor(hex) : string {
        var color = parseInt(hex, 16);
        var max_color = parseInt("ffffff", 16);
        var inverted = (color - max_color) * -1;
        var new_hex = inverted.toString(16);
        return "0".repeat(6 - (new_hex.length > 6 ? 0 : new_hex.length)) + new_hex;
    }
    toHex() {
        return this.color;
    }
	toRGB = {
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
    }
    toInt() {
        return parseInt(this.toHex(), 16);
    }
	invert() {
        this.color = this.invertColor(this.color);
        return this;
    }
	toString() {
        return this.toHex();
    }
}