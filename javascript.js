const grid = document.querySelector('.grid');
for(i=0; i<16; i++) { 
  let newCol = document.createElement('div');
  newCol.classList.add("column");
  grid.appendChild(newCol);
  for(j=0; j<16; j++) {
    let box = document.createElement('div');
    box.classList.add("box");
    newCol.appendChild(box);
  }
}