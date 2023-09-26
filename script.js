//Button to initialize game
const button1 = document.querySelector("#startGame")


//Questions as objects in an array for the user to answer
const questions = [
    {
        question: "Which of these colors do your prefer?",
        response: [
                    {answer: "Red", value: 3},
                    {answer: "Pink", value: 3},
                    {answer: "Yellow", value: 3}
        ]
    },{
        question: "Of which food might you be a fan?",
        response: [
 
                    {answer: "Spaghetti", value: 3},
                    {answer: "Baked fish", value: 3},
                    {answer: "Chicken Tendies", value: 3}
                ]
    
    },{
        question: "Of which food might you be a fan?",
        response: [
 
                    {answer: "Spaghetti", value: 3},
                    {answer: "Baked fish", value: 3},
                    {answer: "Chicken Tendies", value: 3}
                ]
    },{
        question: "Of which food might you be a fan?",
        response: [
 
                    {answer: "Spaghetti", value: 3},
                    {answer: "Baked fish", value: 3},
                    {answer: "Chicken Tendies", value: 3}
                ]
    },{
            question: "Of which food might you be a fan?",
        response: [
 
                    {answer: "Spaghetti", value: 3},
                    {answer: "Baked fish", value: 3},
                    {answer: "Chicken Tendies", value: 3}
                ]
    },{
        question: "Of which food might you be a fan?",
        response: [
 
                    {answer: "Spaghetti", value: 3},
                    {answer: "Baked fish", value: 3},
                    {answer: "Chicken Tendies", value: 3}
                ]
    },{
        question: "Of which food might you be a fan?",
        response: [
 
                    {answer: "Spaghetti", value: 3},
                    {answer: "Baked fish", value: 3},
                    {answer: "Chicken Tendies", value: 3}
                ]
    },{
        question: "Of which food might you be a fan?",
        response: [
 
                    {answer: "Spaghetti", value: 3},
                    {answer: "Baked fish", value: 3},
                    {answer: "Chicken Tendies", value: 3}
                ]
    },{
        question: "Of which food might you be a fan?",
        response: [
 
                    {answer: "Spaghetti", value: 3},
                    {answer: "Baked fish", value: 3},
                    {answer: "Chicken Tendies", value: 3}
                ]
    },{
        question: "Of which food might you be a fan?",
        response: [
 
                    {answer: "Spaghetti", value: 3},
                    {answer: "Baked fish", value: 3},
                    {answer: "Chicken Tendies", value: 3}
                ]
    },{
        question: "Of which food might you be a fan?",
        response: [
 
                    {answer: "Spaghetti", value: 3},
                    {answer: "Baked fish", value: 3},
                    {answer: "Chicken Tendies", value: 3}
                ]
    },{
        question: "Of which food might you be a fan?",
        response: [
 
                    {answer: "Spaghetti", value: 3},
                    {answer: "Baked fish", value: 3},
                    {answer: "Chicken Tendies", value: 3}
                ]
    },{
        question: "Of which food might you be a fan?",
        response: [
 
                    {answer: "Spaghetti", value: 3},
                    {answer: "Baked fish", value: 3},
                    {answer: "Chicken Tendies", value: 3}
                ]
    },{
        question: "Of which food might you be a fan?",
        response: [
 
                    {answer: "Spaghetti", value: 3},
                    {answer: "Baked fish", value: 3},
                    {answer: "Chicken Tendies", value: 3}
                ]
    },{
        question: "Of which food might you be a fan?",
        response: [
 
                    {answer: "Spaghetti", value: 3},
                    {answer: "Baked fish", value: 3},
                    {answer: "Chicken Tendies", value: 3}
                ]
    },{
        question: "Of which food might you be a fan?",
        response: [
 
                    {answer: "Spaghetti", value: 3},
                    {answer: "Baked fish", value: 3},
                    {answer: "Chicken Tendies", value: 3}
                ]
    },{
        question: "Of which food might you be a fan?",
        response: [
 
                    {answer: "Spaghetti", value: 3},
                    {answer: "Baked fish", value: 3},
                    {answer: "Chicken Tendies", value: 3}
                ]
    },{
        question: "Of which food might you be a fan?",
        response: [
 
                    {answer: "Spaghetti", value: 3},
                    {answer: "Baked fish", value: 3},
                    {answer: "Chicken Tendies", value: 3}
                ]
    },{
        question: "Of which food might you be a fan?",
        response: [
 
                    {answer: "Spaghetti", value: 3},
                    {answer: "Baked fish", value: 3},
                    {answer: "Chicken Tendies", value: 3}
                ]
    },{
        question: "Of which food might you be a fan?",
        response: [
 
                    {answer: "Spaghetti", value: 3},
                    {answer: "Baked fish", value: 3},
                    {answer: "Chicken Tendies", value: 3}
                ]
    }]

    


//Event listener function that commences upon button1 being pressed

button1.addEventListener("click", async () => {

    //API call
    const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')


    const monster = document.querySelector(".monsterPic")
    const host = document.querySelector(".hostBox")
    const monstArr = []
    const response2 = response.data.data

    // For loop that grabs the specific data I wan and stores it in an array
    for (let i = 0; i < response2.length; i++) {
        if (response2[i].name === 'Dark Magician Girl' || response2[i].name === 'Harpie Lady' || response2[i].name === 'Elemental HERO Burstinatrix' || response2[i].name === 'Amazoness Queen' || response2[i].name === 'Elemental HERO Neos' || response2[i].name === 'SPYRAL Super Agent' || response2[i].name === 'Dhampir Vampire Sheridan' || response2[i].name === 'Ancient Gear Golem') {
            x = response2[i].card_images[0].image_url_cropped
            monstArr.push(x)
            monster.setAttribute('src', monstArr[5])
            host.setAttribute('src', "kisspng-yugi-mutou-yami-yugi-yu-gi-oh-duel-links-yu-gi-oh-yu-5addf130a789d7.3981810715244946406863.png")
        }
    }

    let dmg = 0;
    let ehb = 0;
    let hl = 0;




    const question = document.querySelector("#question")
    const choices = Array.from(document.querySelectorAll(".choice"))
    let currentQuestion = {}
    
   
    const questionIndex = Math.floor(Math.random() * questions.length)
    currentQuestion = questions[questionIndex]
    const choice1 = document.querySelector("#choice1")
    const choice2 = document.querySelector("#choice2")
    const choice3 = document.querySelector("#choice3")



    question.innerHTML = currentQuestion.question
    choice1.innerHTML = currentQuestion.response[0].answer
    choice2.innerHTML = currentQuestion.response[1].answer
    choice3.innerHTML = currentQuestion.response[2].answer

   

    ansButton = document.querySelectorAll(".choice")
    console.log(ansButton)


    choices.forEach(choice => {
    choice.addEventListener("click", evt => {
        console.log('working')
    })
 
    
})




console.log(dmg)





})

