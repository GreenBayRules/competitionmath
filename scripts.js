/* General */
function square(number) {
  return number * number;
}

function simplifySqrt(sqrt) {
  if (Number.isInteger(sqrt)){
    var sqrts = [];
    var outside = 1;
    var root = sqrt;
    for (var i = 2; i < Math.sqrt(sqrt); i++) {
      sqrts.push(i*i);
    }
    console.log(sqrts);

    for (var i = 0; i < sqrts.length; i++){
      var element = sqrts[i];
      if (root%element == 0) {
        outside = Math.sqrt(element) * outside;
        root = root/element;
      }
    }
    if (root < 1) {
      return "Input Wrong";
    }
    else {
      return outside + "√" + root;
    }
    console.log(outside + "√" + root);
  }
  else {
    return "√" + sqrt;
  }
}


function sin(c) {
  return Math.sin(toRadians(c));
}
function cos(c) {
  return Math.cos(toRadians(c));
}
function tan(c) {
  return Math.tan(toRadians(c));
}
function cot(c) {
  return 1/tan(c);
}
function csc(c) {
  return 1/sin(c);
}
function sec(c) {
  return 1/cos(c);
}

function toDegrees (angle) {
  return angle * (180 / Math.PI);
}
function toRadians (angle) {
  return angle * (Math.PI / 180);
}

function startLearning() {
  window.open("./guides.html");
}

/* For Triangle */
function calculateAreaOfTriangleBaseHeight() {
  var base = document.getElementById("base").value;
  var height = document.getElementById("height").value;
  if (isNaN(base) || isNaN(height)) {
    var area = "Input Not Valid";
  }
  else {
    var area = "A = " + base * height / 2 + " units²";
  }
  document.getElementById("exact").innerHTML = area ;
}


function calculateAreaOfEquilateralTriangle() {
  var side = document.getElementById("side").value;
  if (isNaN(side)) {
    var area = "Input Not Valid";
  }
  else {
    var sidesquared = square(side);
    var sidesquareddividedby4 = sidesquared / 4;
    var sidesquaredtimesthree = sidesquareddividedby4 * Math.sqrt(3);
    var areaApproximate = "A = " + sidesquaredtimesthree + " units²";
    console.log(side);
    console.log(sidesquared);
    console.log(sidesquareddividedby4);
    console.log(sidesquaredtimesthree);
    var area = "A ≈ " + sidesquareddividedby4 + "√3 units²";
  }
  document.getElementById("exactEquilateral").innerHTML = area ;
  document.getElementById("approximateEquilateral").innerHTML = areaApproximate ;
}


function calculateHeronsFormula() {
  var a = parseInt(document.getElementById("sidea").value);
  var b = parseInt(document.getElementById("sideb").value);
  var c = parseInt(document.getElementById("sidec").value);
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    var area = "Input Not Valid";
  }
  else {
    var s = (a + b + c)/2;
    console.log(s);
    var rootnumber = s * (s - a) * (s - b) * (s - c);
    var approximate = Math.sqrt(rootnumber);
    var exact = simplifySqrt(rootnumber);
  }
  document.getElementById("exactHerons").innerHTML = "A = " + exact + " units²";
  document.getElementById("approximateHerons").innerHTML ="A ≈ " +  approximate + " units²";
}


function calculateSinTriangle() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  var c = parseInt(document.getElementById("angleC").value);
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    var area = "Input Not Valid";
  }
  else {
    var area = "A = " + (a*b*sin(c)+ " units²");
  }
  document.getElementById("exactSinTriangle").innerHTML = area ;
}

/* For Decagon */
function calculateAreaOfDecagon() {
  var side = document.getElementById("side").value;
  if (isNaN(side)) {
    var area = "Input Not Valid";
    var approx = "Input Not Valid";
  }
  else {
    var a = Math.sqrt(5+2*Math.sqrt(5));
    a *= 5/2;
    a *= square(side);
    var area = a;

  }
  document.getElementById("exact").innerHTML = "A = " + area ;
}

/* For Nonagon */
function calculateAreaOfNonagon() {
  var side = document.getElementById("side").value;
  if (isNaN(side)) {
    var area = "Input Not Valid";
    var approx = "Input Not Valid";
  }
  else {
    var a = 9/4;
    a *= square(side);
    a *= cot(20);
    var area = a;

  }
  document.getElementById("exact").innerHTML = "A = " + area ;
}

/* For Octagon */
function calculateAreaOfOctagon() {
  var side = document.getElementById("side").value;
  if (isNaN(side)) {
    var area = "Input Not Valid";
    var approx = "Input Not Valid";
  }
  else {
    var a = 1 + Math.sqrt(2);
    a *= 2;
    a *= square(side);
    var area = a;

    var b = 2 * square(side);
    var areae = b + " " + b + "√2";

  }
  document.getElementById("approximate").innerHTML = "A ≈ " + area ;
  document.getElementById("exact").innerHTML = "A = " + areae ;
}


