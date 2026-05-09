# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: app.spec.js >> TC-02 - kártya megfordítható
- Location: e2e\app.spec.js:9:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText(/react/i)

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - complementary [ref=e4]:
    - heading "📚 Tanulókártyák" [level=2] [ref=e6]
    - navigation [ref=e7]:
      - button "Összes kártya" [ref=e8] [cursor=pointer]:
        - generic [ref=e10]: Összes kártya
      - button "Általános tudás ✎ ✕" [ref=e11] [cursor=pointer]:
        - generic [ref=e13]: Általános tudás
        - generic [ref=e14]:
          - button "✎" [ref=e15]
          - button "✕" [ref=e16]
      - button "Programozás ✎ ✕" [ref=e17] [cursor=pointer]:
        - generic [ref=e19]: Programozás
        - generic [ref=e20]:
          - button "✎" [ref=e21]
          - button "✕" [ref=e22]
    - button "+ Új kategória" [ref=e24] [cursor=pointer]
  - main [ref=e25]:
    - generic [ref=e26]:
      - heading "Összes kártya" [level=1] [ref=e27]
      - button "+ Új kártya" [ref=e28] [cursor=pointer]
    - generic [ref=e30]:
      - generic [ref=e31]: 1 / 4
      - generic [ref=e33] [cursor=pointer]:
        - generic [ref=e34]:
          - generic [ref=e35]: Kérdés
          - generic [ref=e36]: Általános tudás
          - paragraph [ref=e37]: Mi a fotoszintézis?
          - generic [ref=e38]: Kattints a megfordításhoz
        - generic [ref=e39]:
          - generic [ref=e40]: Válasz
          - paragraph [ref=e41]: A növények fényenergiát alakítanak kémiai energiává.
          - generic [ref=e42]: Kattints a visszafordításhoz
      - generic [ref=e43]:
        - button "Előző kártya" [ref=e44] [cursor=pointer]: ◀
        - button "Következő kártya" [ref=e50] [cursor=pointer]: ▶
      - generic [ref=e51]:
        - button "✎ Szerkesztés" [ref=e52] [cursor=pointer]
        - button "✕ Törlés" [ref=e53] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test('TC-01 - alkalmazás elindul', async ({ page }) => {
  4  |   await page.goto('/')
  5  | 
  6  |   await expect(page).toHaveTitle(/Tanulókártya/i)
  7  | })
  8  | 
  9  | test('TC-02 - kártya megfordítható', async ({ page }) => {
  10 |   await page.goto('/')
  11 | 
> 12 |   await page.getByText(/react/i).click()
     |                                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
  13 | 
  14 |   await expect(
  15 |     page.getByText(/frontend javascript/i)
  16 |   ).toBeVisible()
  17 | })
```