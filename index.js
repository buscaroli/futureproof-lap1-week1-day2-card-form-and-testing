const myForm = document.querySelector('#form-id')
const body = document.querySelector('body')

// maps the value of the <select> element to a String
// to be shown in the Card
const eventDictionary = {
  Birthday: 'Have a lovely Birthday!',
  Holiday: 'Have a Wonderful Time! Enjoy yourself!',
  Christmas: 'Merry Christmas to you and your family!',
}

myForm.addEventListener('submit', (e) => {
  e.preventDefault()

  createCard()

  myForm.style.display = 'none'
})

// Main function: creates the card, fetches the background and appends the card to the <body>
function createCard() {
  //
  // Creating the references fot the DOM elements
  //

  // references for the required elementes
  const formName = document.querySelector('#form-name')
  const event = document.querySelector('#event')
  const selectedOptionText = event.options[event.selectedIndex].text
  formText = document.querySelector('#form-text')

  // create the card and append it to 'main'
  const card = document.createElement('div')
  card.classList.add('card')

  // header with the Name of the Person
  const dearName = document.createElement('h2')
  dearName.textContent = `Dear ${formName.value},`
  dearName.style.marginBottom = '10px'

  // default message from the dropdown
  const defaultMessage = document.createElement('h3')
  defaultMessage.textContent = eventDictionary[selectedOptionText]
  defaultMessage.style.marginBottom = '10px'

  // custom message from the text area
  const customMessage = document.createElement('h5')
  customMessage.textContent = formText.value

  // call the function to get the picture, build the card and append it to the <body>
  getBgPicture()

  //
  // Fetching Background, Building Card, Appending it
  function getBgPicture() {
    fetch(
      `https://api.unsplash.com/search/photos?query=${selectedOptionText}&client_id=HdzmK6fzGYHhNHNGycm6rxKupbb2nt4bg2oz3E_xxNY`
    )
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .then((data) => {
        console.log('data -> ', data)

        card.style.backgroundImage = `url("${data.results[0].urls.regular}")`

        card.style.height = '200px'
        card.style.width = '300px'
        card.style.color = 'white'
        card.style.padding = '50px'

        card.append(dearName)
        card.append(defaultMessage)
        card.append(customMessage)
      })
      .then(() => {
        console.log('card ', card)
        body.append(card)
      })
      .catch((err) => {
        console.log('inside catch', err)
        card.style.backgroundImage = `url("./fallback.jpg")`

        card.append(dearName)
        card.append(defaultMessage)
        card.append(customMessage)

        body.append(card)
      })
  }
}
