export function stringToBase64(str: string) {
    return false ? Buffer.from(str).toString('base64') : window.btoa(str)
}
