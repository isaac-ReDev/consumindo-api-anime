const inputAnimeName    = document.getElementById("input-search");
const inputSelect  = document.getElementById("input-search-select");
const btnSearchAnime    = document.getElementById("btn-search");
const ulAnime           = document.querySelector('[data-js="ul-anime"]') 
const animeUrl          = `https://kitsu.io/api/edge/${'anime'}?filter[text]=${'adventure'}`

//  testes

// btnSearchAnime.addEventListener('click', () => {
//     const valueSelect = inputSelect.options[inputSelect.selectedIndex].value;
//     const animeUrlFilted = `https://kitsu.io/api/edge/${valueSelect}?filter[text]=${inputAnimeName}`    

//     animeApp(animeUrlFilted)
//     injectHtml()
// })

const returnNewValueForUlrFilted =  btnSearchAnime.addEventListener('click', () => {
    const valueSelect = inputSelect.options[inputSelect.selectedIndex].value;
    const animeUrlFilted = `https://kitsu.io/api/edge/${valueSelect}?filter[text]=${inputAnimeName.value}`
    console.log(animeUrlFilted)
    ulAnime.innerHTML = ''
    animeApp(animeUrlFilted)
    
} )


const animeApp = async (url) => {
    const animeFetch = await fetch(url)
    const animeData = await animeFetch.json();
    // intect in html
    for(let i=0; i<=9; i++){
        ulAnime.innerHTML += `
        <li class="li-card-anime">
            <div class="cont-about-card">
                <p class="anime-card">${animeData.data[i].attributes.canonicalTitle}</p>
                <p class="anime-card">${animeData.data[i].attributes.popularityRank}</p>
            </div>
            
            <img src='${animeData.data[i].attributes.posterImage.original}'/>
        </li>
        
    `
    }

    console.log(animeData)
    console.log(animeData.data[0].attributes.canonicalTitle)
    console.log(animeData.data[0].attributes.popularityRank)
    console.log(animeData.data[0].attributes.posterImage)
}

animeApp(animeUrl)

