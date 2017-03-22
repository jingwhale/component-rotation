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
    'pro/res/util/lazy/image'
],function(
    Component,
    util,
    _image
){
    /**
     * Rotation-animation 组件
     *
     * @class   module:pool/module-rotation/src/component/rotation/component.Rotation-animation
     * @extends module:pool/component-base/src/base.Component
     *
     * @param {Object} options      - 组件构造参数
     * @param {Object} options.data - 与视图关联的数据模型
     */
    var RotationAnimation = Component.$extends({
        /**
         * 模板编译前用来初始化参数
         *
         * @protected
         * @method  module:pool/module-rotation/src/component/rotation/component.Rotation-animation#config
         * @returns {void}
         */
        config: function () {
            this.supr();
            // FIXME 设置组件配置信息的默认值
            util.extend(this, {

            });
            // FIXME 设置组件视图模型的默认值
            util.extend(this.data, {
                currenImgIndex: 0,
                nextImgIndex: 1,
                currentAnimationTag: false,
                nextAnimationTag: false,
                clickType: 0,
                rightAnimation: false,
                picNo: 1,
                outAnimation: "fadeOut",
                inAnimation: "fadeIn",
                showNext: false
            });

            this.data.currenImg = this.data.picArr[this.data.currenImgIndex];
            this.data.nextImg = this.data.picArr[this.data.nextImgIndex];
        },

        /**
         * 模板编译之后(即活动dom已经产生)处理逻辑，可以在这里处理一些与dom相关的逻辑
         *
         * @protected
         * @method  module:pool/module-rotation/src/component/rotation/component.Rotation-animation#init
         * @returns {void}
         */
        init: function () {
            // TODO
            this.supr();

            //_image._$$LazyImage._$allocate({
            //    parent:this.data.rotationCenter,
            //    attr:'src'
            //});
        },

        /**
         * 按钮点击处理
         *
         * @protected
         * @method  module:pool/module-rotation/src/component/rotation/component.Rotation-animation#doClick
         * @returns {void}
         */
        doClick: function(_type){
            this.data.clickType = _type;
            //播放动画
            this.data.currentAnimationTag = true;
        },

        /**
         * 图片替换函数
         *
         * @protected
         * @method  module:pool/module-rotation/src/component/rotation/component.Rotation-animation#changePic
         * @returns {void}
         */
        changePic: function(){
            var _arrLength = this.data.picArr.length-1;

            this.data.currentImgIndex = this.data.nextImgIndex;

            if(this.data.clickType=='left'){
                if(this.data.nextImgIndex==0){
                    this.data.nextImgIndex = _arrLength;
                }else{
                    this.data.nextImgIndex--;
                }
            }else if(this.data.clickType=='right'){
                if(this.data.nextImgIndex==_arrLength){
                    this.data.nextImgIndex = 0;
                }else{
                    this.data.nextImgIndex++;
                }
            }

            this.data.currentImg = this.data.picArr[this.data.currentImgIndex];
            this.data.nextImg = this.data.picArr[this.data.nextImgIndex];
            this.$update();
        },

        /**
         * 当前图片动画结束执行函数
         *
         * @protected
         * @method  module:pool/module-rotation/src/component/rotation/component.Rotation-animation#currentAnimationOver
         * @returns {void}
         */
        currentAnimationOver: function () {
            // TODO
            this.data.showNext = true;
            this.data.currentAnimationTag = false;
            this.data.nextAnimationTag = true;
            this.$update();
        },

        /**
         * 下一个图片动画结束执行函数
         *
         * @protected
         * @method  module:pool/module-rotation/src/component/rotation/component.Rotation-animation#nextAimationOver
         * @returns {void}
         */
        nextAimationOver: function () {
            // TODO
            //切换图片
            this.changePic();
            this.data.showNext = false;
            this.data.nextAnimationTag = false;
            this.$update();
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

    return RotationAnimation;
});

