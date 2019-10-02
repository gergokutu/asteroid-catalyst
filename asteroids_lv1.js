// import files with node.js file system
const fs = require('fs')

const getAndWriteData = (callback) => {
    fs.readFile('lvl1-4.inp.txt', function(err, contents) {
      return callback(contents.toString())
    })
}

getAndWriteData(response => {
  // create array from imported data by every new line
  const rawInput = response.split('\n')

  // shift method changes the original rawInput
  const firstLineOfRawInput = rawInput.shift()
  const firstLineInArray = firstLineOfRawInput.split(' ')

  const myInputLength = rawInput.length - 1
  const data = rawInput.splice(0, myInputLength).map(array => array.split(' '))
  const numOfRowsInABlock = parseInt(data[0][1], 10) + 1
  const numOfBlocks = data.length / numOfRowsInABlock

  const timeStamps = []

  // every iteration checks the next block...

  for (let index = 0; index < numOfBlocks * numOfRowsInABlock; index = index + numOfRowsInABlock) {
    const block = data.splice(0, numOfRowsInABlock)
    const timeStampRow = block.shift()
    const sumOfPicRows = block.map(row => row.reduce((accumulator, currentValue) => parseInt(accumulator + currentValue)))
    const blockSum = sumOfPicRows.reduce((accumulator, currentValue) => accumulator + currentValue)

    if (blockSum !== 0) {
      timeStamps.push(parseInt(timeStampRow[0]))
      console.log('TIMESTAMPS of the asteroids:', timeStamps)
    }
  }

  fs.writeFile('asteroid_4_processed.txt', timeStamps, function (err) {
    if (err) throw err;
    console.log('Saved!');
  })
})









