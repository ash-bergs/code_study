# ❓ Valid Parenthesis 

#Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

#Examples
#"()"              =>  true
#")(()))"          =>  false
#"("               =>  false
#"(())((()())())"  =>  true
#Constraints
#0 <= input.length <= 100

#Along with opening (() and closing ()) parenthesis, input may contain any valid ASCII characters. Furthermore, the input string may be empty and/or not contain any parentheses at all. Do not treat other forms of brackets as parentheses (e.g. [], {}, <>).


# FIRST ROUND SOLUTION 

def valid_parentheses(string):
    # init a variable to track a boolean outcome 
    # if the count is 1 we know we've hit a valid open parentheses 
    # when we find its appropriate we closing ) the count is decremented to 1
    count = 0
    
    # iterating through the string
    for character in string:
        # check the parenthesis is valid open (
        if character == "(":
            #increment to one
            count += 1
        #when the valid closing ) found
        elif character == ")":
            #bring the counter back down
            count -= 1
            # if the count ever reaches a negative number we'll know that an invalid parentheses is present in the string
            if count == -1:
                return False
    
    # return truthy/falsy outcome 
    return count == 0

# This next attempt utilizes a stack, where only open parentheses will be added to 
# at the end of the function, if the stack is empty => parenthese are valid 
# if we ever try to remove from an empty stack... then we know then and there the string is invalid 

def valid_parentheses(string):
    # init a list to represent our stack 
    parens_stack = []
    
    # loop through string
    for character in string:
    # if we find an open parens - add it to the stack
        if character == "(":
    # only open ( added to the stack 
            parens_stack.append(character)
    # if we find ) - remove FIRST opening ( in the stack
        elif character == ")":
            if len(parens_stack) == 0:
                return False
            else:
                parens_stack.pop()
    
    # comparison - if stack is empty TRUE, else FALSE 
    return parens_stack == []