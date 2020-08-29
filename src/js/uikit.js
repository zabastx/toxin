import '../styles/uikit.css'

const Masonry = require('masonry-layout')

const elem = document.querySelector('#cards')
const msnry = new Masonry( elem, {
  itemSelector: '#cards > div',
  columnWidth: 1,
  gutter: 40,
  transitionDuration: '300ms',
});

// input hover

const focus = (e) => {$(e.delegateTarget.previousSibling).text('hover / focus')}
const def = (e) => {$(e.delegateTarget.previousSibling).text('default')}

$('.elem-col:nth-child(1) h3.dark50 + input, .elem-col:nth-child(1) h3.dark50 + div').focus(focus).focusout(def).hover(focus, def)