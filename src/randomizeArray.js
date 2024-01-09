export default function (length) {
    const minValue = 0;
    const maxValue = 1000;
  
    // Generate a random length between minLength and maxLength

  
    // Generate an array with random integers
    const randomArray = Array.from({ length }, () => Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
    
    return randomArray;
  }