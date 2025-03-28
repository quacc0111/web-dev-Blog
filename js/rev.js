let colors=['red','blue','green','Yelowmellow'];
let [color1,color2,color3,...othercolors]=colors;
console.log(color1)


const avg= (a,b,c)=> (a+b+c)/3;
console.log(avg(3,3,3));


const hobbies=['kb','gmng','sports'];
const hobbiesHtml = `<ul>${hobbies.map(h => `<li>${h}</li>`).join('\t')}</ul>`;
console.log(hobbiesHtml);


let nums = [1, 2, 3, 4, 5, 6];
let squaredevennum= nums.filter(num=> num%2===0).map(num=>num**2);
console.log(squaredevennum)




let count = 0;

document.getElementById("clickButton").addEventListener("click", () => {
    count++;
    console.log(`Button clicked ${count} times`);
});



const text = "This is a sample sentence for testing.";
const avgCharPerWord = text.split(" ").map(word => word.length).reduce((a, b) => a + b) / text.split(" ").length;
console.log(avgCharPerWord);