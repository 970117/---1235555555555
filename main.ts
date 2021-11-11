input.onButtonPressed(Button.A, function () {
    list = [
    10,
    50,
    100,
    150,
    225
    ]
    for (let index = 0; index <= 4; index++) {
        led.plotBrightness(index, 0, list[index])
    }
})
input.onButtonPressed(Button.B, function () {
    list = []
})
let list: number[] = []
list = [
0,
1,
0,
1,
0
]
for (let index = 0; index <= 4; index++) {
    if (list[index]) {
        led.plot(index, 0)
    } else {
        led.unplot(index, 0)
    }
}
