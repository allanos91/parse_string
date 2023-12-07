function firstStep(input) {
  // Your code here
  let inputArr = input.split('&')
  return inputArr
}

function secondStep(input) {
  let arr = input.map(el => {
    return el.split('=')
  })
  return arr
}

function thirdStep(input) {
  // Your code here

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      let newStr = input[i][j].replace('+', ' ')
      if (input[i][j].includes('+')) {
        input[i][j] = newStr
      }
    }
  }
  return input
}

function fourthStep(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      let newStr = input[i][j].replace('%21', '!')
      if (input[i][j].includes('%21')) {
        input[i][j] = newStr
      }
    }
  }
  return input
}

function fifthStep(input) {
  // Your code here
  let obj = {}
  for (let i = 0; i < input.length; i++) {
    obj[input[i][0]] = input[i][1]
  }
  return obj
}

function parseBody(str) {
  // Your code here
  let step1 = firstStep(str)
  let step2 = secondStep(step1)
  let step3 = thirdStep(step2)
  let step4 = fourthStep(step3)
  let step5 = fifthStep(step4)
  return step5
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
