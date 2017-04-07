/**
 * Rotation 组件实现文件
 *
 * @version  1.0
 * @author   caijf <caijf@corp.netease.com>
 * @module   pool/module-rotation/src/component/rotation/component
 */
NEJ.define([
    'pool/component-base/src/base',
    'pool/component-base/src/util',
    'pool/nej/src/util/lazy/image'
],function(
    Component,
    util,
    _image
){
    /**
     * Rotation 组件
     *
     * @class   module:pool/module-rotation/src/component/rotation/component.Rotation
     * @extends module:pool/component-base/src/base.Component
     *
     * @param {Object} options      - 组件构造参数
     * @param {Object} options.data - 与视图关联的数据模型
     */
    var RotationSlide = Component.$extends({
        /**
         * 模板编译前用来初始化参数
         *
         * @protected
         * @method  module:pool/module-rotation/src/component/rotation/component.Rotation#config
         * @returns {void}
         */
        config: function () {
            // FIXME 设置组件配置信息的默认值
            util.extend(this, {

            });
            // FIXME 设置组件视图模型的默认值
            util.extend(this.data, {
                srcArr: ['http://edu-image.nosdn.127.net/131B9DE5177801968F708A1CF8CBF61B.jpg', 'http://edu-image.nosdn.127.net/7936C27ADFD60175D4AB8DFDA287A939.jpg', 'http://edu-image.nosdn.127.net/4787C9E58F51EDCF29A46E8AD985C807.jpg'],
                currentIndex: 0,
                currentAnimationTag: false,
                inAnimation: "fadeIn"
            });
            this.supr();

            this.data.currentImg = this.data.srcArr[this.data.currentIndex];
            this.data.count=this.data.srcArr.length;
        },

        /**
         * 模板编译之后(即活动dom已经产生)处理逻辑，可以在这里处理一些与dom相关的逻辑
         *
         * @protected
         * @method  module:pool/module-rotation/src/component/rotation/component.Rotation#init
         * @returns {void}
         */
        init: function () {
            // TODO
            this.supr();

            this.autoPlay();
        },

        autoPlay: function () {
            this.clearTimer();

            this.timer = setInterval(function () {
                this.data.currentIndex++;
                if(this.data.currentIndex > (this.data.srcArr.length-1)){
                    this.data.currentIndex = 0;
                }
                this.clickCircle(this.data.currentIndex);
            }._$bind(this),5000);
        },

        clickCircle: function (_index) {
            this.data.currentIndex = _index;
            this.data.currentImg = this.data.srcArr[this.data.currentIndex];
            this.data.currentAnimationTag = true;
            this.$update();

            setTimeout(function () {
                this.data.currentAnimationTag = false;
                this.$update();
            }._$bind(this),500);
        },

        mouseenter: function(){
            this.clearTimer();
        },

        clearTimer: function () {
            if(this.timer){
                window.clearInterval(this.timer);
                this.timer = null;
            }
        },

        mouseout: function(){
            this.autoPlay();
        },

        /**
         * 组件销毁策略，如果有使用第三方组件务必在此先销毁第三方组件再销毁自己
         *
         * @protected
         * @method  module:pool/module-rotation/src/component/rotation/component.Rotation#destroy
         * @returns {void}
         */
        destroy: function () {
            // TODO
            this.supr();
        }
    });

    return RotationSlide;
});
