const hiddenTime = document.querySelectorAll('.hidden-time')
const more = document.querySelector('.more')

if(more){
  more.addEventListener('click', (e) => {
    let target = e.target
    target.parentNode.removeChild(target)
    hiddenTime.forEach(item => item.classList.remove('hidden-time'))
  })
}
