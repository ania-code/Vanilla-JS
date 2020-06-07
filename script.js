const addButton = document.querySelector('.addButton')
let input = document.querySelector('.input')
const container = document.querySelector('.container')

class item {
    constructor(itemName) {
        this.createDiv(itemName)
    }

    createDiv(itemName) {
        let input = document.createElement('input')
        input.value = itemName
        input.disabled = true
        input.classList.add('item_input')


        let itemBox = document.createElement('div')
        itemBox.classList.add('item')

        let checkBoxButton = document.createElement('input')
        checkBoxButton.type = 'checkbox'
        checkBoxButton.classList.add('visibleBox')

        let removeButton = document.createElement('button')
        removeButton.innerHTML = "X"
        removeButton.classList.add('removeButton')

        let editButton = document.createElement('button')
        editButton.innerHTML = "<="

        container.appendChild(itemBox)

        itemBox.appendChild(checkBoxButton)
        itemBox.appendChild(input)
        itemBox.appendChild(editButton)
        itemBox.appendChild(removeButton)

        editButton.addEventListener('click', () => this.edit(input))

        removeButton.addEventListener('click', () => this.remove(itemBox))

        checkBoxButton.addEventListener('click', () => this.isChecked(checkBoxButton))
    }

    isChecked(e) {
        const check = e.nextSibling
        console.log("e wischecked", e)
        if (e.checked) {
            check.style.textDecoration = "line-through"
            check.style.color = "#D3D3D3"
            e.classList.add('hidden')

        } else {
            check.style.textDecoration = "none"
            check.style.color = "#696969"
            e.classList.remove('hidden')
        }
    }

    edit(input) {
        input.disabled = !input.disabled
        console.log(this.edit)
    }
    remove(item) {
        container.removeChild(item)
    }
}

function check() {
    if (input.value != "") {
        new item(input.value)
        input.value = ""
    }
}

addButton.addEventListener('click', check)
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        check()
    }
})
