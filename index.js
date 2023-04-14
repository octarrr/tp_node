const s1 = "string1"
const s2 = "string2"

console.log("original: ", s1, 'y', s2)

const concat = s1+s2;
let s3 = "";

for(let i = concat.length-1; i >= 0; --i){
    s3+=concat[i];
}
console.log("final: ", s3);
