const input = document.getElementById("input-el");
const buttonconvert = document.getElementById("convert-btn");
const length = document.getElementById("length-el");
const volume = document.getElementById("volume-el");
const mass = document.getElementById("mass-el");

const meterToFeet = 3.28084;
const literToGallon = 0.264172;
const kiloToPound = 2.20462;

function rounddowntothree(num) {
  return (Math.floor(num * 1000) / 1000).toFixed(3);
}

function render() {
  const giatri = input.value;
  const value = Number(giatri);

  const metertofeet = rounddowntothree(value * meterToFeet);
  const litertgallon = rounddowntothree(value * literToGallon);
  const kilotopound = rounddowntothree(value * kiloToPound);

  const feetometer = rounddowntothree(value / meterToFeet);
  const gallontoliter = rounddowntothree(value / literToGallon);
  const poundtokilo = rounddowntothree(value / kiloToPound);

  length.textContent = `${value} meters = ${metertofeet} feet`;
}

buttonconvert.addEventListener("click", () => {
  render();
});
