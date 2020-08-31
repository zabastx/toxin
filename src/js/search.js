import '../styles/search.scss'

$('.expand-search').click(() => {
  $('aside').css({
    right: 'unset',
    left: '0'
  })
})

$('aside .click-purple').click(() => {
  $('aside').css({
    right: '100%',
    left: 'unset'
  })
})