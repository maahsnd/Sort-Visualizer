export default function () {
    const minLength = 10;
    const maxLength = 60;
    const minValue = 0;
    const maxValue = 1000;
  
    // Generate a random length between minLength and maxLength
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  
    // Generate an array with random integers
    const randomArray = Array.from({ length }, () => Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
    
    return randomArray;
  }