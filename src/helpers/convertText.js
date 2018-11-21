/**
 * Text converter
 *
 */

export function sentence(str, lang = 'EN-us') {
    const textcase = String(str)
        .replace(/([a-zğüşıiöç])([A-ZĞÜŞIİÖÇ])/g, (m, a, b) => `${a}_${b.toLocaleLowerCase(lang)}`)
        .toLocaleLowerCase(lang)
        .replace(/([.?!](\n|\s)+[a-z])/g, (m, a) => {
            return a.toLocaleUpperCase(lang);
        });

    return textcase.charAt(0).toLocaleUpperCase(lang) + textcase.slice(1);
}

export function title(str, lang = 'EN-us') {
    const textcase = String(str)
        .replace(/([a-zğüşıiöç])([A-ZĞÜŞIİÖÇ])/g, (m, a, b) => `${a}_${b.toLocaleLowerCase(lang)}`)
        .toLocaleLowerCase(lang)
        .replace(/( ?)([A-ZĞÜŞIİÖÇa-zğüşıiöç]+)( ?)/g, (m, a, b, c) => a + b.charAt(0).toLocaleUpperCase(lang) + b.slice(1) + c);

    return textcase;
}

export function uppercase(text, lang = 'EN-us') {
    return text.toLocaleUpperCase(lang);
}

export function lovercase(text, lang = 'EN-us') {
    return text.toLocaleLowerCase(lang);
}