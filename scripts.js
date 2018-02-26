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




/* For Square */
function calculateAreaOfSquare() {
  var side = document.getElementById("side").value;
  if (isNaN(side)) {
    var area = "Input Not Valid";
  }
  else {
    var area = "A = " + side * side+ " units²";
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
