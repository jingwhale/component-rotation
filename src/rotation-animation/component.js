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
    'pool/nej/src/util/lazy/image',
    './component/src/ux-rotation-item/ui.js'
],function(
    Component,
    util,
    image,
    rotationItem
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
                currentImgIndex: 0,
                nextImgIndex: 0,
                currentAnimationTag: false,
                nextAnimationTag: false,
                clickType: 0,
                rightAnimation: false,
                picNo: 1,
                outAnimation: "fadeOut",
                inAnimation: "fadeIn",
                showNext: false,
                arrLength: this.data.picArr.length,
                disableClick: false,
                selfUI: false
            });

            this.data.currentImg = this.data.picArr.slice(this.data.currentImgIndex,this.data.count);
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

            if(this.data.arrLength == this.data.count){
                this.data.disableClick = true;
                this.$update();
            }

            this.data.autoplay && this.autoplay();
        },


        mouseenter: function(){
            this.clearTimer();
        },

        clearTimer: function(){
            if(this.autoplayTimer){
                window.clearTimeout(this.autoplayTimer);
            }
        },

        mouseout: function(){
            this.data.autoplay && this.autoplay();
        },
        /**
         * 按钮点击处理
         *
         * @protected
         * @method  module:pool/module-rotation/src/component/rotation/component.Rotation-animation#doClick
         * @returns {void}
         */
        doClick: function(_type){
            this.clearTimer();

            if(this.data.arrLength == this.data.count){
                return;
            }
            if(_type=='left'){
                if((this.data.nextImgIndex-this.data.count)<0){
                    this.data.nextImgIndex = (Math.ceil(this.data.arrLength/this.data.count)-1)*this.data.count;
                }else{
                    this.data.nextImgIndex -= this.data.count;
                }
            }else if(_type=='right'){
                if((this.data.nextImgIndex+this.data.count)>this.data.arrLength){
                    this.data.nextImgIndex = 0;
                }else{
                    this.data.nextImgIndex += this.data.count;
                }
            }

            this.data.nextImg = this.data.picArr.slice(this.data.nextImgIndex,this.data.nextImgIndex+this.data.count);

            this.data.clickType = _type;
            //播放动画
            this.data.currentAnimationTag = true;
            this.$update();
        },

        /**
         * 图片替换函数
         *
         * @protected
         * @method  module:pool/module-rotation/src/component/rotation/component.Rotation-animation#changePic
         * @returns {void}
         */
        changePic: function(){
            this.data.currentImgIndex = this.data.nextImgIndex;

            this.data.currentImg = this.data.picArr.slice(this.data.currentImgIndex,this.data.currentImgIndex+this.data.count);
            this.data.nextImg = [];
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
         * 下一个图片动画结束执行函数
         *
         * @protected
         * @method  module:pool/module-rotation/src/component/rotation/component.Rotation-animation#nextAimationOver
         * @returns {void}
         */
        autoplay: function () {
            var that = this;
            this.autoplayTimer = setInterval(function(){  //打开定时器
                this.doClick('right'); //模拟触发数字按钮的click事件
            }._$bind(this),this.data.autoplay);
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

