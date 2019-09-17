//var expect    = require("jasmine").expect;
var converter = require("./src/ColorConverter.js");

describe("Color Code Converter", function() {
  describe("RGB to Hex conversion", function() {
    it("converts the basic colors", function() {
      var redHex   = converter.rgbToHex(255, 0, 0);
      var greenHex = converter.rgbToHex(0, 255, 0);
      var blueHex  = converter.rgbToHex(0, 0, 255);
      
      expect(redHex).toEqual("ff0000");
      expect(greenHex).toEqual("00ff00");
      expect(blueHex).toEqual("0000ff");
    });
  });

  describe("Hex to RGB conversion", function() {
    it("converts the basic colors", function() {
      var red   = converter.hexToRgb("ff0000");
      var green = converter.hexToRgb("00ff00");
      var blue  = converter.hexToRgb("0000ff");

      expect(red).toEqual([255, 0, 0]);
      expect(green).toEqual([0, 255, 0]);
      expect(blue).toEqual([0, 0, 255]);
    });
  });

  describe("Making a fake call  to hexToRgb", function(){
    beforeEach(function(){
      spyOn(converter, "hexToRgb").and.callFake(function(hexColor) {
        return [0, 255, 0];
      });
    })

    
    it('calls the fake hexToRgb()',function(){
      expect(converter.hexToRgb("00ff00")).toEqual([0, 255, 0])
      expect(converter.hexToRgb).toHaveBeenCalled()
    })
  })
});