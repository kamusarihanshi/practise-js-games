def reverseWords(s: str) -> str:
    #  Step 1: Split the string into words, automatically handling extra spaces
    words = s.split()
    
    #  Step 2: Reverse the list of words
    reversed_words = words[::-1]
    
    #  Step 3: Join the reversed words back into a string with a single space
    return ' '.join(reversed_words)


print (reverseWords("hello world how are you"))