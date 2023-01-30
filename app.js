// DOM Elements
const bmiForm = document.getElementById("bmiForm");
const bmiContainer = document.getElementById("bmiContainer");
const nama = document.getElementById("nama");
const tinggi = document.getElementById("tinggi");
const berat = document.getElementById("berat");

/* 
{
  name: '',
  age: number,
  roll: number
}
*/

// JSON.parse = konversi string ke objek
const bmi = JSON.parse(localStorage.getItem("bmi")) || [];

// arrow function
// arrow function addstudent dengan parameter name, age, roll melakukan push ke array student
const addBmi = (nama, tinggi, berat, hasil) => {
  bmi.push({
    nama,
    tinggi,
    berat,
    hasil
  });

  // JSON.stringify = konversi objek ke string
  localStorage.setItem("bmi", JSON.stringify(bmi));

  return { nama, tinggi, berat, hasil };
};

const createBmiElement = ({ nama, tinggi, berat, hasil }) => {
  // Create elements
  const bmiDiv = document.createElement("div");
  const bmiNama = document.createElement("h2");
  const bmiTinggi = document.createElement("p");
  const bmiBerat = document.createElement("p");
  const bmiHasil = document.createElement("p");

  // Fill the content
  bmiNama.innerText = "Nama : " + nama;
  bmiTinggi.innerText = "Tinggi : " + tinggi;
  bmiBerat.innerText = "Berat : " + berat;
  bmiHasil.innerText = "Hasil BMI : " + hasil;

  // Add to the DOM
  bmiDiv.append(bmiNama, bmiTinggi, bmiBerat, bmiHasil);
  bmiContainer.appendChild(bmiDiv);

  bmiContainer.style.display = bmi.length === 0 ? "none" : "flex";
};

bmiContainer.style.display = bmi.length === 0 ? "none" : "flex";

bmi.forEach(createBmiElement);

bmiForm.onsubmit = e => {
  e.preventDefault();

  let vnama = nama.value;
  let vtinggi = tinggi.value;
  let vberat = berat.value;
  let hasil = (vberat/(vtinggi*vtinggi/10000)).toFixed(2);

  const newBmi = addBmi(
    vnama,
    vtinggi,
    vberat,
    hasil
  );

  createBmiElement(newBmi);

  nama.value = "";
  tinggi.value = "";
  berat.value = "";
};
