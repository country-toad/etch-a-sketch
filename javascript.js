const grid = document.querySelector('.grid');
for(i=0; i<16; i++) { 
  let newRow = document.createElement('div');
  newRow.classList.add("row");
  grid.appendChild(newRow);
  for(j=0; j<16; j++) {
    let div = document.createElement('div');
    div.textContent = '*';
    newRow.appendChild(div);
  }
}