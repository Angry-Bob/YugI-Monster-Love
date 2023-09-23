const button1 = document.querySelector("#startGame")


button1.addEventListener("click", async () => {
    const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    const response2 = response.data.data
        for (let i = 0; i < response2.length; i++ ) {
            if (response2[i].name) {
                    console.log(response2[i])
            }
        }



})

