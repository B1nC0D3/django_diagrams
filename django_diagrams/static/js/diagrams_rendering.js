const raw_data = document.currentScript.nextElementSibling.textContent
const data = JSON.parse(raw_data)
const years = new Set()
const diagramsWrapper = document.getElementById('diagrams-wrapper')
const chartState = {}
const chartOptions = {
    responsive: true,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
const btnWrapper = document.getElementById('btn-wrapper')
const buttons = btnWrapper.querySelectorAll('button')

function toggleChart(e) {
    chartState[e.target.value].hidden = !chartState[e.target.value].hidden
}

function createCityDatasets(cityData) {
    const planned_incomes = []
    const fact_incomes = []
    cityData.planned_income.forEach((plannedIncome, i) => {
        planned_incomes.push(+plannedIncome.income)
        fact_incomes.push(+cityData.fact_income[i].income)
    })
    const plan_dataset = {
        'label': 'План',
        'data': planned_incomes,
        backgroundColor: 'rgba(209, 66, 245, 0.6)',
        pointBorderColor: "#fff",
        minBarLength: 10
    }
    const fact_dataset = {
        'label': 'Факт',
        'data': fact_incomes,
        backgroundColor: 'rgba(245, 221, 66, 0.6)',
        pointBorderColor: "#fff",
        minBarLength: 10
    }
    return [plan_dataset, fact_dataset]
}

function getLabels(cityData) {
    for (let income of cityData.planned_income) {
        years.add(income.year)
    }
    return Array.from(years)
}

function createNewEl(tag, className=null) {
    const el = document.createElement(tag)
    if (className) {
        el.classList.add(className)
    }
    return el
}

function createChart(cityData) {
    const chartWrapper = createNewEl('div', 'col-lg-12')
    const chartID = cityData.name.charCodeAt(0)
    chartWrapper.setAttribute('id', chartID)

    const ibox = createNewEl('div', 'ibox')

    const iboxTitle = createNewEl('div', 'ibox-title')

    const title = createNewEl('h5')
    title.innerText = cityData.name

    const iboxContent = createNewEl('div', 'ibox-content')

    const canvasWrapper = createNewEl('div')

    const canvas = createNewEl('canvas')
    canvasWrapper.appendChild(canvas)
    iboxContent.appendChild(canvasWrapper)
    iboxTitle.appendChild(title)
    ibox.appendChild(iboxTitle)
    ibox.appendChild(iboxContent)
    chartWrapper.appendChild(ibox)
    const datasets = createCityDatasets(cityData)
    const diagramData = {labels: labels, datasets: datasets}
    new Chart(canvas, {type: 'bar', data: diagramData, options: chartOptions})
    return chartWrapper
}

const labels = getLabels(data[0])
for (let city of data) {
    const chart = createChart(city)
    diagramsWrapper.appendChild(chart)
    chartState[city.name] = chart
}


buttons.forEach((button) => {
    button.addEventListener('click', toggleChart)})




