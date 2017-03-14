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
            // FIXME 设置组件配置信息的默认值
            util.extend(this, {

            });
            // FIXME 设置组件视图模型的默认值
            util.extend(this.data, {
                currenImgIndex: 0,
                animationTag: false,
                clickType: 0,
                rightAnimation: false,
                srcArr: ['http://edu-image.nosdn.127.net/2584CBD8F8B14937388D05C4789BB50F.jpg','http://edu-image.nosdn.127.net/BE60F7A483A800BB9811966523DE330A.jpg','http://edu-image.nosdn.127.net/94FB626EDF7B157846E8DCDCA309B43C.jpg'],
                picNo: 1,
                animationType: 'flipInX',
                showNext: false
            });
            this.supr();
            this.data.currenImg = this.data.srcArr[this.data.currenImgIndex];
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
            this.initNode();
            //_image._$$LazyImage._$allocate({
            //    parent:this.data.rotationCenter,
            //    attr:'src'
            //});
        },

        initNode: function () {
            // TODO
            this.data.oneFrame = this.$refs.oneFrame;
            this.data.twoFrame = this.$refs.twoFrame;
            this.data.frameParent = this.$refs.frameParent;
            this.data.rotationCenter = this.$refs.rotationCenter;
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
            //切换图片
            this.changePic();
            //播放动画
            this.data.animationTag = true;
        },

        /**
         * 图片替换函数
         *
         * @protected
         * @method  module:pool/module-rotation/src/component/rotation/component.Rotation-animation#changePic
         * @returns {void}
         */
        changePic: function(){
            if(this.data.clickType==0){
                if(this.data.currenImgIndex==0){
                    this.data.currenImgIndex = 2;
                }else{
                    this.data.currenImgIndex--;
                }
            }else if(this.data.clickType==1){
                if(this.data.currenImgIndex==2){
                    this.data.currenImgIndex = 0;
                }else{
                    this.data.currenImgIndex++;
                }
            }
            this.data.currenImg = this.data.srcArr[this.data.currenImgIndex];
        },

        /**
         * 动画结束执行函数
         *
         * @protected
         * @method  module:pool/module-rotation/src/component/rotation/component.Rotation-animation#animationOver
         * @returns {void}
         */
        animationOver: function () {
            // TODO
            this.data.animationTag = false;
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

