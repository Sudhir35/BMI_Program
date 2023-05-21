var name1 = prompt("Enter Name of First Person");
document.getElementById("name1").textContent = name1;
document.getElementById("name2").textContent = name1;
document.getElementById("name5").textContent = name1;

var name2 = prompt("Enter Name of Second Person");
document.getElementById("name3").textContent = name2;
document.getElementById("name4").textContent = name2;
document.getElementById("name6").textContent = name2;

function calculateBMI() {
  let h1 = document.getElementById("hm").value;
  let w1 = document.getElementById("wm").value;
  let h2 = document.getElementById("hj").value;
  let w2 = document.getElementById("wj").value;

  if (h1 && h2 && w1 && w2 !== "") {
    let hP1 = parseFloat(h1);
    let wP1 = parseFloat(w1);
    let hP2 = parseFloat(h2);
    let wP2 = parseFloat(w2);

    let BMIPerson1 = wP1 / (hP1 * hP1);
    let BMIPerson2 = wP2 / (hP2 * hP2);

    document.getElementById("BMIm").value = BMIPerson1.toFixed(2);
    document.getElementById("BMIj").value = BMIPerson2.toFixed(2);

    if (BMIPerson1 > BMIPerson2) {
      document.getElementById("statement").innerHTML = `${name1} has Higher BMI(
        ${BMIPerson1.toFixed(2)}) then ${name2}(${BMIPerson2.toFixed(2)})`;
    } else if (BMIPerson1 < BMIPerson2) {
      document.getElementById("statement").innerHTML = `${name2} has Higher BMI(
        ${BMIPerson2.toFixed(2)}) then ${name1}(${BMIPerson1.toFixed(2)})`;
    } else {
      document.getElementById(
        "statement"
      ).innerHTML = `Both ${name1} and ${name2} have Same BMI`;
    }
  } else {
    document.getElementById("statement").innerHTML =
      "Please Enter valid inputs";
  }
}

function resetValues() {
  document.getElementById("hj").value = "";
  document.getElementById("hm").value = "";
  document.getElementById("wj").value = "";
  document.getElementById("wm").value = "";
  document.getElementById("BMIj").value = "";
  document.getElementById("BMIm").value = "";
  document.getElementById("statement").innerHTML = "";
}
