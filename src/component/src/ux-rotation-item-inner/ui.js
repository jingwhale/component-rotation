/**
 * UxRotationItemInnerUI 组件带默认UI实现文件
 *
 * @version  1.0
 * @author   hzzhangyunlong15 <hzzhangyunlong15@corp.netease.com>
 * @module   pool/module-rotation/src/component/ux-rotation-item-inner/ui
 */
NEJ.define( [
    './component.js',
    'text!./component.html',
    'css!./component.css'
],function(
    UxRotationItemInner,
    html,
    css
){
    /**
     * UxRotationItemInner UI组件
     *
     * @class   module:pool/module-rotation/src/component/ux-rotation-item-inner/ui.UxRotationItemInnerUI
     * @extends module:pool/module-rotation/src/component/ux-rotation-item-inner/component.UxRotationItemInner
     *
     * @param {Object} options
     * @param {Object} options.data 与视图关联的数据模型
     */
    return UxRotationItemInner.$extends({
        name     : 'um-rotation-ux-rotation-item-inner',
        css      : css,
        template : html
    });
});
