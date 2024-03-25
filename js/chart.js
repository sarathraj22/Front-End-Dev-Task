// Revenue Graph - ApexCharts

var options = {
	chart: {
		height: 317,
		type: 'area',
		toolbar: {
      show: false,
    },
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'smooth',
		width: 3
	},
	series: [{
		name: 'Sales',
		data: [10, 40, 15, 40, 20, 35, 20, 10, 31, 43, 56, 29]
	}, {
		name: 'Revenue',
		data: [2, 8, 25, 7, 20, 20, 51, 35, 42, 20, 33, 67]
	}],
	grid: {
    borderColor: '#e0e6ed',
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: true
      }
    },   
    yaxis: {
      lines: {
        show: false,
      } 
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 10,
      left: 0
    }, 
  },
	xaxis: {
		categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	},
	yaxis: {
		labels: {
			show: false,
		}
	},
	colors: ['#4267cd', '#32b2fa'],
	markers: {
		size: 0,
		opacity: 0.1,
		colors: ['#4267cd', '#32b2fa'],
		strokeColor: "#ffffff",
		strokeWidth: 2,
		hover: {
			size: 7,
		}
	},
}

var chart = new ApexCharts(
	document.querySelector("#revenueGraph"),
	options
);

chart.render();

// Task Graph - ApexCharts

var options1 = {
	chart: {
		height: 280,
		type: "radialBar",
	},
	series: [80, 70, 10],
	plotOptions: {
		radialBar: {
			dataLabels: {
				total: {
					show: true,
					label: 'Tasks',
					formatter: function () {
						return '10'
					}
				}
			}
		}
	},
	labels: ['New', 'Completed', 'Pending'],
	colors: ['#4267cd', '#32b2fa', '#f87957'],
};

new ApexCharts(document.querySelector("#taskGraph"), options1).render();

// Sales Graph - High Chart

Highcharts.chart('salesGraph', {
	chart: {
		type: 'column'
	},

	xAxis: {
		categories: ['USA', 'IND', 'UK', 'UAE']
	},
	tooltip: {
		headerFormat: '<b>{point.x}</b><br/>',
		pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
	},
	plotOptions: {
		column: {
			stacking: 'normal',
			dataLabels: {
				enabled: true
			}
		}
	},
	series: [{
		name: '',
		data: [3, 5, 1, 13]
	}, {
		name: '',
		data: [14, 8, 8, 12]
	}, {
		name: '',
		data: [0, 2, 6, 3]
	}]
});
