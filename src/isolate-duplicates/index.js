/*
Pseudocode
- check if the text is a string or not
	- if its not, throw an error
- make an empty str to hold the final str
- make an empty arr to push the final answer into
- make an empty arr to push the duplicates into
- set counter for the duplicates
- loop through the text
- if the the index in the array is === to the previous text and the previous two texts then it should be pushed into the duplicate arr
	- but if the index in the array isn't equal to the previous text then it should open the new arr to hold the duplicates if there are any
	- count the duplicates
*/
function isolateDuplicates(text) {
    console.log(typeof text === "string");
    if (typeof text !== "string") throw "Please enter a valid string";
    let newStr = '';
    let finalArr = [];
    let duplicateArr = [];
    let myCount = 0;
    for (let i = 0; i < text.length; i++) {
        let currentTxt = text[i];
        let previousTxt = text[i - 1];
        let previous2Txt = text[i - 2];
        if (currentTxt.toLowerCase() === (previousTxt && previousTxt.toLowerCase()) && currentTxt.toLowerCase() === (previous2Txt && previous2Txt.toLowerCase())) {
            duplicateArr.push(currentTxt);

        } else if ((currentTxt && currentTxt.toLowerCase()) !== (previousTxt && previousTxt.toLowerCase()) && duplicateArr.length > 0) {
            newStr += '[' + duplicateArr.join('') + ']' + currentTxt
            duplicateArr = [];
            myCount++;
        } else {
            newStr += currentTxt;
        }
        // if the last letter in the text is a duplicate;
        if (text.length - 1 === i && duplicateArr.length > 0) {
            newStr += '[' + duplicateArr.join('') + ']'
            duplicateArr = [];
            myCount++;
        }
    }
    finalArr.push(newStr, myCount);
    // console.log(duplicateArr);
    return finalArr;
}

module.exports = isolateDuplicates;