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
    directionThreshold: 100,
    delay: 2,
    duration: 300,
    easing: function(t) { return t }
  };

new PanelSnap(options);
});  

// var menu, menuItems, panelSnapInstance;

// document.addEventListener("DOMContentLoaded", function () {
// menu = document.querySelector('#menu');
// menuItems = menu.querySelectorAll('button');

// panelSnapInstance = new PanelSnap({
//   panelSelector: "section",
//   strictContainerSelection: "false",
//   directionThreshold: 100,
//   delay: 2,
//   duration: 300,
//   easing: function(t) { return t }
// });
// panelSnapInstance.on('activatePanel', activateMenuItem);

// menuItems.forEach(function (menuItem) {
//   menuItem.addEventListener('click', onButtonClick);
// })

// });

// function activateMenuItem(panel) {
// menuItems.forEach(function (menuItem) {
//   menuItem.classList.remove('active');
// });

// var panelName = panel.getAttribute('data-panel')
// var menuItem = menu.querySelector('button[data-panel="' + panelName + '"]');
// menuItem.classList.add('active');
// }

// function onButtonClick(e) {
// var panelName = e.target.getAttribute('data-panel')
// var panel = document.querySelector('section[data-panel="' + panelName + '"]');
// panelSnapInstance.snapToPanel(panel);
// }

// side menu function
$('nav .rightBox svg').click(function() {
	$('nav.sideMenu').addClass('active');
});
$('nav.sideMenu svg').click(function() {
	$('nav.sideMenu').removeClass('active');
});