import { render } from "./render.js"
import { renderModal } from "./render.js"

export function newPosts(array) {
    const input = document.querySelector('.input')
    const textArea = document.querySelector('.textArea')

    if(input === '' || textArea === '') {
        alert('Por favor, insira as informações necessárias e tente novamente')
    }

    
        const newProduct = {
            id: array.length + 1,
            title: input.value,
            text: textArea.value,
            user: 'Samuel Leão',
            stack: "Front end Engineer",
            img: "./src/assets/img/user1.svg",
            likes: 0
        }

        array.unshift(newProduct)

}

export function eventPosts(array) {
    const submitButton = document.querySelector('#buttonPost');
    const form = document.querySelector('.creation__post-form')

    submitButton.addEventListener('click', (event) =>{
        event.preventDefault()


        newPosts(array)
        render(array)
        form.reset()
        renderModal(array)
    })
}