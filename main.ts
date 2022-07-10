input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString("HELLO!")
    music.playMelody("C5 A B G A F G E ", 180)
})
input.onGesture(Gesture.TiltRight, function () {
    while (input.rotation(Rotation.Roll) > 10) {
        led1 += 1
        basic.clearScreen()
        if (led1 >= 4) {
            led1 = 4
        }
        led.plot(led1, led2)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
    led1 = 2
    led2 = 2
    led.plot(led1, led2)
})
input.onGesture(Gesture.TiltLeft, function () {
    while (input.rotation(Rotation.Roll) < -10) {
        led1 += -1
        basic.clearScreen()
        if (led1 <= 0) {
            led1 = 0
        }
        led.plot(led1, led2)
        basic.pause(1000)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    while (input.rotation(Rotation.Pitch) > 10) {
        led2 += 1
        basic.clearScreen()
        if (led2 >= 4) {
            led2 = 4
        }
        led.plot(led1, led2)
        basic.pause(1000)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    while (input.rotation(Rotation.Pitch) < -10) {
        led2 += -1
        basic.clearScreen()
        if (led2 <= 0) {
            led2 = 0
        }
        led.plot(led1, led2)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
let led2 = 0
let led1 = 0
led1 = 2
led2 = 2
led.plot(led1, led2)
basic.forever(function () {
	
})
