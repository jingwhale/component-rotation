/**
 * Entry for Unit Test
 *
 * @author caijf <caijf@corp.netease.com>
 */
NEJ.define([
    '../src/rotation-slide/web/ui.js',
    '../src/rotation-animation/web/ui.js'
],function (
    _slideUi,
    _animationUi
) {
    var _slideUI = new _slideUi({}).$inject("#j-rotation-slide");
    var _animationUI = new _animationUi({
        data:{
            outAnimation: "fadeOut",
            inAnimation: "fadeIn",
            picArr: ['http://edu-image.nosdn.127.net/2584CBD8F8B14937388D05C4789BB50F.jpg','http://edu-image.nosdn.127.net/BE60F7A483A800BB9811966523DE330A.jpg','http://edu-image.nosdn.127.net/94FB626EDF7B157846E8DCDCA309B43C.jpg']
        }
    }).$inject("#j-rotation-animation");
});
