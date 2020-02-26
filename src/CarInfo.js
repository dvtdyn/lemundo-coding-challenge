import CarData from './carData.json'
export default function Car() {
  const carInfos = document.createElement('section')
  carInfos.className = 'tabsContainer'
  CarData &&
    CarData.forEach((el, index) => {
      const { group, items, text } = el
      const tab = document.createElement('div')
      tab.className = index === 0 ? 'tab focus' : 'tab'

      const h3 = document.createElement('h3')
      h3.innerText = group
      h3.tabIndex = 0

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
}
