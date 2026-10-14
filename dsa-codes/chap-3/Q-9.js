// ** Q-9 Repeat hello **

var n;

do {
    n = Number(prompt("Enter a number (0 to stop):"));

    var i = 1;

    while (i <= n) {
        console.log("Hello");
        i++;
    }

} while (n !== 0);