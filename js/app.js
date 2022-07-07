let trafficChart = document.getElementById('trafficChart').getContext('2d');

let new_traffic_chart = new Chart(trafficChart, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [0, 750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],

            backgroundColor: 'rgb(45, 47, 75, 0.2)',
            fill: 'rgb(45, 47, 75, 0.2)',
            borderColor: 'rgb(92, 27, 152)',
            borderWidth: 2,
            pointRadius: 5,
            pointBackgroundColor: 'white',
        }],
    },

    options: {
        plugins:{
            legend:{
                display: false
            }
        },

        
    }
});
