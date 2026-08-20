'use strict';

const num = 5;

let html = '';

for (let i = 0; i < num; i++) {
  html += '<tr>';
  // add the <td> elements
  html += '</tr>';
}

document.querySelector('#target').innerHTML = html;
