
function createCell()
{
    let cell = document.createElement('div');
    return cell;
}

/*function generateRandomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}*/

function fillArrayBombs(arrayBombs, max)
{
    let randomNumber;
    let check = false;
    
    while(check === false)
    {
        randomNumber = Math.floor(Math.random() * (max - 1 + 1) + 1);
        
        if(!arrayBombs.includes(randomNumber))
        {
            check = true;
        }
    }

    return randomNumber;
}

function createArray(cellsNumber, arrayBombs)
{
    let number = null;

    for (let i=0; i<16; i++)
    {
        number = fillArrayBombs(arrayBombs, cellsNumber);
        arrayBombs.push(number);
    }
    
    return arrayBombs;
}

//Creo l'evento che deve accadere al click del bottone 'Genera Campo Minato'
button.addEventListener('click', function()
    {
    //Azzero il contenuto di grid
    grid.innerHTML = '';
    //Recupero il valore selezionato dall'elemento <select>
    let difficulty = document.getElementById('diff-pers').value;
    let cellsNumber = 0;
    let score = 0;
    let gameOver = false;
    const arrayBombs = [];
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
            
            createArray(cellsNumber, arrayBombs);
            console.log(arrayBombs);

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
                            if(gameOver === false)
                            {
                                if(arrayBombs.includes(parseInt(this.innerText)))
                                {
                                    this.classList.add('bomb-clicked');
                                    gameOver = true;
                                    alert(`Hai perso. Il tuo punteggio è: ${score}`);
                                   
                                } else if (!cell.classList.contains('clicked'))
                                {
                                    this.classList.add('clicked');
                                    score++;
                                    if(score === cellsNumber - 16 )
                                    {
                                        gameOver = true;
                                        alert('Complimenti! Hai vinto. Non hai cliccato su nessuna bomba!');
                                    }
                                    
                                }
                            }
                                
                        });
                    //Mostro la griglia a video
                    grid.append(cell);
            }


    });

    