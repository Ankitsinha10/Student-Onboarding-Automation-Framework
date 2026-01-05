# Student Onboarding Automation Framework

A robust test automation framework built with Playwright and TypeScript, featuring a Page Object Model (POM) and a global authentication strategy.

## 🚀 Features

- **Page Object Model (POM)**: Clean, maintainable test architecture with reusable page objects
- **Global Authentication**: Session-based authentication strategy to avoid repetitive login steps
- **TypeScript**: Full type safety and enhanced IDE support
- **Playwright**: Modern, reliable browser automation
- **End-to-End Testing**: Comprehensive test coverage for student onboarding workflows
- **Form Validation**: Automated testing of all form validation scenarios

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Ankitsinha10/Student-Onboarding-Automation-Framework.git
cd Student-Onboarding-Automation-Framework
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## 📁 Project Structure

```
Student-Onboarding-Automation-Framework/
├── tests/
│   ├── e2e/
│   │   └── form-validation.spec.ts
│   └── fixtures/
│       └── pages/
│           └── LoginPage.ts
├── auth.setup.ts
├── dashboard.spec.ts
├── login.spec.ts
├── login_page_verification.spec.ts
├── student-navigation.spec.ts
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── package-lock.json
```

## 🎯 Test Suites

### Authentication Tests
- Login functionality validation
- Session management
- Authentication state persistence

### Dashboard Tests
- Student dashboard navigation
- Post-login verification

### Form Validation Tests
- Input field validation
- Error message verification
- Form submission workflows

### Student Navigation Tests
- Multi-page navigation flows
- Onboarding process verification

## 🚦 Running Tests

### Run all tests:
```bash
npm test
```

### Run specific test file:
```bash
npx playwright test tests/e2e/form-validation.spec.ts
```

### Run tests in headed mode:
```bash
npx playwright test --headed
```

### Run tests in a specific browser:
```bash
npx playwright test --project=chromium
```

### Generate and view HTML report:
```bash
npx playwright show-report
```

## 🔧 Configuration

The framework uses `playwright.config.ts` for configuration. Key settings include:

- **Base URL**: Configure your application URL
- **Timeout**: Default timeout for test operations
- **Browsers**: Test across Chromium, Firefox, and WebKit
- **Screenshots & Videos**: Automatic capture on test failure
- **Retries**: Automatic retry on failure

## 📝 Writing Tests

### Example using Page Object Model:

```typescript
import { test, expect } from '@playwright/test';
import { LoginPage } from './fixtures/pages/LoginPage';

test('user can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.navigate();
  await loginPage.login('user@example.com', 'password123');
  
  await expect(page).toHaveURL('/dashboard');
});
```

## 🔐 Authentication Setup

The framework uses a global authentication setup to maintain session state across tests, reducing test execution time and avoiding redundant login operations.

Authentication configuration is handled in `auth.setup.ts`.

## 📊 Test Reports

After running tests, view the HTML report:

```bash
npx playwright show-report
```

The report includes:
- Test execution results
- Screenshots of failures
- Video recordings (if enabled)
- Trace files for debugging

## 🐛 Debugging

### Debug specific test:
```bash
npx playwright test --debug tests/login.spec.ts
```

### View trace:
```bash
npx playwright show-trace trace.zip
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Ankit Kumar Sinha**

- GitHub: [@Ankitsinha10](https://github.com/Ankitsinha10)

## 🙏 Acknowledgments

- [Playwright](https://playwright.dev/) for the excellent testing framework
- TypeScript community for type definitions and tooling

## Support

For issues, questions, or contributions, please open an issue in the GitHub repository.

---

**Happy Testing! 🎉**
