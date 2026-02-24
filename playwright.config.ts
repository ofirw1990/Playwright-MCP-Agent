import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // איפה יהיו קבצי הבדיקות שה-Generator ייצור
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 2, // ניסיון חוזר בכישלון (עוזר ל-Healer לזהות בעיות יציבות)
  workers: 1, // בגלל שהמחשב לא חזק, נשתמש ב-Worker אחד כדי לא להעמיס
  
  // הגדרת הדוחות
  reporter: [
    ['line'], // הדפסה פשוטה בטרמינל
    ['allure-playwright', { outputFolder: 'allure-results' }] // דוח אלור המפורט
  ],

  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});