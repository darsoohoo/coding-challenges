// give a string of zeroes and ones = '00100010100101' -
// you have to switch the longest subset of zeros with hashes '001###10100101' 

const string = '00100010100101'

const replaceZeroes = (str) => {
    let output = '';
    let currentLongest = "";
    let longestLength = 0
    let indexOfZeroes = 0;
    // find the longest length of zeroes, save the index of where those zeroes start

    for (let i = 0; i < str.length; i++) {
        // is current character a 0?
        if (str[i] === "0") {
            currentLongest += str[i];
            if (currentLongest.length > longestLength) {
                longestLength = currentLongest.length;
                indexOfZeroes = i - longestLength + 1
            }
        } else {
            currentLongest = ""
        }
    }

    console.log("indexofzeroes", indexOfZeroes)
    const getHashes = (numOfHashes) => {
        let hashes = ""
        for (let i = 0; i < numOfHashes; i++) {
            hashes += "#";
        }
        return hashes;
    }

    // replace the length of 0 at the index of indexofzeroes

    const beginning = str.substring(0, indexOfZeroes)
    const hashes = getHashes(longestLength)
    const end = str.substring(indexOfZeroes + longestLength, str.length)
    output = beginning + hashes + end;

    return output;
}

console.log(replaceZeroes(string))
