function createGrid(size) {
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
      box.addEventListener('mouseover', box => paintBox(box, 'purple'));
      column.appendChild(box);
    }
  }
};

function paintBox(item, color) {
  item.target.style.backgroundColor = color;
}

const sizeButton = document.querySelector('.sizebutton');
sizeButton.addEventListener('click', getSize);

function getSize() {
  let size = prompt('Set number of pixels per side');
  if (size <= 100) { 
    createGrid(size);
  }
}

function removeGrid() {
  const grid = document.querySelector('.grid');
  grid.remove();
}

createGrid();