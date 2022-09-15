numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let CorretoOuIncorreto = document.querySelector('.corrOuIncorr');

let ultimoResultado = document.querySelector('.ultimoresult');

let submitarPalpite = document.querySelector('.submitarpalpite');

let inputPalpite = document.querySelector('.inputpalpite');

let ultresulttext = document.querySelector('.ultresulttext');

let butaoreinicio = document.querySelector('.classreinicio button');

let mostrador = document.querySelector('.telamostrador');

let submit = document.querySelector('.butsubmit');

let contagemPalpites = 1;

let botaoReinicio;

console.log(numeroAleatorio)


function encerrarJogo(){
   CorretoOuIncorreto.textContent = 'Suas chances acabaram ! Reinicie o jogo !'
   CorretoOuIncorreto.style.backgroundColor = 'red'; 
   butaoreinicio.style.display = 'block';
}

function reiniciar(){
   location.reload()
}

function Start() {
   let valordopalpite = Number(inputPalpite.value);
   let aleatory = numeroAleatorio;

   if (contagemPalpites <= 10) {
      if (valordopalpite === aleatory) {
         CorretoOuIncorreto.textContent = 'Parabéns, seu palpite está CORRETO !'
         CorretoOuIncorreto.style.backgroundColor = '#00C4E3';
         CorretoOuIncorreto.style.display = 'flex';
         mostrador.style.display = 'flex';
         butaoreinicio.style.display = 'block';
         inputPalpite.value = ''
         document.querySelector('.inputpalpite').disabled = true;
         submit = document.querySelector('.butsubmit').disabled = true;
        
      } else if (valordopalpite < aleatory) {
         CorretoOuIncorreto.textContent = 'Palpite incorreto. Muito BAIXO !!!';
         CorretoOuIncorreto.style.display = 'flex';
         mostrador.style.display = 'flex';

      } else {
         CorretoOuIncorreto.textContent = 'Palpite incorreto. Muito ALTO !!!'
         CorretoOuIncorreto.style.display = 'flex';
         mostrador.style.display = 'flex';
      }

      ultresulttext.style.display = 'block'
      ultimoResultado.style.display = 'block'
      ultimoResultado.textContent += ' ' + valordopalpite; 
      inputPalpite.value = ''
      contagemPalpites++;
      
   } else {
      encerrarJogo()
   }
   
}