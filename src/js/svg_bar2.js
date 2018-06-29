var dataset =[5, 10, 13, 19, 21, 25, 22, 18, 15, 13,11, 12, 15, 20, 18, 17, 16, 18, 23, 25];

//New Chart
var w= 500; 
var h = 100; 
var barPadding = 1; 
    //create svg element
var svg = d3.select('body')
    .append('svg')
    .attr('width', 'w')
    .attr('height', 'h');
    //create rects and add to svg
svg.selectAll('rect')
    .data(dataset)
    .enter() //returns 20 placeholders for data points
    .append('rect')
    .attr('x', function(d, i){
        return i * (w / dataset.length) ; //scale bar width along with data
})
    .attr('y', function(d){
        return h - (d*4); //height minus data value
})
    .attr('width', w / dataset.length - barPadding)
    .attr('height', function(d){
        return d * 4; 
})
    //.attr("fill", "teal");//all teal
    .attr('fill', function(d){
        return 'rgb(0, 0, ' + (d * 10) + ')';
});
    //add text
svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d){
        return d; 
})
    //position text : use same x/y code values plus to move inside bars
    .attr('text-anchor', 'middle')
    .attr('x', function(d,i){
        return i * (w/dataset.length) + (w / dataset.length - barPadding) / 2; 
})
    .attr('y', function(d){
        return h - (d * 4) + 14; 
})
    .attr('font-family', 'sans-serif')
    .attr('font-size', '11px')
    .attr('fill', 'white'); 
