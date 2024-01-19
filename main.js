// Elements
let imgInput = document.getElementById("img-input");
let img = document.getElementById("show-img");
const input = document.querySelectorAll(".controls input");

console.log(input);
// Variables

// functions
// Load images
function handleImageChange() {
  // احصل على عنصر input
  const input = document.getElementById("img-input");

  // احصل على الملف الذي تم تحميله
  const file = input.files[0];

  // اقرأ البيانات من الملف
  const reader = new FileReader();
  reader.readAsDataURL(file);

  // عند اكتمال القراءة، اعرض الصورة
  reader.onloadend = () => {
    const image = new Image();
    image.src = reader.result;
    image.style.width = "200px";
    image.style.height = "200px";
    image.classList.add("img");
    img.appendChild(image);
  };
}

imgInput.addEventListener("change", handleImageChange);

// MAin Function

function main() {
  console.log("done");
  const image = img.querySelector("img");
  if (image != null) {
    console.log(image);
    clearInterval(interval);
  }

  handleUpdate();
}

const interval = setInterval(main, 1000);



function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}` ,this.value + suffix);

  // console.log(suffix);
  // console.log(this.name);
  // console.log(document.documentElement);
}

input.forEach((input) => input.addEventListener("change", handleUpdate));
input.forEach((input) => input.addEventListener('mousemove', handleUpdate));
