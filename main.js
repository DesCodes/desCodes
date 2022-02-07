// $(document).ready(function() {
//   $('#pagepiling').pagepiling({
//     menu: '#menu',
//     anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
//     sectionsColor: ['#bfda00', '#2ebe21', '#2C3E50', '#51bec4'],
//     loopTop: true,
//     loopBottom: true
//   });
// });
// new PanelSnap({
// 	container: document.getElementById('pagepiling'),
// 	panelSelector: '> section'
// });

// import PanelSnap from 'panelsnap';

// const instance = new PanelSnap();
// document.addEventListener("DOMContentLoaded", function() {
//   new PanelSnap();
// });


// var defaultOptions = {
//   container: document.getElementById('pagepiling'),
//   panelSelector: 'section',
//   directionThreshold: 50,
//   delay: 0,
//   duration: 300,
//   easing: function(t) { return t },
// };

// new PanelSnap(defaultOptions);


document.addEventListener("DOMContentLoaded", function() {
  var options = {
  	container: document.body,
    panelSelector: 'section',
    menuSelector: 'button',
    directionThreshold: 100,
    delay: 2,
    duration: 300,
    easing: function(t) { return t }
  };

 panelSnap = new PanelSnap(options);
});  
// side menu scroll page function
$('#menu button').click(function(e) {
	console.log($(e.target).attr('data-panel'))
	if($(e.target).attr('data-panel') == 'first') {
		panelSnap.snapToPanel(panelSnap.panelList[0])
	} else if($(e.target).attr('data-panel') == 'second') {
		panelSnap.snapToPanel(panelSnap.panelList[1])
	} else if($(e.target).attr('data-panel') == 'third') {
		panelSnap.snapToPanel(panelSnap.panelList[2])
	} else if($(e.target).attr('data-panel') == 'fourth') {
		panelSnap.snapToPanel(panelSnap.panelList[3])
	} else if($(e.target).attr('data-panel') == 'fifth') {
		panelSnap.snapToPanel(panelSnap.panelList[4])
	} else if($(e.target).attr('data-panel') == 'sixth') {
		panelSnap.snapToPanel(panelSnap.panelList[5])
	}
});


// side menu function
$('nav .rightBox svg').click(function() {
	$('nav.sideMenu').addClass('active');
});
$('nav.sideMenu svg').click(function() {
	$('nav.sideMenu').removeClass('active');
});