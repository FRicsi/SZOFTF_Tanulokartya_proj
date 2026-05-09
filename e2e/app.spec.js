import { test, expect } from '@playwright/test'

test('TC-01 - alkalmazás elindul', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/Tanulókártyák/i)
})

test('TC-02 - alkalmazás fő felülete megjelenik', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText(/tanulókártyák/i).first()).toBeVisible()
})