const string = 'Hello World!';

const reverseString = (str) => {
    const array = str.split('')
    console.log(array)

    const reverseArray = array.reverse()
    console.log(reverseArray)

    return reverseArray.join('')


    
}

console.log(reverseString(string))