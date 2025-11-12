input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showNumber(6)
        basic.showNumber(7)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 5))
})
