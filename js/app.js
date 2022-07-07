const traffic_chart = document.getElementById('traffic_chart').getContext('2d');

const new_traffic_chart = new Chart(traffic_chart, {
    type: 'line',
    data: {
        x: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        y: ['0', '500', '1000', '1500', '2000', '2500'],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }
})