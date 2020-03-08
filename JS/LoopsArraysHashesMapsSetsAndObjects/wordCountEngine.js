function wordCountEngine(document) {
  let newDoc = document.split(" ");
  let myMap = countWords(newDoc);
  let resultArray = [];
  let weightIterartor = 0;
  for (const prop of myMap) {

    resultArray.push([prop, myMap[prop], weightIterartor]);
    weightIterartor++;
  }
  resultArray = [...myMap.entries()]
  resultArray.sort(weightedSort);
  resultArray = resultArray.map(convertIndexOneToStringAndFormat);


  return resultArray;
  // your code goes here
}

function countWords(newDoc) {
  let myMap = new Map();
  for (let i = 0; i < newDoc.length; i++) {
    let myWord = sanitizeWord(newDoc[i]);
    if (!myWord) continue;
    else if (!myMap.has(myWord)) {
      myMap.set(myWord, {val:1, weight: i});
    } else  myMap.get(myWord).val++;
  }
  return myMap;
}

function sanitizeWord(word) {
  word = word.toLowerCase();
  word = word.replace(/[\W_]+/g, "");
  return word;
}


function weightedSort(a,b){
  if (b[1].val - a[1].val === 0) return a[1].weight - b[1].weight;
  else return b[1].val - a[1].val;
}

function convertIndexOneToStringAndFormat(array) {
  array[1] = array[1].val.toString();
  return array;
}



document =
  "Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors. ";

console.log(wordCountEngine(document));


// x = 0
// y = 0
// d = 3
// length = 10
// halfLength = 5
// 0,0
// -5,0
// 5,0
// -5,5
// -5,-5
// 5,5
// 5,-5

// -2.5, 2.5
// -2.5, -2.5
// 2.5, 2.5
// 2.5, -2.5
