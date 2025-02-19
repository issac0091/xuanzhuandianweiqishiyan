OLED.init(128, 64)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, pins.analogReadPin(AnalogReadWritePin.P0))
})
// OLED屏幕程序
basic.forever(function () {
    OLED.writeStringNewLine("P0:" + pins.analogReadPin(AnalogPin.P0))
    basic.pause(1000)
    OLED.clear()
})
