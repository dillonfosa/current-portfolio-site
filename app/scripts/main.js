$( document ).ready(function(){
    
    $('.button-collapse').sideNav();
    
    
  
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



function draw(data) {
  d3.select('body')
    .append('div')
      .attr('class','chart')
    .selectAll('div.line')
    .data(data)
    .enter()
    .append('div')
      .attr('class','line');
  
  //Create Label for each line item
  d3.selectAll('div.line')
    .append('div')
      .attr('class', 'label')
      .text(function(d){return d.name;});
  
  //Show bar for each line item
  d3.selectAll('div.line')
    .append('div')
      .attr('class', 'bar')
      .transition().ease('elastic')
      .style('width', function(d){return d.mpg * 10 + 'px';})
      .text(function(d){return d.mpg;}); 
}


var data = [{
    class: 'skills',
    name: 'HTML5',
    mpg: 37
},{
    class: 'skills',
    name: 'CSS3',
    mpg: 37
},{
    class: 'skills',
    name: 'PHP',
    mpg: 50
},{
    class: 'SKILLS',
    name: 'JQUERY',
    mpg: 43
},{    
    class: 'SKILLS',
    name: 'JAVA-SCRIPT',
    mpg: 35
}];

draw(data);