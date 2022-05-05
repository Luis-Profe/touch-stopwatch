let running = false
let time = 0
let start = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (!(running)) {
        basic.showNumber(Math.idiv(time, 1000))
    }
})
input.onButtonPressed(Button.A, function () {
    running = true
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    if (running) {
        time += input.runningTime() - start
    }
    running = false
})
basic.forever(function () {
    if (running) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
