"use strict";
var AddTwoNumbersTest = /** @class */ (function () {
    function AddTwoNumbersTest(x, y) {
        this.x = x;
        this.y = y;
    }
    AddTwoNumbersTest.prototype.dislay = function () {
        console.log(this.x);
        console.log(this.y);
    };
    return AddTwoNumbersTest;
}());
var addTwoNumbersObj = new AddTwoNumbersTest(1, 2);
addTwoNumbersObj.dislay();
//# sourceMappingURL=sample.js.map