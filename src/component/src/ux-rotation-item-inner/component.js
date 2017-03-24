/**
 * UxRotationItemInner 组件实现文件
 *
 * @version  1.0
 * @author   hzzhangyunlong15 <hzzhangyunlong15@corp.netease.com>
 * @module   pool/module-rotation/src/component/ux-rotation-item-inner/component
 */
NEJ.define([
    'pool/component-base/src/base',
    'pool/component-base/src/util'
],function(
    Component,
    util
){
    /**
     * UxRotationItemInner 组件
     *
     * @class   module:pool/module-rotation/src/component/ux-rotation-item-inner/component.UxRotationItemInner
     * @extends module:pool/component-base/src/base.Component
     *
     * @param {Object} options      - 组件构造参数
     * @param {Object} options.data - 与视图关联的数据模型
     */
    var UxRotationItemInner = Component.$extends({
        /**
         * 模板编译前用来初始化参数
         *
         * @protected
         * @method  module:pool/module-rotation/src/component/ux-rotation-item-inner/component.UxRotationItemInner#config
         * @returns {void}
         */
        config: function () {
            // FIXME 设置组件配置信息的默认值
            util.extend(this, {

            });
            // FIXME 设置组件视图模型的默认值
            util.extend(this.data, {

            });
            this.supr();
            // TODO
        },

        /**
         * 模板编译之后(即活动dom已经产生)处理逻辑，可以在这里处理一些与dom相关的逻辑
         *
         * @protected
         * @method  module:pool/module-rotation/src/component/ux-rotation-item-inner/component.UxRotationItemInner#init
         * @returns {void}
         */
        init: function () {
            // TODO
            this.supr();
        },

        /**
         * 组件销毁策略，如果有使用第三方组件务必在此先销毁第三方组件再销毁自己
         *
         * @protected
         * @method  module:pool/module-rotation/src/component/ux-rotation-item-inner/component.UxRotationItemInner#destroy
         * @returns {void}
         */
        destroy: function () {
            // TODO
            this.supr();
        }
    });

    return UxRotationItemInner;
});
