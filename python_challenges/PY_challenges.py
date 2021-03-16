def vowel_2_index(string):
    # create empty string for return 
    res = ""
    
    # step through the length of the string 
    for i in range(len(string)):
        # if string[i] (the character at this index) is a vowel
        if string[i] in "aeiouAEIOU":
            # get the index (adding 1 because it starts at 0)
            res = res + str(i+1)
        else:
            res = res + string[i]
    return res


# ----


import re
class WordDictionary:
    def __init__(self):
        self.lst=[]
    
    def add_word(self,word):
        self.lst.append(word)
    
    def search(self,word):
        for i in self.lst:
            if re.match(word+"\Z",i): return True
        return False



"""TODO: create a RomanNumerals helper object"""
class RomanNumerals: 
    def __init__(self, s):
        self.s = s
        
    def to_roman(sn):
        val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
        rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
        res = ''

        i = 0
        print(1000 // 1000)
        while sn > 0:
            for _ in range(sn // val[i]):
                res += rom[i]
                sn -= val[i]
            i += 1
            print(res)
        return res
        
    def from_roman(s):
        rom_val = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        int_val = 0 
        for i in range(len(s)): 
            if i > 0 and rom_val[s[i]] > rom_val[s[i - 1]]:
                int_val += rom_val[s[i]] - 2 * rom_val[s[i - 1]]
            else:
                int_val += rom_val[s[i]]
        print(int_val)
        return int_val