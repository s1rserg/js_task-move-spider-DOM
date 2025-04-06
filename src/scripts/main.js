'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const clientX = e.clientX;
  const clientY = e.clientY;

  const wallCoords = wall.getBoundingClientRect();
  const wallBorder = wall.clientLeft;
  const spiderCoords = spider.getBoundingClientRect();
  const spiderDim = spiderCoords.width;

  if (
    clientY < wallCoords.top ||
    clientY > wallCoords.bottom ||
    clientX < wallCoords.left ||
    clientY > wallCoords.right
  ) {
    return;
  }

  const spiderTop = clientY - wallCoords.top - wallBorder - spiderDim / 2;
  const spiderLeft = clientX - wallCoords.left - wallBorder - spiderDim / 2;

  const maxSpiderTop = wallCoords.height - wallBorder * 2 - spiderDim;
  const maxSpiderLeft = wallCoords.width - wallBorder * 2 - spiderDim;

  spider.style.top = `${Math.max(0, Math.min(spiderTop, maxSpiderTop))}px`;
  spider.style.left = `${Math.max(0, Math.min(spiderLeft, maxSpiderLeft))}px`;
});
