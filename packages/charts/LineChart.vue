<template>
  <div ref="container"></div>
</template>

<script>
import prepareCanvas from '../utils/prepareCanvas'
import handleChartData from '../utils/handleChartData'

export default {
  name: 'LineChart',
  props: {
    container: String || null,
    chartData: Array
  },
  data() {
    return {
      context: null,
      width: 0,
      height: 0,
      yAxis: [],
      xAxis: []
    }
  },
  mounted () {
    const { context, width, height } = prepareCanvas(this.$refs.container)
    this.context = context
    this.width = width
    this.height = height
    const { xAxis, yAxis } = handleChartData(this.chartData)
    this.yAxis = yAxis
    this.xAxis = xAxis
    this.drawAxis()
    this.draw()
  },
  methods: {
    draw() {
      // 找出每个值对应的像素点位置
      const maxY = this.yAxis.length && this.yAxis[this.yAxis.length - 1]
      const minY = this.yAxis[0]
      const xStep = (this.width - 20) / this.xAxis.length
      const yStep = (this.height - 20) / (maxY - minY)
      this.context.moveTo(20, (maxY - this.chartData[0].value) * yStep)
      for (let i=0;i<this.xAxis.length;i++) {
        const target = this.chartData.find(item => item.key === this.xAxis[i])
        this.context.lineTo(20 + xStep * i, (maxY - target.value ) * yStep)
        this.context.stroke()
      }
    },
    drawAxis() {
      const maxY = this.yAxis.length && this.yAxis[this.yAxis.length - 1]
      const minY = this.yAxis[0]
      // 先画纵轴
      this.context.beginPath()
      this.context.moveTo(20, 0)
      this.context.fillText(maxY, 0, 12)
      this.context.lineTo(20, this.height - 20)
      this.context.fillText(minY, 0, this.height - 20)
      this.context.lineTo(this.width - 20, this.height - 20)
      this.context.stroke()
      // 横纵
      const step = (this.width - 20) / this.xAxis.length
      for (let i=0;i<this.xAxis.length;i++) {
        this.context.fillText(this.xAxis[i], i * step + 20, this.height - 8)
      }
    }
  }
}
</script>
