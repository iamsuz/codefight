function main(input) {
    inArr = input.split('\n');
    var result = inArr[1].split(" ").reduce((a,c)=>
    	parseInt(a)+parseInt(c));
    console.log(result)       // Writing output to STDOUT
}

main('5\n1000000001 1000000002 1000000003 1000000004 1000000005');