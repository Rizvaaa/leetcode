function pali(arr){
    let b=arr.split("").reverse()
    let c=arr.split("");
    if(b=c){
        console.log("it is palindrome");
    }
    else{
        console.log("it is not palindrome")
    }
}
pali(["malayalam"])