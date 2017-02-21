/**
 * Unit Test for Rotation
 *
 * @author caijf <caijf@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'pro/rotation/component',
    '../util.js',
    './cases.js'
],function (
    u, Rotation, ut, cases
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test - Rotation',function () {
        // new instance
        describe('new Rotation',function () {
            it('should be ok to instance Rotation',function () {
                var inst = new Rotation();
                expect(inst).to.be.an.instanceof(Rotation);
            });
        });
        // test for all api
        ut.runTest(Rotation,'Rotation',cases);
    });
});
