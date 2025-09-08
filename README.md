# OHD - OnlyHockey Desktop

OnlyHockey Desktop (OHD) is your ultimate hockey companion built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Linting**: ESLint

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure

```
src/
├── app/                 # App Router pages and layouts
│   ├── globals.css     # Global styles with Tailwind CSS
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Home page component
├── lib/                # Utility functions
│   └── utils.ts        # shadcn/ui utility functions
└── components/         # Reusable components (created as needed)
```

## Adding Components

This project uses shadcn/ui for components. Add new components with:

```bash
npx shadcn@latest add [component-name]
```

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com) - beautifully designed components
- [TypeScript](https://www.typescriptlang.org/docs) - typed JavaScript
