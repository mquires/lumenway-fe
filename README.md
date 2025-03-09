# Lumenway Frontend

A modern streaming and content monetization platform built with Next.js 14.

## Overview

Lumenway is a feature-rich streaming platform designed to provide creators with powerful tools for live broadcasting, community building, and content monetization. The platform focuses on delivering high-quality streaming experiences while maintaining robust performance, security, and user engagement features.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **State Management**: [Apollo Client](https://www.apollographql.com/docs/react/)
- **Authentication**: Cookies + 2FA
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)

## Key Features

- 🔐 Secure authentication with 2FA support
- 🌍 Multi-language support (EN/RU)
- 💰 Subscription management system
- 👤 Comprehensive user profile management
- 🎨 Dark/Light theme support
- 📱 Fully responsive design
- 🔄 Real-time updates with GraphQL

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/mquires/lumenway-fe.git
cd lumenway-fe
```

2. **Install dependencies**

```bash
yarn install
```

3. **Environment Setup**

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_GRAPHQL_URL=your_graphql_url
```

4. **Start Development Server**

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```text
src/
├── app/ # Next.js App Router pages
├── components/
│ ├── features/ # Feature-specific components
│ │ ├── auth/ # Authentication components
│ │ ├── user/ # User management components
│ │ └── sponsorship/ # Subscription components
│ └── ui/ # Reusable UI components
├── graphql/
│ ├── generated/ # Generated types and hooks
│ ├── mutations/ # GraphQL mutations
│ └── queries/ # GraphQL queries
├── hooks/ # Custom React hooks
├── libs/ # Utilities and configurations
├── schemas/ # Zod validation schemas
└── styles/ # Global styles and Tailwind config
```

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## Development Guidelines

### Component Structure

```tsx
// Example component structure
const ComponentName = () => {
  // Hooks
  const translate = useTranslations('namespace');
  const form = useForm<TypeSchema>({...});

  // Handlers
  const onSubmit = (data: TypeSchema) => {...};

  // Render
  return (...);
};
```

### Form Controllers

We use reusable form controllers for consistent form handling:

- `InputController` - Text input fields
- `TextareaController` - Multiline text input
- `OTPController` - One-time password input
