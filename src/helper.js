export function isNumber(n) {
  return !isNaN(parseInt(n)) && !isNaN(parseFloat(n)) && isFinite(n);
}

/*export function isNumber(n) {

  var number = n.toString()
  var pattern = /^\d+(\.\d+)?$/

}*/

export function sumDigitsOfNumber(number) {

 var sum=0;
 var numberString = number.toString(); 
 
 for(let i=0; i<numberString.length; i++) {
 	 
     sum=sum+parseInt(numberString[i]);
 }
 
 return sum;


}

