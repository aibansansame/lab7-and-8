const quizData = [
    {
      question:"What is the chemical formula for table salt",
      
        a:"NaCl", 
        b:"KCl", 
        c:"MgCl", 
        d:"KMnO4", 
        correct: "a",
        
    },
    
    {
      question:"which of the following is a non-renewable sources of energy",
        a:"Wood", 
        b:"Sun", 
        c:"Fossil fuel", 
        d:"Wind", 
        correct: "a",
    },
    {
       question:"Fuel used in thermal power plants is",
      
        a:"Water", 
        b:"Uranium", 
        c:"Biomass", 
        d:"Fossil fuel",
        correct: "a",
      
    },
    {
       question:"Which is the unlimited sources of energy",
      
        a:"Water", 
        b:"Sun", 
        c:"Wind", 
        d:"None of the above", 
        correct: "a",
        
    },
    {
       question:"Sound cannot travel throught",
      
        a:"Air", 
        b:"water", 
        c:"vacuum", 
        d:"solids", 
        
        correct: "c",
    },
    {
       question:"Frequency is expressed in",
      
        a:"Kilometer", 
        b:"Herts", 
        c:"Grams", 
        d:"Degree centigrade", 
        correct: "b",
        
    },
    {
       question:"Vibration motion is also knows as",
      
        a:"Vibratory Motion",
        b:"Translatory Motion", 
        c:"Oscillatory Motion", 
        d:"None of these", 
          correct: "c",
    },
    {
       question:"The tyres of the heavy vehicles are kept broad to",
      
        a:"Decrease the mass of the vehicle", 
        b:"Increase preasure on the ground", 
        c:"Decrease friction on the ground", 
        d:"Decrease pressure on the ground", 
  
          correct: "c",
    },
    {
       question:"Which of the following is true of liquid pressure",
      
        a:"It increase with depth", 
        b:"It decrease with depth", 
        c:"It is exerted only upwards", 
        d:"It is exerted only downwards", 
  
          correct: "a",
    },
    {
       question:"what type of chemical reactions take place when electricity is passed through water?",
      
        a:"Displacement", 
        b:"Combination", 
        c:"Decomposition", 
        d:"Double displacement", 
  
          correct: "c",
    }
];

const quiz=document.getElementById("quiz")
const answerEls=document.querySelectorAll(".answer")
const questionE1=document.getElementById("question")
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz=0
let score = 0

loadQuiz()

function loadQuiz(){
   
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionE1.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
  let answer
  answerEls.forEach(answerE1 => {
    if(answerEls.checked){
      answer = answerEls.id
    }
  })
  return answer
}

submitBtn.addEventListener('click',() =>{
  const answer = getSelected()
  if(answer){
    if (answer === quizData[currentQuiz].correct){
      score++;

  }
  currentQuiz++
  if(currentQuiz < quizData.length){
    loadQuiz()  
  }else{
    quiz.innerHTML = `
    <h2>You answered ${score}/${quizData.length} question correctly<h2>

    <button onclick="location.reload()"Reload</button>
    `
  }
  }
})




