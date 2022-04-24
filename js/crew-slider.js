import { addSelected, obtenerDatos, validarAnimacion } from "./app.js";

const d = document;
/*crew*/
const btn_1 = d.getElementById("btn-1");
const btn_2 = d.getElementById("btn-2");
const btn_3 = d.getElementById("btn-3");
const btn_4 = d.getElementById("btn-4");
const btnsSlider = d.querySelectorAll("button");
/* crew */
const $subtitle = d.getElementById("roll");
const $fullName = d.getElementById("full-name");
const $aboutHim = d.getElementById("about-him");
const $imgPpl = d.getElementById("picture-ppl");

//crew

//douglas

const construirCrew = (position) => {
  obtenerDatos().then((data) => {
    const {
      bio,
      images: { webp },
      name,
      role,
    } = data.crew[position];
    $subtitle.textContent = role;
    $fullName.textContent = name;
    $aboutHim.textContent = bio;
    $imgPpl.src = webp;
  });
};
btn_1.addEventListener("click", () => {
  construirCrew(0);
  validarAnimacion($subtitle, $fullName, $aboutHim, $imgPpl);
  addSelected(btn_1, btnsSlider, "btn-selected");
});
btn_2.addEventListener("click", () => {
  construirCrew(1);
  validarAnimacion($subtitle, $fullName, $aboutHim, $imgPpl);
  addSelected(btn_2, btnsSlider, "btn-selected");
});
btn_3.addEventListener("click", () => {
  construirCrew(2);
  validarAnimacion($subtitle, $fullName, $aboutHim, $imgPpl);
  addSelected(btn_3, btnsSlider, "btn-selected");
});
btn_4.addEventListener("click", () => {
  construirCrew(3);
  validarAnimacion($subtitle, $fullName, $aboutHim, $imgPpl);
  addSelected(btn_4, btnsSlider, "btn-selected");
});
