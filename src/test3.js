import $ from 'jquery'
import './test3.css'
const $square = $('#app3 .square')

$square.on('click', () => {
    $square.toggleClass('active')
})