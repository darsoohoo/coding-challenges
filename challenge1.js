// IN: JPMORGANISHIRING , 3

// J   R   I   R
// P O G N S I I G
// M   A   H   N

// J     A R
// P   G NII
// M  R   IHN
// O S G
// OUT: "JRIRPOGNSIIGMAHN"

const str = "JPMORGANISHIRING"
const num = 3

const jpmorg = (chars, numRows) => {

    // create a myStorage for each number of rows
    // use each myStorage to store array of letters

    let output = ""
    let myStorage = {};
    console.log("numRows: ", numRows)
    console.log("chars: ", chars)
    let index = 0
    let numRowsCreated = 0
    let operation = "add"
    for (var char of chars) {
        // create myStorage and add character to myStorage
        // max of 3 rows (numRows)
        // numRowsCreared =< numRows
        if(numRowsCreated === numRows-1){
            operation = "subtract"
        }
        if (numRowsCreated === 0) {
            operation = "add"
        }

        console.log("index:", index, " - ", char, "numRowsCreated - ", numRowsCreated)
     
        if (!myStorage[numRowsCreated]) {
            myStorage[numRowsCreated] = char
            console.log("myStorage[char]:", myStorage[numRowsCreated])

            if(operation === "add") {
                numRowsCreated++
            }
            if (operation === "subtract") {
                numRowsCreated = numRowsCreated - 1
            }
        } else {
            console.log("myStorageNumbRowscreated", myStorage[numRowsCreated] )
            myStorage[numRowsCreated] = myStorage[numRowsCreated] +=char

            if (operation === "add") {
                numRowsCreated++
            }
            if (operation === "subtract") {
                numRowsCreated = numRowsCreated - 1
            }
  
        }
        index++
    }
    console.log("myStorage: ", myStorage)

    //loop through myStorage dinctionary
    // during each loop, increase the numRowsCounted
    // if numRowsCounted = numRowsCreated, set back to 0

    for (var value of Object.values(myStorage)) {
        console.log(value)
        output += value
    }

    return output
}

console.log(jpmorg(str, num))