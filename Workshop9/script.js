const apiKey = "ff64c247a136f706923d1ee0d55d71e2"; // <-- Lisää oma API-avain tähän
let tempChart = null; // globaali kaavioviite
let chartData = {}; // tallennetaan data ja labels uudelleenkäyttöä varten
let City = "Helsinki";

async function haeSaa() {
  city = document.getElementById("kaupunki").value;
  let url = ` https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=fi&appid=${apiKey}`;
  try {
    const response = await axios.get(url);
    const data = response.data.list;
    console.log(data);
    // Poimitaan joka 3. tunti mitattu lämpötila ja aika
    const labels = data.slice(0, 12).map((item) => {
      const aika = new Date(item.dt_txt);
      return `${aika.getDate()}.${aika.getHours()}:00`;
    });

    const temperatures = data.slice(0, 12).map((item) => item.main.temp);
    chartData = { labels, temperatures }; // tallennetaan uudelleenkäyttöä varten
    console.log(temperatures);
    piirraKaavio(labels, temperatures, city, "line");
  } catch (error) {
    console.error("Virhe datan haussa:", error);
    alert(
      "Säädatan hakeminen epäonnistui. Tarkista kaupungin nimi tai API-avain."
    );
  }
}

// Ladataan heti alkuun Helsingin sää
haeSaa();
function piirraKaavio(labels, data, city, type) {
  const ctx = document.getElementById("tempChart").getContext("2d");

  // Jos vanha kaavio on olemassa, tuhotaan se ensin
  if (window.tempChart && typeof window.tempChart.destroy === "function") {
    window.tempChart.destroy();
  }

  // Luodaan uusi kaavio
  window.tempChart = new Chart(ctx, {
    type: type,
    data: {
      labels: labels,
      datasets: [
        {
          label: `Lämpötila (${city}) °C`,
          data: data,
          borderWidth: 2,
          borderColor: "rgb(75, 192, 192)",
          fill: false,
          tension: 0.3,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    },
  });
}

function paivitaKaavio() {
  // Haetaan valittu kaavion tyyppi select-elementistä
  let type = document.getElementById("chartType").value;
  console.log(type);
  // Tarkistetaan, että meillä on aiemmin haettua dataa
  // Piirretään kaavio uudelleen valitulla tyypillä
  piirraKaavio(chartData.labels, chartData.temperatures, city, type);
}

// Valitsee bafflattavan elementin
  const b = baffle('.scramble');
// Määrittää efektin ulkoasun
  b.set({
    characters: '█▓▒░<>/',
    speed: 80
  });
//Aloituskomento
  b.start();
//Määrittää ajan, jonka jälkeen oikea teksti paljastuu
  b.reveal(2000); // paljastaa tekstin 2 sekunnissa


// Vanta-bannerin asetukset
  VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 500.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x00ffff,
    backgroundColor: 0x111111
  });

  const Swal = require('sweetalert2')

Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})

Swal.fire("SweetAlert2 is working!");
