// document.querySelector('.form__button').addEventListener('click', () => {
//   alert('click')
// })

// const listener = () => {
//   alert('click2')
// }
// document.querySelector('.form__button').addEventListener('click', listener)
// document.querySelector('.form__button').removeEventListener('click', listener)

// const outer = document.getElementById('outer')
// const inner = document.getElementById('inner')

// outer.addEventListener('click', () => alert('Capture phase (Фаза захоплення) outer'), {
//   capture: true,
//   once: true,
// })
// inner.addEventListener('click', () => alert('Capture phase (Фаза захоплення) inner'), {
//   capture: true,
//   once: true,
// })

// outer.addEventListener('click', () => alert('Bubble phase (Фаза спливання) outer'), {
//   capture: false,
//   once: true,
// })
// inner.addEventListener('click', () => alert('Bubble phase (Фаза спливання) inner'), {
//   capture: false,
//   once: true,
// })
// document.querySelector('.form__button').addEventListener('click', (e) => {
//   e.preventDefault() // відміеняє нативні дії браузера
//   console.log(e.composedPath())
// })

const button = document.querySelector('.form__button')
const myEvent = new CustomEvent('myevent', { detail: { id: 100 } })
button.addEventListener('myevent', (e) => {
  console.log(e)
})
button.dispatchEvent(myEvent)
