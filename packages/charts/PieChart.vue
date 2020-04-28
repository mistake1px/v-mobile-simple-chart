<template>
  <div ref="container"></div>
</template>

<script>
import prepareCanvas from '../utils/prepareCanvas'
import toRadian from '../utils/toRadian'

export default {
  name: 'PieChart',
  props: ['chartData'],
  data() {
    return {
      context: null,
      width: 0,
      height: 0 
    }
  },
  mounted() {
    const { context, width, height } = prepareCanvas(this.$refs.container)
    this.context = context
    this.width = width
    this.height = height
    this.draw(this.context)
  },
  methods: {
    draw(ctx) {
      const circle = {
        cx: 140,
        cy: 140,
        radius: 100,
        startAngle: -90
      }
      this.chartData.forEach(item => {
        ctx.beginPath()
        let half = item.value * 360 / 2 + circle.startAngle
        let cos = Math.cos(toRadian(half))
        let sin = Math.sin(toRadian(half))
        // 外部线转折点
        var marginX = circle.cx + circle.radius * cos * 1.2
        var marginY = circle.cy + circle.radius * sin * 1.2
        // 内部百分比
        var percentX = circle.cx + circle.radius*cos/2;
        var percentY = circle.cy + circle.radius*Math.sin(toRadian(half))/2;
        var percent = (item.value*100).toFixed(1) + '%';
        // 外部文字长度
        var wordLength = ctx.measureText(percent).width;

        ctx.strokeStyle = item.color;
        ctx.moveTo(percentX, percentY);
        ctx.lineTo(marginX, marginY);
        if (cos < 0) {
          ctx.textAlign = "right";
          ctx.lineTo(marginX - wordLength, marginY);
        } else {
          ctx.textAlign = "left";
          ctx.lineTo(marginX + wordLength,marginY);
        }
        ctx.stroke();
        // 文字
        ctx.fillStyle = item.color;
        console.log(item.value * 360 / 2 + circle.startAngle)
        if (half > 0 && half < 180) {
          ctx.fillText(percent, marginX, marginY + 12);
        } else {
          ctx.fillText(percent, marginX, marginY - 6);
        }
        ctx.closePath();
        ctx.beginPath()
        // 回到圆心
        ctx.moveTo(circle.cx, circle.cy);
        // 画扇形
        ctx.arc(circle.cx, circle.cy, circle.radius, toRadian(circle.startAngle), toRadian(circle.startAngle += item.value*360),false);
        ctx.fillStyle = item.color;
        ctx.fill();
        // 文字
        ctx.fillStyle = '#fff';
        ctx.textAlign = "center";
        ctx.fillText(percent, percentX, percentY);
        ctx.closePath()
      })
    }
  }
}
</script>
