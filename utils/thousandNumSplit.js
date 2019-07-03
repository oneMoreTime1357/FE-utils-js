function thousandNumSplit (num) {
  if (!num || num === null) {
    return '---'
  }

  let reg = /(?=(\B\d{3})+$)/g
  return String(num).replace(reg, ',')
}

export default thousandNumSplit
