console.clear();


// Kurios skaičių poros dažniausiai pasikartoja
function rastiDažniausiasPoras(eilute) {
    let poros = {};
    
    // Suskaičiuojame skaičių poras ir jas įrašome į objektą
    for (let i = 0; i < eilute.length - 1; i++) {
      let pora = eilute[i] + eilute[i + 1];
      if (poros[pora]) {
        poros[pora]++;
      } else {
        poros[pora] = 1;
      }
    }
    
    // Ieškome, kuri pora pasikartoja dažniausiai
    let daugiausiaPasikartoja = 0;
    let daugiausiaPora = '';
    for (let pora in poros) {
      if (poros[pora] > daugiausiaPasikartoja) {
        daugiausiaPasikartoja = poros[pora];
        daugiausiaPora = pora;
      }
    }

  // Skaičiuojame, kiek kartų pora pasikartojo
  let kartai = daugiausiaPasikartoja;
  
  // Grąžiname rezultatus
  return {
    pora: daugiausiaPora,
    kartai: kartai
  };
}

// Pavyzdys
const input = '1412860954146203553423042674111715805790287170813114714030663627932475264878661154745381534230756372512485689798228383248889782534330268806397909763169302336';
let rezultatas = rastiDažniausiasPoras(input);
console.log('Daugiausia pasikartoja pora:', rezultatas.pora);
console.log('Kartai:', rezultatas.kartai);