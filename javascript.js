function createGrid(col, row) {
  const grid = document.querySelector('.grid');
  for(i = 0; i < col; i++) { 
    let newCol = document.createElement('div');
    newCol.classList.add("column");
    grid.appendChild(newCol);
    for(j = 0; j < row; j++) {
      let box = document.createElement('div');
      box.classList.add("box");
      newCol.appendChild(box);
    }
  }
};

createGrid(16, 16);