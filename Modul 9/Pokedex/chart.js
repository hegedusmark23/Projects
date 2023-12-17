document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById('statsChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Hp', 'Attack', 'Defense', 'Special-attack', 'Special-defense', 'Speed'],
      datasets: [{
  
        label: '# of Votes',
        data: [1, 10, 15, 5, 2, 50],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});
