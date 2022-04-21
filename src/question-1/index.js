console.log('hello is this consoling?')

const arrayFruits = ['Apple', 'Banana', 'Orange', 'Coconut']

const reverseArray = (arr) => {
  //1 intializing empty array
  let newReverseArray = []
  // 2: subtracting 1 from index since indices start with 0
  // 3: subtract until i is greater than 0
  for (let i = arr.length - 1; i >= 0; i--) {
    //   4: push array to end of the new reverse array
    newReverseArray.push(arr[i])
  }
  return newReverseArray
}

console.log(reverseArray(arrayFruits))
