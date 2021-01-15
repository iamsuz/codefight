function main(input) {
    var inArr = input.split('\n');
    var res = []
    inArr.splice(0,1)
    inArr.forEach(i=>{
        var bin = [];
        while(i >= 1){
            bin.push(i%2);
            i=~~(i / 2);
            console.log(bin,i);
        }
        res.push(bin.filter(t=>(t==1)).length);

    })
    process.stdout.write(res.join('\n'));       // Writing output to STDOUT
}

main("5\n4\n10\n16\n12\n20");