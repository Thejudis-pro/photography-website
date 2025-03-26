# NextWave Photography Website

A modern, responsive photography website built with Next.js, TypeScript, and Tailwind CSS. The website features a beautiful design with smooth animations and a contact form that integrates with Supabase.

## Features

- 🎨 Modern and responsive design
- 🌙 Dark mode support
- ✨ Smooth animations with Framer Motion
- 📱 Mobile-friendly layout
- 📝 Contact form with Supabase integration
- 🖼️ Portfolio showcase
- 💬 Testimonials section
- 🛠️ Built with Next.js 14 and TypeScript

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase
- Next.js Image Optimization

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/photography-website.git
cd photography-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
photography-website/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── portfolio/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   └── components/
│       └── layout/
│           └── Navbar.tsx
├── public/
├── .env.local
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
