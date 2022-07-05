// 1ci sual function fiveSecondLater() {
//     setTimeout(() => {
//         console.log('5 saniye bitdi!')
//     }, 5000);
// }

// fiveSecondLater()
// ------------
// 2-ci sual
// function countdown() {
//     let counter = 100
//     const interval = setInterval(() => {
//         console.log(counter);
//         if (counter <= 0 ) {
//             console.log('Geri sayi bitdi!')
//             clearInterval(interval)
//         }
//         counter--
//     }, 1000);https://www.programiz.com/javascript/library/math/ceil
// }
// countdown()
// ----------------------
// 3cu-sual
// console.log(Math.round(65.5))
// -------------4cu sual
// function getRandomNumber() {
//     let a=Math.floor(Math.random(10)*10)
//     console.log(`random edediniz?:${a}`);
// }
// getRandomNumber()
// ------------------5ci sual

// function getDate() {
//     const now = new Date()
//     console.log(now.getFullYear(), now.getMonth()+1, now.getDate())
// }
// getDate()
// -------------------------
// 6ci sual
// function getTime() {
//     const now = new Date()
//     console.log(now.getHours(), now.getMinutes(), now.getSeconds())
// }

// getTime()

// function nextYearToday() {
//   const now = new Date();

//   now.setFullYear(now.getFullYear() + 1);
//   console.log(now.getDay());
// }

// nextYearToday();



let person =["Salam","Tariyel","Necesen?"]

function test(el){
    console.log(el);
}

let total=person.forEach(test)
console.log(total);