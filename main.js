document.addEventListener("DOMContentLoaded", function() {
  var options = {
  	$menu: false,
  	container: document.body,
    panelSelector: 'section',
    menuSelector: 'a',
    directionThreshold: 100,
    delay: 2,
    duration: 300,
    easing: function(t) { return t }
  };

 panelSnap = new PanelSnap(options);
});

 // side menu scroll page function
$('#menu a').click(function(e) {
	// console.log($(e.target).attr('data-panel'))
	if($(e.target).attr('data-panel') == 'first') {
		panelSnap.snapToPanel(panelSnap.panelList[0])
		activePanel()
	} else if($(e.target).attr('data-panel') == 'second') {
		panelSnap.snapToPanel(panelSnap.panelList[1])
		activePanel()
	} else if($(e.target).attr('data-panel') == 'third') {
		panelSnap.snapToPanel(panelSnap.panelList[2])
		activePanel()
	} else if($(e.target).attr('data-panel') == 'fourth') {
		panelSnap.snapToPanel(panelSnap.panelList[3])
		activePanel()
	} else if($(e.target).attr('data-panel') == 'fifth') {
		panelSnap.snapToPanel(panelSnap.panelList[4])
		activePanel()
	} else if($(e.target).attr('data-panel') == 'sixth') {
		panelSnap.snapToPanel(panelSnap.panelList[5])
		activePanel()
	}
});

function activePanel() {
	if($(panelSnap.activePanel).attr('data-panel') == $('#menu a').eq(0).attr('data-panel')) {
		$('#menu a').removeClass('active');
		$('#menu a').eq(0).addClass('active');
	} else if($(panelSnap.activePanel).attr('data-panel') == $('#menu a').eq(1).attr('data-panel')) {
		$('#menu a').removeClass('active');
		$('#menu a').eq(1).addClass('active');
	} else if($(panelSnap.activePanel).attr('data-panel') == $('#menu a').eq(2).attr('data-panel')) {
		$('#menu a').removeClass('active');
		$('#menu a').eq(2).addClass('active');
	} else if($(panelSnap.activePanel).attr('data-panel') == $('#menu a').eq(3).attr('data-panel')) {
		$('#menu a').removeClass('active');
		$('#menu a').eq(3).addClass('active');
	} else if($(panelSnap.activePanel).attr('data-panel') == $('#menu a').eq(4).attr('data-panel')) {
		$('#menu a').removeClass('active');
		$('#menu a').eq(4).addClass('active');
	} else if($(panelSnap.activePanel).attr('data-panel') == $('#menu a').eq(5).attr('data-panel')) {
		$('#menu a').removeClass('active');
		$('#menu a').eq(5).addClass('active');
	}
}
$(window).scroll(function() {
	activePanel();
});





// side menu function
$('nav .rightBox svg').click(function() {
	$('nav.sideMenu').addClass('active');
});
$('nav.sideMenu svg').click(function() {
	$('nav.sideMenu').removeClass('active');
});