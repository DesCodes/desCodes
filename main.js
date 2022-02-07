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
//   new PanelSnap({
//   	container: document.getElementById('pagepiling')
//   });
// });

document.addEventListener("DOMContentLoaded", function() {
  new PanelSnap();
});
var defaultOptions = {
  container: document.getElementById('pagepiling'),
  panelSelector: '> section',
  directionThreshold: 50,
  delay: 0,
  duration: 300,
  easing: function(t) { return t },
};

new PanelSnap(options);
// jQuery(function () {
//   new PanelSnap();
// })
