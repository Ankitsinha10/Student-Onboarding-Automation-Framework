import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  use: {
    baseURL: process.env.MMS_SCHOOL_URL,
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'auth-setup', // manual login project
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: 'tests', // normal test project
      use: {
        browserName: 'chromium',
        storageState: path.join(__dirname, './playwright/.auth/user.json'), // reuse saved session
      },
       dependencies: ['auth-setup'] // Add this line - ensures auth completes first
    },
  ],
});
