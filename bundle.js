(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

// create the card and append it to 'main'
function createCard() {
  // fetches the background picture for the card

  // references for the required elementes
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

  getBgPicture()

  function getBgPicture() {
    // fetches the background picture for the card
    fetch(
      `https://api.unsplash.com/search/photos?query=${selectedOptionText}&client_id=HdzmK6fzGYHhNHNGycm6rxKupbb2nt4bg2oz3E_xxNY`
    )
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .then((data) => {
        console.log('data -> ', data)
        // console.log(
        //   `https://api.unsplash.com/search/photos?query=${selectedOptionText}&client_id=HdzmK6fzGYHhNHNGycm6rxKupbb2nt4bg2oz3E_xxNY`
        // )

        // console.log('key -> ', selectedOptionText)

        // console.log('data ', data.results[0].urls.regular)
        // console.log(`url("${data}")`)

        card.style.backgroundImage = `url("${data.results[0].urls.regular}")`

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

},{}]},{},[1]);
