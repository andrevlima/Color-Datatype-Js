# Color-Datatype-Js
A Javascript "data type" that provides a quick access to control colors (with some features)

## Quick usage:
```javascript
// Possible input formats
var color1 = new Color("F000FF");
var color2 = new Color("255, 000, 200");
var color3 = new Color([020, 010, 255]);
```

Possible outputs
```javascript
// Outputs
color1.toRGB.toObj() // => { R: ..., G:..., B:... }
color1.toRGB.toArray() // => [R..., G..., B...]
color2.toHex(); // => or use .toString();
```

## Features for now:
Possibility to invert colors
```javascript
color1.invert().toString() // => "0FFF00"
```
