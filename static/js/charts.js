// second slide
Chart.defaults.global.defaultFontSize = 32;
// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: [ "MEI","ME", "EPP"],
      datasets: [
        {
          label: "2008",
          backgroundColor: ["FF9999","#F75454", "#F75454","#F75454" ],
          data: [6,12,45,2]
        }
      ]
    },
    options: {
      legend: { 
        display: true
       },
      title: {
        display: true,
        text: ''
        }
    }
});