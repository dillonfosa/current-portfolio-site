$( document ).ready(function(){
    
    $('.button-collapse').sideNav();
    
     new WOW().init();
  
});





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
     





var data = [16695, 18533];

var bar_w = 55,
    bar_h = 250,
    label_padding = 26,
    bar_padding = 25;
  
var x = d3.scale.linear()
      .domain([0, 1])
      .range([0, bar_w + bar_padding]);
  
var y = d3.scale.linear()
       .domain([0, d3.max(data)])
       .rangeRound([0, bar_h - label_padding]); // rangeRound to avoid antialiasing artifacts.

var chart = d3.select("#chart").append("svg")
     .attr("class", "chart")
     .attr("width", (bar_w * data.length) + bar_padding)
     .attr("height", bar_h);

chart.selectAll("rect")
 .data(data)
 .enter()
 .append("rect")
 .attr("x", function(d, i) { return x(i) - .5; })
 .attr("y", function(d) { return bar_h - .5; })
 .attr("width", bar_w)
 .attr("class", function(d,i) {return i==0?'first':'second'})
 .transition().delay(function (d,i){ return i * 600;})
 .duration(800)
 .attr("height", function(d) { return y(d); })
 .attr("y", function(d) { return bar_h - y(d) - .5; });

chart.selectAll("text")
 .data(data)
 .enter().append("text")
 .attr("width", bar_w)
 .attr("x", function(d, i) { return x(i) + bar_w/2; })
 .attr("y", function(d) { return bar_h - y(d) - 15; })
 .attr("text-anchor", "middle")
 .transition().delay(function (d,i){ return i * 600;})
 .duration(800)
 .text(function(d) { return '$' + d; });