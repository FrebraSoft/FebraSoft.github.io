// second slide
Chart.defaults.global.defaultFontSize = 32;
// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["ME", "MEI", "EPP"],
      datasets: [
        {
          label: "",
          backgroundColor: ["#F75454", "#FCA156","#FFEA83" ],
          data: [45,12,2]
        }
      ]
    },
    options: {
      legend: { 
        display: false
       },
      title: {
        display: true,
        text: ''
        }
    }
});