import './app1.css';
import $ from 'jquery';

const $bnt1 = $('#add1');
const $bnt2 = $('#minus1');
const $bnt3 = $('#mul2');
const $bnt4 = $('#divide2');
const $number = $('#number')
const n = localStorage.getItem('n');
$number.text(n || 1000);

$bnt1.on('click', () => {
    let n = parseInt($number.text());
    n++;
    localStorage.setItem('n', String(n));
    $number.text(n);
})
$bnt2.on('click', () => {
    let n = parseInt($number.text());
    n--;
    localStorage.setItem('n', String(n));
    $number.text(n);
})
$bnt3.on('click', () => {
    let n = parseInt($number.text());
    n *= 2;
    localStorage.setItem('n', String(n));
    $number.text(n);
})
$bnt4.on('click', () => {
    let n = parseInt($number.text());
    n /= 2;
    localStorage.setItem('n', String(n));
    $number.text(n);
})