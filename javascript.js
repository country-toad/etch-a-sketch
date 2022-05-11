const grid = document.querySelector('.grid');
for(i = 0; i < 16*16; i++) { 
  let div = document.createElement('div');
  div.textContent = 'test';
  grid.appendChild(div);
}