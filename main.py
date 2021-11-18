list2 = [[0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]]
for index in range(5):
    if list2[index]:
        led.plot(index, 0)
    else:
        led.unplot(index, 0)