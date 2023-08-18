const raw_data = document.currentScript.nextElementSibling.textContent
const data = JSON.parse(raw_data)
const ctx = document.getElementById('CityDiagram')
const datasets = []
let labels = new Set()

for (let city of data) {
    const incomes = []
    for (let income of city.planned_income) {
        labels.add(income.year)
        incomes.push(income.income)
    }
    const dataset = {
        'label': city.name,
        'data': incomes,
        backgroundColor: 'rgba(220, 220, 220, 0.5)',
        pointBorderColor: "#fff",
    }
    datasets.push(dataset)
}

labels = Array.from(labels)
const diagramData = {labels: labels, datasets: datasets}

new Chart(ctx, {type: 'bar', data: diagramData, options: {responsive: true}})

