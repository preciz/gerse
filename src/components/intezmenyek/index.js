import { h, Component } from 'preact';

export default class Intezmenyek extends Component {
  render() {
    return (
      <div className="col-12">
        <div className="bg-white mt3 p3 bshadow-md">
          <div className="h3">
            <div class="page-text ng-binding" ng-bind-html="page.body"><h3>Oktatási és kulturális intézmények</h3>

              <p><strong>Általános Iskola</strong><br/>
                Igazgató: Dr. Dománé Andocsi Valéria<br/>
                Cím: Gersekarát, Honvéd u. 16.<br/>
                Tel: +36-94/373-011<br/>
                E-mail: <a target="_blank" href="mailto:iskolagersekarat@gmail.com">iskolagersekarat@gmail.com</a></p>

              <p><strong>Telekesi Óvoda és Gersekaráti Tagóvodája</strong></p>

              <p>Óvodavezető: Ódor Lászlóné<br/>
                Cím: Telekes, Fő u. 26.<br/>
                Tel.: +36-94/713-906</p>

              <p>Tagóvodavezető: Márton Lászlóné<br/>
                Cím: Gersekarát, Dózsa György u. 97.<br/>
                Tel: +36-94/373-289</p>

              <p>Dokumentumok:</p>

              <ul>
                <li><a target="_blank" href="https://drive.google.com/file/d/0B7EPicf9wHAFV1pMcTR4aWFqZFE/view?usp=sharing">Házirend</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/0B7EPicf9wHAFZ3RVSkFUemdzQ1U/view?usp=sharing">Közzétételi lista</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/0B7EPicf9wHAFeFdoYk44bGNYRGs/view?usp=sharing">Pedagógiai Program</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/0B7EPicf9wHAFeGxUNmQwaDJ4OEk/view?usp=sharing">SzMSz</a></li>
              </ul>

              <p><strong>Művelődési Ház és Könyvtár</strong><br/>
                Népművelő: Ferencz Lászlóné<br/>
                Könyvtáros: Horváth Árpádné<br/>
                Cím: Gersekarát, Honvéd u. 2.<br/>
                Tel: +36-94/574-032<br/>
                Fax: +36-94/574–033<br/>
                E-mail: <a target="_blank" href="mailto:gmuvhaz@freemail.hu">gmuvhaz@freemail.hu</a></p>

              <p><strong>Nyitvatartások</strong></p>

              <ul>
                <li><p>Művelődési Ház:<br/>
                    Hétfő: ZÁRVA<br/>
                    Kedd - Péntek: 10:00 - 18:30<br/>
                    Szombat: 13:00 - 21:00<br/>
                    Vasárnap: ZÁRVA</p></li>
                <li><p>Könyvtár:<br/>
                    Kedd: 15.00 - 18.00<br/>
                    Péntek: 16.00 - 20.00</p></li>
                <li><p>Teleház és eMagyarország Pont:<br/>
                    ID száma: 6578<br/>
                    <a target="_blank" href="https://drive.google.com/file/d/0B7EPicf9wHAFSHVaNjhfZEp5bHM/view?usp=sharing">Tájékoztató szórólap</a><br/>
                    Hétfő - Péntek 10:00 - 18:30<br/>
                    Szombat - Vasárnap: igény szerint</p></li>
              </ul>

              <p>Szolgáltatások:<br/>
                – Internet-használat<br/>
                – Számítógép-használat<br/>
                – Fénymásolás<br/>
      – Nyomtatás<br/>
      – Faxküldés, fogadás<br/>
      – Multimédiás eszközök használata<br/>
      – Általános információ szolgáltatás<br/>
      – FIP - Foglalkozási Információs Pont - foglalkozási és munkaerő piaci információ szolgáltatás<br/>
      – Névjegykártya készítés<br/>
      – Kiadványszerkesztés<br/>
      – Elektronikus ügyintézés<br/>
      – Pályázati tanácsadás<br/>
      – Civil szervezetek számára tanácsadás</p>

      <ul>
        <li><p>Ifjúsági Klub és Információs Pont:<br/>
            Hétfő: ZÁRVA<br/>
            Kedd - Péntek: 14:00 - 18:00<br/>
            Szombat - Vasárnap: igény szerint</p></li>
        <li><p>IKSZT (Integrált Közösségi és Szolgáltató Tér):</p></li>
      </ul>

      <p>Hétfő-Csütörtök: 10:00 - 18:30<br/>
      Péntek: 10:00 - 21:00<br/>
      Szombat: 9:00 - 22:00<br/>
      Vasárnap: 14:00 - 20:00</p>

      <p>Szolgáltatások:</p>

      <p>– Közművelődési programok szervezése<br/>
      – Könyvtári és információs szolgáltatások biztosítása<br/>
      – Ifjúsági közösségi programok szervezése, ifjúságfejlesztési folyamatok generálása és folyamatkövetése<br/>
      – Ifjúsági információs pont működtetése<br/>
      – Lakosság, vállalkozások információhoz való hozzájutás elősegítése<br/>
      – Közösségi internet hozzáférés biztosítása az IKSZT-ben működő eMagyarország ponton <br/>
      – Helyszín és feltételek biztosítása a Magyar Nemzeti Vidéki Hálózat tájékoztatási pont működtetéséhez<br/>
      – Közösségfejlesztési folyamatok generálása, folyamatkövetése<br/>
      – Helyszín biztosítása civil szervezetek számára<br/>
      – Egészségfejlesztési programok<br/>
      – Elektronikus közigazgatási végpont szolgáltatás biztosítása (közháló végpont)<br/>
      – Nemzeti Foglalkoztatási Szolgálat információs pont</p>

      <h3>Egészségügyi intézmények és szolgáltatások</h3>

      <p><strong>Háziorvosi rendelő</strong><br/>
        Háziorvos: Dr. Vásárhelyi László<br/>
        Cím: Gersekarát, Béke u. 44.<br/>
        Tel: +36-94/373-002<br/>
      Sürgős esetben ügyeleti időn kívül elérhető: +36-30/742-8204</p>

      <p><strong>Rendelési idők:</strong><br/>
        Hétfő: 8.30 - 11.30<br/>
      Kedd: 14.00 - 15.30<br/>
      Szerda: 11.00 - 13.00<br/>
      Csütörtök: 15.30 - 16.00</p>

      <p><strong>Orvosi Ügyelet</strong><br/>
        Cím: Vasvár, Árpád tér 3.<br/>
        Tel: +36-94/370-135</p>

      <p><strong>Ügyeleti idők:</strong><br/>
        H - P: 16:00 - 7:30<br/>
      P - H: 13:30 - 7:30</p>

      <p><strong>Fogászati rendelő</strong><br/>
        Fogorvos: Dr. Zsoldos Zsófia, Dr. Börzsei Gergely<br/>
      Cím: Gersekarát, Béke 44.<br/>
      Tel: +36-94/373-153, +36-70/611-8624</p>

      <p><strong>Rendelési idő:</strong><br/>
        Hétfő: 8.00 - 11.00<br/>
      Csütörtök: 15.00 - 18.00<br/>
      Előzetes bejelentkezéssel!</p>

      <p><strong>Fogászati ügyelet</strong><br/>
        Cím: Szombathely, Wesselényi Miklós u. 4.<br/>
        Tel: +36-94/313-340</p>

      <p><strong>Ügyeleti idők:</strong><br/>
        H - P: 18:15 - 20:00<br/>
      Szo - V: 8:00 - 19:00</p>

      <p><strong>Védőnői Szolgálat</strong><br/>
        Védőnő: Laposa Katalin<br/>
        Mobil: +36-30/502-6308</p>

      <p><strong>Rendelési idő:</strong><br/>
        Hétfő: 8:00 - 12:00</p>

      <p><strong>Családgondozó szolgálat</strong></p>

      <ul>
        <li><p>Családsegítő és Gondozási Központ<br/>
            Cím: Vasvár, Kossuth L. utca 10.<br/>
            Tel: +36-94/370-123</p></li>
        <li><p>Gyermekjóléti Szolgálat<br/>
            Családgondozó: Virág Eszter</p></li>
        <li><p>Családsegítő Szolgálat<br/>
            Családgondozó: Padosné Simon Zsuzsa<br/>
            Tel: +36-20/473-9580</p></li>
        <li><p><strong>Fogadóóra</strong><br/>
            Szerda: 10:00 - 12:00</p></li>
      </ul>

      <h3>Postahivatal</h3>

      <p>Vezető: Deáki Ágnes<br/>
      Cím: 9813 Gersekarát, Honvéd u. 8.<br/>
      Tel: +36-94/373-016</p>

      <p><strong>Nyitvatartás:</strong><br/>
        Hétfő - péntek: 8:00 - 12:30, 12:50 - 15:30</p>

      <h3>Kereskedelmi és vendéglátói szolgáltatások</h3>

      <p><strong>Co-op Vasvár Kft.</strong></p>

      <p>Cím: 9813 Gersekarát, Béke u. 8/A<br/>
      Tel: +36-94/373-305<br/>
      Fax: +36-94/572-311<br/>
      Web: <a target="_blank" href="http://www.coop.hu">www.coop.hu</a></p>

      <p><strong>Nyitvatartás:</strong><br/>
        H - P: 6:00 - 17:00<br/>
      Sz: 6:00 - 11:00<br/>
      V: 7:00 - 11:00<br/>
      </p>

      <p><strong>Co-op Vasvár Kft.</strong></p>

      <p>Cím: 9813 Gersekarát, Dózsa György utca 119 .<br/>
        Tel: +36-94/373-305<br/>
      Fax: +36-94/572-311<br/>
      Web: <a target="_blank" href="http://www.coop.hu">www.coop.hu</a></p>

      <p><strong>Nyitvatartás:</strong><br/>
        H: ZÁRVA<br/>
        K: 6:15 - 11:30<br/>
        Sz: 6:15 - 14:15<br/>
        Cs: 6:15 - 11:30<br/>
        P: 6:15 - 11:30<br/>
        Sz: 6:15 - 11:30<br/>
        V: ZÁRVA</p>

      <p><strong>Karát ABC</strong></p>

      <p>Cím: 9813 Gersekarát, Petőfi S. u. 4.<br/>
        Tel: +36-30/557-2170<br/>
      E-mail: <a target="_blank" href="mailto:szokemarietta@freemail.hu">szokemarietta@freemail.hu</a></p>

      <p><strong>Nyitvatartás:</strong><br/>
        H - P: 5:30 -10:00 14:00 -17:30<br/>
      Sz: 7:00 - 15:00<br/>
      V: 7:00 - 10:00</p>

      <p><strong>Dohánybolt</strong></p>

      <p>Cím: 9813 Gersekarát, Petőfi S. u. 4. (Karát ABC mellett)</p>

      <p><strong>Nyitvatartás:</strong><br/>
        H - P: 5:30 - 17:30<br/>
      Sz: 7:00 - 15:00<br/>
      V: 7:00 - 10:00</p>

      <p><strong>Községi Önkormányzat, Konyha</strong><br/>
        Élelmezésvezető: Horváth Árpádné<br/>
        Cím: Gersekarát, Béke u. 12.<br/>
        Tel: +36-94/574-018<br/>
      Mobil: +36-30/612-1409</p>

      <p><strong>Gaál Vendéglő</strong><br/>
        Üzemeltető: Gaál László<br/>
        Cím: Gersekarát Dózsa György u. 26/A.<br/>
        Telefon: +36-70/528-1400</p>

      <p><strong>Nyitvatartás:</strong><br/>
        H: 16:00 - 21:00<br/>
      K - V: 7:00 - 21:00</p>

      </div>
      </div>
      </div>
      </div>
    );
  }
}

