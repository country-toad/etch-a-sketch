function createGrid(col, row) {
  const grid = document.querySelector('.grid');
  for(i = 0; i < col; i++) { 
    let newCol = document.createElement('div');
    newCol.classList.add("column");
    grid.appendChild(newCol);
    for(j = 0; j < row; j++) {
      let box = document.createElement('div');
      box.classList.add("box");
      box.addEventListener('mouseover', box => paint(box, 'lime'));
      newCol.appendChild(box);
    }
  }
};

function paint(item, color) {
  item.target.style.backgroundColor = color;
}

createGrid(16, 16);