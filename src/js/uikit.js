// input hover

const focus = (e) => {$(e.delegateTarget.previousSibling).text('hover / focus')}
const def = (e) => {$(e.delegateTarget.previousSibling).text('default')}

$('.elem-col:nth-child(1) h3.dark50 + input, .elem-col:nth-child(1) h3.dark50 + div').focus(focus).focusout(def).hover(focus, def)