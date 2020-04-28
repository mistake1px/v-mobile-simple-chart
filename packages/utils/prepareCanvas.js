export default function (ref) {
  let { width, height } = ref.getBoundingClientRect()
  if (!height) {
    height = 300
  }
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  // 解决锯齿问题
  const ratio = window.devicePixelRatio || 1
  canvas.style.width = width + 'px'
  canvas.style.height = height + 'px'
  canvas.width = width * ratio
  canvas.height = height * ratio
  context.scale(ratio, ratio)
  context.font = '10px Helvetica Neue,Helvetica,Arial,sans-serif'
  context.lineWidth = 1
  ref.append(canvas)
  return {
    context,
    width,
    height
  }
}