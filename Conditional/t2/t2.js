'use strict';

const coordinate1 = prompt('Enter the first coordinate (x1, y1):');
const coordinate2 = prompt('Enter the second coordinate (x2, y2):');

const distance = coordinate2.x - coordinate1.x;

document.querySelector('#target').innerText = distance;
