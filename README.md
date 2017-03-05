# Color-Datatype-Js
A Javascript "data type" that provides a quick access to control colors (with some features)

## Quick usage:
```javascript
// Possible input formats
var color1 = new Color("F000FF");
var color2 = new Color("255, 000, 200");
var color3 = new Color([000, 000, 255]);
var color3 = new Color("red");
```

Possible outputs
```javascript
// Outputs
color1.toRGB("object") // => { R: ..., G:..., B:... }
color1.toRGB("array") // => (By default) [R..., G..., B...] 
color2.toHex(); // => or use .toString();
```

## Features for now:
Possibility to invert colors
```javascript
color1.invert().toString() // => "0FFF00"
```
Try to find a friendly name for a color
```javascript
color3.friendlyName() // => "blue"
```
If you can't find a color, you can register a new
```javascript
Color.register("supercolor", "00f011");
```
If you want to **rewrite** a color use *unregister*
```javascript
Color.unregister("supercolor");
```