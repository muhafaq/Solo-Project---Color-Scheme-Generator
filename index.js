const choosedColor = document.getElementById('choose-color')
const colorMode = document.getElementById('color-mode')
const getColorBtn = document.getElementById('get-color-btn')
const colorSchemeContainer = document.getElementById('color-scheme-container')

getColorBtn.addEventListener('click', function(){

    let colorValue = choosedColor.value;
    let modeValue = colorMode.value;
    console.log(colorValue)
    console.log(modeValue)

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue.slice(1)}&mode=${modeValue}&count=5`)
    .then (response => response.json())
    .then (data => {
        let colorsArray = data.colors.map(function(arr){
            // return `
            // <div class='scheme-container'>
            //     <div class='color-platelet' style="background-color:${arr.hex.value}" > </div>
            //     <p class='color-chart'> ${arr.hex.value} </p>
            // </div>
            // `

            return `
            <div class="colors-container">
               <div class="colour-column" style="background:${arr.hex.value} "></div>
               <p class="hex-char">${arr.hex.value}</p>
            </div> 
       
         `;
        }).join('')

        console.log(colorsArray)
        colorSchemeContainer.innerHTML = colorsArray
    })
})
