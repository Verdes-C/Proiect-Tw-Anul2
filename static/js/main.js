'use strict';
const navi = document.querySelectorAll('.submenu li a');
navi[0].href = '/';
for (let i = 1; i < navi.length; i++) {
  navi[i].href = `/game:${i}`;
}
