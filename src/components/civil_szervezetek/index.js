import { h, Component } from 'preact';
import { Link } from 'preact-router';

const page_body = `
<h3>Gersekaráti Bükkhegyért Egyesület</h3>

<p>Az egyesület 2009-ben alakult, célja Gersekarát közigazgatási területéhez tartozó Bükkhegy, és a hozzá történetileg, földrajzilag, néprajzilag tartozó terület értékeinek átmentése, az itt élők szemléletének alakítása. Hagyományőrzés és Gersekarát kulturális-, közösségi életének fejlesztése. A szőlőhegyi kultúra felélesztése, a minőségi bortermelés ösztönzése és segítése a Gersekaráti Bükkhegy térségére vonatkozóan. Az egyesület tevékenységei: a falu és a szőlőhegy néprajzi, építészeti, természeti értékeinek felkutatása, dokumentálása, bemutatása; a gersekaráti Bükkhegy területéhez tartozó szőlőhegy műemléki értékű présházainak, a haranglábnak és a kereszteknek a megmentése; a hagyományos szőlőhegyi környezet visszaállítása, megóvása.</p>

<p><strong>Vezetőségi és Bizottsági tagok:</strong><br>
Elnök: Boros István<br>
Alelnök: Bakler János<br>
Titkár: Vaspöri Gyula<br>
Gazdasági felelős: Lakat Csaba</p>

<p><strong>Elérhetőségek:</strong><br>
Székhely: 9813 Gersekarát, Honvéd u. 2.<br>
Levelezési cím: 9813 Gersekarát, Petőfi u. 10.<br>
Mobil: +36-30/491 0570</p>

<h3>Gersekaráti Iskola Tanulóiért Alapítvány</h3>

<p>A 2001-ben létrejött alapítvány célja az iskolai nevelés-oktatás hatékonyság növelésének segítése, ösztönzés az eredményességre, a sokszínűségre, a pedagógiai munka tartalmi fejlesztésére; az oktatás tárgyi, technikai feltételeinek javítása; az iskolai szabadidős programok támogatása - hozzájárulás osztálykirándulások, táborozások, szabadidős rendezvények költségeihez; tanulmányi, sport- és kulturális versenyek, vetélkedők, pályázatok lebonyolítása - nevezési díjak kifizetése, helyezettek jutalmazása, szervezési költségek átvállalása; az idegen nyelv tanításának, tanulásának elősegítése; a nehéz körülmények között élő, jól tanuló diákok segítése.</p>

<p><strong>A kuratórium tagjai:</strong><br>
Elnök: Bata László<br>
Gazdasági felelős: Borosné Tuboly Tímea<br>
Tagok: Elekesné Németh Mónika, Ferenczné Györe Krisztina, Ujjné Kálmán Valéria</p>

<p><strong>Elérhetőségek:</strong><br>
Székhelye: 9813 Gersekarát, Honvéd u. 16.<br>
Tel: +36-94/ 373-011</p>

<h3>Gersekaráti Kötélugró Diák Sportegyesület</h3>

<p>A Kötélugró Diák Sportegyesület 2002. február 15-én alakult. Az egyesület tömöríti mindazokat, akik készek önzetlenül tevékenykedni a kötélugrás, - mint sport és mint hasznos és kellemes szabadidő eltöltési lehetőség népszerűsítésében és fejlesztésében. A Sportegyesület célja a rendszeres sportolás, testedzés, szabadidő hasznos eltöltésének biztosítása, ezek iránti igény felkeltése és a közösségi élet kibontakoztatása. A tagság sportérdekeinek képviselete, kedvező sportolási, versenyzési lehetőségek biztosítása. A Sportegyesület lehetőséget teremt a település gyermek és fiatalkorú lakosságának testedzésére és sportolására is. Foglalkozásaik heti rendszerességgel vannak. Több versenyen vettek részt, melyeken sikeresen szerepeltek. A kötélugró csoport népszerűségét jelzi a számos fellépési meghívás, előadásukkal több kistérségi és megyei rendezvény programját színesítették.</p>

<p><strong>Elnökségi és Bizottsági tagok:</strong><br>
Elnök: Pintérné Nagy Éva<br>
Alelnök: Ságiné Osvald Katalin<br>
Gazdasági felelős: Ferencz Lászlóné</p>

<p><strong>Elérhetőségek:</strong><br>
Cím: 9813 Gersekarát, Honvéd u. 2.<br>
Mobil: +36-30/577-2381<br>
Weblap: <a target='_blank'  href="http://www.gerkoetugr.extra.hu">www.gerkoetugr.extra.hu</a> <br>
E-mail: <a target='_blank'  href="mailto:gersekotel@freemail.hu">gersekotel@freemail.hu</a></p>

<h3>Örökségünkért Egyesület</h3>

<p>A 2008-ban alakult közhasznú egyesület célja az épített, természeti és kulturális örökség megőrzése; kulturális rendezvények, programok szervezése; kiadványok készítése, megjelentetése; helytörténeti gyűjtő munka; szabadidős tevékenységek; ismeretterjesztés; karitatív tevékenység; környezetvédelmi tevékenység, mely elsősorban az egyházi ingatlanok, valamint a szakrális emlékek és környezetük revitalizációja révén a gazdasági és társadalmi visszaesést, valamint a település turisztikai értékeinek vonzóvá tételét eredményezi; település fejlesztő tevékenység, melynek keretén belül az üresen álló Plébánia többcélú - kereskedelmi, vendéglátói, foglalkoztatási célú - hasznosítása.</p>

<p>Céljai elérése érdekében az alábbi közhasznú tevékenységeket végzi:</p>

<ul>
<li>Kulturális tevékenység a muzeális intézményekről, a nyilvános könyvtári ellátásról, a közművelődésről szóló 1997. évi XCL. törvény alapján: az épített és természeti kulturális örökség megőrzése; a település művészeti hagyományainak kutatása, megőrzése; kulturális rendezvények, programok, közösségi művelődési alkalmak szervezése, megtartása; kiadványok megjelentetése; amatőr alkotó-műkedvelő közösségek, csoportok tevékenységének támogatása; szakrális és helytörténeti múlttal összefüggő gyűjtőmunkák végzése; a hitélet gyakorlásával összefüggő programok, kirándulások, tábori istentisztelethez kötődő agapék (karátföldi búcsú), jótékonysági bálok szervezése.</li>
<li>Oktatási tevékenység a közoktatásról szóló 1993. évi LXXIX. törvény alapján: ismeretterjesztés.</li>
<li>Szociális tevékenység a szociális igazgatásról szóló 1993. évi III. törvény alapján: mozgáskorlátozottak segítése az istentiszteletekre való eljuttatása; idős, beteg emberek látogatása; karitatív tevékenység (gyűjtés, adományozás); hátrányos helyzetű gyermekek, fiatalok nyári táboroztatása; jogi és lelki segélynyújtás.</li>
<li>Környezetvédelmi tevékenység az épített környezet alakításáról és védelméről szóló 1997. évi LXXVIII. törvény alapján: a műemléki és a helyi védelem alatt álló templom és szakrális építmények védelme; a temetői „vezérkeresztek” felújítása, illetve eredeti állapotba való visszaállítása. A Római Katolikus Egyházközség tulajdonában álló egyházi és magántulajdonban lévő ingatlanok környékének parkosítása, folyamatos gondozása, csapadékvíz elvezetése, környezetbarát anyagokkal való állagmegóvás, hulladékkezelés; környezetbarát, takarékos fűtési megoldások kiépítése, alkalmazása; fa (gyümölcs, haszon) telepítés.</li>
<li>Műemlékvédelmi tevékenység az egyházközség tulajdonában álló ingatlanok és tárgyi eszközök karbantartása, felújítása; új építés. Az épületekhez, építményekhez tartozó zöldfelületeken témautak, sátorozási hely kiépítése, illetve kialakítása. A meglévő Plébánia épület kereskedelmi, vendéglátói és szálláshely tevékenységekre való alkalmassá tétele. Tárolási, raktározási feltételek kialakítása, útcsatlakozás biztosítása.</li>
<li>A munkaerőpiacon hátrányos helyzetűek, elsősorban a munkanélküliek segítése a munkavállalásban.</li>
</ul>

<p>Az egyesület céljainak megvalósítása érdekében együttműködik a helyi önkormányzattal, a közoktatási intézményekkel, társadalmi szervezetekkel, a helyi vállalkozókkal, cégekkel, a Római Katolikus Egyházhoz tartozó csoportokkal, Egyházközségekkel, a Falvak Kultúrájáért Alapítvánnyal. Az egyesület közhasznú szolgáltatásaiból tagjain kívül más is részesülhet. Szolgáltatásait, célkitűzéseihez kapcsolódó rendezvényeit, programjait nyitottá teszi az egyesület tagjain kívül mindazok számára, akik azokat igénybe kívánják venni.</p>

<p><strong>Vezetőségi tagok:</strong><br>
Elnök: Hári Antalné dr.<br>
Elnök helyettes: Márton József<br>
Tagok: Berzai Gyöngyi, Hábetlerné Németh Anita, Szabó György<br>
Felügyelő Bizottság elnöke: Buda Gábor</p>

<p><strong>Elérhetőségek:</strong><br>
Cím: 9813 Gersekarát, Béke u. 55.<br>
E-mail: <a target='_blank'  href="mailto:bebihari@freemail.hu">bebihari@freemail.hu</a>, <a target='_blank'  href="mailto:nemethanita73@t-online.hu">nemethanita73@t-online.hu</a></p>

<h3>Polgárőr Egyesület</h3>

<p>A 2002. december 7-én megalakult Polgárőrség 52 taggal működik. Vállalt feladata a község közrendjének, közbiztonságának őrzése és környezetének védelme, a helyi rendezvények biztosítása. Gersekarát 2003-ban megkapta a Vas Megyei Önkormányzat Közgyűlésétől a „Vas Megye Biztonságos Települése” címet.</p>

<p><strong>Vezetőségi tagok:</strong><br>
Elnök: Buda Gábor<br>
Alelnök: Pintér György<br>
Titkár: Ferencz László<br>
Gazdasági ügyekért felelős: Ferencz Lászlóné</p>

<p><strong>Elérhetőségek:</strong><br>
Cím: 9813 Gersekarát, Honvéd u. 2.<br>
Tel: +36-94/574–032<br>
Fax: +36-94/574-033<br>
Mobil: +36-70/701-7054</p>

<h3>Sárvíz-Tavi Horgászegyesület</h3>

<p>A Sárvíz-Tavi Horgászegyesület 1993. március 6-án alakult. Az egyesület célja a horgászsport fejlesztése, népszerűsítése; a tagság horgászérdekeinek képviselete, kedvező horgászati lehetőségek biztosítása; a horgászerkölcs szabályainak tiszteletben tartása, a természet szeretetére és védelmére való nevelés. Az egyesület tagja a Sporthorgász Egyesületek Vas Megyei Szövetségének, mely a gersekaráti önkormányzattól horgászati tevékenység céljára bérli a 36,3 hektár területű Sárvíz-tavat. A tavon a horgászat feltételeinek megteremtésében nagyban közreműködnek a Sárvíz-Tavi Horgászegyesület tagjai. Az egyesületnek jelenleg 52 fő tagja van. A településen lehetőség van a helyi ÁFÉSZ boltokban, a KARÁT ABC-ben és a tóparton a halőröknél belföldi és külföldi napi, heti felnőtt, ifjúsági és gyermek területi jegyek váltására. A gersekaráti Teleházban pedig éves területi jegy, állami jegy kiváltására, valamint tagság létesítésére van lehetőség.</p>

<p><strong>Vezetőségi tagok:</strong><br>
Elnök: Boros Zoltán</p>

<p><strong>Elérhetőségek:</strong><br>
Cím: 9813 Gersekarát, Dózsa György u. 151.<br>
Levelezési cím: 9795 Vaskeresztes, 165/4 hrsz.<br>
Tel: +36-94/506-835<br>
Mobil: +36-20/397-7333<br>
E-mail: <a target='_blank'  href="mailto:zoltan.boros@gerencser.hu">zoltan.boros@gerencser.hu</a></p>

<h3>Sportegyesület</h3>

<p>A település legrégebbi civil szervezete 1991-ben alakult. A sportegyesület célja a rendszeres sportolás, testedzés, felüdülés biztosítása, igények felkeltése, tagjainak nevelése; a település futballt szerető sportolóinak és támogatóinak összefogása. A sportegyesület gondoskodik a rendszeres testedzés és sportolás feltételeinek megteremtéséről, működési területén elősegíti az oktatási intézmények tanulóinak, továbbá a lakosság testnevelési- és sporttevékenységét. Céljai megvalósításának érdekében sportrendezvényeket, közösségi megmozdulásokat szervez; állandó kapcsolatot tart a helyi önkormányzattal és ifjúsági szervezetekkel. A sportegyesület jogszabályokban meghatározott keretek között nemzetközi tevékenységet folytat.</p>

<p><strong>Vezetőségi tagok:</strong><br>
Elnök: Szabó Tamás</p>

<p><strong>Elérhetőségek:</strong><br>
Mobil: +36-30/432 3230<br>
E-mail: <a target='_blank'  href="mailto:geotitox@gmail.com">geotitox@gmail.com</a></p>

<h3>Üstökös Gyermek és Ifjúsági Egyesület</h3>

<p>Az egyesület célja, az ifjúság segítése, érdekeinek képviselete a helyi, a kistérségi, a megyei, a regionális, az országos állami, társadalmi és gazdasági szervek előtt. Célja továbbá: ismeretterjesztő foglalkozások, túrák, kirándulások, táborok szervezése és lebonyolítása; a népi hagyományok ápolása és népszerűsítése; ismeretterjesztő foglakozások és bemutatók tartása, közösségépítés és közösségfejlesztés; különböző ifjúsági programok bonyolítása.</p>

<p><strong>Vezetőségi és Bizottsági tagok:</strong><br>
Elnök: Bata László<br>
Alelnök: Sály Gyula<br>
Titkár: Domjánné Szőke Marietta<br>
Gazdasági felelős: Dervalicsné Kalmár Ágota</p>

<p><strong>Elérhetőségek:</strong><br>
Székhely: 9813 Gersekarát, Honvéd u. 2.<br>
Levelezési cím: 9919 Csákánydoroszló, Telek u. 20.<br>
Mobil: +36-70/774-9519<br>
Weblap: <a target='_blank'  href="http://www.ugyiegyesulet.hu">www.ugyiegyesulet.hu</a><br>
E-mail: <a target='_blank'  href="mailto:ugyiegyesulet@postafiok.hu">ugyiegyesulet@postafiok.hu</a>; <a target='_blank'  href="mailto:batalaci@gmail.com">batalaci@gmail.com</a></p>

<h3>Gersekaráti Gyermek és Ifjúsági Önkormányzat</h3>

<p>A Gersekaráti Gyermek és Ifjúsági Önkormányzat (GGYIÖ) 2003. május 2-án alakult, célja a település fiataljainak összefogása. Támogatja a fiatalok által kezdeményezett terveket, biztosítja, hogy azokat a gyermekek és fiatalok önmaguk szervezhessék meg. A GGYIÖ 6 képviselőből és egy polgármesterből áll, akiket a falu 11 és 26 év közötti fiataljai választanak meg maguk közül, demokratikus és titkos választás útján. A mostani testület már a negyedik a sorban. Tagjai 17-21 évesek, akiket a 2010. február 27-i választáson összesen 11 jelölt közül választottak meg. Munkájukat egy felnőtt segítő segíti. A GGYIÖ minden hónap utolsó szombatján tartja gyűléseit a Művelődési Házban lévő Ifjúsági Klubban.</p>

<p>Feladatai:</p>

<ul>
<li>a falu ifjúságának összefogása és közösséggé szervezése</li>
<li>a 11-26 év közötti ifjúság érdekeinek védelme és képviselete</li>
<li>a demokrácia szabályainak a megismerése</li>
<li>a falu fejlesztése, szépítése, hagyományainak ápolása, kulturális, sport és szabadidős programok szervezése</li>
<li>az egészséges életmódra való ösztönzés</li>
<li>a felnőtt életre való felkészítés</li>
</ul>

<p><strong>Polgármester:</strong><br>
Szabó Renáta</p>

<p><strong>Képviselő testületi tagok:</strong><br>
Ferencz Ramóna<br>
Mozsár Attila<br>
Németh Patrícia<br>
Szabó Szandra<br>
Takács Dominik</p>

<p><strong>Elérhetőségek:</strong><br>
Cím: 9813 Gersekarát, Honvéd u. 2.<br>
Tel: +36-94/574-032<br>
Fax: +36-94/574-033<br>
Web: <a target='_blank'  href="https://www.facebook.com/gersekarati.gyio?fref=ts">Gersekaráti GYIÖ</a></p>

`

export default class CivilSzervezetek extends Component {
  render() {
    return (
      <div>
        <div className="bg-white mt3 p3 bshadow-md">
          <Link
            className="text-decoration-none pr2 bold center h2"
            href="/gbk"
          >Gersekarátert Baráti Kör</Link>
          <div
            className="h3"
            dangerouslySetInnerHTML={{__html: page_body}}
          />
        </div>
      </div>
    );
  }
}

