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
    var area = "A = " + (a*b*Math.sin(c* Math.PI / 180.0))/2+ " units²";
  }
  document.getElementById("exactSinTriangle").innerHTML = area ;
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
    var area = "A ≈ " + Math.PI * radius * radius + "" + " units²";
    var areaWithPi = "A = " + radius * radius + "π" + " units²";
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
