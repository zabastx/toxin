import '../blocks/form/elements.js';

import '../styles/uikit.css';
import '../blocks/footer/footer.css';
import '../blocks/header/header.css';
import '../blocks/colors/colors.scss';


// input hover

const focus = () => {$('.elem-col:nth-child(1) h3.dark50:nth-child(2)').text('hover / focus')}
const def = () => {$('.elem-col:nth-child(1) h3.dark50:nth-child(2)').text('default')}

$('.elem-col h3.dark50 + input[type="email"]').focus(focus).focusout(def).hover(focus, def)