#Pig Latin translator

###Authors: Nicko & Ron

###A website translating english text/phrases into piglatin

##Pig Latin Specs

###No change to non-alphabetical characters
####Input: 3
####Output: 3

###Add 'ay' or to single letter words beginning with a vowel
####Input: i
####Output: iay

###Treat character "y" as a consonant
####Input: y
####Output: yay

###Add empty space is an empty space
####Input: " "
####Output: " "

###The first  letter consonants that is not a vowel, move first character to the end
###then add "ay" at the end
####Input: pig
####Output: igpay

###The first two letter consonants using "th", "qu", "ch", "ck", "sh", "st", "ph", "cr", "my", "gl", "tr"
###then add "ay" at the end of the two letter consonants
####Input: queen
####Output: eenquay
