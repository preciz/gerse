import { h, Component } from 'preact';
import Palyazat from './palyazat';

const gbk_palyazatok = [
	{
    title: 'Itthonról haza - Szervezetfejlesztéssel és pályaorientációval a Gersekaráti fiatalokért!',
		code: 'NEA-TF-16-M-0461',
    date: '2017.02.27',
    description: `
Szervezetfejlesztés és pályaorientáció a Gersekaráti fiatalokért

A Gersekarátért Baráti Kör a Nemzeti Együttműködési Alap Társadalmi Felelősségvállalás kollégiuma
által támogatott „Itthonról haza!” elnevezésű projektje keretében számos hasznos és értéknövelő
tevékenységet tudott megvalósítani az elmúlt közel egy évben.
Mint ismertes, az elvándorlás kiemelkedő probléma hazánk kistelepüléseinek életében. Gersekarát
700 fő körüli település, lakossága, ha nem is nagymértékben, de folyamatosan csökken. Az egyesület
fontosnak tartja, hogy hozzájáruljon a tendencia megállításához. A folyamat elleni tevékenységet
nagyban segítették az egyesület által szervezett szakmai találkozók, a helyi általános iskolásokkal és a
fiatal gazdálkodókkal, valamint vállalkozókkal szervezett közös beszélgetések. Mindehhez szükséges
volt, hogy a szervezet segítői megfelelő kompetenciákkal rendelkezzenek a fiatalok megszólítása és
helyes irányba „terelése” érdekében, ezt szolgálta a részükre szervezett képzés sorozat. Továbbá
nagymértékben növelte a szervezet ez ügyben kifejtett munkájának eredményességét a tárgyi
feltételek a javulása is.

Nagyon fontos az egyesület számára, hogy az általános iskolába járó mostani hetedik és nyolcadik
osztályos tanulók a pályaválasztást olyan irányba kezdjék, amely a település és térsége jövőképébe is
beleillik. Csak így érhető el, hogy a fiatalok közül többen majd ide jöjjenek vissza. A projekt keretében
igyekeztünk felhívni a gyermekek figyelmét a vidékfejlesztés szempontjából példaértékű alkotókra,
itteni gazdálkodókra.

Úgy gondoljuk, hogy ha látják azt, hogy becsületes munkával, befektetett energiával egy szakma
eredményesen, becsületesen, megfelelő lehetőségeket ígérően űzhető Gersekaráton, úgy kialakul
bennük az itteni pozitív jövőkép.

A projekt keretében lehetőség nyílt egy a települést és az egyesületet bemutató kiadvány
összeállítására, valamint a szervezet részére honlap kialakítására is. Hisszük, ha a diákok aktívan
közreműködnek a település értékeiről és az ő helyi példaképeikről szóló rövidfilm készítésében,
természetesen szakmai segítséggel, úgy az eddigieknél jobban átérzik majd azt, hogy Gersekarát
számukra egy hosszú távú lehetőség, nem pedig csupán egy hely, amelyre a messzi távolból, majd
egy-két térséggel, netalántán országgal odébb emlékeznek majd. Ezért éreztük azt, hogy a szülők, az
iskola és a civil egyesületünk még szorosabb összefogására van szükség. Mi teret, lehetőséget és
eszközöket kínáltunk a pályázat segítségével, hogy a diákok ötleteit kivitelezhessék.

Ferencz Lászlóné

projektkoordinátor
    `,
		documents: [
		//{
		//	title: "my document title",
		//	url: "http://example.com/file.zip",
		//},
		//{
		//	title: "my document title",
		//	url: "http://example.com/file.zip",
		//},
		],
		pictures: [
      'http://i.imgur.com/VzMPCwt.jpg',
      'http://i.imgur.com/MfYTcNB.jpg',
      'http://i.imgur.com/v0x5hv9.jpg',
      'http://i.imgur.com/lRULIuK.jpg',
		],
	},
];

export default class Palyazatok extends Component {
  render() {
    return (
      <div>
        {
          gbk_palyazatok.map((palyazat) =>
            <Palyazat
              palyazat={palyazat}
            />
          )
        }
      </div>
    );
  }
}

