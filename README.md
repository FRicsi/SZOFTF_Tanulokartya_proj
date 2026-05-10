# Interaktív Tanulókártyák (Flashcards)

Webalapú tanulókártya-rendszer, amely támogatja a tananyagok digitális feldolgozását, ismétlését és önellenőrzését kérdés–válasz alapú kártyák segítségével.

## Funkciók

- 🃏 **Kérdés-válasz kártyák** — flip animációval
- 📂 **Kategóriák kezelése** — létrehozás, szerkesztés, törlés, színkódolás
- ➕ **Kártyák CRUD** — létrehozás, szerkesztés, törlés
- 🔀 **Navigáció** — lapozás kártyák között, progress jelző
- 📱 **Reszponzív design** — mobil és desktop nézet
- 💾 **Lokális mentés** — localStorage-ban tárolja az adatokat

## Technológiák

- React 19 (Vite)
- Vanilla CSS (nincs külső UI könyvtár)
- localStorage (adattárolás)

## Telepítés és futtatás

```bash
npm install
npm run dev
```

Ezután nyisd meg a böngészőben: `http://localhost:5173`

## Build és deploy

```bash
npm run build
```

A `dist/` mappa tartalmazza a kész alkalmazást, amely bármely statikus hosting szolgáltatásra feltölthető (GitHub Pages, Vercel, Netlify).

## Tesztelés

A tesztelés felépítése az alábbi logika mentén lett végrehajtva:
1. Tesztterv
2. Tesztesetek
3. Automatizált tesztek
4. Tesztösszegzés / jegyzőkönyv

## Csapat

| Név | Szerep |
|-----|--------|
| Szombathelyiné Agg Virág Melinda | Projektmenedzser / üzleti elemző |
| Varsás Dániel | Rendszertervező / fejlesztő |
| Fenyő Richárd | Tesztelési és dokumentációs felelős |

Gábor Dénes Egyetem – 2026. tavaszi félév