/* For Heptagon */
function calculateAreaOfHeptagon() {
  if (isNaN(document.getElementById("side").value)) {
    var area = "Input Not Valid";
    var approx = "Input Not Valid";
  }
  else {
    var a = 7/4;
    console.log(a)
    var s = document.getElementById("side").value;
    a *= square(s);
    console.log(a+ " " + s);
    a *= cot(180/7);
    console.log(a)

  }
  document.getElementById("exact").innerHTML = "A = " + a ;
}

/* For Hexagon */
function calculateAreaOfHexagon() {
  var s = document.getElementById("side").value;
  if (isNaN(s)) {
    var area = "Input Not Valid";
    var approx = "Input Not Valid";
  }
  else {
    var a = 3;
    a /= 2;
    a *= square(s);
    var area = "A ≈ " + a + "√3 units²";
    a *= Math.sqrt(3);
    var approx = "A = " + a + " units²";
  }
  document.getElementById("exact").innerHTML = area ;
  document.getElementById("approximate").innerHTML = approx ;
}

/* For Pentagon */
function calculateAreaOfPentagon() {
  var s = document.getElementById("side").value;
  if (isNaN(s)) {
    var area = "Input Not Valid";
  }
  else {
    var a = 2 * Math.sqrt(5);
    a += 5;
    a *= 5;
    a = Math.sqrt(a)/4;
    a *= square(s);
    var area = "A = " + a + " units²";
  }
  document.getElementById("exact").innerHTML = area ;
}



/* For Parallelogram */
function calculateAreaOfParallelogram() {
  var d1 = document.getElementById("d1").value;
  var d2 = document.getElementById("d2").value;
  if (isNaN(d1) || isNaN(d2)) {
    var area = "Input Not Valid";
  }
  else {
    var area = "A = " + (d1*d2) + " units²";
  }
  document.getElementById("exact").innerHTML = area ;
}


/* For Rhombus */
function calculateAreaOfRhombus() {
  var d1 = document.getElementById("d1").value;
  var d2 = document.getElementById("d2").value;
  if (isNaN(d1) || isNaN(d2)) {
    var area = "Input Not Valid";
  }
  else {
    var area = "A = " + (d1*d2)/2 + " units²";
  }
  document.getElementById("exact").innerHTML = area ;
}



/* For Rectangle */
function calculateAreaOfRectangle() {
  var length = document.getElementById("length").value;
  var width = document.getElementById("width").value;
  if (isNaN(width) || isNaN(length)) {
    var area = "Input Not Valid";
  }
  else {
    var area = "A = " + length*width + " units²";
  }
  document.getElementById("exact").innerHTML = area ;
}


/* For Square */
function calculateAreaOfSquare() {
  var side = document.getElementById("side").value;
  if (isNaN(side)) {
    var area = "Input Not Valid";
  }
  else {
    var area = "A = " + square(side)+ " units²";
  }
  document.getElementById("exact").innerHTML = area ;
}





/* For Circles */
function calculateAreaOfCircle() {
  var radius = document.getElementById("radius").value;
  if (isNaN(radius)) {
    var area = "Input Not Valid";
    var areaWithPi = "Input Not Valid";
  }
  else {
    var area = "A ≈ " + Math.PI * square(radius) + "" + " units²";
    var areaWithPi = "A = " + square(radius) + "π" + " units²";
  }
  document.getElementById("exact").innerHTML = areaWithPi;
  document.getElementById("approximate").innerHTML = area;
}
function calculateCircumfrence() {
  var radius = document.getElementById("radius").value;
  if (isNaN(radius)) {
    var area = "Input Not Valid";
    var areaWithPi = "Input Not Valid";
  }
  else {
    var area = "C ≈ " + Math.PI * radius * 2 + "" + " units";
    var areaWithPi = "C = " + radius * 2 + "π" + " units";
  }
  document.getElementById("exact").innerHTML = areaWithPi;
  document.getElementById("approximate").innerHTML = area;
}

function calculateAreaOfEllipse() {
  var r1 = document.getElementById("radius1").value;
  var r2 = document.getElementById("radius2").value;
  if (isNaN(r1) || isNaN(r2)) {
    var area = "Input Not Valid";
    var areaWithPi = "Input Not Valid";
  }
  else {
    var area = "A ≈ " + Math.PI * r1 * r2 + "" + " units";
    var areaWithPi = "A = " + r1 * r2 + "π" + " units";
  }
  document.getElementById("exact").innerHTML = areaWithPi;
  document.getElementById("approximate").innerHTML = area;
}

function calculateCircumfrenceOfEllipse() {
  var r1 = document.getElementById("radius1").value;
  var r2 = document.getElementById("radius2").value;
  if (isNaN(r1) || isNaN(r2)) {
    var p = "Input Not Valid";
  }
  else {
    var h = square(r1 - r2)/square(r1 + r2)
    var p = Math.PI * (r1 + r2);
    var threeh = 3 * h;
    var bottom = 10 + Math.sqrt(4 - threeh);
    p *= 1 + threeh/bottom;
  }
  document.getElementById("approximate").innerHTML = p;
}
