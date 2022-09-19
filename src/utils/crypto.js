
import CryptoJS from "crypto-js"

const PRIVATKEY = process.env.REACT_APP_PRIVAT_KEY

export const cryptoDecrypt = async (encryptData) => {
    try {
        var bytes = await CryptoJS.AES.decrypt(encryptData, PRIVATKEY);
        var originalText = bytes ? await bytes.toString(CryptoJS.enc.Utf8) : false;
        const originalTextJson = await JSON.parse(originalText)
        return originalText ? originalTextJson : ""
    } catch (error) {
        return ""
    }
}

export const cryptoEncrypt = (encryptData) => {
    return CryptoJS.AES.encrypt(JSON.stringify(encryptData), PRIVATKEY).toString();
}