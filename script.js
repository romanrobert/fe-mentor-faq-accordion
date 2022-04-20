
const q1 = document.querySelector('.q1')
const a1 = document.querySelector('.a1')
const q2 = document.querySelector('.q2')
const a2 = document.querySelector('.a2')
const q3 = document.querySelector('.q3')
const a3 = document.querySelector('.a3')
const q4 = document.querySelector('.q4')
const a4 = document.querySelector('.a4')
const q5 = document.querySelector('.q5')
const a5 = document.querySelector('.a5')

// trigger.forEach(trigger => {
//     trigger.addEventListener('click', () => {
//         q1.classList.toggle('accordion-q-active');
//         a1.classList.toggle('accordion-active');
//     })
// })

q1.addEventListener('click', ()=>{
    q1.classList.toggle('accordion-q-active');
    a1.classList.toggle('accordion-active');
})

q2.addEventListener('click', ()=>{
    q2.classList.toggle('accordion-q-active');
    a2.classList.toggle('accordion-active');
})

q3.addEventListener('click', ()=>{
    q3.classList.toggle('accordion-q-active');
    a3.classList.toggle('accordion-active');
})

q4.addEventListener('click', ()=>{
    q4.classList.toggle('accordion-q-active');
    a4.classList.toggle('accordion-active');
})

q5.addEventListener('click', ()=>{
    q5.classList.toggle('accordion-q-active');
    a5.classList.toggle('accordion-active');
})








