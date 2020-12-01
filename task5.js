var a = 7;
var b = 9;
var c = 11;


function TriangleArea(a, b, c) {


  var perimeter = (a + b + c) / 2;
  var area = Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c));
  return "area =" + area;



}
console.log(TriangleArea(a, b, c));

