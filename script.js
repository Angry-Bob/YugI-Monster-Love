const button1 = document.querySelector("#startGame")



button1.addEventListener("click", async () => {
    const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    const monster = document.querySelector(".monsterPic")
    const host = document.querySelector(".hostBox")
    const monstArr = []
    const response2 = response.data.data
    for (let i = 0; i < response2.length; i++) {
            if (response2[i].name === 'Dark Magician Girl' || response2[i].name === 'Harpie Lady' || response2[i].name === 'Lovely Labrynth of the Silver Castle' || response2[i].name === 'Elemental HERO Burstinatrix' || response2[i].name === 'Amazoness Queen' || response2[i].name === 'Underworld Goddess of the Closed World' || response2[i].name === 'Isolde, Two Tales of the Noble Knights' || response2[i].name === 'Tour Guide From the Underworld' || response2[i].name === 'Vampire Vamp' || response2[i].name === 'Isolde, Belle of the Underworld' || response2[i].name === 'Maiden with Eyes of Blue' || response2[i].name === 'I:P Masquerena' || response2[i].name === 'Tour Guide From the Underworld') {
                x = response2[i].card_images[0].image_url_cropped
                monstArr.push(x)

               

                // xName = response2[i]
                
                // console.log(xName.card_images[0].image_url_cropped)
                monster.setAttribute('src', monstArr[11])
                host.setAttribute('src', "kisspng-yugi-mutou-yami-yugi-yu-gi-oh-duel-links-yu-gi-oh-yu-5addf130a789d7.3981810715244946406863.png")
            }

        }
    
})

