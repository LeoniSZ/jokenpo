const readline = require('readline');
//modulo readline possibilita ler comandos enviados para o Node.js 

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

const opcoes = {
    rock: 1,
    paper: 2,
    scizzors: 3
};


/*

returnOption arrow function with variable


const returnOption = number => {
    if(number === 1){
        return 'Rock'
    }
    if(number === 2){
        return 'Paper'
    }
    if(number === 3){
        return 'Scizzors'
    }
}
*/

function returnOption(number){
    if(number === 1){
        return 'Rock'
    }
    if(number === 2){
        return 'Paper'
    }
    if(number === 3){
        return 'Scizzors'
    }
}



rl.question('What you gonna do?', resposta =>{
    
    const escolhaDoUsuario  = opcoes[resposta];
    const escolhaDoComputador = Math.round(Math.random() * 2) + 1;
    
    console.log(`Your play: ${returnOption(escolhaDoUsuario)}\nMachine play: ${returnOption(escolhaDoComputador)}`)
    //Rock win conditions
    if(escolhaDoUsuario === 1 && escolhaDoComputador === 1){
        console.log(`Oh my! That's a draw!`);
    }else if(escolhaDoUsuario === 1 && escolhaDoComputador === 2){
        console.log(`This is bad... you lost`);
    }else if(escolhaDoUsuario === 1 && escolhaDoComputador === 3){
        console.log(`Oh my! You won!`);
    }
    
    //Paper win conditions
    if(escolhaDoUsuario === 2 && escolhaDoComputador === 2){
        console.log(`Oh my! That's a draw!`);
    }else if(escolhaDoUsuario === 2 && escolhaDoComputador === 3){
        console.log(`This is bad... you lost`);
    }else if(escolhaDoUsuario === 2 && escolhaDoComputador === 1){
        console.log(`Oh my! You won!`);
    }


    //Scissor win conditions
    if(escolhaDoUsuario === 3 && escolhaDoComputador === 3){
        console.log(`Oh my! That's a draw!`);
    }else if(escolhaDoUsuario === 3 && escolhaDoComputador === 1){
        console.log(`This is bad... you lost`);
    }else if(escolhaDoUsuario === 3 && escolhaDoComputador === 2){
        console.log(`Oh my! You won!`);
    }


    rl.close();
})












