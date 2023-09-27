//Button to initialize game
const button1 = document.querySelector("#startGame")


let dmg = 0;
let ehb = 0;
let hl = 0;
let aq = 0;
let ehn = 0;
let ssa = 0;
let dvs = 0;


//Questions as objects in an array for the user to answer
const questions = [
    {
        question: "Which of these colors do your prefer?",
        response: [
                    {answer: "Red", value: ehb += 1},
                    {answer: "Pink", value: dmg += 2},
                    {answer: "Yellow", value: dvs += 3}
        ]
    },{
        question: "Whats your name",
        response: [
                    {answer: "pete", value: 1},
                    {answer: "Bud", value: 2},
                    {answer: "Carl", value: 3}
        ]
    },
]

//Event listener function that commences upon button1 being pressed

button1.addEventListener("click", async () => {

    //API call
    const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')


    const monster = document.querySelector(".monsterPic")
    const host = document.querySelector(".hostBox")
    const weevil = document.querySelector(".weevil")
    const monstArr = []
    const response2 = response.data.data

    // For loop that grabs the specific data I wan and stores it in an array
    for (let i = 0; i < response2.length; i++) {
        if (response2[i].name === 'Dark Magician Girl' || response2[i].name === 'Harpie Lady' || response2[i].name === 'Elemental HERO Burstinatrix' || response2[i].name === 'Amazoness Queen' || response2[i].name === 'Elemental HERO Neos' || response2[i].name === 'SPYRAL Super Agent' || response2[i].name === 'Dhampir Vampire Sheridan' || response2[i].name === 'Ancient Gear Golem') {
            x = response2[i].card_images[0].image_url_cropped
            monstArr.push(x)
            weevil.setAttribute('src', "clipart905265.png")
            host.setAttribute('src', "clipart1246641.png")
        }
    }

    const question = document.querySelector("#question")
    const choices = Array.from(document.querySelectorAll(".choice"))
    let currentQuestion = {}
    
   
    let questionIndex = Math.floor(Math.random() * questions.length)
    
    currentQuestion = questions[questionIndex]
    questions.splice(questionIndex, 1)
    const choice1 = document.querySelector("#choice0")
    const choice2 = document.querySelector("#choice1")
    const choice3 = document.querySelector("#choice2")


    question.innerHTML = currentQuestion.question
    choice1.innerHTML = currentQuestion.response[0].answer
    choice2.innerHTML = currentQuestion.response[1].answer
    choice3.innerHTML = currentQuestion.response[2].answer

   

    ansButton = document.querySelectorAll(".choice")
    console.log(ansButton)

    let dmg = 0;
    let ehb = 0;
    let hl = 0;
    let aq = 0;
    let ehn = 0;
    let ssa = 0;
    let dvs = 0;


    choices.forEach(choice => {
    choice.addEventListener("click", evt => {
        if (questions.length === 0) {
            if (dmg === 2) {
                monster.setAttribute('src', monstArr[5])
            } else {
                return
            }
            return
        }
        let id = evt.target.id[evt.target.id.length - 1]
        if (id === '0') currentQuestion.response[id].value 
        
        if (id === '1') currentQuestion.response[id].value
        
        if (id === '2') currentQuestion.response[id].value

        questionIndex = Math.floor(Math.random() * questions.length)   
        currentQuestion = questions[questionIndex]
        question.innerHTML = currentQuestion.question
        choice1.innerHTML = currentQuestion.response[0].answer
        choice2.innerHTML = currentQuestion.response[1].answer
        choice3.innerHTML = currentQuestion.response[2].answer
        questions.splice(questionIndex, 1)
        console.log(dmg)
    })

    

})
})

