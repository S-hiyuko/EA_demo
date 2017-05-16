var selOption = $("#devSelect option:selected").text();
//var tempChart = document.getElementById("tmpChart");
/*
var tempercent = 60;
var ratio=percent/100;
*/
/*
var percent = null;
var ratio =null;
*/

function draw(){
  tempDraw();
  humDraw();
  preDraw();
}

console.log('jsfile'+selOption);
//デバイスの選択
function onButtonClick(){
//データ取得
    this.getData();
  }

function getData(){
  var percent = 60;
  return percent;
}

function tempDraw(){
  var percent = this.getData();
  var ratio=percent/100;
  var pie=d3.layout.pie()
  .value(function(d){return d})
  .sort(null);

  var w=300,h=300;
  var outerRadius=(w/2)-10;
  var innerRadius=85;
  var color = ['#ececec','#f06b3e','#888888'];
  var colorOld='#F00';
  var colorNew='#0F0';
  var arc=d3.svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius)
  .startAngle(0)
  .endAngle(Math.PI);
  var arcLine=d3.svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius)
  .startAngle(0);

  var svg1=d3.select("#tmpChart")
  .append("svg")
  .attr({
    width:w,
    height:h,
    class:'shadow'
  }).append('g')
  .attr({
    transform:'translate('+w/2+','+h/2+')'
  });

  var path=svg1.append('path')
  .attr({
    d:arc,
    transform:'rotate(-90)'
  }).attr({
    'stroke-width':"1",
    stroke:"#666666"
  })
  .style({
    fill:color[0]
  });

  var pathForeground=svg1.append('path')
  .datum({endAngle:0})
  .attr({
    d:arcLine,
    transform:'rotate(-90)'
  })
  .style({
    fill: function (d,i) {
      return color[1];
    }
  });

  var middleCount=svg1.append('text')
  .datum(0)
  .text(function(d){
    return d;
  })
  .attr({
    class:'middleText',
    'text-anchor':'middle',
    dy:0,
    dx:5
  })
  .style({
    fill:d3.rgb('#000000'),
    'font-size':'60px'



  });

  var oldValue=0;
  var arcTween=function(transition, newValue,oldValue) {
    transition.attrTween("d", function (d) {
      var interpolate = d3.interpolate(d.endAngle, ((Math.PI))*(newValue/100));

      var interpolateCount = d3.interpolate(oldValue, newValue);

      return function (t) {
        d.endAngle = interpolate(t);
        middleCount.text(Math.floor(interpolateCount(t))+'%');

        return arcLine(d);
      };
    });
  };
  pathForeground.transition()
  .duration(750)
  .ease('cubic')
  .call(arcTween,percent,oldValue);

}

function humDraw(){
  var percent = this.getData();
  var ratio=percent/100;
  var pie=d3.layout.pie()
  .value(function(d){return d})
  .sort(null);

  var w=300,h=300;
  var outerRadius=(w/2)-10;
  var innerRadius=85;
  var color = ['#ececec','#f06b3e','#888888'];
  var colorOld='#F00';
  var colorNew='#0F0';
  var arc=d3.svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius)
  .startAngle(0)
  .endAngle(Math.PI);
  var arcLine=d3.svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius)
  .startAngle(0);

  var svg2=d3.select("#humChart")
  .append("svg")
  .attr({
    width:w,
    height:h,
    class:'shadow'
  }).append('g')
  .attr({
    transform:'translate('+w/2+','+h/2+')'
  });

  var path=svg2.append('path')
  .attr({
    d:arc,
    transform:'rotate(-90)'
  }).attr({
    'stroke-width':"1",
    stroke:"#666666"
  })
  .style({
    fill:color[0]
  });

  var pathForeground=svg2.append('path')
  .datum({endAngle:0})
  .attr({
    d:arcLine,
    transform:'rotate(-90)'
  })
  .style({
    fill: function (d,i) {
      return color[1];
    }
  });

  var middleCount=svg2.append('text')
  .datum(0)
  .text(function(d){
    return d;
  })
  .attr({
    class:'middleText',
    'text-anchor':'middle',
    dy:0,
    dx:5
  })
  .style({
    fill:d3.rgb('#000000'),
    'font-size':'60px'



  });

  var oldValue=0;
  var arcTween=function(transition, newValue,oldValue) {
    transition.attrTween("d", function (d) {
      var interpolate = d3.interpolate(d.endAngle, ((Math.PI))*(newValue/100));

      var interpolateCount = d3.interpolate(oldValue, newValue);

      return function (t) {
        d.endAngle = interpolate(t);
        middleCount.text(Math.floor(interpolateCount(t))+'%');

        return arcLine(d);
      };
    });
  };
  pathForeground.transition()
  .duration(750)
  .ease('cubic')
  .call(arcTween,percent,oldValue);



}

function preDraw(){
  var percent = this.getData();
  var ratio=percent/100;
  var pie=d3.layout.pie()
  .value(function(d){return d})
  .sort(null);

  var w=300,h=300;
  var outerRadius=(w/2)-10;
  var innerRadius=85;
  var color = ['#ececec','#f06b3e','#888888'];
  var colorOld='#F00';
  var colorNew='#0F0';
  var arc=d3.svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius)
  .startAngle(0)
  .endAngle(Math.PI);
  var arcLine=d3.svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius)
  .startAngle(0);

  var svg3=d3.select("#preChart")
  .append("svg")
  .attr({
    width:w,
    height:h,
    class:'shadow'
  }).append('g')
  .attr({
    transform:'translate('+w/2+','+h/2+')'
  });

  var path=svg3.append('path')
  .attr({
    d:arc,
    transform:'rotate(-90)'
  }).attr({
    'stroke-width':"1",
    stroke:"#666666"
  })
  .style({
    fill:color[0]
  });

  var pathForeground=svg3.append('path')
  .datum({endAngle:0})
  .attr({
    d:arcLine,
    transform:'rotate(-90)'
  })
  .style({
    fill: function (d,i) {
      return color[1];
    }
  });

  var middleCount=svg3.append('text')
  .datum(0)
  .text(function(d){
    return d;
  })
  .attr({
    class:'middleText',
    'text-anchor':'middle',
    dy:0,
    dx:5
  })
  .style({
    fill:d3.rgb('#000000'),
    'font-size':'60px'



  });

  var oldValue=0;
  var arcTween=function(transition, newValue,oldValue) {
    transition.attrTween("d", function (d) {
      var interpolate = d3.interpolate(d.endAngle, ((Math.PI))*(newValue/100));

      var interpolateCount = d3.interpolate(oldValue, newValue);

      return function (t) {
        d.endAngle = interpolate(t);
        middleCount.text(Math.floor(interpolateCount(t))+'%');

        return arcLine(d);
      };
    });
  };
  pathForeground.transition()
  .duration(750)
  .ease('cubic')
  .call(arcTween,percent,oldValue);



}
function cercleSettings(){

}
//正常系、異常系の選択

//データの取得と表示
