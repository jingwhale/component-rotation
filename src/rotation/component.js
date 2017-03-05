/**
 * Rotation 组件实现文件
 *
 * @version  1.0
 * @author   caijf <caijf@corp.netease.com>
 * @module   pool/module-rotation/src/component/rotation/component
 */
NEJ.define([
    'pool/component-base/src/base',
    'pool/component-base/src/util'
],function(
    Component,
    util
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
    var Rotation = Component.$extends({
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
                test: false,
                otherSwing: false,
                srcArr: ['1','2','3','4','5','6','7'],
                picNo: 1
            });
            this.supr();
            // TODO
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
        },

        initNode: function () {
            // TODO
            this.data.oneFrame = this.$refs.oneFrame;
            this.data.twoFrame = this.$refs.twoFrame;
            this.data.frameParent = this.$refs.frameParent;
        },

        leftClick: function(){
            var _that = this;
            this.data.picNo--;
            if(this.data.picNo<1){
                this.data.picNo=7;
            }
            var _node = $(this.data.frameParent).find("li:last-child");
            var temp=_node.clone();
            _node.remove();
            temp.css({marginLeft:"-300px"}).text(_that.data.srcArr[_that.data.picNo-1]);
            $(_that.data.frameParent).prepend(temp);
            $(this.data.frameParent).find("li:first-child").animate({
                marginLeft:"0"
            },1000);
        },

        rightClick: function(){
            var _that = this;
            this.data.picNo++;
            if(this.data.picNo==7){
                this.data.picNo=0;
            }else if(this.data.picNo==8){
                this.data.picNo=1;
            }
            $(this.data.frameParent).find("li:first-child").animate({
                marginLeft:"-300px"
            },1000,function(){
                var temp=$(this).clone();
                $(this).remove();
                //temp.css({marginLeft:"0"}).children().attr("src",this.data.srcArr[this.data.picNo]);
                temp.css({marginLeft:"0"}).text(_that.data.srcArr[_that.data.picNo]);
                $(_that.data.frameParent).append(temp);
            });
        },

        myclick: function () {
            debugger
            // TODO
            this.data.test = true;
            this.$update();
        },

        mycall: function () {
            debugger
            // TODO
            this.data.otherSwing = true;
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

    return Rotation;
});
