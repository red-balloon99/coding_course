function binarySearch(arr, element){

    let start = 0
    let end = arr.length - 1
    let midPoint = Math.floor((start + end) / 2)

    while(arr[midPoint] !== element && start < end) {
        if (element < arr[middle]) {
            stop = middle - 1
        } else {
            end = middle + 1
        }
        midPoint = Math.floor((start + midPoint) / 2)
    }

    return (arr[midPoint] !== element) ? -1 : midPoint
}

function recursiveBinarySearch(arr, element){


  element === arr[Math.floor(arr.length/2)] ? index = Math.floor(arr.length/2) : index = -1

  if (index > -1) {
    console.log('returning answer, here is the index: ');
    console.log(index);
    return index
  } else if (arr.length) {
    element > arr[Math.floor(arr.length/2)] ?
      arr = arr.splice(Math.floor(arr.length/2), arr.length-1) :
      arr.splice(Math.floor(arr.length/2));
      console.log('about to recursively call. arr is currently: ', arr);
      console.log('index is currently:', index);
      return recursiveBinarySearch(arr, element)
  } else {
    console.log('returning unfound ;', index);
    return index
  }
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}
