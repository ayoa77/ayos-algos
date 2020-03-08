
def pali(myString, left=0, right=myString.size - 1)
  p myString[right]
  p myString[left]

  if myString[left] != myString[right]
    return false
  elsif left < right && myString[left] == myString[right]
    left += 1
    right -= 1
    pali(myString, left, right)
  else
    return true
  end
end
    
myString = "1"
p pali(myString)
