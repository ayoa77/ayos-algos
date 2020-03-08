function pali(arrayFromString, left=0, right=arrayFromString.length-1){
  if (!arrayFromString || arrayFromString.length === 0) return false;
  if(typeof arrayFromString === "string") arrayFromString = arrayFromString.split("");

  if(arrayFromString[left] !== arrayFromString[right])
    return false;
  else if(left < right && arrayFromString[left] === arrayFromString[right]){
    left++;
    right--;
    return pali(arrayFromString,left,right);
  }
  else return true;
}
let string0 = "mypaliilapym";
let string1 = "mypaliailapym";
let string2 = "mypaliasilapym";
let string3 = "1";
let string4 = "";

console.assert(pali(string0) === true, "string0 = 'mypaliilapym' - Test Failed: Expecting false");
console.assert(pali(string1) === true, "string1 = 'mypaliailapym' - Test Failed: Expecting false");
console.assert(pali(string2) === false, "string2 = 'mypaliasilapym' - Test Failed: Expecting false");
console.assert(pali(string3) === true, "string3 = '1' - Test Failed: Expecting true");
console.assert(pali(string4) === false, "string4 = '' Test Failed: Expecting false");