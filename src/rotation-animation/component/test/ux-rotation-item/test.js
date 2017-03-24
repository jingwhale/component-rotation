/**
 * Unit Test for UxRotationItem
 *
 * @author hzzhangyunlong15 <hzzhangyunlong15@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'pro/ux-rotation-item/component',
    '../util.js',
    './cases.js'
],function (
    u, UxRotationItem, ut, cases
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test - UxRotationItem',function () {
        // new instance
        describe('new UxRotationItem',function () {
            it('should be ok to instance UxRotationItem',function () {
                var inst = new UxRotationItem();
                expect(inst).to.be.an.instanceof(UxRotationItem);
            });
        });
        // test for all api
        //ut.runTest(d,'UxRotationItem',cases);
    });
});
