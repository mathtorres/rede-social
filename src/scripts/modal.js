export function createModal(id, array) {

    const divCards = document.createElement('div')
    const modalHeader = document.createElement('div')
    const modalCard = document.createElement('img')
    const modalTitle = document.createElement('div')
    const modalPerson = document.createElement('h3')
    const modalOffice = document.createElement('p')
    const modalClose = document.createElement('button')
        
    const modalDescription = document.createElement('div')
    const modalDescriptionTitle = document.createElement('h2')
    const descriptionModal = document.createElement('p')

    const usersFound = array.find(user => user.id === Number(id))
        
    divCards.classList.add('modal__list-cards')
        
    modalHeader.classList.add('modal__list-header')
    modalCard.classList.add('image__size')
    modalCard.src = usersFound.img
    modalCard.alt = usersFound.user
    modalTitle.classList.add('modal__list-title')
    modalPerson.innerText = usersFound.user
    modalOffice.innerText = usersFound.stack
    modalClose.innerText = 'X'
    modalClose.classList.add('modal__close')
        
    modalDescription.classList.add('modal__list-description')
    modalDescriptionTitle.innerText = usersFound.title
    descriptionModal.innerText = usersFound.text


        
    modalTitle.append(modalPerson, modalOffice)
    modalHeader.append(modalCard, modalTitle)
        
    modalDescription.append(modalDescriptionTitle, descriptionModal)
        
        
    divCards.append(modalHeader, modalDescription, modalClose)
            
    return divCards

}

export function closeModal() {
    const modal = document.querySelector('.modal__container')
    const closeButton = document.querySelector('.modal__close')

    closeButton.addEventListener('click', () => {
        modal.close()
    })
}