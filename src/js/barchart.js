var data=[30, 86, 168, 281, 303, 365]; 

d3.select(".chart")
    .selectAll("div") //select all divs but none so select empty
    .data(data) //pass in data
        .enter()//no elements but has 6 data points creates placeholder elements
        .append("div") //inserts 
        .style("width", function(d){ return d + "px"; }) //d represnts current data element
        .text(function(d) { return d; });