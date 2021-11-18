input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    list = [
    [
    1,
    1,
    1,
    0,
    1
    ],
    [
    0,
    0,
    0,
    1,
    0
    ],
    [
    1,
    0,
    1,
    1,
    1
    ],
    [
    1,
    1,
    0,
    0,
    0
    ],
    [
    1,
    0,
    0,
    1,
    0
    ]
    ]
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            if (list[y][x]) {
                led.plot(x, y)
            } else {
                led.unplot(y, x)
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    list = [
    [
    0,
    0,
    1,
    0,
    1
    ],
    [
    1,
    1,
    0,
    0,
    1
    ],
    [
    1,
    0,
    1,
    1,
    1
    ],
    [
    0,
    0,
    0,
    0,
    1
    ],
    [
    1,
    0,
    1,
    1,
    1
    ]
    ]
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            if (list[y][x]) {
                led.plot(y, x)
            } else {
                led.unplot(y, x)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    list = [
    [
    1,
    0,
    1,
    1,
    1
    ],
    [
    0,
    1,
    0,
    1,
    0
    ],
    [
    1,
    0,
    0,
    0,
    0
    ],
    [
    1,
    1,
    0,
    0,
    1
    ],
    [
    1,
    0,
    0,
    0,
    1
    ]
    ]
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            if (list[y][x]) {
                led.plot(y, x)
            } else {
                led.unplot(y, x)
            }
        }
    }
})
let list: number[][] = []
list = [
[
1,
0,
1,
0,
1
],
[
0,
1,
0,
1,
0
],
[
1,
0,
0,
0,
1
],
[
1,
0,
0,
0,
1
],
[
1,
0,
0,
0,
1
]
]
for (let x = 0; x <= 4; x++) {
    for (let y = 0; y <= 4; y++) {
        if (list[y][x]) {
            led.plot(x, y)
        } else {
            led.unplot(y, x)
        }
    }
}
