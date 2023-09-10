function leftMostVowelPosition(str) {
  str = str.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      return i;
    }
  }
  return -1;
}

function demonstrateVowel() {
  const inputString = prompt("Enter a string:");
  const vowelPosition = leftMostVowelPosition(inputString);
  if (vowelPosition !== -1) {
    alert(`The left-most vowel is at position ${vowelPosition + 1}.`);
  } else {
    alert("No vowels found in the input string.");
  }
}

function demonstrateNumber() {
  const num = parseInt(prompt("Enter a number:"));
  const reverseOfNum = reverseNum(num);
    alert("Reverse of the number is: "+ reverseOfNum);
}

function reverseNum(num) {

    let rev = 0;
    while(num > 0)
    {
        let r = parseInt(num % 10);
        rev = rev*10 + r;
        num = parseInt(num / 10);
    }

    return rev;
}
