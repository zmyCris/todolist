const expect = require("chai").expect;
//const thingController = require("../controller/thingController");
const getDate = require("../utils/getDateUtil");

describe("thingController", function () {
    it("first test", function () {
        expect(getDate()).to.be.equal('2019/07/10 10:48');
    });
});