
function printAsciiChars(ch1, ch2) {
    const IntAsciiValueCh1 = ch1.charCodeAt(0)
    const IntAsciiValueCh2 = ch2.charCodeAt(0)

    const start = IntAsciiValueCh1 < IntAsciiValueCh2 ? IntAsciiValueCh1: IntAsciiValueCh2
    const end = start === IntAsciiValueCh1 ? IntAsciiValueCh2 : IntAsciiValueCh1

    res = []

    for (let i = start + 1; i < end; i++) {
        res.push(String.fromCharCode(i))
    }
    
    console.log(res.join(" "))
}


printAsciiChars('#',
':')
