let trafficChart = document.getElementById('trafficChart').getContext('2d');

let new_traffic_chart = new Chart(trafficChart, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [550, 750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],

            backgroundColor: 'rgba(204, 204, 252, 0.5)',
            fill: true,
 
            // borderColor: 'rgb(255,165,0, .1)',
            borderWidth: 1,
            pointRadius: 5,
            pointBackgroundColor: 'rgba(204, 204, 252, 0.5)',
        }],
    },

    options: {
        plugins:{
            legend:{
                display: false
            }
        },

        scales: {
            y: {
                beginAtZero:true
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
        labels: ["Desktop", "Tablets", "Phone"],
        datasets: [{
            data: [65, 17.5, 17.5],
            backgroundColor: ["#7477bf", "#55ad84", "#63c7db"],
        }],
    },

    options: {
        plugins:{
            legend:{
                position: 'right',
            }            
        }
    }
});