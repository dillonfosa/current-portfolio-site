$( document ).ready(function(){
    
   
    //custom slide out nav
    
     $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
    
     new WOW().init();
        
  
});




//header switch words js logic altered from Siamon Hasan 

function switchClass(i) {
   var lis = $('#home-news > div');
   lis.eq(i).removeClass('home_header_on');
   lis.eq(i).removeClass('home_header_out');
    lis.eq(i = ++i % lis.length).addClass('home_header_on');
    lis.eq(i = ++i % lis.length).addClass('home_header_out');
    setTimeout(function() {
        switchClass(i);
    }, 3500);
}

$(window).load(function() {
   switchClass(-1);
});

//smooth scrolling functionality 

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});


$(document).ready(function(){
    $('.collapsible').collapsible();
  });
     



//d3 chart HTML5 JQUERY main code sorce altered from CAPTAIN ANONYMOUS on codepen.io 



var percent = .89; // 0.0 to 1.0
var text = 'HTML5'+ - (percent * 100) + '%';

var width = 130;
var height = 130;
var thickness = 10;
var duration = 2000;
var foregroundColor = '#ab0cdb';
var backgroundColor = '#ccc';

var radius = Math.min(width, height) / 2;
var color = d3.scaleOrdinal([foregroundColor, backgroundColor]);

var svg = d3.select('#chart')
.append('svg')
.attr('class', 'pie')
.attr('width', width)
.attr('height', height);

var g = svg.append('g')
.attr('transform', 'translate(' + (width/2) + ',' + (height/2) + ')');

var arc = d3.arc()
.innerRadius(radius - thickness)
.outerRadius(radius);

var pie = d3.pie()
.sort(null);

var path = g.selectAll('path')
.data(pie([0, 1]))
.enter()
.append('path')
.attr('d', arc)
.attr('fill', function(d, i) {
  return color(i);
})
.each(function(d) { this._current = d; });


path.data(pie([percent, 1-percent])).transition()
  .duration(duration)
  .attrTween('d', function(d) {
  var interpolate = d3.interpolate(this._current, d);
  this._current = interpolate(0);
  return function(t) {
    return arc(interpolate(t));
  }
});

g.append('text')
  .attr('text-anchor', 'middle')
  .attr('dy', '.35em')
  .text(text);


//d3 chart CSS3

var percent = .83; // 0.0 to 1.0
var text = 'CSS3'+-(percent * 100) + '%';

var width = 130;
var height = 130;
var thickness = 10;
var duration = 2500;
var foregroundColor = '#ab0cdb';
var backgroundColor = '#ccc';

var radius = Math.min(width, height) / 2;
var color = d3.scaleOrdinal([foregroundColor, backgroundColor]);

var svg = d3.select('#chart')
.append('svg')
.attr('class', 'pie')
.attr('width', width)
.attr('height', height);

var g = svg.append('g')
.attr('transform', 'translate(' + (width/2) + ',' + (height/2) + ')');

var arc = d3.arc()
.innerRadius(radius - thickness)
.outerRadius(radius);

var pie = d3.pie()
.sort(null);

var path = g.selectAll('path')
.data(pie([0, 1]))
.enter()
.append('path')
.attr('d', arc)
.attr('fill', function(d, i) {
  return color(i);
})
.each(function(d) { this._current = d; });


path.data(pie([percent, 1-percent])).transition()
  .duration(duration)
  .attrTween('d', function(d) {
  var interpolate = d3.interpolate(this._current, d);
  this._current = interpolate(0);
  return function(t) {
    return arc(interpolate(t));
  }
});

g.append('text')
  .attr('text-anchor', 'middle')
  .attr('dy', '.35em')
  .text(text);


//d3 chart JQUERY main code sorce altered from CAPTAIN ANONYMOUS on codepen.io 

var percent = .65; // 0.0 to 1.0
var text = 'JQUERY'+-(percent * 100) + '%';

var width = 130;
var height = 130;
var thickness = 10;
var duration = 750;
var foregroundColor = '#ab0cdb';
var backgroundColor = '#ccc';

var radius = Math.min(width, height) / 2;
var color = d3.scaleOrdinal([foregroundColor, backgroundColor]);

var svg = d3.select('#chart')
.append('svg')
.attr('class', 'pie')
.attr('width', width)
.attr('height', height);

var g = svg.append('g')
.attr('transform', 'translate(' + (width/2) + ',' + (height/2) + ')');

var arc = d3.arc()
.innerRadius(radius - thickness)
.outerRadius(radius);

var pie = d3.pie()
.sort(null);

var path = g.selectAll('path')
.data(pie([0, 1]))
.enter()
.append('path')
.attr('d', arc)
.attr('fill', function(d, i) {
  return color(i);
})
.each(function(d) { this._current = d; });


path.data(pie([percent, 1-percent])).transition()
  .duration(duration)
  .attrTween('d', function(d) {
  var interpolate = d3.interpolate(this._current, d);
  this._current = interpolate(0);
  return function(t) {
    return arc(interpolate(t));
  }
});

g.append('text')
  .attr('text-anchor', 'middle')
  .attr('dy', '.35em')
  .text(text);




//parallex container js

$(document).ready(function(){
      $('.parallax').parallax();
    });