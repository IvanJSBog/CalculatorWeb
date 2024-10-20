const display =  document.querySelector('.js-display')
const btnsCalculate = document.querySelectorAll('.js-btn-calculate')
const btns = document.querySelectorAll('.js-btn')

btns.forEach((item) => {
    item.addEventListener('click', ()=>{
        let clickedButton = item.innerText;
        
        switch (clickedButton) {
            case '×':
                clickedButton = '*'
                break;
            case '÷':
                clickedButton = '/'
                break;
            case 'AC':
                display.value = ''
                break;
            case 'C':
                display.value = display.value.slice(0,-1)
                break;
            case '=':
                display.value = eval(display.value)
                break;
        }
        if (clickedButton !== 'AC' && clickedButton !== 'C' && clickedButton !== '=') {
            display.value += clickedButton
        }
    })
})

const pow = () => {
    display.value = Math.pow(display.value, 2) 
}
const sqrt = () => {
    display.value = Math.sqrt(display.value, 2) 
}
const sin = () => {
    display.value = Math.sin(display.value) 
}
const cos = () => {
    display.value = Math.cos(display.value) 
}
const tan = () => {
    display.value = Math.tan(display.value) 
}

btnsCalculate.forEach((item) => {
    item.addEventListener('click', ()=>{
        let clickedButton = item.innerText;
        switch (clickedButton) {
            case 'x²':
                pow()
                break;
            case '√':
                sqrt()
                break;
            case 'sin':
                sin()
                break;
            case 'cos':
                cos()
                break;
            case 'tan':
                tan()
                break;
            default:
                break;
        }
    })
})
