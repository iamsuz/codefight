function sockMerchant(n, ar) {
    let temp = [];
    let pairCount = 0;
    ar.forEach((x,i)=>{
        if(temp.includes(x)){
            temp.splice(temp.indexOf(x),1);
            pairCount++;
        }else{
        	temp.push(x);
        }
    })
    console.log(pairCount)
}

sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20])