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
        question: "How would you extend your kindness in a challenging situation?",
        response: [
                    {answer: "Offer a listening ear and emotional support to a friend in need.", value: 10},
                    {answer: "Volunteer at a local charity or community organization to help those less fortunate.", value: 5},
                    {answer: "Surprise a loved one with a thoughtful gesture or gift to brighten their day.", value: 1}
        ]
    },{
        question: "How do you channel your excitement and passion into your daily life?",
        response: [
                    {answer: "Engage in outdoor activities like hiking, dancing, or playing sports to stay active and energized.", value: 10},
                    {answer: "Join a hobby club or group that aligns with your interests to share your enthusiasm with like-minded individuals.", value: 1},
                    {answer: "Attend events, concerts, or gatherings that fuel your excitement and allow you to connect with new experiences.", value: 5}
        ]
    },{
        question: "How do you showcase courage in your life?",
        response: [
                    {answer: "Stand up for a cause you believe in and actively work towards positive change in your community.", value: 10},
                    {answer: "Take on new opportunities or challenges, even if they seem daunting, to expand your horizons and overcome fear.", value: 1},
                    {answer: "Speak up for someone who is being treated unfairly or bullied, demonstrating your courage to defend others.", value: 5}
        ]
    },{
        question: "How do you approach challenging situations in your life?",
        response: [
                    {answer: "Confront challenges head-on, drawing on inner strength and determination to find solutions.", value: 5},
                    {answer: "Seek advice and support from mentors or experienced individuals to navigate and overcome difficult situations.", value: 10},
                    {answer: "Reflect on past experiences and mistakes, learning from them to build the courage needed to face new challenges.", value: 1}
        ]
    },{
        question: "How do you channel your passion into your interests and activities?",
        response: [
                    {answer: "Dive into creative projects that excite you, whether it's painting, writing, or designing, to express your passion.", value: 10},
                    {answer: "Share your enthusiasm by joining or starting a club, community, or group centered around a hobby or cause you're passionate about.", value: 5},
                    {answer: "Attend events, workshops, or conventions related to your passions, immersing yourself in an environment that fuels your excitement.", value: 1}
        ]
    },{
        question: "How do you extend your care and support to those around you?",
        response: [
                    {answer: "Collaborate with others on projects or initiatives, ensuring everyone's voice is heard and contributions are valued.", value: 1},
                    {answer: "Volunteer your time and skills to support a cause or organization that aligns with your values, making a positive impact in your community.", value:5},
                    {answer: "Reach out to friends or acquaintances to offer help or encouragement, demonstrating empathy and understanding in their struggles.", value: 10}
        ]
    },{
        question: "How do you value and express your own independence in daily life?",
        response: [
                    {answer: "Enjoy solo adventures or activities that allow you to explore and experience the world on your own terms.", value: 5},
                    {answer: "Advocate for your opinions and ideas, even if they differ from the majority, valuing your independence of thought and expression.", value: 10},
                    {answer: "Take on responsibilities and projects independently, demonstrating your capability and self-reliance.", value: 1}
        ]
    },{
        question: "How do you foster and strengthen your relationships with others?",
        response: [
                    {answer: "Show your loyalty by consistently supporting and being there for your friends and loved ones, especially in their times of need.", value: 10},
                    {answer: "Engage in group activities, fostering a sense of camaraderie and unity among your friends and social circles.", value: 5},
                    {answer: "Encourage and celebrate the achievements and successes of those around you, building a supportive and uplifting community.", value: 1}
        ]
    },{
        question: "How do you showcase grace under pressure and adapt to changes in your life?",
        response: [
                    {answer: "Maintain composure and a level head during challenging situations, handling them with grace and poise.", value: 5},
                    {answer: "Embrace change and learn from new experiences, adjusting and adapting your approach to meet evolving circumstances.", value: 1},
                    {answer: "Practice patience and understanding, recognizing that adaptability is essential for personal growth and success.", value: 10}
        ]
    },{
        question: "How do you empower and motivate others in your personal or professional life?",
        response: [
                    {answer: "Encourage others to voice their ideas and opinions, fostering a sense of collaboration and empowerment within a group.", value: 10},
                    {answer: "Lead by example, showcasing dedication and determination in your pursuits to inspire and motivate those around you.", value: 5},
                    {answer: "Mentor or guide others to help them develop their skills and capabilities, empowering them to achieve their goals.", value: 1}
        ]
    },{
        question: "How do you demonstrate your commitment to safeguarding and supporting those you care about?",
        response: [
                    {answer: "Prioritize the well-being and safety of your loved ones, always being there to offer guidance and protection when needed.", value: 5},
                    {answer: "Stand up for your friends and colleagues, advocating for their rights and interests, and fostering a strong sense of loyalty.", value: 1},
                    {answer: "Offer a listening ear and emotional support to those going through challenging times, demonstrating your care and loyalty.", value: 10}
        ]
    },{
        question: "How do you exhibit bravery and bounce back from setbacks in your life?",
        response: [
                    {answer: "Face adversity head-on, showing courage in difficult situations and using challenges as opportunities for growth.", value: 5},
                    {answer: "Learn from failures and mistakes, using them as stepping stones toward future success and maintaining a resilient attitude.", value: 1},
                    {answer: "Encourage yourself and others to stay positive and persevere in the face of difficulties, demonstrating a strong spirit and determination.", value: 10}
        ]
    },{
        question: "How do you cultivate and nourish your relationships with others?",
        response: [
                    {answer: "Organize gatherings and events to bring friends and acquaintances together, fostering a sense of unity and strengthening your bonds.", value: 1},
                    {answer: "Collaborate with others on projects or activities, appreciating diverse perspectives and working collectively to achieve common objectives.", value: 5},
                    {answer: "Show appreciation and gratitude towards your friends and loved ones, demonstrating your care and love through both words and actions.", value: 10}
        ]
    },{
        question: "How do you advocate for fairness and stand up for what you believe is right?",
        response: [
                    {answer: "Participate in community service or volunteer activities, dedicating your time to help those in need and make a positive difference.", value: 10},
                    {answer: "Engage in discussions about social issues, raising awareness and encouraging others to take action for a more just and equal society.", value: 5},
                    {answer: "Stand up against injustice and unfair treatment, using your voice and influence to advocate for positive change and equality.", value: 1}
        ]
    },{
        question: "How do you maintain focus and keep pushing forward towards your goals?",
        response: [
                    {answer: "Set clear goals and create a plan to achieve them, staying determined and focused on your objectives even during challenging times.", value: 1},
                    {answer: "Learn from failures and setbacks, using them as motivation to keep improving and working hard to reach your aspirations.", value: 10},
                    {answer: "Surround yourself with supportive and encouraging individuals, drawing strength from their belief in you to persevere and succeed.", value: 5}
        ]
    },{
        question: "How do you embrace curiosity and uncover new knowledge in your life?",
        response: [
                    {answer: "Explore uncharted territories, whether it's traveling to new places or delving into unexplored topics, to satisfy your curiosity and thirst for discovery.", value: 1},
                    {answer: "Engage in intellectual discussions and debates, seeking to unravel complex ideas and concepts, and expanding your understanding of the world.", value: 10},
                    {answer: "Enjoy mystery novels, escape rooms, or detective games, immersing yourself in puzzles and enigmas that challenge your analytical thinking.", value: 5}
        ]
    },{
        question: "How do you respond effectively to unexpected situations or changes?",
        response: [
                    {answer: "Stay calm under pressure, using your ability to think on your feet and make rapid decisions to navigate through unforeseen circumstances.", value: 1},
                    {answer: "Embrace change and view challenges as opportunities to learn and grow, adjusting your plans and strategies accordingly to succeed in any situation.", value: 10},
                    {answer: "Participate in games or activities that require quick reflexes and adaptability, honing your skills to react swiftly to changing circumstances.", value: 5}
        ]
    },{
        question: "How do you contribute to and strengthen the teams you are a part of?",
        response: [
                    {answer: "Actively listen and consider the ideas and perspectives of your teammates, fostering an environment of open communication and mutual respect within the group.", value: 5},
                    {answer: "Delegate tasks effectively based on individual strengths and skills, ensuring a cohesive and productive team that works harmoniously towards a common goal.", value: 10},
                    {answer: "Celebrate the achievements and successes of your team members, acknowledging their contributions and creating a positive and motivating team dynamic.", value: 1}
        ]
    },{
        question: "How do you express sophistication and style in your daily life?",
        response: [
                    {answer: "Cultivate a refined taste in art, literature, or music, appreciating the beauty and grace in the finer things in life.", value: 10},
                    {answer: "Dress in a manner that reflects your personal style and taste, presenting yourself with poise and sophistication in your fashion choices.", value: 5},
                    {answer: "Attend cultural events and gatherings, immersing yourself in experiences that enhance your appreciation for elegance and refined aesthetics.", value: 1}
        ]
    },{
        question: "How do you handle and bounce back from difficult situations?",
        response: [
                    {answer: "Draw on your inner strength and determination to face adversity head-on, refusing to let challenges define or deter you.", value: 1},
                    {answer: "Seek support and advice from trusted friends or mentors, allowing their guidance and perspective to help you navigate through tough times and emerge stronger.", value: 10},
                    {answer: "Engage in activities that promote mental and emotional well-being, such as meditation or mindfulness, to build resilience and cope with stress.", value: 5}
        ]
    },{
        question: "How do you embrace curiosity and the unknown in your life?",
        response: [
                    {answer: "Explore enigmatic stories, movies, or experiences that captivate your imagination and leave you pondering the unknown.", value: 10},
                    {answer: "Engage in intellectual conversations or debates, delving into complex topics and unraveling mysteries through critical thinking and analysis.", value: 5},
                    {answer: "Visit historical or culturally rich locations, immersing yourself in the mysterious allure of the past and embracing the intrigue of different cultures.", value: 1}
        ]
    },{
        question: "How do you harness your own strength to overcome challenges in your life?",
        response: [
                    {answer: "Regularly engage in physical training or exercises to build and maintain your physical strength and endurance.", value: 1},
                    {answer: "Focus on mental and emotional resilience, developing the strength to face difficult situations with a clear and determined mind.", value: 5},
                    {answer: "Seek inspiration from role models or mentors who embody the kind of strength you aspire to possess, using their stories to motivate and guide you.", value: 10}
        ]
    },{
        question: "How do you express your creativity and innovative thinking?",
        response: [
                    {answer: "Engage in hands-on projects or DIY activities, allowing your creativity to flow and manifest through crafting or building.", value: 1},
                    {answer: "Explore new technologies or advancements in your field of interest, constantly seeking innovative ideas and solutions to improve and evolve.", value: 5},
                    {answer: "Collaborate with diverse groups of people to gain new perspectives and insights, fostering creativity through varied and stimulating discussions.", value: 10}
        ]
    },{
        question: "How do you demonstrate loyalty and reliability to your friends, family, or colleagues?",
        response: [
                    {answer: "Be there for your loved ones in times of need, offering unwavering support and demonstrating your loyalty through actions.", value: 10},
                    {answer: "Fulfill your commitments and responsibilities, ensuring others can depend on you to follow through on your promises and obligations.", value: 1},
                    {answer: "Prioritize the needs and well-being of your team or community, placing their interests at the forefront and showing your dedication to their success.", value: 5}
        ]
    }
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




    console.log(monstArr[0])
    console.log(monstArr[1])
    console.log(monstArr[2])
    console.log(monstArr[3])
    console.log(monstArr[4])
    console.log(monstArr[5])
    console.log(monstArr[6])
    console.log(monstArr[7])








    const question = document.querySelector("#question")
    const choices = Array.from(document.querySelectorAll(".choice"))
    let currentQuestion = {}
    
   
    let questionIndex = Math.floor(Math.random() * questions.length)
    

    //Jeremy helped me design this wicked awesome code, thanks Jeremy
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


    console.log(currentQuestion)

    let variables = [dmg,ehb,hl,aq,ehn,ssa,dvs,agg]



    // Hayk assisted me with the code below, thanks Hayk
    choices.forEach(choice => {
    choice.addEventListener("click", evt => {

    let id = evt.target.id[evt.target.id.length - 1]

    questionIndex = Math.floor(Math.random() * questions.length)   
    currentQuestion = questions[questionIndex]
    question.innerHTML = currentQuestion.question
    choice1.innerHTML = currentQuestion.response[0].answer
    choice2.innerHTML = currentQuestion.response[1].answer
    choice3.innerHTML = currentQuestion.response[2].answer
    questions.splice(questionIndex, 1);
        
       



        
            if (currentQuestion.question === 'How would you extend your kindness in a challenging situation?') {
                if (id === '0') {
                    dmg += currentQuestion.response[0].value
                } else if (id === '1') {
                    dmg += currentQuestion.response[1].value
                } else if (id === '2') {
                    dmg += currentQuestion.response[2].value
                }
        
            }
            if (currentQuestion.question === 'How do you channel your excitement and passion into your daily life?') {
                if (id === '0') {
                    dmg += currentQuestion.response[0].value
                } else if (id === '1') {
                    dmg += currentQuestion.response[1].value
                } else if (id === '2') {
                    dmg += currentQuestion.response[2].value
                }
            }
            if (currentQuestion.question === 'How do you showcase courage in your life?') {
                if (id === '0') {
                    dmg += currentQuestion.response[0].value
                } else if (id === '1') {
                    dmg += currentQuestion.response[1].value
                } else if (id === '2') {
                    dmg += currentQuestion.response[2].value
                }
            }
            if (currentQuestion.question === 'How do you approach challenging situations in your life?') {
                if (id === '0') {
                    ehb += currentQuestion.response[0].value
                } else if (id === '1') {
                    ehb += currentQuestion.response[1].value
                } else if (id === '2') {
                    ehb += currentQuestion.response[2].value
                }
            }
            if (currentQuestion.question === 'How do you channel your passion into your interests and activities?') {
                if (id === '0') {
                    ehb += currentQuestion.response[0].value
                } else if (id === '1') {
                    ehb += currentQuestion.response[1].value
                } else if (id === '2') {
                    ehb += currentQuestion.response[2].value
                }
            }
            if (currentQuestion.question === 'How do you extend your care and support to those around you?') {
                if (id === '0') {
                    ehb += currentQuestion.response[0].value
                } else if (id === '1') {
                    ehb += currentQuestion.response[1].value
                } else if (id === '2') {
                    ehb += currentQuestion.response[2].value
                }
            }
            if (currentQuestion.question === 'How do you value and express your own independence in daily life?') {
                if (id === '0') {
                    hl += currentQuestion.response[0].value
                } else if (id === '1') {
                    hl += currentQuestion.response[1].value
                } else if (id === '2') {
                    hl += currentQuestion.response[2].value
                }
            }
            if (currentQuestion.question === 'How do you foster and strengthen your relationships with others?') {
                if (id === '0') {
                    hl += currentQuestion.response[0].value
                } else if (id === '1') {
                    hl += currentQuestion.response[1].value
                } else if (id === '2') {
                    hl += currentQuestion.response[2].value
                }
            }
            if (currentQuestion.question === 'How do you showcase grace under pressure and adapt to changes in your life?') {
                if (id === '0') {
                    hl += currentQuestion.response[0].value
                } else if (id === '1') {
                    hl += currentQuestion.response[1].value
                } else if (id === '2') {
                    hl += currentQuestion.response[2].value
                }
            }
            if (currentQuestion.question === 'How do you empower and motivate others in your personal or professional life?') {
                if (id === '0') {
                    aq += currentQuestion.response[0].value
                } else if (id === '1') {
                    aq += currentQuestion.response[1].value
                } else if (id === '2') {
                    aq += currentQuestion.response[2].value
                }
            }
            if (currentQuestion.question === 'How do you demonstrate your commitment to safeguarding and supporting those you care about?') {
                if (id === '0') {
                    aq += currentQuestion.response[0].value
                } else if (id === '1') {
                    aq += currentQuestion.response[1].value
                } else if (id === '2') {
                    aq += currentQuestion.response[2].value
                }
            }
            if (currentQuestion.question === 'How do you exhibit bravery and bounce back from setbacks in your life?') {
                if (id === '0') {
                    aq += currentQuestion.response[0].value
                } else if (id === '1') {
                    aq += currentQuestion.response[1].value
                } else if (id === '2') {
                    aq += currentQuestion.response[2].value
                }
            }
            if (currentQuestion.question === 'How do you cultivate and nourish your relationships with others?') {
                if (id === '0') {
                    ehn += currentQuestion.response[0].value
                } else if (id === '1') {
                    ehn += currentQuestion.response[1].value
                } else if (id === '2') {
                    ehn += currentQuestion.response[2].value
                }
            }
            if (currentQuestion.question === 'How do you advocate for fairness and stand up for what you believe is right?') {
                if (id === '0') {
                    ehn += currentQuestion.response[0].value
                } else if (id === '1') {
                    ehn += currentQuestion.response[1].value
                } else if (id === '2') {
                    ehn += currentQuestion.response[2].value
                }
            }
            if (currentQuestion.question === 'How do you maintain focus and keep pushing forward towards your goals?') {
                if (id === '0') {
                    ehn += currentQuestion.response[0].value
                } else if (id === '1') {
                    ehn += currentQuestion.response[1].value
                } else if (id === '2') {
                    ehn += currentQuestion.response[2].value
                }
            }
            if (currentQuestion.question === 'How do you embrace curiosity and uncover new knowledge in your life?') {
                if (id === '0') {
                    ssa += currentQuestion.response[0].value
                } else if (id === '1') {
                    ssa += currentQuestion.response[1].value
                } else if (id === '2') {
                    ssa += currentQuestion.response[2].value
                }
            }
            if (currentQuestion.question === 'How do you respond effectively to unexpected situations or changes?') {
                if (id === '0') {
                    ssa += currentQuestion.response[0].value
                } else if (id === '1') {
                    ssa += currentQuestion.response[1].value
                } else if (id === '2') {
                    ssa += currentQuestion.response[2].value
                }
            }
            if (currentQuestion.question === 'How do you contribute to and strengthen the teams you are a part of?') {
                if (id === '0') {
                    ssa += currentQuestion.response[0].value
                } else if (id === '1') {
                    ssa += currentQuestion.response[1].value
                } else if (id === '2') {
                    ssa += currentQuestion.response[2].value
                }
            }
            if (currentQuestion.question === 'How do you express sophistication and style in your daily life?') {
                if (id === '0') {
                    dvs += currentQuestion.response[0].value
                } else if (id === '1') {
                    dvs += currentQuestion.response[1].value
                } else if (id === '2') {
                    dvs += currentQuestion.response[2].value
                }
            }
            if (currentQuestion.question === 'How do you handle and bounce back from difficult situations?') {
                if (id === '0') {
                    dvs += currentQuestion.response[0].value
                } else if (id === '1') {
                    dvs += currentQuestion.response[1].value
                } else if (id === '2') {
                    dvs += currentQuestion.response[2].value
                }
            }
            if (currentQuestion.question === 'How do you embrace curiosity and the unknown in your life?') {
                if (id === '0') {
                    dvs += currentQuestion.response[0].value
                } else if (id === '1') {
                    dvs += currentQuestion.response[1].value
                } else if (id === '2') {
                    dvs += currentQuestion.response[2].value
                }
            }
            if (currentQuestion.question === 'How do you harness your own strength to overcome challenges in your life?') {
                if (id === '0') {
                    agg += currentQuestion.response[0].value
                } else if (id === '1') {
                    agg += currentQuestion.response[1].value
                } else if (id === '2') {
                    agg += currentQuestion.response[2].value
                }
            }
            if (currentQuestion.question === 'How do you express your creativity and innovative thinking?') {
                if (id === '0') {
                    agg += currentQuestion.response[0].value
                } else if (id === '1') {
                    agg += currentQuestion.response[1].value
                } else if (id === '2') {
                    agg += currentQuestion.response[2].value
                }
            }
            if (currentQuestion.question === 'How do you demonstrate loyalty and reliability to your friends, family, or colleagues?') {
                if (id === '0') {
                    agg += currentQuestion.response[0].value
                } else if (id === '1') {
                    agg += currentQuestion.response[1].value
                } else if (id === '2') {
                    agg += currentQuestion.response[2].value
                }
            }
            
            if (questions.length === 0) {
                for (let i = 0; i < variables.length; i++) {
                    if (dmg === Math.max(dmg,ehb,hl,aq,ehn,ssa,dvs,agg)) {
                        weevil.setAttribute('src', monstArr[2])
                    } else if (ehb === Math.max(dmg,ehb,hl,aq,ehn,ssa,dvs,agg)) {
                        weevil.setAttribute('src', monstArr[4])
                    } else if (hl === Math.max(dmg,ehb,hl,aq,ehn,ssa,dvs,agg)) {
                        weevil.setAttribute('src', monstArr[6])
                    } else if (aq === Math.max(dmg,ehb,hl,aq,ehn,ssa,dvs,agg)) {
                        weevil.setAttribute('src', monstArr[0])
                    } else if (ehn === Math.max(dmg,ehb,hl,aq,ehn,ssa,dvs,agg)) {
                        weevil.setAttribute('src', monstArr[5])
                    } else if (ssa === Math.max(dmg,ehb,hl,aq,ehn,ssa,dvs,agg)) {
                        weevil.setAttribute('src', monstArr[7])
                    } else if (dvs === Math.max(dmg,ehb,hl,aq,ehn,ssa,dvs,agg)) {
                        weevil.setAttribute('src', monstArr[3])
                    } else if (agg === Math.max(dmg,ehb,hl,aq,ehn,ssa,dvs,agg)) {
                        weevil.setAttribute('src', monstArr[1])
                    } 
                }
            }
            
    })    
   
})


})

