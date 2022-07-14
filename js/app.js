let trafficChart = document.getElementById('trafficChart').getContext('2d');

let new_traffic_chart = new Chart(trafficChart, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [0, 750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],

            backgroundColor: 'rgba(133, 72, 245, 0.268)',
            fill: true,
 
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
        }
    }
});


let dailyTrafficChart = document.getElementById('dailyTrafficChart').getContext('2d');

// dailyTrafficChart.canvas.parentNode.style.height = '250px'; //To Use this, must set maintainAspectRatio to false
// dailyTrafficChart.canvas.parentNode.style.width = '450px'; //To Use this, must set maintainAspectRatio to false

let new_dailyTrafficChart = new Chart(dailyTrafficChart, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [75, 110, 155, 125, 225, 200, 100],

            backgroundColor: 'rgb(133, 72, 245)',
            fill: true,
 
            borderColor: 'rgb(92, 27, 152)',
            borderWidth: 1,
        }],
    },

    options: {
        plugins:{
            legend:{
                display: false
            }
        },

        //maintainAspectRatio: false
    }
});



let mobileUsersPie = document.getElementById('mobileUsersPie').getContext('2d');

let new_mobile_users_pie = new Chart(mobileUsersPie, {
    type: 'doughnut',
    data: {
        maintainAspectRatio: false,
        labels: ["Desktop", "Tablets", "Phone"],
        datasets: [{
            data: [65, 15, 25],
            backgroundColor: ["#7477bf", "#2ecc71", "#008080"],
        }],
    },

    options: {
        plugins:{
            legend:{
                position: 'right',
            }            
        },
        radius: 100, 
    }
});