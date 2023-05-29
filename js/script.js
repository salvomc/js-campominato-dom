
function createCell()
{
    let cell = document.createElement('div');
    return cell;
}

//Creo l'evento che deve accadere al click del bottone 'Genera Campo Minato'
button.addEventListener('click', function()
    {
    //Azzero il contenuto di grid
    grid.innerHTML = '';
    
    //Recupero il valore selezionato dall'elemento <select>
    let difficulty = document.getElementById('diff-pers').value;
    let cellsNumber = 0;
    //Creo un if per scegliere la tabella da mostrare in base alla difficoltà scelta
    if (difficulty === '1')
    {
        cellsNumber = 100;
    }   else if (difficulty === '2')
        {
            cellsNumber = 81;
        }   else if (difficulty === '3')
            {
                cellsNumber = 49;
            }
            
            for (let i = 0; i<cellsNumber; i++)
            {
                    //Creo ogni singola casella richiamando la funzione apposita
                    let cell = createCell();
                    //Aggiungo la classe cell
                    let cellsPerRow = Math.sqrt(cellsNumber);
        
                    cell.classList.add('cell');
                    cell.style.width = `calc(100% / ${cellsPerRow})`;
                    cell.style.height = `calc(100% / ${cellsPerRow})`;
                    cell.innerText = i + 1;
                    //Creo l'evento che al click del bottone cambi il colore
                    cell.addEventListener('click', function()
                        {
                            this.classList.add('clicked');
                        });
                    //Mostro la griglia a video
                    grid.append(cell);
            }
    });