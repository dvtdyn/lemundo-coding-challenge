import CarData from './carData.json'

export default function Car() {
  const activeTab = localStorage.getItem('activeTab')
  const carInfos = document.createElement('section')
  carInfos.className = 'tabs-container'

  CarData &&
    CarData.forEach(({ group, items, text }, index) => {
      const tab = document.createElement('div')
      const tabIndex = `tab${index}`
      tab.className = tabIndex === activeTab ? 'tab focus' : 'tab'
      tab.dataset.js = tabIndex

      const h3 = document.createElement('h3')
      h3.innerText = group
      tab.append(h3)

      carInfos.append(tab)

      const content = document.createElement('dl')
      content.className = 'content'
      items &&
        items.forEach(item => {
          const itemName = document.createElement('dt')
          itemName.innerText = item.name
          const itemValue = document.createElement('dd')
          itemValue.innerText = item.value
          content.append(itemName, itemValue)
        })

      const span = document.createElement('span')
      span.innerText = text
      text && content.append(text)

      carInfos.append(content)
    })

  document.body.append(carInfos)

  const calcContainer = document.createElement('div')
  calcContainer.className = 'calc-container'
  calcContainer.innerHTML = `
  <h2>Price Calculator</h2>
  <div class="calculation">
    <label>
      Quantity:
      <input type="number" min="0"/>
    </label>
    <p></p>
  </div>
  `

  document.body.append(calcContainer)
}
