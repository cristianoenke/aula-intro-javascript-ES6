const myNumber = 3.1415
console.log("Original Value: ",myNumber, typeof myNumber)

// Convertendo Number em String
const numToStr = myNumber.toString();
console.log(`Number as String: "${numToStr}"`, typeof numToStr)
    
// Fixando Casas Decimais
const numFixedDecimal =  myNumber.toFixed(2);
console.log("Value With 2 Decimals: ",numFixedDecimal)
    
// Convertendo String para Float
const numStr = '3.14'
console.log(`Original String Value: "${numStr}"`);
console.log("String to Float: ",parseFloat(numStr));

// Convertendo String para Int
console.log("String to Int: ",parseInt(numStr));
    