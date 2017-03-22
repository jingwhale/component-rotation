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
                disableClick: false
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
        },

        /**
         * 按钮点击处理
         *
         * @protected
         * @method  module:pool/module-rotation/src/component/rotation/component.Rotation-animation#doClick
         * @returns {void}
         */
        doClick: function(_type){
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

            //if(this.data.clickType=='left'){
            //    if((this.data.nextImgIndex-this.data.count)<0){
            //        this.data.nextImgIndex = (Math.ceil(this.data.arrLength/this.data.count)-1)*this.data.count;
            //    }else{
            //        this.data.nextImgIndex -= this.data.count;
            //    }
            //}else if(this.data.clickType=='right'){
            //    if((this.data.nextImgIndex+this.data.count)>this.data.arrLength){
            //        this.data.nextImgIndex = 0;
            //    }else{
            //        this.data.nextImgIndex += this.data.count;
            //    }
            //}

            this.data.currentImg = this.data.picArr.slice(this.data.currentImgIndex,this.data.currentImgIndex+this.data.count);
            //this.data.nextImg = this.data.picArr.slice(this.data.nextImgIndex,this.data.nextImgIndex+this.data.count);
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
            console.log(this.data.currentImgIndex);
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

