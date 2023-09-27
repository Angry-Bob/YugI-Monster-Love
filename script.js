//Button to initialize game
const button1 = document.querySelector("#startGame")


let dmg= 0;
let ehb = 0;
let hl = 0;
let aq = 0;
let ehn = 0;
let ssa = 0;
let dvs = 0;
let agg = 0;

let variables = [dmg,ehb,hl,aq,ehn,ssa,dvs,agg]

//Questions as objects in an array for the user to answer
const questions = [
    {
        question: "Dark Magician girl: Which of these colors do your prefer?",
        response: [
                    {answer: "Red", value: 1},
                    {answer: "Pink", value: 2},
                    {answer: "I love all colors!", value: 3}
        ]
    },{
        question: "",
        response: [
                    {answer: "pete", value: 1},
                    {answer: "Bud", value: 2},
                    {answer: "Carl", value: 3}
        ]
    },{
        question: "Do you like sports?",
        response: [
                    {answer: "Yes", value: 1},
                    {answer: "No", value: 2},
                    {answer: "They're ok", value: 3}
        ]
    },{
        question: "Any pets?",
        response: [
                    {answer: "Dog", value: 1},
                    {answer: "Cat", value: 2},
                    {answer: "A bird named Sean Canary", value: 3}
        ]
    },{
        question: "How much do you bench?",
        response: [
                    {answer: "300lbs!!", value: 1},
                    {answer: "LEGS! LEGS! LEGS!", value: 2},
                    {answer: "A well formed physique is what is most important", value:3}
        ]
    },{
        question: "Do you like art?",
        response: [
                    {answer: "Yes, I love art", value: 1},
                    {answer: "Nah, its not my thing", value: 2},
                    {answer: "Id rather sneaking into a top secret facility to steal classified documents", value: 3}
        ]
    },{
        question: "Do you like pokemon?",
        response: [
                    {answer: "Absolutely!!!", value: 1},
                    {answer: "Get the hell out of here!!!", value: 2},
                    {answer: "...", value: 3}
        ]
    },{
        question: "Are you a fan of long trips?",
        response: [
                    {answer: "The longer, the better", value: 10},
                    {answer: "Ehh, Id rather stay at home", value: 2},
                    {answer: "I prefer medium trips", value: 3}
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
    

    //Jeremy helped me design this wicked awesome code, thanks dude
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




    let variables = [dmg,ehb,hl,aq,ehn,ssa,dvs,agg]



    // Hayk assisted me with the code below, thanks Hayk
    choices.forEach(choice => {
    choice.addEventListener("click", evt => {

        if (questions.length === 0) {
            weevil.setAttribute('src', monstArr[5])
            return
        }
        let id = evt.target.id[evt.target.id.length - 1]









        if (currentQuestion.question === '') {
            if (id === '0') dmg += 25
        } else if (id === '1') {
            dmg += 10
        } else if (id === '2') {
            dmg +=3
        }

        if (currentQuestion.question === 'Which of these colors do your prefer?') {
            if (id === '0') dmg += 25
        } else if (id === '1') {
            dmg += 10
        } else if (id === '2') {
            dmg +=3
        }

        if (currentQuestion.question === 'Which of these colors do your prefer?') {
            if (id === '0') dmg += 25
        } else if (id === '1') {
            dmg += 10
        } else if (id === '2') {
            dmg +=3
        }

        if (currentQuestion.question === 'Which of these colors do your prefer?') {
            if (id === '0') dmg += 25
        } else if (id === '1') {
            dmg += 10
        } else if (id === '2') {
            dmg +=3
        }

        if (currentQuestion.question === 'Which of these colors do your prefer?') {
            if (id === '0') dmg += 25
        } else if (id === '1') {
            dmg += 10
        } else if (id === '2') {
            dmg +=3
        }

        if (currentQuestion.question === 'Which of these colors do your prefer?') {
            if (id === '0') dmg += 25
        } else if (id === '1') {
            dmg += 10
        } else if (id === '2') {
            dmg +=3
        }

        if (currentQuestion.question === 'Which of these colors do your prefer?') {
            if (id === '0') dmg += 25
        } else if (id === '1') {
            dmg += 10
        } else if (id === '2') {
            dmg +=3
        }

        if (currentQuestion.question === 'Which of these colors do your prefer?') {
            if (id === '0') dmg += 25
        } else if (id === '1') {
            dmg += 10
        } else if (id === '2') {
            dmg +=3
        }

        if (currentQuestion.question === 'Which of these colors do your prefer?') {
            if (id === '0') dmg += 25
        } else if (id === '1') {
            dmg += 10
        } else if (id === '2') {
            dmg +=3
        }

        if (currentQuestion.question === 'Which of these colors do your prefer?') {
            if (id === '0') dmg += 25
        } else if (id === '1') {
            dmg += 10
        } else if (id === '2') {
            dmg +=3
        }

        if (currentQuestion.question === 'Which of these colors do your prefer?') {
            if (id === '0') dmg += 25
        } else if (id === '1') {
            dmg += 10
        } else if (id === '2') {
            dmg +=3
        }





















        // if (id === '0') currentQuestion.response[id].value
        
        if (id === '1') currentQuestion.response[id].value
        
        if (id === '2') currentQuestion.response[id].value

        questionIndex = Math.floor(Math.random() * questions.length)   
        currentQuestion = questions[questionIndex]
        question.innerHTML = currentQuestion.question
        choice1.innerHTML = currentQuestion.response[0].answer
        choice2.innerHTML = currentQuestion.response[1].answer
        choice3.innerHTML = currentQuestion.response[2].answer
        questions.splice(questionIndex, 1);
        
        
   
console.log(dmg)
  
        
    })

    

})
})

