/**
 * Unit Test for UxRotationItemInner
 *
 * @author hzzhangyunlong15 <hzzhangyunlong15@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'pro/ux-rotation-item-inner/component',
    '../util.js',
    './cases.js'
],function (
    u, UxRotationItemInner, ut, cases
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test - UxRotationItemInner',function () {
        // new instance
        describe('new UxRotationItemInner',function () {
            it('should be ok to instance UxRotationItemInner',function () {
                var inst = new UxRotationItemInner();
                expect(inst).to.be.an.instanceof(UxRotationItemInner);
            });
        });
        // test for all api
        //ut.runTest(d,'UxRotationItemInner',cases);
    });
});
