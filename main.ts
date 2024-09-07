/**
 * Organize your blocks in groups
 */


//% groups="['asr', 'gps', 'tof','env']" 
//% color=0x0000ff
namespace sugar {

    //% block="asr init"
    //% subcategory=uart group=asr color=#ff0000
    export function asr_init() {

    }

    //% block="asr cmd"
    //% subcategory=uart group=asr color=#ff0000
    export function asr_cmd(): number {
        return 0
    }

    //% block="gps init"
    //% subcategory=uart group=gps color=#ffff00
    export function gps_init() {

    }

    //% block="gps coord"
    //% subcategory=uart group=gps color=#ffff00
    export function gps_coord(): number {
        return 0
    }

    //% block="tof detection"
    //% subcategory=i2c group=tof color=#00ff00
    export function tof_detection(): number {
        return 0
    }

    //% block="env temp"
    //% subcategory=i2c group=env color=#00ffff
    export function env_temp(): number {
        return 0
    }

    //% block="env hum"
    //% subcategory=i2c group=env color=#00ffff
    export function env_hum(): number {
        return 0
    }

}