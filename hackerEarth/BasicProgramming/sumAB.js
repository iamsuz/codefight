function sum(input) {
    var res = [];
    var inArr = input.split('\n');
    inArr.forEach(t=>{
        var newA = t.split(' ');
        console.log(newA);
        res.push(newA.map(t=>BigInt(t)).reduce((a,c)=>a+c)); //BigInt is used for big numbers as parseInt converts into a number and loses its precision because trailing non numeric values
    })
    process.stdout.write(res.join('\n'));       // Writing output to STDOUT
}

sum("1 2\n3 4\n5 6\n111111111111111111111111 1111111111111111111111111")