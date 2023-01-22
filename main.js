const contain = document.querySelector("#container")
const reset = document.querySelector("img")
const bord = document.querySelector("#bord")
const rainbow = document.querySelector("button:nth-of-type(2)")
const apply = document.querySelector("input")
const form = document.querySelector("form")
const color = document.querySelector("button:nth-of-type(1)")
const formRainbow = document.querySelector("form:nth-of-type(2)")
const formnumber = document.querySelector("form:nth-of-type(3)")
const input = document.querySelector("#chose")


function clear(child) {
    for (let i = 0; i < child; i++) {
        bord.removeChild(bord.firstChild)
    }
}



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

})





reset.addEventListener("click", () => {
    window.location.reload()
})
formnumber.addEventListener("submit", (e) => {
    e.preventDefault()
    clear(bord.childElementCount)
    const value = Number(input.value)
    let mod = value + 1
    for (let i = 1; i < (value * value) + value; i++) {

        if (i % mod === 0) {
            const abord = document.createElement("div")



            abord.classList.add("items")

            bord.append(abord)
        }
        else {
            const abord = document.createElement("div")
            if (input.value == 16) {
                abord.classList.add("item")

            }
            else if (input.value == 32) {
                abord.classList.add("item2x")

            }
            else if (input.value == 48) {
                abord.classList.add("item3x")

            }
            else if (input.value == 64) {
                abord.classList.add("item4x")

            }
            bord.append(abord)
        }



    }
})


function generateRainbow() {

    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let rgb = `rgb(${r},${g},${b})`
    return rgb

}


