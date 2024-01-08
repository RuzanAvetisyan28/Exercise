export const  validationValues = (value, valuesInArray) => {
  
    const isSameValue = valuesInArray.some((item) => item[1].toLowerCase().trim() === value.toLowerCase().trim())
  
    return isSameValue ? "name already exists" : ""
  }