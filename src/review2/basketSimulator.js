const macOzeti = (evSahibiTakim, deplasmanTakimi, periyotSayisi) => {
    const macMetni = [];
    let evSahibiPuan = 0;
    let deplasmanPuan = 0;
  
    for (let i = 0; i < periyotSayisi; i++) {
      const evSahibiPeriyot = randomNumber();
      const deplasmanPeriyot = randomNumber();
  
      evSahibiPuan += evSahibiPeriyot;
      deplasmanPuan += deplasmanPeriyot;
  
      macMetni.push(
        `${
          i + 1
        }. Periyot: ${evSahibiTakim} ${evSahibiPuan} - ${deplasmanTakimi} ${deplasmanPuan}`
      );
    }
  
    let sonuc;
    if (evSahibiPuan > deplasmanPuan) {
      sonuc = `Maç Sonucu: ${evSahibiTakim} ${evSahibiPuan} - ${deplasmanPuan} kazandı`;
    } else if (deplasmanPuan > evSahibiPuan) {
      sonuc = `Maç Sonucu: ${evSahibiTakim} ${evSahibiPuan} - ${deplasmanPuan} kaybetti`;
    } else {
      sonuc = `Maç ${evSahibiPuan} - ${deplasmanPuan} ile uzatmalara gitti`;
    }
    macMetni.push(sonuc);
  
    return macMetni;
};
  
function randomNumber() {
  return Math.floor(Math.random() * (26 - 12 + 1)) + 12;
}
  
const result = macOzeti("Real Madrid", "Barcelona", 4);
console.log("🚀 ~ result:", result)

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = macOzeti;
  