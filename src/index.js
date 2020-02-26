import CarInfo from './CarInfo.js'
import CalcPrice from './CalcPrice.js'

CarInfo()

const tabs = document.querySelectorAll('.tab')

tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    tabs.forEach(tab => {
      tab.classList.remove('focus')
    })

    this.classList.add('focus')
    localStorage.setItem('activeTab', this.dataset.js)
  })
})

const quantityInput = document.querySelector('input[type=number]')
const totalPriceOutput = document.querySelector('p')

quantityInput.addEventListener('input', function() {
  const { value: quantity } = this
  totalPriceOutput.innerText = `Amount: ${CalcPrice(quantity)} €`
})
