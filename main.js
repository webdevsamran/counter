function increment() {
    var number = $('#number').text();
    number++;
    $('#number').text(number);
}

function decrement() {
    var number = $('#number').text();
    if (number <= 0) {
        $('#number').text(number);
    } else {
        number--;
        $('#number').text(number);
    }
}

function neutral() {
    $('#number').text(0);
}