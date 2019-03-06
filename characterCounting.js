function countLetters (str) {
  var rep = str.replace(/ /g, '');
  var splitStrArr = rep.split('');
  var strObj = {};
  for (var i = 0; i < splitStrArr.length; i++) {
    if (strObj.hasOwnProperty(splitStrArr[i])) {
      strObj[splitStrArr[i]]++;   
      } else {
        strObj[splitStrArr[i]] = 1;
   } 
  }
  return strObj;
}

console.log(countLetters("Lighthouse Labs"));
