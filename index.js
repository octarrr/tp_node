const s1 = "Escuela"
const s2 = "ORT"

console.log("Texto de entrada: ", s1, 'y', s2)

const concat = s1+s2;
let s3 = "";

for(let i = concat.length-1; i >= 0; --i){
    s3+=concat[i];
}
console.log("Texto de salida: ", s3);
