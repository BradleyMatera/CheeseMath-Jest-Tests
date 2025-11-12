# 🧀 CheeseMath | Advanced Calculator Suite

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![NextUI](https://img.shields.io/badge/NextUI-2.6-purple?style=for-the-badge)](https://nextui.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Bun-1.3-fbf0df?style=for-the-badge&logo=bun)](https://bun.sh/)

> A modern, feature-rich calculator application combining basic arithmetic, advanced string operations, regex analysis, and secure credit card handling—all powered by beautiful animations and a delightful user experience.

## ✨ Features

### 🧮 Basic Calculator
- Addition, subtraction, multiplication, division
- Square root calculations
- Min/Max operations
- Real-time error handling

### ⚡ Advanced Operations
- Array sum calculations
- String reverse
- Palindrome checking
- Word capitalization
- Vowel/consonant counting

### 🔍 Regex Analyzer
- Pattern matching
- Email/Phone/URL validation
- Data extraction

### 💳 Card Obscurer
- Secure card masking
- Luhn validation
- Card type detection
- Auto-formatting

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Build for production
bun run build

# Build for GitHub Pages
bun run build:pages
```

## 📦 Deployment to GitHub Pages

1. Build the static site:
```bash
bun run build:pages
```

2. Configure GitHub Pages:
   - Go to repository Settings → Pages
   - Source: `main` branch, `/docs` folder
   - Save

3. Push to GitHub:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

Live at: `https://bradleymatera.github.io/CheeseMath-Jest-Tests/`

## 🛠️ Tech Stack

- **Next.js 16** - App Router with TypeScript
- **Bun** - Fast JavaScript runtime
- **NextUI** - Beautiful UI components
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Heroicons** - Modern icon set

## 📁 Project Structure

```
cheese-math-nextjs/
├── app/              # Next.js app directory
├── components/       # React components
├── lib/              # Utility functions
├── scripts/          # Build scripts
└── public/           # Static assets
```

## 👤 Author

**Bradley Matera**
- GitHub: [@BradleyMatera](https://github.com/BradleyMatera)

## 📄 License

MIT License - see LICENSE file for details

---

Made with 🧀 and ❤️
