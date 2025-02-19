document.addEventListener('DOMContentLoaded', function() {
  const myButton = document.getElementById('myButton');
  if (myButton) {
    myButton.addEventListener('click', handleButtonClick);
  }
});

function handleButtonClick() {
  console.log("Кнопка нажата!");
  const infoPara = document.getElementById("info");
  if (infoPara) {
    infoPara.textContent = "Кнопка была успешно нажата! Действие обработано.";
  }
}