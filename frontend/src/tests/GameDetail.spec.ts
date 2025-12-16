import { test, expect } from '@playwright/test';

test('GameDetail page screenshot', async ({ page }) => {
  await page.goto('http://localhost:5173/game/1');
  await page.screenshot({ path: 'game-detail-screenshot.png', fullPage: true });
});
