//set initial count
let count=0;

const value=document.querySelector('#value')
console.log(value)
const btns=document.querySelectorAll('.btn')

console.log(btns)

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        console.log(e.currentTarget)
        const styles=e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++
        }else {
            count=0;
        }

        value.textContent=count
    })
})