import ccl from "country-codes-list"

export function obtener_moneda(cod) {
    const currencies = ccl.customList('countryCode', '{currencyNameEn}')
    return currencies
}
