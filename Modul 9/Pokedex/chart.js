
function renderChart(i) {
  let ctx = document.getElementById(`statsChart${i}`).getContext("2d");
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Hp', 'Attack', 'Defense', 'Special-attack', 'Special-defense', 'Speed'],
      datasets: [{
        backgroundColor: [
          'rgba(255, 99, 132, 0.9)',
          'rgba(255, 159, 64, 0.9)',
          'rgba(255, 205, 86, 0.9)',
          'rgba(95, 192, 192, 0.9)',
          'rgba(54, 162, 235, 0.9)',
          'rgba(153, 102, 255, 0.9)',
          'rgba(201, 203, 207, 0.9)'
        ],
        label: 'Base Stats',
        data: [allPokemon[`${i}`]['stats'][0]['base_stat'],
        allPokemon[`${i}`]['stats'][1]['base_stat'],
        allPokemon[`${i}`]['stats'][2]['base_stat'],
        allPokemon[`${i}`]['stats'][3]['base_stat'],
        allPokemon[`${i}`]['stats'][4]['base_stat'],
        allPokemon[`${i}`]['stats'][5]['base_stat']],
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
