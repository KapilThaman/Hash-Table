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
// console.log("Output: ", itemInCommon([1, 3, 5], [2, 4, 5]));

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


// console.log("Output: ", JSON.stringify(firstNonRepeatingChar('aabbccdef')));
// console.log("---------------");


// Get all the anagrams:

function groupAnagrams(arr1){
    let groupOfAnagrams = new Map();
    for(let i = 0; i < arr1.length; i++){
        let everywordArray = arr1[i].split("");

        everywordArray.sort();
        let sameWordSorted = everywordArray.join("");
        if(groupOfAnagrams.has(sameWordSorted)){
            groupOfAnagrams.get(sameWordSorted).push(arr1[i]);
        }
        else{
            groupOfAnagrams.set(sameWordSorted,[arr1[i]]);
        }

        
        
    }
    console.log(groupOfAnagrams);
    
}


// ---------------
// // Lowercase Anagrams
// // ---------------
// console.log("Input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']");
// console.log("Output: ", JSON.stringify(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])));

function twoSum(arr1,k){
    let obj = {};
    let solution=[];
    
    for(let i = 0; i < arr1.length; i++ ){
        let expectedValue = k - arr1[i];
        
        if(obj.hasOwnProperty(expectedValue)){
            solution.push(expectedValue);
            solution.push(arr1[i]);
        }
        else{
            obj[arr1[i]] = expectedValue;
        }
    }
    console.log(solution);
}



// ---------------
// Unique Solution
// ---------------
// console.log("Output: ", JSON.stringify(twoSum([2, 7, 11, 15], 9)));
// console.log("---------------");
// console.log("Output: ", JSON.stringify(twoSum([3, 3, 11, 15], 6)));
// console.log("Output: ", JSON.stringify(twoSum([2, 7, 11, 15], 30)));
// console.log("Output: ", JSON.stringify(twoSum([-1, -2, -3, -4, -5], -8)));




function longestConsecutiveSequence(arr1){
    let newSet = new Set(arr1);
    let longestStreak = 0;
    
    for(let num of newSet){
        
        if(!newSet.has(num - 1)){
            let currentNum = num;
            let currentStreak = 1;
            
            while(newSet.has(currentNum + 1)){
                    currentNum += 1;
                    currentStreak++;
            }
           longestStreak = Math.max(longestStreak,currentStreak); 
        }
        
        
    }
    return longestStreak;
    
}



// -------------------
// No Consecutive Sequence
// -------------------
console.log("No Consecutive Sequence:");
console.log("Input: [1, 3, 5]");
console.log("Output: ", longestConsecutiveSequence([1, 3, 5]));
console.log("---------------");