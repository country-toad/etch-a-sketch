function createGrid(width=16, height=16) {
  const grid = document.createElement('div');
  grid.classList.add("grid");
  document.body.appendChild(grid);
  for(i = 0; i < width; i++) { 
    let column = document.createElement('div');
    column.classList.add("column");
    grid.appendChild(column);
    for(j = 0; j < height; j++) {
      let box = document.createElement('div');
      box.classList.add("box");
      box.addEventListener('mouseover', box => paintBox(box, 'lime'));
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
  let width = prompt("Set width:");
  let height = prompt("Set height:");
  if (width && height) { 
    createGrid(width, height);
  }
}

createGrid();