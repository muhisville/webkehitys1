// Pusketaan SweetAlert2-alert
  Swal.fire('Tämä on SweetAlert2-alert!');

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