var findMedianSortedArrays = function(nums1, nums2) {
    let comb=[...nums1,...nums2]
    let sorted=comb.sort((a,b)=>a-b)
    let x=Math.floor((comb.length)/2)
    if((comb.length)%2!==0)
         return comb[x-1]
    else
        return ((comb[x]+comb[x-1])/2)
};