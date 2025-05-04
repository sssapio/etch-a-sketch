// const div1 = document.createElement("div");
// const div2 = document.createElement("div");
// const div3 = document.createElement("div");
// const div4 = document.createElement("div");
// const div5 = document.createElement("div");
// const div6 = document.createElement("div");
// const div7 = document.createElement("div");
// const div8 = document.createElement("div");
const container = document.querySelector("#container");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const value = prompt("Enter amount of Pixels:");
  if (isNaN(value) || value < 1 || value > 100) {
    alert("Enter a number between 1 and 100");
    return;
  }
  const grid = value * value;
  const squareSize = 960 / grid;
  container.innerHTML = "";
  for (let i = 0; i < grid; i++) {
    const pixels = "pixels";
    const colors = ["color1", "color2", "color3", "color4"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const newDiv = document.createElement("div");
    newDiv.classList.add(pixels, color);
    newDiv.style.width = `${squareSize}px`;
    newDiv.style.height = `${squareSize}px`;
    container.appendChild(newDiv);
  }
});

// div1.classList.add("pixels", "color1");
// div2.classList.add("pixels", "color2");
// div3.classList.add("pixels", "color3");
// div4.classList.add("pixels", "color4");
// div5.classList.add("pixels", "color1");
// div6.classList.add("pixels", "color2");
// div7.classList.add("pixels", "color3");
// div8.classList.add("pixels", "color4");

// container.appendChild(div1);
// container.appendChild(div2);
// container.appendChild(div3);
// container.appendChild(div4);
// container.appendChild(div5);
// container.appendChild(div6);
// container.appendChild(div7);
// container.appendChild(div8);
