
export default function contactRender() {
    const content = document.createElement('div')
    content.setAttribute('id', 'contact-wrapper')

    const header = document.createElement('h1')
    header.textContent = 'Reservation Booking'

    const nameDiv = document.createElement('div')
    nameDiv.textContent = 'Name';
    const name = document.createElement('input')
    nameDiv.appendChild(name)

    const numberDiv = document.createElement('div')
    numberDiv.textContent = 'Phone Number';
    const number = document.createElement('input')
    number.setAttribute('type', 'number')
    numberDiv.appendChild(number)



    const reservationDiv = document.createElement('div')
    reservationDiv.textContent = 'Reservation'
    const reservation = document.createElement('input')
    reservation.setAttribute('type', 'number')
    reservationDiv.appendChild(reservation)


    const timeDiv = document.createElement('div')
    timeDiv.textContent = 'Date of Reservation'
    const time = document.createElement('input')
    time.setAttribute('type', 'date')
    timeDiv.appendChild(time);

    const submitBtn = document.createElement('button')
    submitBtn.textContent = 'Submit';

    content.appendChild(header)
    content.appendChild(nameDiv)
    content.appendChild(numberDiv)
    content.appendChild(reservationDiv)
    content.appendChild(timeDiv)
    content.appendChild(submitBtn)

    return content
}