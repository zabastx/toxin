import './slick.scss'
import './slick-theme.scss'
import './cards.scss'
try {
  for (let i=1; i<999; i++) {
    require(`./img/${i}`)
  }
} catch(e) {}

require('slick-carousel')

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
let days = 1
let sum = dailyCost*days
let finalCost = sum - 2179 + 300

const daysChange = () => {
  let str1 = $('.booking .arrival .filter2-date-picker').val().split('')
  let str2 = $('.booking .departion .filter2-date-picker').val().split('')
  str1.splice(3, 0, str1.splice(0, 3).join(''))
  str2.splice(3, 0, str2.splice(0, 3).join(''))
  const date1 = new Date(str1.join(''))
  const date2 = new Date(str2.join(''))
  const diffDays = Math.ceil(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24))
  days = diffDays
  sum = dailyCost*days
  finalCost = sum - 2179 + 300
  $('#days').text(days)
  $('#sum').text(formatNum(sum))
  $('#final-cost').text(formatNum(finalCost))
}

$('#cost').text(formatNum(dailyCost))
$('#days').text(days)
$('#sum').text(formatNum(sum))
$('#final-cost').text(formatNum(finalCost))

// date picker

const dateCfg = {
  locale: {
    format: 'DD.MM.YYYY',
    separator: "-",
    applyLabel: "Применить",
    cancelLabel: "Отменить",
    fromLabel: "From",
    toLabel: "To",
    customRangeLabel: "Custom",
    weekLabel: "W",
    firstDay: 1,
    daysOfWeek: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        "monthNames": [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
        ]
    },
    linkedCalendars: false,
  }

const formatRoomDate = e => {
  try {
    if (!e) {
      const elem = $('.filter2-date-picker')
      elem.val(elem.val().split('').slice(0, 10).join(''))
    }
    const date = $(e.delegateTarget).val().split('')
    if (e.target.parentElement.parentElement.parentElement.className === 'room-picker') {
      $('.room-picker .arrival .filter2-date-picker').val(date.slice(0, 10).join(''))
      $('.room-picker .departion .filter2-date-picker').val(date.slice(11).join(''))
    }
    else {
      $('.booking .arrival .filter2-date-picker').val(date.slice(0, 10).join(''))
      $('.booking .departion .filter2-date-picker').val(date.slice(11).join(''))
      daysChange()
    }
  } catch(error) {}
}

$('.filter2-date-picker').daterangepicker(dateCfg)
$('.filter2-date-picker').change(formatRoomDate)
formatRoomDate()
