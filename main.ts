radio.onReceivedNumber(function (receivedNumber) {
    radio.sendValue("Vikash patel", 30)
    radio.sendString("C")
    radio.sendNumber(30)
    radio.setGroup(17)
    radio.setTransmitPower(4)
    Vikash = 30
})
let Vikash = 0
basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `)
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    # # # # #
    `)
basic.showLeds(`
    # # # # .
    # . . . .
    # . . . .
    # . . . .
    # # # # .
    `)
basic.showLeds(`
    # # # # .
    # . . # .
    # # # # .
    # . # . .
    # . . # .
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    # . . . .
    # . . . .
    # # # # .
    # . . # .
    # # # # .
    `)
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . . # . .
    . # # . .
    # . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    # # # # .
    # . . # .
    . . # . .
    . # . . .
    # # # # #
    `)
basic.forever(function () {
    basic.showLeds(`
        # # # # .
        # . . # .
        . . # # .
        . . . # .
        # # # # .
        `)
    basic.showLeds(`
        # . . # .
        # . . # .
        # # # # #
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # . .
        # . . . .
        # # # . .
        # . # . .
        # # # . .
        `)
    basic.showLeds(`
        # # # # .
        . . . # .
        . # # # #
        . . . # .
        . . . # .
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        # . # . .
        # # # . .
        `)
    basic.showLeds(`
        . # . . #
        . # . # .
        . # # . .
        . # . # .
        . # . . #
        `)
})
basic.forever(function () {
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("A G G B B B - E ", 122), music.PlaybackMode.UntilDone)
    music.ringTone(330)
    music.play(music.stringPlayable("E - - E G E A A ", 119), music.PlaybackMode.UntilDone)
    music.stopAllSounds()
    music.stopAllSounds()
    basic.showLeds(`
        # . . . #
        # . . # .
        # . # . .
        # # . . .
        # . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        `)
    basic.showLeds(`
        . # . . #
        . # . # .
        . # # . .
        . # . # .
        . # . . #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # # # .
        . # . # .
        . # . # .
        `)
})
basic.forever(function () {
    led.unplot(2, 1)
    led.plotBarGraph(
    34,
    998
    )
    led.plot(1, 1)
    led.toggle(2, 1)
})
