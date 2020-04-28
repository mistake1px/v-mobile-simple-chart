<template>
  <div id="app">
    <line-chart :chartData="chartData" style="width: auto;height: 140px;"/>
    <bar-chart :chartData="barData" style="width: auto;height: 220px;"/>
    <pie-chart :chartData="pieData" style="width: auto;height: 300px;"/>
  </div>
</template>

<script>
import { LineChart, BarChart, PieChart } from '../packages/index'

export default {
  name: 'App',
  components: { LineChart, BarChart, PieChart },
  data() {
    return {
      chartData: [
        { key: 'Mon', value: 54 },
        { key: 'Tue', value: 4 },
        { key: 'Wed', value: 24 },
        { key: 'Thu', value: 13 },
        { key: 'Fri', value: 68 },
        { key: 'Sat', value: 28 },
        { key: 'Sun', value: 44 }
      ],
      barData: [{
          color: '#FF6666',
          percent: 20,
          name: '苹果'
        },{
          color: '#009966',
          percent: 49.4,
          name: '香蕉'
        },{
          color: '#FF9900',
          percent: 30.6,
          name: '樱桃'
        },{
          color: '#CC6699',
          percent: 100,
          name: '杨桃'
        }],
      pieData: [{
          "value": .15,        // 每一个数据占用的比例
          "color": "#FF9999"  // 绘制扇形的颜色
        },
        {
          "value": .2,        // 每一个数据占用的比例
          "color": "#FF6A2D"  // 绘制扇形的颜色
        },
        {
            "value": .3,
            "color": "#54C73D"
        },
        {
            "value": .35,
            "color": "#66cccc"
        }]
    }
  }
}
</script>
