import { test, expect } from '@playwright/test'

test('TC-01 - alkalmazás elindul', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/Tanulókártya/i)
})

test('TC-02 - kártya megfordítható', async ({ page }) => {
  await page.goto('/')

  await page.getByText(/react/i).click()

  await expect(
    page.getByText(/frontend javascript/i)
  ).toBeVisible()
})