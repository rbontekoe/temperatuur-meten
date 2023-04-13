input.onButtonPressed(Button.A, function () {
    basic.showNumber(temperatuur)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(luchtvochtigheid)
})
let luchtvochtigheid = 0
let temperatuur = 0
temperatuur = 0
luchtvochtigheid = 0
let teller = 0
let tijdelijk = 0
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P0,
    true,
    false,
    true
    )
    tijdelijk = dht11_dht22.readData(dataType.temperature)
    if (teller <= 3 && dht11_dht22.readDataSuccessful()) {
        temperatuur = tijdelijk
        basic.pause(3000)
    } else if (teller > 3) {
        control.reset()
    } else {
        teller += 1
        basic.pause(3000)
    }
    tijdelijk = dht11_dht22.readData(dataType.humidity)
    if (teller <= 3) {
        luchtvochtigheid = tijdelijk
        basic.pause(3000)
    } else {
        teller += 1
        basic.pause(3000)
    }
})
