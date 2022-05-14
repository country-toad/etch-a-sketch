function createGrid(size = 16) {
  if(document.querySelector('.grid')) {
    removeGrid();
  }
  const grid = document.createElement('div');
  grid.classList.add('grid');
  document.body.appendChild(grid);
  for(i = 0; i < size; i++) { 
    let column = document.createElement('div');
    column.classList.add('column');
    grid.appendChild(column);
    for(j = 0; j < size; j++) {
      let box = document.createElement('div');
      box.classList.add('box');
      box.addEventListener('mouseover', box => paintBox(box, 'black'));
      column.appendChild(box);
    }
  }
};

function setColor() {
  let color = prompt('What color?');
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => box.addEventListener('mouseover', box => paintBox(box, color)));
}

function paintBox(item, color) {
  item.target.style.backgroundColor = color;
}

function setSize() {
  let size = prompt('Set number of pixels per side');
  if (size <= 100) { 
    createGrid(size);
  }
}

function removeGrid() {
  const grid = document.querySelector('.grid');
  grid.remove();
}

function createRGBValue() {
  return Math.floor(Math.random() * 256);
}

function paintRainbow() {
  color = `rgb(${createRGBValue()}, ${createRGBValue()}, ${createRGBValue()})`;
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => box.addEventListener('mouseover', box => paintBox(box, color)));
}

createGrid();