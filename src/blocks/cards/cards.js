import './slick.scss'
import './slick-theme.scss'
import './cards.scss'
try {
  for (let i=1; i<999; i++) {
    require(`./img/${i}`)
  }
} catch(e) {}

require('slick-carousel')

const Masonry = require('masonry-layout')

const elem = document.querySelector('#cards')
const msnry = new Masonry( elem, {
  itemSelector: '#cards > div',
  columnWidth: 1,
  gutter: 40,
  transitionDuration: '300ms',
});

$('.thumbnail').slick({
    dots: true
})

// booking card

const formatNum = (num) => {
  num = num.toString().split('')
  num.reverse().splice(3, 0, ' ')
  return num.reverse().join('')+'₽'
}

let dailyCost = Number($('.booking b').text().replace(' ', '').replace('₽', ''))
const days = 4
let sum = dailyCost*days
let finalCost = sum - 2179 + 300

$('#cost').text(formatNum(dailyCost))
$('#days').text(days)
$('#sum').text(formatNum(sum))
$('#final-cost').text(formatNum(finalCost))
