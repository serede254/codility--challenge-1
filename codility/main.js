// define variables
//call in fucntion
//for loop

function Solution(S){
    const N= S.length
    const M= S[0].length

    for(let i=0;i<N;i++){
        for (let j=i+1;j<N;j++){
            for(let k=0;k<M;k++){
                if (S[i][k] === S[j][k]) {
                    return [i,j,k];
                }
            }
        }
    }
    return []
}
console.log(Solution(['abc','bca','dbe']));