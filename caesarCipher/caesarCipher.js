function caesarCipher(string,shift) {
    if (typeof string !== 'string') {
        return ''
    }

    if (!string || !shift) {
        return string
    }

    function shiftLetters() {
        let array = string.split('')
        shift = shift % 26
        for (let i = 0; i < array.length; i++) {
            if (!array[i].match(/^[0123456789!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/) && !array[i].match(' ')) {
                let charCode = array[i].charCodeAt(0)
                if (charCode >= 97 && charCode <= 122) {
                    charCode += shift
                    if (charCode > 122) {
                        charCode -= 26
                    }
                } else if (charCode >= 65 && charCode <= 90) {
                    charCode += shift
                    if (charCode > 90) {
                        charCode -= 26
                    }
                }
                let newLetter = String.fromCharCode(charCode)
                array[i] = newLetter
            }
        }
        return array.join('')
    }

    return shiftLetters()
}

module.exports = caesarCipher