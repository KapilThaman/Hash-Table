// Hash Table question : Find items in common :

function itemInCommon(array1, array2) {
    const myMap = new Map();
    
    for (let i of array1) {
        myMap.set(i, true);
    }
    
    for (let j of array2) {
        if (myMap.has(j)) return true;
    }
    
    return false;
}
// ---------------
// One Common Item
// ---------------
console.log("Output: ", itemInCommon([1, 3, 5], [2, 4, 5]));

// First Non Repeating Character
function firstNonRepeatingChar(str1){
    
    const str1Array = str1.split("");
    console.log(str1Array);
    let obj = new Map();
    
    for(let i = 0; i < str1Array.length; i++){
         if(obj.has(str1Array[i])){
            obj.set(str1Array[i], obj.get(str1Array[i]) + 1);
         }
         else{
            obj.set(str1Array[i],1);
         }
    }
    console.log(obj);
    for(let [key, value] of obj){
            if(value == 1){
                return key
            }
        }
    return null;
}


console.log("Output: ", JSON.stringify(firstNonRepeatingChar('aabbccdef')));
console.log("---------------");
