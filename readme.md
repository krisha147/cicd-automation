# CI/CD Automation Project

This repository demonstrates an automated CI/CD pipeline using **Cypress** for end-to-end testing and **GitHub Actions** for continuous integration and deployment. It also supports TOTP-based login for testing secure authentication flows.

---

## Project Overview

The project is designed to:

- Run automated Cypress tests on web applications.
- Integrate with GitHub Actions for CI/CD.
- Deploy applications to staging or development environments after tests pass.
- Handle TOTP (Time-based One-Time Password) for secure login scenarios.

---

## Technologies Used

- **Cypress**: For automated end-to-end testing.
- **GitHub Actions**: For CI/CD pipeline automation.
- **Node.js & npm**: For managing dependencies and running scripts.
- **TOTP**: For testing two-factor authentication (2FA) login flows.

---

### Detailed Steps to Run the Project Locally

#### 1. Clone the repository

```bash
git clone https://github.com/krisha147/cicd-automation.git
cd cicd-automation
```

##### Explanation:

- `git clone <repo>`: This copies the entire project from GitHub to your local machine.

- `cd cicd-automation`: Changes your terminal directory into the project folder so you can work inside it.

##### Alternative:

You can also download the repository as a ZIP file from GitHub and extract it manually. Then open your terminal in the extracted folder.

#### 2. Install project dependencies

```bash
npm i
```

##### Explanation:

`npm i` (or `npm install`) reads the `package.json` file and installs all required Node.js packages, including Cypress if it’s already listed as a dependency.

##### Alternative:

If you only want to install Cypress specifically, you can run:

```bash
npm i cypress --save-dev
```

This installs Cypress as a **development dependency** without touching other packages.

#### 3. Create environment variables (.env file)

Cypress tests require **login credentials** and **TOTP secret** to run properly.

1. Create a file called `.env` in the project root.

2. Add the following:

   ```bash
   CYPRESS_EMAIL=your-email@example.com
   CYPRESS_PASSWORD=your-password
   CYPRESS_TOTPSECRET=your-totp-secret
   ```

##### Explanation:

- `.env` files store sensitive information (like passwords or API keys) so you don’t have to hardcode them in your test files.

- Cypress can access these variables using `Cypress.env('EMAIL')` etc., or directly via `Cypress.env()` if configured.

##### Alternative:

- Instead of `.env`, you can set environment variables directly in the terminal:

  - Linux/Mac:

    ```bash
    export CYPRESS_EMAIL="your-email@example.com"
    export CYPRESS_PASSWORD="your-password"
    export CYPRESS_TOTPSECRET="your-totp-secret"
    ```

  - Windows Command Prompt:

    ```bash
    set CYPRESS_EMAIL=your-email@example.com
    set CYPRESS_PASSWORD=your-password
    set CYPRESS_TOTPSECRET=your-totp-secret
    ```

#### 4. Run Cypress tests

```bash
npx cypress run
```

##### Explanation:

- `npx` allows you to run Node packages without installing them globally.

- `cypress run` executes all Cypress tests in **headless mode**, meaning it runs in the background without opening the browser GUI.

##### Alternative Options

1. Interactive mode (GUI)

```bash
npx cypress open
```

- Opens the Cypress Test Runner. You can click on individual tests and watch them run in a real browser.

- Useful for **debugging or developing new tests**.

2. Run a specific test

```bash
npx cypress run --spec "cypress/e2e/your-test-file.cy.js"
```

- Runs only the specified test file.

- Faster than running all tests when you are debugging a specific flow.

3. Run with environment variables inline

```bash
npx cypress run --env email=your-email,password=your-password,totp=your-totp
```

- Useful if you don’t want to create a `.env` file.
