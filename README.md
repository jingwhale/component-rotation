# Rotation 组件

## 组件状态

[![build status](https://g.hz.netease.com/edu-frontend/component-rotation/badges/master/build.svg)](https://g.hz.netease.com/edu-frontend/component-rotation/commits/master)

## 组件文档

组件详细文档请查看 [这里](./docs/index.html)

## 样式重写

样式的层级结构如下所示

```bash
ux-rotation
   |- ux-rotation_xxx ux-rotation_xxx__aa   描述描述
   |- ux-rotation_yyy ux-rotation_yyy__bb   描述描述
   |- ux-rotation_zzz                            描述描述
```

可用的控制样式表

| 名称 | 描述 |
| :--- | :--- |
| z-dis | 描述描述 |
| z-crt | 描述描述 |

## 使用范例

### 标签化使用

组件关联的结构可如下所示

```html
<ux-rotation></ux-rotation>
```

### 脚本中使用

组件内置样式和结构，使用者如果样式与结构同内置一致则可以直接使用，范例如下

```javascript
NEJ.define([
    'pool/component-rotation/src/rotation/ui'
],function(
    RotationUI
){
    var Rotation = new RotationUI({
        data:{
            
        }
    });
    Rotation.$inject('#parent');
})
```