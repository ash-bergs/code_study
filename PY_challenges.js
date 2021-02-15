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