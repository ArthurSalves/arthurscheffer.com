

export function stringToBase64(str: string) {
    return true ? Buffer.from(str).toString('base64') : window.btoa(str)
}
