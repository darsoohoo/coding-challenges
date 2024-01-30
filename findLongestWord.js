const string = "The quick brown fox jumped over the lazy dog"

const findLongestWord = (str) => {
    const stringarray = str.split('')
    const chunksArray = []
    let chunk = ""
    // create array of words
    for (i = 0; i < stringarray.length; i++) {

        console.log(stringarray[i])
        if (stringarray[i] !== ' ') {
            chunk += stringarray[i]
            console.log(chunk)

        } else {
            chunksArray.push(chunk)
            chunk = ""
            console.log(chunksArray)

        }
    }
    console.log(chunksArray)
    //find longest word in array

    let indexOfLongestWord = 0
    let maxLength = 0
    let index = 0
    for (chunk of chunksArray) {
        let chunkLength = chunk.length;

        console.log(chunk)
        console.log(chunkLength)
        if (chunkLength > maxLength) {
            maxLength = chunkLength
            indexOfLongestWord = index
        }

        index++
    }



    //return the index of the longest word

    return chunksArray[indexOfLongestWord]

}

console.log(findLongestWord(string))