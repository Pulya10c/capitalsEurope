var map = L.map("map").setView([52.237049, 21.017532], 3);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var capitals = [
  { country: "Austria", city: "Wiedeń" },
  { country: "Albania", city: "Tirana" },
  { country: "Belgia", city: "Bruksela" },
  { country: "Białoruś", city: "Mińsk" },
  { country: "Bułgaria", city: "Sofia" },
  { country: "Wielka Brytania", city: "Londyn" },
  { country: "Węgry", city: "Budapeszt" },
  { country: "Niemcy", city: "Berlin" },
  { country: "Grecja", city: "Ateny" },
  { country: "Dania", city: "Kopenhaga" },
  { country: "Irlandia", city: "Dublin" },
  { country: "Hiszpania", city: "Madryt" },
  { country: "Włochy", city: "Rzym" },
  { country: "Cypr", city: "Nikozja" },
  { country: "Łotwa", city: "Ryga" },
  { country: "Litwa", city: "Wilno" },
  { country: "Luksemburg", city: "Luksemburg" },
  { country: "Macedonia Północna", city: "Skopje" },
  { country: "Holandia", city: "Amsterdam" },
  { country: "Norwegia", city: "Oslo" },
  { country: "Polska", city: "Warszawa" },
  { country: "Portugalia", city: "Lizbona" },
  { country: "Rosja", city: "Moskwa" },
  { country: "Rumunia", city: "Bukareszt" },
  { country: "Serbia", city: "Belgrad" },
  { country: "Słowacja", city: "Bratysława" },
  { country: "Słowenia", city: "Lublana" },
  { country: "Turcja", city: "Ankara" },
  { country: "Finlandia", city: "Helsinki" },
  { country: "Francja", city: "Paryż" },
  { country: "Chorwacja", city: "Zagrzeb" },
  { country: "Czarnogóra", city: "Podgorica" },
  { country: "Czechy", city: "Praga" },
  { country: "Szwajcaria", city: "Berno" },
  { country: "Szwecja", city: "Sztokholm" },
  { country: "Ukraina", city: "Kijów" },
  { country: "Estonia", city: "Tallinn" },
];

function initializeTable() {
  var tableBody = document
    .getElementById("capitals")
    .getElementsByTagName("tbody")[0];
  capitals.forEach(function (capital) {
    var row = tableBody.insertRow();
    var cellCountry = row.insertCell(0);
    var cellCity = row.insertCell(1);
    cellCountry.innerHTML = capital.country;
    var cityLink = document.createElement("a");
    cityLink.href = "#";
    cityLink.innerHTML = capital.city;
    cityLink.onclick = function () {
      showOnMap(capital.city);
      return false;
    };
    cellCity.appendChild(cityLink);
  });
}

var currentMarker; // Глобальная переменная для хранения текущего маркера

function showOnMap(cityName) {
  fetch(
    `https://nominatim.openstreetmap.org/search?format=json&accept-language=pl&q=${cityName}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        var firstResult = data[0];

        // Проверяем, существует ли текущий маркер и если да, удаляем его
        if (currentMarker) {
          map.removeLayer(currentMarker);
        }

        // Устанавливаем новую позицию на карте и добавляем маркер
        map.setView([firstResult.lat, firstResult.lon], 5);
        currentMarker = L.marker([firstResult.lat, firstResult.lon])
          .addTo(map)
          .bindPopup(firstResult.display_name)
          .openPopup();
      } else {
        alert("Nie znaleziono miasta");
      }
    })
    .catch((error) => console.error("Error:", error));
}

// Вызовите функцию для инициализации таблицы
initializeTable();
