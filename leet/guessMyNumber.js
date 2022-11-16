// Given number between 1 to n guess a number 

/**
 * 
 * @param {number} t
 * @returns {number} 1, 0 , -1
 * if the number is greater than the provided number -1
 * if the number is lower than the provided number 1
 * if you guessed the number 0 
 */
function guess(chosenNumber, t){

}

function geuessTheNumber(n){
    let min = 1;
    let max = n;
    let t = n
    let g = guess(n)
    //Use the while loop till you guess the number
    while(g !== 0){
        t = Math.floor((min+max)/2)
        g = guess(t)
        if(g === -1){
            max = t
        }
        if(g === 1){
            min = t
        }
    }
    return t
}