## 2025-05-15 - [Accessibility & Build Stability]
**Learning:** Core layout components like `Header` often have unused or mismatched props that can cause project-wide build failures in TypeScript environments. Aligning these props while adding accessibility markers (ARIA labels) ensures both developer and user experience are improved simultaneously.
**Action:** Always check for unused or mismatching props in shared components (Header, Footer, Sidebar) and ensure they are either properly utilized in the UI or removed to prevent build regressions.
