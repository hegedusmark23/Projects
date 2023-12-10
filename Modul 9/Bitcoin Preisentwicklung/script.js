const API_KEY = 'CT7WXO4YVW3JJH3W';
let date = [
    "2023-12-10",
    "2023-11-30",
    "2023-10-31",
    "2023-09-30",
    "2023-08-31",
    "2023-07-31",
    "2023-06-30",
    "2023-05-31",
    "2023-04-30",
    "2023-03-31",
    "2023-02-28",
    "2023-01-31",
    "2022-12-31",
    "2022-11-30",
    "2022-10-31",
    "2022-09-30",
    "2022-08-31",
    "2022-07-31",
    "2022-06-30",
    "2022-05-31",
    "2022-04-30",
    "2022-03-31",
    "2022-02-28",
    "2022-01-31",
    "2021-12-31",
    "2021-11-30",
    "2021-10-31",
    "2021-09-30",
    "2021-08-31",
    "2021-07-31",
    "2021-06-30",
    "2021-05-31",
    "2021-04-30"
]
let course = [];

async function init(){
    await loadCourse()
    await loadCourseHistory();
    await renderChart();
}

async function loadCourse() {
    let url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=${API_KEY}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    let price = responseAsJson['Realtime Currency Exchange Rate'];

    await actualPrice(price);
    
}


function actualPrice(price) {
    let actualPrice = document.getElementById('course');
    actualPrice.innerHTML = price['5. Exchange Rate'] + '$';
}

async function loadCourseHistory() {
    let url = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=USD&apikey=${API_KEY}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    let monthlyCourse = responseAsJson['Time Series (Digital Currency Monthly)'];

    for (let i = 0; i < date.length; i++) {
        const courseEachMonth = Math.round(monthlyCourse[date[i]]['1a. open (USD)']);
        console.log(courseEachMonth);
        course.push(courseEachMonth);
    }
}

function renderChart(){
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: date,
            datasets: [{
                label: 'BTC Course',
                data: course,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}