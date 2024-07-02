export function yearDiff(date1: Date, date2: Date) {
  const msInYear = 31536000000
  const diffInMs = Math.abs(date2.getTime() - date1.getTime())
  let diffInYears = diffInMs / msInYear

  const firstDecimal = Math.floor((diffInYears * 10) % 10)

  if (firstDecimal === 5) {
    diffInYears = Math.floor(diffInYears * 10) / 10
  } else {
    diffInYears = Math.round(diffInYears)
  }

  return diffInYears
}
