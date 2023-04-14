import * as fs from "fs"

export function copiar(s1, s2) {
    fs.copyFile(s1, s2, error => {
        if(error){
            console.log(error)
        }else{
            console.log(s1, "copiado a ", s2)
        }
    })
}
