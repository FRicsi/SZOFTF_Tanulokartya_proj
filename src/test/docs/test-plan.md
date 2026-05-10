# Tesztelési terv – Tanulókártya alkalmazás

## 1. Tesztelés célja

A tesztelés célja annak ellenőrzése, hogy a Tanulókártya alkalmazás fő felhasználói funkciói megfelelően működnek-e.

A tesztelés kiemelten vizsgálja:
- tanulókártyák megjelenítését,
- új tanulókártya létrehozását,
- kategóriák kezelését,
- felhasználói interakciókat,
- alapvető hibakezelést.

## 2. Tesztelendő funkciók

- Kártyák megjelenítése
- Kártya létrehozása
- Kártya megfordítása
- Kategória létrehozása
- Kategória kiválasztása
- Üres vagy hibás bemenet kezelése

## 3. Teszttípusok

### Manuális teszt
A felhasználói felület és az alap működés kézi ellenőrzése.

### Komponens teszt
React komponensek működésének ellenőrzése Vitest és React Testing Library segítségével.

### End-to-end teszt
Teljes felhasználói folyamat ellenőrzése Playwright segítségével.

## 4. Tesztkörnyezet

- Operációs rendszer: Windows
- Fejlesztői környezet: Visual Studio Code
- Keretrendszer: React + Vite
- Unit/component teszt: Vitest + React Testing Library
- E2E teszt: Playwright
- Böngésző: Chromium / Chrome

## 5. Belépési feltételek

- Az alkalmazás lokálisan elindítható.
- A szükséges npm csomagok telepítve vannak.
- A fő komponensek elérhetők a projektben.

## 6. Kilépési feltételek

- A kiválasztott tesztesetek dokumentálva vannak.
- Legalább néhány kritikus tesztesethez automatizált teszt készül.
- A tesztek futtathatók lokális környezetben.
- Kritikus hiba nem marad nyitva.

## 7. Nem cél

- Teljes körű, 100%-os tesztlefedettség.
- Minden vizuális részlet automatikus tesztelése.
- Böngészőnkénti teljes regressziós tesztelés.
- Teljesítménytesztelés.