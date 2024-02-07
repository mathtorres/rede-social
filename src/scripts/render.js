import { createModal, closeModal } from "./modal.js"

export function render(array) {
    const container = document.querySelector('.posts__list')

    container.innerHTML = ''

    array.forEach(post => {
        const card = createPosts(post)

        container.appendChild(card)
    })
}

function createPosts(post) {
    const listCards = document.createElement('li')
    const listHeader = document.createElement('div')
    const imageCard = document.createElement('img')
    const listTitle = document.createElement('div')
    const person = document.createElement('h3')
    const office = document.createElement('p')

    const listDescription = document.createElement('div')
    const descriptionTitle = document.createElement('h2')
    const description = document.createElement('p')

    const buttonContainer = document.createElement('div')
    const buttonPost = document.createElement('button')
    const heartButton = document.createElement('p')
    const heartImage = document.createElement('div')

    listCards.classList.add('posts__list-cards')

    listHeader.classList.add('post__list-header')
    imageCard.classList.add('image__size')
    imageCard.src = post.img
    imageCard.alt = post.user
    listTitle.classList.add('post__list-title')
    person.innerText = post.user
    office.innerText = post.stack

    listDescription.classList.add('post__list-description')
    descriptionTitle.innerText = post.title
    description.innerText = `${post.text.substring(0, 150)} ...`
    // description.innerText = post.text

    buttonContainer.classList.add('post__list-buttons')
    buttonPost.innerText = "Abrir post"
    buttonPost.classList.add('buttons__post')
    buttonPost.dataset.userId = post.id
    heartButton.classList.add('post__list-likeHeart')
    heartButton.innerText = post.likes
    heartImage.innerHTML = `<svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.7134 0C14.4034 0 12.3978 1.30143 11.3793 3.21286C10.3609 1.30143 8.35526 0 6.04526 0C2.70685 0 0 2.71857 0 6.07143C0 14.2857 11.3793 20 11.3793 20C11.3793 20 22.7586 14.2857 22.7586 6.07143C22.7586 2.71857 20.0518 0 16.7134 0Z" fill="#212529" fill-opacity="0.5"/>
    </svg>
    ` 



    listTitle.append(person, office)
    listHeader.append(imageCard, listTitle)

    listDescription.append(descriptionTitle, description)

    heartButton.appendChild(heartImage)
    buttonContainer.append(buttonPost, heartButton)

    listCards.append(listHeader, listDescription, buttonContainer)
    
    return listCards

}

export function renderSuggests (array) {

    const container = document.querySelector('.aside__suggestions-list')

    container.innerHTML = ''

    array.forEach(suggest => {
        const suggestions = createSuggestions(suggest)

        container.appendChild(suggestions)

    })
}

function createSuggestions(suggest) {
    const list = document.createElement('li');
    const image = document.createElement('img');
    const div = document.createElement('div');
    const name = document.createElement('h3');
    const stack = document.createElement('p');
    const button = document.createElement('button');

    list.classList.add('aside__suggestions-cards');

    image.classList.add('image__size')
    image.src = suggest.img;
    image.alt = suggest.user;

    div.classList.add('aside__suggestions-title');

    name.innerText = suggest.user;
    stack.innerText = suggest.stack;

    button.classList.add('button__follow')
    button.innerText = 'Seguir';

    div.append(name, stack);

    list.append(image, div, button)

    return list
}

export function renderModal(array) {
    const modal = document.querySelector('.modal__container')
    const buttons = document.querySelectorAll('.buttons__post')

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const modalContent = createModal(button.dataset.userId, array)

            modal.innerHTML = ''

            modal.appendChild(modalContent)

            modal.showModal()

            closeModal()
        })
    })
}
