var map = L.map("map").setView([52.237049, 21.017532], 3);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var capitals = [
  {
    countryPL: "Austria",
    countryRU: "Австрия",
    cityPL: "Wiedeń",
    cityRU: "Вена",
  },
  {
    countryPL: "Albania",
    countryRU: "Албания",
    cityPL: "Tirana",
    cityRU: "Тирана",
  },
  {
    countryPL: "Belgia",
    countryRU: "Бельгия",
    cityPL: "Bruksela",
    cityRU: "Брюссель",
  },
  {
    countryPL: "Białoruś",
    countryRU: "Беларусь",
    cityPL: "Mińsk",
    cityRU: "Минск",
  },
  {
    countryPL: "Bułgaria",
    countryRU: "Болгария",
    cityPL: "Sofia",
    cityRU: "София",
  },
  {
    countryPL: "Wielka Brytania",
    countryRU: "Великобритания",
    cityPL: "Londyn",
    cityRU: "Лондон",
  },
  {
    countryPL: "Węgry",
    countryRU: "Венгрия",
    cityPL: "Budapeszt",
    cityRU: "Будапешт",
  },
  {
    countryPL: "Niemcy",
    countryRU: "Германия",
    cityPL: "Berlin",
    cityRU: "Берлин",
  },
  {
    countryPL: "Grecja",
    countryRU: "Греция",
    cityPL: "Ateny",
    cityRU: "Афины",
  },
  {
    countryPL: "Dania",
    countryRU: "Дания",
    cityPL: "Kopenhaga",
    cityRU: "Копенгаген",
  },
  {
    countryPL: "Irlandia",
    countryRU: "Ирландия",
    cityPL: "Dublin",
    cityRU: "Дублин",
  },
  {
    countryPL: "Hiszpania",
    countryRU: "Испания",
    cityPL: "Madryt",
    cityRU: "Мадрид",
  },
  { countryPL: "Włochy", countryRU: "Италия", cityPL: "Rzym", cityRU: "Рим" },
  {
    countryPL: "Cypr",
    countryRU: "Кипр",
    cityPL: "Nikozja",
    cityRU: "Никосия",
  },
  { countryPL: "Łotwa", countryRU: "Латвия", cityPL: "Ryga", cityRU: "Рига" },
  {
    countryPL: "Litwa",
    countryRU: "Литва",
    cityPL: "Wilno",
    cityRU: "Вильнюс",
  },
  {
    countryPL: "Luksemburg",
    countryRU: "Люксембург",
    cityPL: "Luksemburg",
    cityRU: "Люксембург",
  },
  {
    countryPL: "Macedonia Północna",
    countryRU: "Северная Македония",
    cityPL: "Skopje",
    cityRU: "Скопье",
  },
  {
    countryPL: "Holandia",
    countryRU: "Нидерланды",
    cityPL: "Amsterdam",
    cityRU: "Амстердам",
  },
  {
    countryPL: "Norwegia",
    countryRU: "Норвегия",
    cityPL: "Oslo",
    cityRU: "Осло",
  },
  {
    countryPL: "Polska",
    countryRU: "Польша",
    cityPL: "Warszawa",
    cityRU: "Варшава",
  },
  {
    countryPL: "Portugalia",
    countryRU: "Португалия",
    cityPL: "Lizbona",
    cityRU: "Лиссабон",
  },
  {
    countryPL: "Rosja",
    countryRU: "Россия",
    cityPL: "Moskwa",
    cityRU: "Москва",
  },
  {
    countryPL: "Rumunia",
    countryRU: "Румыния",
    cityPL: "Bukareszt",
    cityRU: "Бухарест",
  },
  {
    countryPL: "Serbia",
    countryRU: "Сербия",
    cityPL: "Belgrad",
    cityRU: "Белград",
  },
  {
    countryPL: "Słowacja",
    countryRU: "Словакия",
    cityPL: "Bratysława",
    cityRU: "Братислава",
  },
  {
    countryPL: "Słowenia",
    countryRU: "Словения",
    cityPL: "Lublana",
    cityRU: "Любляна",
  },
  {
    countryPL: "Turcja",
    countryRU: "Турция",
    cityPL: "Ankara",
    cityRU: "Анкара",
  },
  {
    countryPL: "Finlandia",
    countryRU: "Финляндия",
    cityPL: "Helsinki",
    cityRU: "Хельсинки",
  },
  {
    countryPL: "Francja",
    countryRU: "Франция",
    cityPL: "Paryż",
    cityRU: "Париж",
  },
  {
    countryPL: "Chorwacja",
    countryRU: "Хорватия",
    cityPL: "Zagrzeb",
    cityRU: "Загреб",
  },
  {
    countryPL: "Czarnogóra",
    countryRU: "Черногория",
    cityPL: "Podgorica",
    cityRU: "Подгорица",
  },
  { countryPL: "Czechy", countryRU: "Чехия", cityPL: "Praga", cityRU: "Прага" },
  {
    countryPL: "Szwajcaria",
    countryRU: "Швейцария",
    cityPL: "Berno",
    cityRU: "Берн",
  },
  {
    countryPL: "Szwecja",
    countryRU: "Швеция",
    cityPL: "Sztokholm",
    cityRU: "Стокгольм",
  },
  {
    countryPL: "Ukraina",
    countryRU: "Украина",
    cityPL: "Kijów",
    cityRU: "Киев",
  },
  {
    countryPL: "Estonia",
    countryRU: "Эстония",
    cityPL: "Tallinn",
    cityRU: "Таллин",
  },
];

document.querySelectorAll('input[name="language"]').forEach((input) => {
  input.addEventListener("change", () => {
    language = input.id === "langPl" ? "pl" : "ru";
    initializeTable();
  });
});

var language = "pl"; // Глобальная переменная для хранения текущего маркера

function initializeTable() {
  var tableBody = document
    .getElementById("capitals")
    .getElementsByTagName("tbody")[0];
  tableBody.innerHTML = "";
  capitals.forEach(function (capital) {
    var row = tableBody.insertRow();
    var cellCountry = row.insertCell(0);
    var cellCity = row.insertCell(1);
    cellCountry.innerHTML =
      language === "pl" ? capital.countryPL : capital.countryRU;
    var cityLink = document.createElement("a");
    cityLink.href = "#";
    cityLink.innerHTML = language === "pl" ? capital.cityPL : capital.cityRU;
    cityLink.onclick = function () {
      showOnMap(language === "pl" ? capital.cityPL : capital.cityRU);
      return false;
    };
    cellCity.appendChild(cityLink);
  });
}

var currentMarker; // Глобальная переменная для хранения текущего маркера

function showOnMap(cityName) {
  console.log();
  fetch(
    `https://nominatim.openstreetmap.org/search?format=json&accept-language=${language}&q=${cityName}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        var firstResult = data[0];

        // Проверяем, существует ли текущий маркер и если да, удаляем его
        if (currentMarker) {
          map.removeLayer(currentMarker);
        }

        // Устанавливаем новую позицию на карте и добавляем маркер = э
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

document.addEventListener("DOMContentLoaded", initializeTable);
