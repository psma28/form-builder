---
title: Setting the project up
---
## Repo cloning

The GitHub repository URL is <https://github.com/psma28/form-builder.git>.

Simply clone the project into your local dev enviroment using the following command.

```powershell
git clone https://github.com/psma28/form-builder.git
```

Then open the project with your code editor of choice.

## Installing dependencies

To install the dependencies for the project to start up simply run the following command.

```powershell
npm install
```

This will download the needed dependencies as the <SwmPath>[package.json](/package.json)</SwmPath> file specifies

<SwmSnippet path="package.json" line="13">

---

The main dependencies are specified below:

```
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.0",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "eslint": "^9.9.0",
    "eslint-plugin-react": "^7.35.0",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.9",
    "globals": "^15.9.0",
    "vite": "^5.4.1"
  }
```

---

</SwmSnippet>

<SwmSnippet path="/package.json" line="6">

---

The scripts to run the project are specified into this file too:

```json
  "scripts": {
    "dev": "vite",
    "dev-shared": "vite --host",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
```

---

</SwmSnippet>

So you can start the project up using:

```powershell
npm run dev
//or
npm run dev-shared
```

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBZm9ybS1idWlsZGVyJTNBJTNBcHNtYTI4" repo-name="form-builder"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
