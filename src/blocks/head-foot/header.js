import './header.css'
import './footer.css'
import './logo.png'

let menu = false

$('.exp-menu').click(e => {
    $('.exp-menu ul').css({
        display: !menu ? 'block': 'none'
    })
    menu = menu ? false: true
})