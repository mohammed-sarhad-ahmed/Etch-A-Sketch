const contain = document.querySelector("#container")
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
        const factor = input.value / 16
        abord.style.width = `${50 / factor}px`
        abord.style.height = `${50 / factor}px`
        bord.append(abord)
        toggle.addEventListener("click", (e) => {
            e.preventDefault()
            abord.style.border = `${5 / factor}px  wheat solid`
        })
    }

}

formaly.addEventListener("submit", (e) => {
    e.preventDefault()
    bord.addEventListener("mouseover", (e) => {
        if (e.target !== bord) {
            const Item = e.target
            Item.style.backgroundColor = "white"
        }

    })

})

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

}, false)





reset.addEventListener("click", () => {
    window.location.reload()
})
input.addEventListener("input", (e) => {
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
            const factor = input.value / 16
            abord.style.width = `${50 / factor}px`
            abord.style.height = `${50 / factor}px`
            h2.innerText = `${input.value}*${input.value}`
            bord.append(abord)
            toggle.addEventListener("click", (e) => {
                e.preventDefault()
                abord.style.border = `${3 / factor}px  wheat solid`
            })

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


