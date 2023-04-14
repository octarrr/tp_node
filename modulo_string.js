export function concat_invert(s1, s2) {
    const concat = s1+s2;
    let s3 = "";

    for(let i = concat.length-1; i >= 0; --i){
        s3+=concat[i];
    }
    return s3
}
