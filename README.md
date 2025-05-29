# Fullstack Monorepo Starter

This is an early-stage fullstack playground project built to experiment with modern web technologies and architecture patterns.

The goal of this repository is to serve as a solid foundation for exploring advanced fullstack features such as:

- Role-Based Access Control (RBAC)
- Admin panels and dashboards
- CRM-like workflows
- E-commerce logic
- API-first development using tRPC

At this point, the application has no fixed domain or business logic — it will evolve over time as ideas and features are shaped.

## 📌 Tech Stack

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
  - [tRPC](https://trpc.io/) – type-safe API communication
  - [Prisma](https://www.prisma.io/) – type-safe ORM

- **Frontend:**
  - [Vite](https://vitejs.dev/)
  - [React](https://reactjs.org/)
  - [React Router](https://reactrouter.com/)
  - [tRPC](https://trpc.io/) – end-to-end type safety

- **Tooling & Dev Experience:**
  - Monorepo using [`pnpm` workspaces](https://pnpm.io/workspaces)
  - [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) – for consistent code style
  - [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/okonet/lint-staged) – Git hooks for quality control

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Start frontend and backend (if scripts are defined)
pnpm dev