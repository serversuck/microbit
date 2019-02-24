
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}
enum ibitReadADC {
    //% block="ADC 0"
    A0 = 132,
    //% block="ADC 1"
    A1 = 196,
    //% block="ADC 2"
    A2 = 148,
    //% block="ADC 3"
    A3 = 212,
    //% block="ADC 4"
    A4 = 164,
    //% block="ADC 5"
    A5 = 228,
    //% block="ADC 6"
    A6 = 180,
    //% block="ADC 7"
    A7 = 244
}

/**
 * Custom blocks
 */
//% weight=100 color=#ff00ff icon="\uf0e7"
namespace crossblackline {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block


    //% blockId="count black line" block="นับเส้นดำ %cnt"
    //% blockGap=2 weight=1


    export function countBlack(cnt: number) {
        
        let x = 0
        while (x < cnt) {
            while (pins.digitalReadPin(DigitalPin.P0) == 0) { }
            
            while (pins.digitalReadPin(DigitalPin.P0) == 1) { }
            x = x + 1
        }
    }
    //% blockId="cal rec area" block="หาพื้นที่สี่เหลี่ยม กว้าง %width * ยาว %long"
    //% blockGap=2 weight=1
    export function RecArea(width: number, long: number): number {
        return width * long
    }
}
