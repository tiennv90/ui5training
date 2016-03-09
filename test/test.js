function assert(value, description) {
    if (!value) {
        console.log(description + " is Failed !");
    } else {
        console.log(description + " is Passed !");
    }
}

assert(5 + 6 === 12, "5 + 6 is 11!");

var sum = function(a, b) {
    return a + b;
}

function testSum() {
    assert(sum(9, 10) === 19, "9 + 10 is 19");
}

testSum();


//test needs wait until 'later', for example: 5 seconds
var delay = function(func, delayInSeconds) {
    setTimeout(func, delayInSeconds * 1000);
}

function testDelay() {
    var now = new Date().getTime() / 1000;
    delay(function() {
        assert(new Date().getTime() / 1000 - now === 5, "delaying 5 seconds");
    }, 5);
}

testDelay();
