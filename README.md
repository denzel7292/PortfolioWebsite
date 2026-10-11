# Portfolio — eerste basis

Een basisportfolio in HTML, CSS en een klein beetje JavaScript als start.
Twee projectkaarten bevatten nog voorbeelden. Dokter Bibber VR en Sushi Sakai zijn uitgewerkte cases.
Er is geen database, contactformulier of externe bibliotheek. De Dokter Bibber-case bevat
een Figma-presentatie die online beschikbaar moet blijven om op de pagina te verschijnen.
De Sushi Sakai-case bevat lokale afbeeldingen uit de projectpresentatie en links naar het Figma-bestand.

## Lokaal bekijken

Deze versie is statisch en daardoor meteen geschikt voor Vercel.

1. Open deze projectmap in een terminal (PowerShell).
2. Start de website met bijvoorbeeld:

   ```powershell
   npx serve . -l 3000
   ```

3. Open <http://localhost:3000> in je browser.
4. Stop de server met `Ctrl+C` in die terminal.

Er is geen database of aparte applicatieserver nodig.

## Bestanden

```text
index.html                    Homepage
project.html                  Projectdetailpagina
dokter-bibber.html            Case over de VR-simulatie
sushi-sakai.html              Case over een toegankelijk mobiel ontwerp
404.html                      Pagina voor een onbekend adres
assets/
  css/style.css               Dummy stijl en mobiele weergave
  js/main.js                  Openen en sluiten van het mobiele menu
  js/lightbox.js              Vergroten van Sushi Sakai-beelden
  favicon.svg                 Klein pictogram voor het browsertabblad
  images/sushi-sakai/         Beelden uit de Sushi Sakai-projectpresentatie
```

## Wat werkt al?

- Navigatie naar werk, over mij en contact.
- Twee uitgewerkte cases en twee aanklikbare voorbeeldprojecten.
- Eén gedeelde opbouw voor de case studies: uitdaging, proces en resultaat.
- Mobiel menu, ook te sluiten met Escape. Zonder JavaScript blijven de links zichtbaar.
- Weergave voor desktop, tablet en mobiel, zichtbare toetsenbordfocus en minder beweging
  wanneer de bezoeker dat heeft ingesteld.
- Een 404-melding bij een onbekend project.

Contact is voorlopig alleen een zichtbare placeholder. Er worden geen berichten verstuurd.
De grafische kaarten zijn met CSS opgebouwd. De Dokter Bibber-case toont de Figma-presentatie
via een insluiting; bezoekers kunnen deze ook rechtstreeks in Figma openen.
De beelden op de Sushi Sakai-case openen vergroot op dezelfde pagina. Ze sluiten met de knop,
Escape of een klik naast het beeld. Bij het openen stuurt de pagina een benoemd
`SushiSakai_ImageOpen_*`-event naar de bestaande Contentsquare-tag, als die voor de bezoeker actief is.
Een playground en uitgebreidere functies kunnen later toegevoegd worden.

## Later aanpassen

Begin met de introductie, projectkaarten en over-mijtekst in `index.html`.
De cases staan in `dokter-bibber.html` en `sushi-sakai.html`; de voorbeeldprojecten gebruiken
`project.html`. De algemene kleuren staan bovenaan
`assets/css/style.css`.

De case is gebaseerd op de presentatie van Denzel Coppens en Jesse Vangindertael:
<https://www.figma.com/slides/uoXMW7tw2DM1crfsMlDPzA>.
