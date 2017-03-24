/**
 * UxRotationItemUI 组件带默认UI实现文件
 *
 * @version  1.0
 * @author   hzzhangyunlong15 <hzzhangyunlong15@corp.netease.com>
 * @module   pool/module-rotation/src/component/ux-rotation-item/ui
 */
NEJ.define( [
    './component.js',
    'text!./component.html',
    'css!./component.css'
],function(
    UxRotationItem,
    html,
    css
){
    /**
     * UxRotationItem UI组件
     *
     * @class   module:pool/module-rotation/src/component/ux-rotation-item/ui.UxRotationItemUI
     * @extends module:pool/module-rotation/src/component/ux-rotation-item/component.UxRotationItem
     *
     * @param {Object} options
     * @param {Object} options.data 与视图关联的数据模型
     */
    return UxRotationItem.$extends({
        name     : 'um-rotation-ux-rotation-item',
        css      : css,
        template : html
    });
});
