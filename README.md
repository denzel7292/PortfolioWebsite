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

## Wat werkt al?

- Navigatie naar werk, over mij en contact.
- Twee uitgewerkte cases en twee aanklikbare voorbeeldprojecten.
- Eén gedeelde opbouw voor de case studies: uitdaging, proces en resultaat.
- Mobiel menu, ook te sluiten met Escape. Zonder JavaScript blijven de links zichtbaar.
- Weergave voor desktop, tablet en mobiel, zichtbare toetsenbordfocus en minder beweging
  wanneer de bezoeker dat heeft ingesteld.
- Een 404-melding bij een onbekend project.