/**
 * Entry for Unit Test
 *
 * @author caijf <caijf@corp.netease.com>
 */
NEJ.define([
    './rotation/test.js',
    './rotation/test_web.js',
    './rotation/test_wap.js',
    '../src/rotation/web/ui.js'
],function () {
    mocha.run();
});
