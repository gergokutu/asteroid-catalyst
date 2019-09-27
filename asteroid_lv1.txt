const fs = require('fs')

const getData = (callback) => {
  fs.readFile('lvl1-0.inp.html', function(err, contents) {
    return callback(contents.toString())
  })
}

getData(response => {
  const rawInput = response.split('\n')
  const firstLineOfRawInput = rawInput.shift()
  const firstLineInArray = firstLineOfRawInput.split(' ')
  console.log('firstLineOfInput:', firstLineInArray)

  const myInputLength = rawInput.length - 1
  // console.log('myInputLength:', myInputLength)
  const data = rawInput.splice(0, myInputLength).map(array => array.split(' '))
  console.log('asteroid info:', data)

  const numOfRowsInABlock = parseInt(data[0][1], 10) + 1
  console.log('numOfRaws:', numOfRowsInABlock)

  const numOfBlocks = data.length / numOfRowsInABlock
  console.log('numOfBlocks:', numOfBlocks)

  const timeStamp = []
  
  const firstBlock = data.splice(0, numOfRowsInABlock)
  const firstTimeStamp = firstBlock.shift()
  console.log('firstTimeStamp:', firstTimeStamp)
  console.log('firstBlock:', firstBlock)

  const secondBlock = data.splice(0, numOfRowsInABlock)
  const secondTimeStamp = secondBlock.shift()
  const blockSum = secondBlock.map(row => row.reduce((num, sum) => parseInt(num + sum)))
  const blockResult = blockSum.reduce((num, sum) => num + sum)
  console.log('secondTimeStamp:', secondTimeStamp)
  console.log('secondBlock:', secondBlock)
  console.log('SUM:', blockSum)
  console.log('RESULT:', blockResult)
  
  if (blockResult !== 0) {
    timeStamp.push(blockResult)
    console.log('timeStamp:', timeStamp)
  }

  const thirdBlock = data.splice(0, numOfRowsInABlock)
  const thirdTimeStamp = thirdBlock.shift()
  console.log('thirdTimeStamp:', thirdTimeStamp)
  console.log('thirdBlock:', thirdBlock)
})









