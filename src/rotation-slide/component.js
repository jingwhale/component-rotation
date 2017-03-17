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
                srcArr: ['http://edu-image.nosdn.127.net/2584CBD8F8B14937388D05C4789BB50F.jpg','http://edu-image.nosdn.127.net/BE60F7A483A800BB9811966523DE330A.jpg','http://edu-image.nosdn.127.net/94FB626EDF7B157846E8DCDCA309B43C.jpg'],
                picNo: 1
            });
            this.supr();
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
         * 左按钮点击处理函数
         *
         * @protected
         * @method  module:pool/module-rotation/src/component/rotation/component.Rotation#init
         * @returns {void}
         */
        prevClick: function(){
            var _that = this;
            this.data.picNo--;

            //if(this.data.picNo ==0){
            //    this.data.picNo=3;
            //}else if(this.data.picNo<0){
            //    this.data.picNo=2;
            //}


            if(this.data.picNo<1){
                this.data.picNo=3;
            }

            var _node = $(this.data.frameParent).find("li:last-child");
            var temp=_node.clone();
            _node.remove();
            temp.css({marginLeft:"-300px"}).children().attr("src",_that.data.srcArr[_that.data.picNo-1]);
            //temp.css({marginLeft:"-300px"}).children().attr("data-src",_that.data.srcArr[_that.data.picNo-1]);
            $(_that.data.frameParent).prepend(temp);
            $(this.data.frameParent).find("li:first-child").animate({
                marginLeft:"0"
            },1000);
        },

        /**
         * 右按钮点击处理函数
         *
         * @protected
         * @method  module:pool/module-rotation/src/component/rotation/component.Rotation#init
         * @returns {void}
         */
        nextClick: function(){
            var _that = this;
            this.data.picNo++;
            if(this.data.picNo==3){
                this.data.picNo=0;
            }else if(this.data.picNo==4){
                this.data.picNo=1;
            }
            $(this.data.frameParent).find("li:first-child").animate({
                marginLeft:"-300px"
            },1000,function(){
                var temp=$(this).clone();
                $(this).remove();
                temp.css({marginLeft:"0"}).children().attr("src",_that.data.srcArr[_that.data.picNo]);
                //temp.css({marginLeft:"0"}).children().attr("data-src",_that.data.srcArr[_that.data.picNo]);
                $(_that.data.frameParent).append(temp);
            });
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
