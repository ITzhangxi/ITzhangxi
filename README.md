# Button使用

-------



### 1.基本用法

> Button 组件默认提供7种主题，由type属性来定义，默认为default。

``` javaScript
<zt-button>默认按钮</zt-button>
<zt-button type="primary">主要按钮</zt-button>
<zt-button type="text">文字按钮</zt-button>
```

### 2.禁用状态

> 你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。

``` javaScript
<zt-button :plain="true" :disabled="true">主要按钮</zt-button>
<zt-button type="primary" :disabled="true">主要按钮</zt-button>
<zt-button type="text" :disabled="true">文字按钮</zt-button>
```

### 3.自动聚焦

> 你可以使用autofocus属性来定义按钮是否自动聚焦（自动高亮），它接受一个Boolean值。
```javaScript
<zt-button :autofocus="true">默认按钮</zt-button>
```


### 4.默认显示颜色

```javaScript
<zt-button type="success">成功按钮</zt-button>
<zt-button type="warning">警告按钮</zt-button>
<zt-button type="danger">危险按钮</zt-button>
<zt-button type="info">信息按钮</zt-button>
```

### 5.hover(鼠标触发)显示的颜色

```javaScript
<zt-button :plain="true" type="success">成功按钮</zt-button>
<zt-button :plain="true" type="warning">警告按钮</zt-button>
<zt-button :plain="true" type="danger">危险按钮</zt-button>
<zt-button :plain="true" type="info">信息按钮</zt-button>
```


### 6.图标按钮

> 我们这个图表按钮中的字体图标采用的是[fontawesome](http://fontawesome.io/)的字体图表，icon值为[fontawesome](http://fontawesome.io/)官方提供的class类名一致即可

```javaScript
<zt-button type="success" icon="fa fa-refresh fa-spin fa-fw"></zt-button>
<zt-button type="success" icon="fa fa-reply">回撤</zt-button>
<zt-button type="success" icon="fa fa-search">搜索</zt-button>
<zt-button type="success" icon="fa fa-pencil-square-o">编辑</zt-button>
```


### 7.不同尺寸

> 额外的尺寸：large、small、mini，通过设置size属性来配置它们。
```JS
<zt-button type="primary" size="large">大型按钮</zt-button>
<zt-button type="primary">正常按钮</zt-button>
<zt-button type="primary" size="small">小型按钮</zt-button>
<zt-button type="primary" size="mini">超小按钮</zt-button>
```


### 8.属性（Attributes）
|  参数        | 说明   |  类型 | 可选值 | 默认值 |
| :--------:   | :-----:  | :----:  | :----: | :----:  |
| size     | 尺寸 |   string  | large,small,mini | — |
| type     | 类型 |   string  | primary,success,warning,danger,info,text | — |
| plain     | 是否朴素按钮 |   Boolean  | — | false |
| disabled     | 是否禁用状态 |   Boolean  | — | false |
| icon     | [图标](http://fontawesome.io/) |   string  | — | — |
| autofocus     | 是否默认聚焦 |   Boolean  | — | false |
| native-type     | 原生 type 属性 |   button,submit,reset  | — | button |





----
* 备注：样式请参照[element-ui](http://element.eleme.io/#/zh-CN/component/button)



## 运行此button
终端至于根目录

```
npm install    // 下载依赖包
npm run dev    // 使用8092端口打开
```
