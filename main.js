const reset = document.querySelector("img")
const bord = document.querySelector("#bord")
const rainbow = document.querySelector("button:nth-of-type(2)")
const eraser = document.querySelector("button:nth-of-type(3)")
const apply = document.querySelector("input")
const form = document.querySelector("form")
const color = document.querySelector("button:nth-of-type(1)")
const formRainbow = document.querySelector("form:nth-of-type(2)")
const formaly = document.querySelector("form:nth-of-type(3)")
const input = document.querySelector("#chose")
const toggle = document.querySelector("#Toggle")
let h2 = document.querySelector("h2")
const background = document.querySelector("#background")
const backgroundform = document.querySelector("#based")
let count = 0




function defult() {
    const value = Number(input.value)
    const num = input.value / 16
    let mod = value + 1

    for (let i = 1; i < (value * value) + value; i++) {
        const abord = document.createElement("div")

        if (i % mod === 0) {
            abord.classList.add("items")
            bord.append(abord)
        }
        else {
            const factor = input.value / 16
            abord.style.width = `${25 / factor}px`
            abord.style.height = `${25 / factor}px`
            h2.innerText = `${input.value}*${input.value}`
            bord.append(abord)
        }

    }



    toggle.addEventListener("click", (e) => {
        count++
        getitem(bord.children, bord.childElementCount, value, mod, num)
    })
    border(bord.children, bord.childElementCount, value, mod, num)



}

defult()





form.addEventListener("submit", (e) => {
    e.preventDefault()
    const app = apply.value
    bord.addEventListener("mouseover", (e) => {
        if (e.target !== bord) {
            const Item = e.target
            Item.style.backgroundColor = app
        }


    })

})

formRainbow.addEventListener("submit", (e) => {
    e.preventDefault()
    bord.addEventListener("mouseover", (e) => {
        if (e.target !== bord) {
            const Item = e.target
            Item.style.backgroundColor = generateRainbow()
        }

    })

}, false)


input.addEventListener("input", (e) => {
    console.log(count)
    clear(bord.childElementCount)
    const value = Number(input.value)
    const num = input.value / 16
    let mod = value + 1
    for (let i = 1; i < (value * value) + value; i++) {
        const abord = document.createElement("div")

        if (i % mod === 0) {
            abord.classList.add("items")
            bord.append(abord)
        }
        else {


            const factor = input.value / 16
            abord.style.width = `${25 / factor}px`
            abord.style.height = `${25 / factor}px`
            h2.innerText = `${input.value}*${input.value}`
            bord.append(abord)

        }




    }
    function get() {
        count++
        getitem(bord.children, bord.childElementCount, value, mod, num)
    }

    toggle.addEventListener("click", get)
    toggle.removeEventListener("click", get)
    border(bord.children, bord.childElementCount, value, mod, num)


})




//generate a color on the rgb spectrum
function generateRainbow() {

    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let rgb = `rgb(${r},${g},${b})`
    return rgb


}
//clear function 
function clear(child) {
    for (let i = 0; i < child; i++) {
        bord.removeChild(bord.firstChild)
    }
}
//eraser
formaly.addEventListener("submit", (e) => {
    e.preventDefault()
    bord.addEventListener("mouseover", (e) => {
        if (e.target !== bord) {
            const Item = e.target
            Item.style.backgroundColor = "white"
        }

    })

})

//reset
reset.addEventListener("click", () => {
    window.location.reload()
})

setInterval(() => {
    document.querySelector("body").style.backgroundColor = generateRainbow()
}, 5000)

//background color
backgroundform.addEventListener("submit", (e) => {
    e.preventDefault()
    bord.style.background = background.value
})
function border(abord, counter, value, mod, num) {
   
    for (let i = 0; i < counter; i++) {
        if (!(abord[i].classList.contains("items"))) {
            if (count % 2 === 0) {

                abord[i].style.border = `${1 / num}px solid wheat`
            }
            else {
                abord[i].style.border = `0px`
            }
        }

    }
}




function getitem(abord, counter, value, mod, num) {
    for (let i = 0; i < counter; i++) {
        if (!(abord[i].classList.contains("items"))) {
            if (count % 2 === 0) {

                abord[i].style.border = `${1 / num}px solid wheat`
            }
            else {
                abord[i].style.border = `0px`
            }
        }


    }

}