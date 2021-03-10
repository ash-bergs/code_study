// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

function vowelBack(s){
    // return string 
    let finalStr = '';
    // step through string
    for (let i = 0; i < s.length; i++) {
      let charTemp = s[i];
      // test if element is a consonant and if it is....
      if (/[^aeuio]/.test(charTemp)) {
          // if it's c..
        if (charTemp === 'c') {
            // make it b
            // ? WHY? 
          charTemp = 'b';
        } else if (charTemp === 'd') {
          charTemp = 'a';
        } else if (charTemp.charCodeAt() + 9 > 122) {
          charTemp = String.fromCharCode(charTemp.charCodeAt() + 9 - 26);
          if (charTemp === 'c' || charTemp === 'd' || charTemp === 'o' || charTemp === 'e') {
            charTemp = s[i];
          }
        } else {
          charTemp = String.fromCharCode(charTemp.charCodeAt() + 9)
          if (charTemp === 'c' || charTemp === 'd' || charTemp === 'o' || charTemp === 'e') {
            charTemp = s[i];
          }
        }
      
    } else {
        if (charTemp === 'o') {
          charTemp = 'n';
        } else if (charTemp === 'e') {
          charTemp = 'a';
        } else if (charTemp.charCodeAt() - 5 < 97) {
          charTemp = String.fromCharCode(charTemp.charCodeAt() - 5 + 26);
          if (charTemp === 'o' || charTemp === 'e' || charTemp === 'c' || charTemp === 'd') {
            charTemp = s[i];
          }
        } else {
          charTemp = String.fromCharCode(charTemp.charCodeAt() - 5);
          if (charTemp === 'o' || charTemp === 'e' || charTemp === 'c' || charTemp === 'd') {
            charTemp = s[i];
          }
        }
      }
      finalStr += charTemp;
    }
    return finalStr;
  }