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
  const { value } = this
  const quantity = value.replace('.', '')
  const quantityFormat = quantity
    ? parseInt(quantity, 10).toLocaleString('de-DE')
    : ''
  this.value = quantityFormat

  totalPriceOutput.innerText = `Amount: ${CalcPrice(quantity)}`
})
