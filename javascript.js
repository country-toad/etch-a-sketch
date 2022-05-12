const grid = document.querySelector('.grid');
for(i=0; i<16; i++) { 
  let newRow = document.createElement('div');
  grid.appendChild(newRow);
  for(j=0; j<2; j++) {
    let div = document.createElement('div');
    div.textContent = 'test';
    newRow.appendChild(div);
  }
}