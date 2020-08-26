let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['', '', '', '', '', '', '', '', '', '', '', '', ''],
        datasets: [{
            label: 'This Month',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#F24F8A',
            data: [50, 150, 50, 210, 220, 310, 240, 140, 100, 205, 200, 210, 300]
        },{
            label: 'Last Month',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#57CAD5',
            data: [50, 100, 50, 200, 120, 300, 140, 110, 100, 135, 200, 260, 300]
        }],        
    },

    // Configuration options go here
    options: {}
});