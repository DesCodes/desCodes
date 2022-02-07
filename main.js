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


// document.addEventListener("DOMContentLoaded", function() {
//   var options = {
//     container: document.getElementById('pagepiling'),
//     panelSelector: '.section',
//     directionThreshold: 100,
//     delay: 0,
//     duration: 300,
//   };

//   new PanelSnap(options);
// });  

// side menu function
$('nav .rightBox svg').click(function() {
	$('nav.sideMenu').addClass('active');
});
$('nav.sideMenu svg').click(function() {
	$('nav.sideMenu').removeClass('active');
});