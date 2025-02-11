/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    
    const sortS=[...s].sort()
    const sortT=[...t].sort()
    for(let i=0;i<sortT.length;i++){
        if(sortT[i]!==sortS[i])
            return sortT[i]
    }
};