# Tesztesetek – Tanulókártya alkalmazás

## Áttekintés

A tesztesetek célja a Tanulókártya alkalmazás fő funkcióinak ellenőrzése.  
A tesztek egy része manuálisan, egy része automatizált teszttel kerül ellenőrzésre.

## Tesztesetek összefoglaló táblázata

| ID | Teszteset | Típus | Prioritás | Végrehajtás |
|---|---|---|---|---|
| TC-01 | Alkalmazás indítása | Smoke / Functional | Magas | Automata + manuális |
| TC-02 | Kártya megfordítása | UI / Component | Magas | Automata |
| TC-03 | Kártyák közötti navigáció | Functional / Component | Magas | Automata |
| TC-04 | Új kártya létrehozása | Functional | Magas | Automata + manuális |
| TC-05 | Kártya szerkesztése | Functional | Közepes | Manuális |
| TC-06 | Kártya törlése | Functional | Közepes | Manuális |
| TC-07 | Kategória létrehozása | Functional | Közepes | Automata + manuális |
| TC-08 | Kategória szűrés | Functional | Magas | Automata + manuális |
| TC-09 | Adatmegőrzés | Integration | Magas | Manuális / opcionális automata |
| TC-10 | Reszponzív működés | UI / Usability | Közepes | Manuális |
| TC-11 | Build ellenőrzés | Technical / Build | Magas | Automata |

---

## TC-01 – Alkalmazás indítása

**Típus:** Smoke / Functional  
**Prioritás:** Magas  
**Végrehajtás:** Automata + manuális  

### Előfeltétel
Az alkalmazás lokálisan fut vagy buildelt verzióban elérhető.

### Lépések
1. Az alkalmazás megnyitása böngészőben.
2. A kezdőfelület betöltésének ellenőrzése.
3. Az alapértelmezett kategóriák és kártyák megjelenésének ellenőrzése.

### Elvárt eredmény
Az alkalmazás hiba nélkül elindul, az alapértelmezett kategóriák és kártyák megjelennek.

---

## TC-02 – Kártya megfordítása

**Típus:** UI / Component  
**Prioritás:** Magas  
**Végrehajtás:** Automata  

### Előfeltétel
Legalább egy tanulókártya látható az oldalon.

### Lépések
1. A felhasználó rákattint a kártyára.
2. A rendszer megjeleníti a kártya válasz oldalát.

### Elvárt eredmény
Kattintásra a kártya kérdés oldala válasz oldalra vált.

---

## TC-03 – Kártyák közötti navigáció

**Típus:** Functional / Component  
**Prioritás:** Magas  
**Végrehajtás:** Automata  

### Előfeltétel
Legalább két tanulókártya elérhető az alkalmazásban.

### Lépések
1. A felhasználó a következő gombra kattint.
2. A rendszer megjeleníti a következő kártyát.
3. A felhasználó az előző gombra kattint.
4. A rendszer visszalép az előző kártyára.

### Elvárt eredmény
Az előző/következő gombbal lapozhatók a kártyák.

---

## TC-04 – Új kártya létrehozása

**Típus:** Functional  
**Prioritás:** Magas  
**Végrehajtás:** Automata + manuális  

### Előfeltétel
A kártyalétrehozó űrlap elérhető.

### Lépések
1. A felhasználó megadja a kérdést.
2. A felhasználó megadja a választ.
3. A felhasználó kategóriát választ.
4. A felhasználó menti az új kártyát.

### Elvárt eredmény
A kérdés, válasz és kategória megadásával új kártya menthető.

---

## TC-05 – Kártya szerkesztése

**Típus:** Functional  
**Prioritás:** Közepes  
**Végrehajtás:** Manuális  

### Előfeltétel
Legalább egy meglévő kártya elérhető.

### Lépések
1. A felhasználó kiválaszt egy meglévő kártyát.
2. A felhasználó megnyitja szerkesztésre.
3. A felhasználó módosítja a kérdést vagy a választ.
4. A felhasználó menti a módosítást.

### Elvárt eredmény
A meglévő kérdés és válasz módosítható, a változás mentés után megjelenik.

---

## TC-06 – Kártya törlése

**Típus:** Functional  
**Prioritás:** Közepes  
**Végrehajtás:** Manuális  

### Előfeltétel
Legalább egy meglévő kártya elérhető.

### Lépések
1. A felhasználó kiválaszt egy kártyát.
2. A felhasználó törli a kártyát.
3. A rendszer frissíti a kártyalistát.

### Elvárt eredmény
Megerősítés után a kártya törlődik.

---

## TC-07 – Kategória létrehozása

**Típus:** Functional  
**Prioritás:** Közepes  
**Végrehajtás:** Automata + manuális  

### Előfeltétel
A kategórialétrehozó felület elérhető.

### Lépések
1. A felhasználó megadja az új kategória nevét.
2. A felhasználó színt választ.
3. A felhasználó menti a kategóriát.

### Elvárt eredmény
Új kategória névvel és színnel létrehozható.

---

## TC-08 – Kategória szűrés

**Típus:** Functional  
**Prioritás:** Magas  
**Végrehajtás:** Automata + manuális  

### Előfeltétel
Több kategória és több kártya elérhető.

### Lépések
1. A felhasználó kiválaszt egy kategóriát.
2. A rendszer szűri a megjelenített kártyákat.

### Elvárt eredmény
A kiválasztott kategóriához tartozó kártyák jelennek meg.

---

## TC-09 – Adatmegőrzés

**Típus:** Integration  
**Prioritás:** Magas  
**Végrehajtás:** Manuális / opcionális automata  

### Előfeltétel
A felhasználó létrehozott vagy módosított adatokat.

### Lépések
1. A felhasználó létrehoz egy új kártyát vagy kategóriát.
2. A felhasználó frissíti az oldalt.
3. A rendszer újratölti az alkalmazást.

### Elvárt eredmény
Az adatok böngésző újratöltése után is elérhetők.

---

## TC-10 – Reszponzív működés

**Típus:** UI / Usability  
**Prioritás:** Közepes  
**Végrehajtás:** Manuális  

### Előfeltétel
Az alkalmazás böngészőben elérhető.

### Lépések
1. A felhasználó mobilnézetre vált.
2. A felhasználó megnyitja az oldalsáv menüt.
3. A felhasználó ellenőrzi az alapfunkciók elérhetőségét.

### Elvárt eredmény
Mobilnézetben az oldalsáv menüként működik, az alapfunkciók használhatók.

---

## TC-11 – Build ellenőrzés

**Típus:** Technical / Build  
**Prioritás:** Magas  
**Végrehajtás:** Automata  

### Előfeltétel
A projekt függőségei telepítve vannak.

### Lépések
1. A build parancs futtatása.
2. A build eredményének ellenőrzése.

### Elvárt eredmény
A produkciós build elkészül hiba nélkül.

### Parancs
```bash
npm run build