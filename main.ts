let list = [
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
for (let y = 0; y <= 4; y++) {
    for (let index = 0; index <= 4; index++) {
        let x = 0
        if (list[y][x]) {
            led.plot(x, y)
        } else {
            led.unplot(y, x)
        }
    }
}
