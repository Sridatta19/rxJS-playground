import Rx from 'rxjs/Rx';

// --------
// Part 1
// const simple$ = new Rx.Observable(observer => {
//   console.log("Generating Observable");
//   setTimeout(() => {
//     observer.next("An item!")
//     setTimeout(() => {
//       observer.next("Another item!")
//       observer.complete()
//     }, 1000);
//   }, 1000);
// })
//
// const error$ = new Rx.Observable(observer => {
//   observer.error(new Error("WHOA!"));
// });
//
// error$.subscribe(
//   item => console.log(`one.next ${item}`),
//   error => console.log(`one.error ${error}`),
//   () => console.log(`one.complete`)
// )
//
// setTimeout(() => {
//   simple$.subscribe({
//     next : item => console.log(`two.next ${item}`),
//     error(error){
//       console.log(`two.error ${error}`)
//     },
//     complete: function(){
//       console.log(`two.complete`)
//     }
//   })
// }, 3000);

// --------
// Part 2

// function createInterval$(time){
//   return Rx.Observable(observer => {
//     let index = 0;
//     setInterval(() => {
//       observer.next(++index)
//     }, time)
//   })
// }
//
// function createSubscriber(tag){
//   return {
//     next(item) {console.log(`${tag}.next ${item}`); },
//     error(error) {console.log(`${tag}.error ${error.stack || error}`); },
//     complete() {console.log(`${tag}.complete`); }
//   }
// }
//
// const everySecond$ = createInterval$(1000);
// everySecond$.subscribe(createSubscriber("one"));
