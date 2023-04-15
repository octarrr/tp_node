import ccl from "country-codes-list"

export function obtener_moneda(codigo) {
    let pais = (ccl.customArray({codigo: "{countryCode}", moneda: "{currencyNameEn}"})).find(p => p.codigo === codigo)

    if(pais === undefined) {
        return null
    } else {
        return pais.moneda
    }
}
