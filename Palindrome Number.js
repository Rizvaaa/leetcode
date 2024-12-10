/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr=x.toString().split('').map(Number);
    let rev=arr.reverse().join("");
    let x2=x.toString().split('').map(Number)
    let x3=x2.join("")
    if(rev==x3)
         return true;
    else
         return false;

 };
 