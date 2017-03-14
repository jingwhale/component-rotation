/**
 * RotationUI 组件带默认UI实现文件
 *
 * @version  1.0
 * @author   caijf <caijf@corp.netease.com>
 * @module   pool/component-rotation/src/rotation/ui
 */
NEJ.define( [
    '../component1.js',
    'text!./component1.html',
    'css!./component.css'
],function(
    Rotation,
    html,
    css
){
    /**
     * Rotation UI组件
     *
     * @class   module:pool/component-rotation/src/rotation/ui.RotationUI
     * @extends module:pool/component-rotation/src/rotation.Rotation
     *
     * @param {Object} options
     * @param {Object} options.data 与视图关联的数据模型
     */
    return Rotation.$extends({
        name     : 'ux-rotation-rotation',
        css      : css,
        template : html
    });
});
