/**
 * Unit Test for RotationUI
 *
 * @author caijf <caijf@corp.netease.com>
 */
NEJ.define([
    'base/element',
    'base/event',
    'pro/rotation/wap/ui'
],function (
    e, v,
    RotationUI
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test WAP UI - RotationUI',function () {
        // instance Base
        describe('new RotationUI',function () {
            // test case - new instance
            it('should be ok to instance RotationUI',function () {
                var inst = new RotationUI();
                expect(inst).to.be.an.instanceof(RotationUI);
            });
        });
    });
});
