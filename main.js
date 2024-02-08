let attempt = 1;

const btnStart = document.getElementById('btnStart');
const inputN = document.getElementById('input');
const btn = document.getElementById('btn');
inputN.style.display = 'none';
btn.style.display = 'none';

const computerNumbers = [];

const start = () => {
  btnStart.style.display = 'none';
  inputN.style.display = 'block';
  btn.style.display = 'block';
  while (computerNumbers.length < 3) {
      let num = Math.floor(Math.random() * 10)
     if(!computerNumbers.includes(num)){
      computerNumbers.push(num);
     }
  }
}

document.getElementById('btnStart').addEventListener('click',start)

let click = () => {

  const input = document.getElementById('input').value;

  let inputNums = input.split('');
  
  if(input === null || input === '') {
    alert("취소되었습니다. 다시 입력해주세요.");
    return;
  }

   let sResult = 0;
   let bResult = 0;
   
    for(let i = 0; i < computerNumbers.length; i++) {
      if (Number((inputNums[i])) === computerNumbers[i]){
        sResult++;
      }else {
         if(computerNumbers.includes(Number(inputNums[i]))) {
          bResult++;
        }
      }
    }
    
     
    const attemptResult = `${attempt}번째 시도: ${inputNums[0]}${inputNums[1]}${inputNums[2]}`
    const result = `${bResult}:B${sResult}:S`;
  
    const resultsContainer = document.getElementById('contianer');
    
    const attemptsContainer = document.createElement('p');
    attemptsContainer.append(attemptResult);

    const resultElement = document.createElement('p');
    resultElement.append(result);

    resultsContainer.append(attemptsContainer);
    resultsContainer.append(resultElement);


    console.log(computerNumbers)
    attempt++;
    inputNums = [];
  
    console.log(bResult,sResult)
    if (sResult === 3) {
      const endMessage  = `${attempt}번째 시도에서 정답을 맞추셨습니다 게임을 종료하셨습니다.`
      resultsContainer.innerHTML += `<p>${endMessage}</p>`
      document.getElementById('btn').removeEventListener('click', click);
      }
     
   }
 document.getElementById('btn').addEventListener('click', click)
 