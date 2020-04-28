# v-mobile-charts

## 介绍

项目中有几个地方需要用到图表，但是引入echarts这样大型的图表组件，就有点大材小用了，所以就用canvas，依据场景画了几个图表，仅供参考～

## 效果图

![demo示例图](https://github.com/mistake1px/v-mobile-simple-chart/example/demo.jpg)

## line-chart

props:

``` js
chartData: [
  { key: 'Mon', value: 54 },
  { key: 'Tue', value: 4 },
  { key: 'Wed', value: 24 },
  { key: 'Thu', value: 13 },
  { key: 'Fri', value: 68 },
  { key: 'Sat', value: 28 },
  { key: 'Sun', value: 44 }
]
```

## bar-chart

props:

``` js
[{
  color: '#FF6666',
  percent: 20,
  name: '苹果'
}, {
    color: '#009966',
    percent: 49.4,
    name: '香蕉'
}, {
    color: '#FF9900',
    percent: 30.6,
    name: '樱桃'
}, {
    color: '#CC6699',
    percent: 100,
    name: '杨桃'
}]
```

## pie-chart

props:

``` js
[{
  "value": .15,        // 每一个数据占用的比例
  "color": "#FF9999"  // 绘制扇形的颜色
},
{
  "value": .2,
  "color": "#FF6A2D"
},
{
  "value": .3,
  "color": "#54C73D"
},
{
  "value": .35,
  "color": "#66cccc"
}]
```
