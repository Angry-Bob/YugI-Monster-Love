const button1 = document.querySelector("#startGame")



button1.addEventListener("click", async () => {
    const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    const monster = document.querySelector(".monsterPic")
    const host = document.querySelector(".hostBox")
    const monstArr = []
    const response2 = response.data.data
    for (let i = 0; i < response2.length; i++) {
            if (response2[i].name === 'Dark Magician Girl' || response2[i].name === 'Harpie Lady' || response2[i].name === 'Elemental HERO Burstinatrix' || response2[i].name === 'Amazoness Queen' || response2[i].name === 'Elemental HERO Neos' || response2[i].name === 'SPYRAL Super Agent' || response2[i].name === 'Dhampir Vampire Sheridan' || response2[i].name === 'Ancient Gear Golem') {
                
                
                x = response2[i].card_images[0].image_url_cropped
                monstArr.push(x)

               

                // xName = response2[i]
                console.log(monstArr[8])
                // console.log(xName.card_images[0].image_url_cropped)
                // monster.setAttribute('src', monstArr[8])
                host.setAttribute('src', "kisspng-yugi-mutou-yami-yugi-yu-gi-oh-duel-links-yu-gi-oh-yu-5addf130a789d7.3981810715244946406863.png")
            }

        }
    
})

