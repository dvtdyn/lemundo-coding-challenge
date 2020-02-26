import CarInfo from './CarInfo.js'

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
