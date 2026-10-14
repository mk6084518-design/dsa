// ** Q-8 Strong Numbers **

var pr = prompt("Kaha tak check karna hai?");

if (pr === null) {
    console.log("Cancelled");
} else {
    var n = Number(pr);

    if (pr.trim() === "" || isNaN(n)) {
        console.log("Invalid input");
    } else if (!Number.isInteger(n) || n <= 0) {
        console.log("Should be a positive integer");
    } else {
        var sum = 0;
        var copy = n;

        while (n > 0) {
            var rem = n % 10;
            var fact = 1;

            for (var i = 1; i <= rem; i++) {
                fact = fact * i;
            }

            sum += fact;
            n = Math.floor(n / 10);
        }

        if (copy === sum) {
            console.log("Strong Number");
        } else {
            console.log("Not Strong Number");
        }
    }
}
