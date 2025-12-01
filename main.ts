input.onButtonPressed(Button.A, function () {
    kopf_anzahl = 0
    for (let index = 0; index < Anzahl_wuerfe; index++) {
        if (randint(0, 1) == 0) {
            kopf_anzahl += 1
        }
    }
    basic.showNumber(kopf_anzahl)
    basic.showNumber(Anzahl_wuerfe - kopf_anzahl)
    serial.writeValue(convertToText(kopf_anzahl), Anzahl_wuerfe - kopf_anzahl)
})
let kopf_anzahl = 0
let Anzahl_wuerfe = 0
Anzahl_wuerfe = 1000
serial.writeLine("Bitte warten!")
