<template>
  <div ref="container"></div>
</template>

<script>
import prepareCanvas from '../utils/prepareCanvas'

export default {
  name: 'BarChart',
  props: {
    chartData: Array
  },
  data() {
    return {
      context: null,
      width: 0,
      height: 0,
    }
  },
  mounted() {
    const { context, width, height } = prepareCanvas(this.$refs.container)
    this.context = context
    this.width = width
    this.height = height
    this.draw(this.context, this.chartData)
  },
  methods: {
    draw(ctx, data) {
      let timer = null;
      cancelAnimationFrame(timer); 

      let siteY = 20;
        // siteX 绘制区域的水平起始坐标
        // width:总长度
        // verticalSpace 柱状图竖直间隔
        // titleSpace 标题和柱状图的竖直距离
        // subTitleSpace 子标题(描述) 柱状图右侧距离
        // rectH 矩形高度
      const siteX = 10, 
        width = 200, 
        verticalSpace = 50, 
        titleSpace = 5, 
        subTitleSpace = 20, 
        rectH = 16
      const step = () => {
        let flag = true;
        // 重置绘制区域的竖直起始坐标
        siteY = 20;
        // 清空画布
        ctx.clearRect(0, 0, this.width, this.height);
        for (let item of data) {
          let speed = 0, target = item.percent * width / 100
          // 设置默认lastWidth
          item.lastWidth = item.lastWidth || 0;
          // 匀减速
          speed = (target - item.lastWidth) / 8;
          //清除小数
          speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
          
          item.lastWidth = item.lastWidth + speed;
          // 判断边界值
          if(item.lastWidth > target) {
            item.lastWidth = target
          }
          // 绘制标题  
          ctx.fillStyle = '#333'
          ctx.fillText(item.name, siteX, siteY)
          // 绘制矩形
          ctx.fillStyle = item.color
          ctx.fillRect(siteX, siteY + titleSpace, item.lastWidth, rectH);
          // 绘制子标题
          ctx.fillStyle = '#333';
          ctx.fillText(`${item.percent}%`, item.lastWidth + subTitleSpace, siteY + titleSpace + rectH - 3);
          // 增加间隔
          siteY = siteY + verticalSpace
          if (item.lastWidth != target){
            flag = false
          }
        }
        flag ? cancelAnimationFrame(timer)
          : timer = window.requestAnimationFrame(step);
      }
      timer = requestAnimationFrame(step);
    }
  }
}
</script>