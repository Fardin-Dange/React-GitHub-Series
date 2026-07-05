# D12 - Lazy Load + .env in React

## .env

### What is .env?
A file to store sensitive data like API keys, backend URLs, 
and secret tokens. This file is not pushed to GitHub.

### Rules in Vite:
- Every variable must start with VITE_ prefix
- Capital letters with underscore
- No semicolon at end

### Syntax:
VITE_API_URL=https://jsonplaceholder.typicode.com
VITE_SECRET_KEY=ABC123

### Use in React:
import.meta.env.VITE_API_URL

### Flow:
Local → .env file
GitHub → .env not pushed (.gitignore)
Vercel → Set in Dashboard Environment Variables

---

## Lazy Loading

### What is Lazy Loading?
Loading only the component that the user is currently 
viewing — instead of loading all components at once.

### Without Lazy Loading:
App opens → All components download at once 😬

### With Lazy Loading:
App opens → Only current page downloads ✅
User navigates → That page downloads ✅

### Syntax:
import { lazy, Suspense } from 'react'

const Dashboard = lazy(() => import('./pages/Dashboard'))

<Suspense fallback={<h1>Loading...</h1>}>
  <Dashboard/>
</Suspense>

### What is Suspense?
While the component is downloading, Suspense shows 
a fallback UI — like a loading spinner or text.

### Flow:
User navigates to Dashboard
      ↓
Suspense shows "Loading..." ⏳
      ↓
Dashboard.js downloads
      ↓
Dashboard renders ✅