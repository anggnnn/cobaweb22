// parallax
$(window).on('load', function(){
	$('.kiri').addClass('kiri-go');
	$('.kanan').addClass('kanan-go')
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('#intro').css({
		'transform': 'translate(0px, '+ wScroll / 2 +'%)'
	});

	// $('.jumbotron p').css({
	// 	'transform': 'translate(0px, '+ wScroll / 1.2 +'%)'
	// });


	// portfolio
	if( wScroll > $('.portfolio').offset().top - 600 ) {
		
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 180 * (i+1))

		});

	}
	if( wScroll > $('.card').offset().top - 600 ) {
		
		$('.card .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.card .thumbnail').eq(i).addClass('muncul');
			}, 180 * (i+1))

		});

	}

});

var ctx = document.getElementById('status').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['SMA/Sederajat', 'Mahasiswa'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#8db596', '#707070'],
            borderColor: 'black',
            data: [27, 63]
        }]
    },
});

var ctx = document.getElementById('gender').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Male', 'Female'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#8675a9', '#efbbcf'],
            borderColor: 'black',
            data: [47, 43]
        }]
    },
});

var ctx = document.getElementById('origin').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Java', 'Sumatera', 'Borneo', 'Southeast Nusa'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#726a95', '#709fb0', '#f4ebc1'],
            borderColor: 'black',
            data: [33, 7, 1, 9]
        }]
    },
});


var ctx = document.getElementById('place').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['From Home', 'Not From Home'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#fabea7', '#767c77'],
            borderColor: 'black',
            data: [87, 3]
        }]
    },
});


var ctx = document.getElementById('frequencies').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Everyday', '6x', '5x', '4x'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#776d8a', '#d3c09a', '#f3e6e3', '#dbe3e5'],
            borderColor: 'black',
            data: [11, 5, 57, 16]
        }]
    },
});


var ctx = document.getElementById('understand').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Understand', 'Not Really', 'Can\'t'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#383e56', '#f69e7b', '#d4b5b0'],
            borderColor: 'black',
            data: [29, 52, 8]
        }]
    },
});


var ctx = document.getElementById('Environment').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Enjoy', 'Not Enjoy'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#726a95', '#a0c1b8'],
            borderColor: 'black',
            data: [27, 61]
        }]
    },
});

var ctx = document.getElementById('SourceofStudy').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Easy to Get', 'Hard to Get'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#dddddd', '#e19999'],
            borderColor: 'black',
            data: [58, 29]
        }]
    },
});

var ctx = document.getElementById('flexibility').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Free of Learn', 'Not Really'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#424874', '#a6b1e1'],
            borderColor: 'black',
            data: [52, 37]
        }]
    },
});

var ctx = document.getElementById('Freedom').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Favourite Lesson', 'Not Really'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#6e5773', '#d45079'],
            borderColor: 'black',
            data: [62, 27]
        }]
    },
});

var ctx = document.getElementById('skill').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Control', 'Not Really'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#9dab86', '#e6a157'],
            borderColor: 'black',
            data: [40, 49]
        }]
    },
});