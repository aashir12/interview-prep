function IndicesFinder(str1,str2){
    if(str1.length === str2.length){
    console.log("no change found") 
}

const str1Arr = Array.from(str1)
const str2Arr = Array.from(str2)

console.log(str1Arr)
console.log(str2Arr)

var indices = [];

for(let i=0;i<str1Arr.length;i++){
    if(str1[i] !== str2[i]){
        indices.push(i)
    }
}

console.log(indices)
}

IndicesFinder("aabbb","aabb")
