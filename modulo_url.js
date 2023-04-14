import * as url from "url"

export function parsearUrl(s) {
    try {
        let u = new url.URL(s)
    
        return {
            "host": u.host,
            "pathname": u.pathname,
            "parametros": (u.searchParams)
        }
    } catch (error) {
        console.log("url invalida")
        return -1
    }
}
