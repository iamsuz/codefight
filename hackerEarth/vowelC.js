const countVowelsInSubstrings = (str) => {
  let vowels = 0

  let len = str.split('').length

  let word = str.toLowerCase().split('')
  console.log(len,word)
 

  for ( var i = 0; i < len; i++ ) {

    if('aeiou'.includes(word[i])) {

      vowels += (len - i)*(i + 1)

    } else {

      vowels += 0

    }

  }

  return vowels


 

}

function main(input) {

  const len = input.split('\n')[0]

 

  for (var i = 0; i < len; i++) {

    process.stdout.write(countVowelsInSubstrings(input.split('\n')[i+1]).toString()+'\n')

  }

}

main('2\nbaceb\ni am sujit')