function dupli(arr){
    for(i=0;i<arr.length;i++){
        let arr2=[i]
        for(j=i;j<arr.length;j++){
            if(arr[i]==arr[j])
                break;
                
        }
        arr2=[arr[j]];
    }
} 
console.log(dupli([1,2,1,3,1]))