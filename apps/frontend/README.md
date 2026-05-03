# Next Vibe Coding EVM Starter

A modern and opinionated Next.js starter template for EVM-based Web3 applications with internationalization support and best development practices preconfigured.

## 🚀 Tech Stack

### Frontend
- **Framework:** [Next.js 16](https://nextjs.org/) with React 19
- **UI Components:** 
  - [shadcn/ui](https://ui.shadcn.com/) - Accessible and customizable components
  - [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI primitives
- **Styling:** 
  - [Tailwind CSS v4](https://tailwindcss.com/) with class-variance-authority
  - [DaisyUI](https://daisyui.com/) - High-level CSS class abstraction for Tailwind CSS (prefixed with `d-`)
- **State Management:** [TanStack Query](https://tanstack.com/query)
- **Animations:** [Motion](https://motion.dev/) - Production-ready animation library
- **Dark Mode:** [next-themes](https://github.com/pacocoursey/next-themes) - Perfect dark mode support
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Code Quality:**
  - [Biome](https://biomejs.dev/) for formatting and linting
  - [TypeScript](https://www.typescriptlang.org/) for type safety
  - [Husky](https://typicode.github.io/husky/) for Git hooks
  - [lint-staged](https://github.com/lint-staged/lint-staged) for pre-commit linting
- **Logging:** [Pino](https://github.com/pinojs/pino) with pino-pretty for pretty logging in development

### Web3 & Blockchain
- **Wallet Connection:** [RainbowKit](https://www.rainbowkit.com/)
- **Ethereum Hooks:** [Wagmi](https://wagmi.sh/)
- **Ethereum Library:** [Viem](https://viem.sh/)

## 🏁 Getting Started

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/next-vibe-coding-evm-starter.git
   cd next-vibe-coding-evm-starter
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Environment setup:**
   ```bash
   cp .env.example .env
   ```
   
   Add your WalletConnect Project ID:
   ```env
   WALLET_CONNECT_PROJECT_ID=your_project_id_here
   ```

4. **Start development server:**
   ```bash
   pnpm dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🔧 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build production pnpmdle with format & lint
- `pnpm start` - Start production server
- `pnpm format` - Format code with Biome
- `pnpm lint` - Lint code with Biome

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful and accessible components
- [DaisyUI](https://daisyui.com/) - The most popular component library for Tailwind CSS
- [Biome](https://biomejs.dev/) - Fast toolchain for web projects
- [Wagmi](https://wagmi.sh/) - React Hooks for Ethereum
- [Viem](https://viem.sh/) - Ethereum library for JavaScript
- [RainbowKit](https://www.rainbowkit.com/) - The best way to connect a wallet