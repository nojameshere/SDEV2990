// const theOneFunc = time => {
//     console.log('Hello after ' + time + ' seconds');
// };

// setTimeout(theOneFunc, 4 * 1000, 4);
// //print 'Hello after 4 seconds'
// setTimeout(theOneFunc, 8 * 1000, 8);
// //Print 'Hello after 8 seconds'

// //Can only have one function


//-------------------------------------------
//This one wants to print hello world 5 times, once every second but we can't use a timeout.
let counter = 0;

const intervalID = setInterval(() => {
    console.log('Hello World');
    counter++;

    if (counter === 5){
        console.log('Done');
        clearInterval(intervalID);
    }
}, 1000);