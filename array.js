// sum of the array numbers
let sum=0;
const numbers=[1,23,5,66,44,74,88];
for (let index = 0; index < numbers.length; index++) {
    
    sum+= numbers[index];
    
}
console.log('the sum of the numbers of array is :',sum);
// average 
let averAge=sum/numbers.length
console.log('the average of the numbers of array is :',averAge);


// printing array elements
console.log('==========printing array elements==========')

const people=['mark','bejos','steve','elon','buffet'];
for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}


// reverse array elements
console.log('==========reverse array elements==========')
const reversed= numbers.reverse();
console.log(reversed);


// task


console.log('=====Write a JavaScript code to reverse the array colors without using the reverse method.=====')
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const revRevColors=[];
for (let i = colors.length-1 ; i >=0 ; i--) {
    const colorss=colors[i];
    revRevColors.push(colorss);
    
}
console.log(revRevColors)
const revColors=[];
for(const color of colors){
    revColors.unshift(color);
}
console.log(revColors);


// task 
console.log('=====Write a JavaScript code to get the even numbers from an array using any looping technique.=====')
const numbers2 = [12, 98, 5, 41, 23, 78, 46];
let EvenNum=[];
for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i]%2===0) {
        const evenNum=numbers2[i];
        EvenNum.push(evenNum);
    }else{
    }
    
}
console.log(EvenNum);

// task 

console.log('=====Use a for...of loop to concatenate all the elements of an array into a single string.=====')
var words = ['Tom', 'Tim', 'Tin', 'Tik']
let wordsJoined=' ';
for (let i = 0; i < words.length; i++) {
    wordsJoined=wordsJoined+words[i];
    
}
console.log(wordsJoined)


// task 

console.log('=====Reverse the words of a sentence. Only the position of the word will be reversed. check out the output=====')
const statement = 'I am a hard working person';
let statementArray=statement.split(" ")
console.log(statementArray);
let revStatement='';
for (let i =statementArray.length-1; i >=0 ; i--) {
    revStatement=revStatement+' '+statementArray[i];
}
console.log(revStatement);