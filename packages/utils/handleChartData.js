export default function (chartData) {
  // 获取value的最大和最小
  const copyData = chartData.slice()
  copyData.sort((p, n) => {
    return p.value - n.value
  })
  let yAxis = copyData.reduce((prev, next) => {
    return prev.concat(next.value)
  }, [])
  let xAxis = chartData.reduce((prev, next) => {
    return prev.concat(next.key)
  }, [])

  return {
    yAxis, xAxis
  }
}