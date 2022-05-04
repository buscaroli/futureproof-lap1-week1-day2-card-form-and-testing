const myForm = document.querySelector('#form-id')
const body = document.querySelector('body')

const eventDictionary = {
  Birthday: 'Have a lovely Birthday!',
  Holiday: 'Have a Wonderful Time! Enjoy yourself!',
  Christmas: 'Merry Christmas to you and your family!',
}

myForm.addEventListener('submit', (e) => {
  e.preventDefault()

  createCard()

  console.log('myForm ', myForm)
  myForm.style.display = 'none'
})

// create the card and append it to 'main'
function createCard() {
  const formName = document.querySelector('#form-name')
  const event = document.querySelector('#event')
  const selectedOptionText = event.options[event.selectedIndex].text

  formText = document.querySelector('#form-text')
  // card
  const card = document.createElement('div')
  card.classList.add('card')

  // header with the Name of the Person
  const dearName = document.createElement('h2')
  dearName.textContent = `Dear ${formText.textContent},`

  // default message from the dropdown
  const defaultMessage = document.createElement('h3')
  defaultMessage.textContent = eventDictionary[selectedOptionText]

  // custom message from the text area
  const customMessage = document.createElement('h5')
  customMessage.textContent = formText.value

  // console.log(
  //   `dearName: ${dearName.textContent}\ndefaultMessage: ${eventDictionary[selectedOptionText]}\ncustomMessage: ${customMessage.textContent}\n`
  // )

  card.append(dearName)
  card.append(defaultMessage)
  card.append(customMessage)

  body.append(card)
}
