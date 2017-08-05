import app from 'vue-play/app'

// bootstrap app
app()

// change page title
document.querySelector('.sidebar h1').innerText = 'Tiger-UI Playground'

document.querySelector('title')
  .addEventListener('DOMSubtreeModified', evt => {
    let title = evt.target.innerText
    if (/Vue Play/.test(title)) {
      document.title = title.replace('Vue Play', 'Tiger-UI')
    }
  })
