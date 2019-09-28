const fs = require('fs')

const getData = (callback) => {
  fs.readFile('lvl1-0.inp.html', function(err, contents) {
    return callback(contents.toString())
  })
}

getData(response => {
  console.log('RAW:', response)

  const rawInput = response.split('\n')
  const firstLineOfRawInput = rawInput.shift()
  const firstLineInArray = firstLineOfRawInput.split(' ')
  console.log('firstLineInArray:', firstLineInArray)

  const myInputLength = rawInput.length - 1
  const data = rawInput.splice(0, myInputLength).map(array => array.split(' '))
  console.log('asteroid info:', data)

  const numOfRowsInABlock = parseInt(data[0][1], 10) + 1
  console.log('numOfRowsInABlock:', numOfRowsInABlock)

  const numOfBlocks = data.length / numOfRowsInABlock
  console.log('numOfBlocks:', numOfBlocks)

  const timeStamps = []

  const block = data.splice(0, numOfRowsInABlock)
  const timeStampRow = block.shift()
  const sumOfPicRows = block.map(row => row.reduce((accumulator, currentValue) => parseInt(accumulator + currentValue)))
  const blockSum = sumOfPicRows.reduce((accumulator, currentValue) => accumulator + currentValue)
  console.log('timeStampRow:', timeStampRow)
  console.log('block:', block)
  console.log('sumOfPicRows:', sumOfPicRows)
  console.log('blockSum:', blockSum)
  
  if (blockSum !== 0) {
    timeStamps.push(parseInt(timeStampRow[0]))
    console.log('timeStamp:', timeStamps)
  }
})









