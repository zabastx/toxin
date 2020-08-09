import './elements.scss'
import './datepicker.scss'

require('moment')
require('./daterangepicker')
require('./jq-star')
require('./jq-maskedinput')
require('px-jquery-pagination')
require('webpack-jquery-ui')
require('webpack-jquery-ui/css')

const sliderConfig = {
  range: true,
  min: 0,
  max: 15000,
  values: [5000, 10000],
  slide: (event, ui) => {
    $( "#amount" ).text( ui.values[ 0 ] + "₽ - " + ui.values[ 1 ] + '₽' )
  }
}

const dateConfig = {
  singleDatePicker: true,
  locale: {
    format: 'DD.MM.YYYY',
    separator: " - ",
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
    linkedCalendars: false
  }

const filterDateConfig = {
   locale: {
     format: 'DD MMM',
     separator: " - ",
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

const paginConfig = {
  currentPage: 1,
  totalPageCount: 15,
  maxBtnCount: 3,
  firstLastBtnShow: false,
  prevPageName:'arrow_back',
  nextPageName:'arrow_forward'
}

// jQuery UI slider

$( "#slider-range" ).slider(sliderConfig)

// Slider value display

$( "#amount" ).text( $( "#slider-range" ).slider( "values", 0 ) + "₽ - " + $( "#slider-range" ).slider( "values", 1 ) + '₽' )


// Like button function

$('.like-btn').click(e => {
  const x = e.currentTarget
  if (e.currentTarget.firstChild.innerText == 'favorite_border') {
    x.firstChild.innerText = 'favorite'
    x.style.color = '#BC9CFF'
    x.style.border = '1px solid #BC9CFF'
    x.lastChild.innerText++
  }
  else {
    x.firstChild.innerText = 'favorite_border'
    x.style.color = 'rgba(31, 32, 65, 0.25)'
    x.style.border = '1px solid rgba(31, 32, 65, 0.25)'
    x.lastChild.innerText--
  }
})

// JQ star rating

$('.rating').addRating({ fieldId: 'star-rating', fieldName: 'star-rating'})

// jQuery px-pagination

$('.jq-pagination').pxpaginate(paginConfig)
$('.px-btn-prev').addClass('material-icons')
$('.px-btn-next').addClass('material-icons')


$('.px-btn').click(e => {
  if (e.target.innerText === '1' || $('.selected').text() == 2 && e.target.innerText == 'arrow_back') {
    $('.px-btn-prev').hide()
    $('.px-btn-next').show()
  }
  else if (e.target.innerText == paginConfig.totalPageCount || $('.selected').text() == paginConfig.totalPageCount - 1 && e.target.innerText == 'arrow_forward') {
    $('.px-btn-next').hide()
    $('.px-btn-prev').show()
  }
  else {
    $('.px-btn-prev').show()
    $('.px-btn-next').show()
  }
})

// Guest dropdown

$('.guest-dropdown button.dark75').click(e => {
  const visible = e.delegateTarget.nextSibling.style.display == 'flex'
  $(e.delegateTarget.nextSibling).css({
    display: visible ? 'none': 'flex'
  })
  if (visible) {
    $(e.delegateTarget.lastChild).css({
      color: 'rgba(31, 32, 65, 0.5)'
    })
    $(e.delegateTarget).css({
      border: '1px solid rgba(31, 32, 65, 0.25)',
      borderBottomLeftRadius: '4px',
      borderBottomRightRadius: '4px',
    })
  }
  else {
    $(e.delegateTarget).css({
      border: '1px solid rgba(31, 32, 65, 0.5)',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderBottom: 'none'
    })
    $(e.delegateTarget.lastChild).css({
      color: 'rgba(31, 32, 65, 0.75)'
    })
  }
}).hover(e => {
  $(e.delegateTarget).css({ border: '1px solid rgba(31, 32, 65, 0.5'})
}, e => {
  $(e.delegateTarget).css({ border: '1px solid rgba(31, 32, 65, 0.25'})
})

// input mask

$('.masked-input').mask("99.99.9999")
$('.date-picker').mask("99.99.9999")

// JQuery date range picker

const formatMonth = () => {
  $('.filter-date-picker').val($('.filter-date-picker').val().split('.').join(''))
}

$('.date-picker').daterangepicker(dateConfig)
$('.filter-date-picker').daterangepicker(filterDateConfig)
formatMonth()
$('.filter-date-picker').change(formatMonth)
$('.date-picker').val('ДД.ММ.ГГГГ')
$('.next span').text('arrow_forward')