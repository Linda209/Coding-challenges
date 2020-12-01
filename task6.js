
function Maximum(a, b, c) {
    let arr = [a, c, b];
    var max = 0;
    var i = 0;

    for (i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];

        }
    }
    console.log(arr);
    return "max =" + max;

}

console.log(Maximum(7, 8, 11));


