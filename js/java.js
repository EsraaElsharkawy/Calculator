
var myInput, myBtns, myResult, myClear, myDelete

myInput = document.querySelector('.input-data');
myBtns = document.querySelectorAll('.calc');
myResult = document.querySelector('#result');
myClear = document.querySelector('#clear');
myDelete = document.querySelector('#delete');
myInputValues = [];


// get input from user
myBtns.forEach((btn) => {

    btn.addEventListener('click', (x) => {

        myInput.value = myInput.value + (x.target.value)

        // used for myDelte
        myInputValues[myInputValues.length] = myInput.value
        //

        console.log(myInputValues)
    })
})
// 

// calculate the result
myResult.addEventListener('click', () => {

    if (myInput.value === '') {
        myInput.value = ''
    }
    else {
        myInput.value = eval(myInput.value)
    }
})
//

// clear the window
myClear.addEventListener('click', () => {
    myInput.value = ""
    myInputValues = []

})
//

// delete only on element
myDelete.addEventListener('click', () => {

    if (myInputValues.length === 1 || myInputValues.length === 0) {
        myInput.value = ''
        myInputValues = []
    } else {
        myInputValues.length -= 1
        myInput.value = myInputValues[myInputValues.length - 1]
    }
    console.log(myInputValues)
})
//
