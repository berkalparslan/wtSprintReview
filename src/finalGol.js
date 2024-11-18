const { fifaData } = require('../data/fifa');

const finallerdekiGolSayilari = (fifaData) => {
  golSayilari = {};
  const finalMaclar = fifaData.filter((mac) => mac.Stage === 'Final');
  finalMaclar.forEach((mac) => {
    const homeTeam = mac['Home Team Name'];
    const awayTeam = mac['Away Team Name'];
    console.log("🚀 ~ finalMaclar.forEach ~ awayTeam:", awayTeam)
    const homeGoals = mac['Home Team Goals'];
    const awayGoals = mac['Away Team Goals'];
    console.log("🚀 ~ finalMaclar.forEach ~ awayGoals:", awayGoals)

    if (golSayilari[homeTeam] !== undefined) {
      golSayilari[homeTeam] += homeGoals;
    } else {
      golSayilari[homeTeam] = homeGoals;
    }
    if (golSayilari[awayTeam] !== undefined) {
      golSayilari[awayTeam] += awayGoals;
    } else {
      golSayilari[awayTeam] = awayGoals;
    }
  });

  return golSayilari; 
};

const result = finallerdekiGolSayilari(fifaData);
console.log("🚀 ~ result:", result)
