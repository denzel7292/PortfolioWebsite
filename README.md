# Portfolio — eerste basis

Een basisportfolio in HTML, CSS en een klein beetje JavaScript als start.
Alle teksten, projectnamen en beelden zijn voorbeelden. Er is geen database,
contactformulier, externe bibliotheek of koppeling met een andere dienst.

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
404.html                      Pagina voor een onbekend adres
assets/
  css/style.css               Dummy stijl en mobiele weergave
  js/main.js                  Openen en sluiten van het mobiele menu
  favicon.svg                 Klein pictogram voor het browsertabblad
```

## Wat werkt al?

- Navigatie naar werk, over mij en contact.
- Vier aanklikbare projecten met een eigen adres, bijvoorbeeld `project.html?id=project-01`.
- Eén gedeelde opbouw voor de case studies: uitdaging, proces en resultaat.
- Mobiel menu, ook te sluiten met Escape. Zonder JavaScript blijven de links zichtbaar.
- Weergave voor desktop, tablet en mobiel, zichtbare toetsenbordfocus en minder beweging
  wanneer de bezoeker dat heeft ingesteld.
- Een 404-melding bij een onbekend project.

Contact is voorlopig alleen een zichtbare placeholder. Er worden geen berichten verstuurd.
De grafische vlakken zijn met CSS opgebouwd, zodat er nog geen echte projectfoto's nodig zijn.
Een playground en uitgebreidere functies kunnen later toegevoegd worden.

## Later aanpassen

Begin met de introductie, projectkaarten en over-mijtekst in `index.html`.
De projectpagina staat in `project.html`. De algemene kleuren staan bovenaan
`assets/css/style.css`.
