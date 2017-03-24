/**
 * Entry for Unit Test
 *
 * @author caijf <caijf@corp.netease.com>
 */
NEJ.define([
    '../src/rotation-slide/web/ui.js',
    '../src/rotation-animation/web/ui.js',
    '../src/component/src/ux-rotation-item-inner/ui.js'
],function (
    _slideUi,
    _animationUi,
    itemInnerUI
) {
    var _slideUI = new _slideUi({}).$inject("#j-rotation-slide");
    var _picArr = [
        'http://edu-image.nosdn.127.net/131B9DE5177801968F708A1CF8CBF61B.jpg',
        'http://edu-image.nosdn.127.net/7936C27ADFD60175D4AB8DFDA287A939.jpg',
        'http://edu-image.nosdn.127.net/4787C9E58F51EDCF29A46E8AD985C807.jpg',
        'http://edu-image.nosdn.127.net/F63B453C614E68CD969A164767AC66FB.jpg',
        'http://edu-image.nosdn.127.net/E0745C81F54C32D18EAE7409607BA28D.jpg',
        'http://edu-image.nosdn.127.net/15AF86DFF9136BE0DBDEDC02B97171DF.jpg',
        'http://edu-image.nosdn.127.net/FD58B7CDE32397F9A91AE4ED418AA003.jpg'
    ];
    var _animationUI = new _animationUi({
        data:{
            width: 300,
            height:300,
            arrowPosition: '-80px',
            outAnimation: "fadeOut",
            inAnimation: "fadeIn",
            count: 2,
            picArr: _picArr,
            distance:10
        }
    }).$inject("#j-rotation-animation");
});
