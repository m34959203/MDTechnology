# Архитектура — MDTechnology.ai

## Компоненты

```
Браузер
    │
Render.com / Node.js
    │
Next.js 15 (App Router)
├── app/page.tsx        — главная страница (Hero + Services + Contact)
├── app/layout.tsx      — корневой layout
├── components/
│   ├── ui/spotlight    — Aceternity UI Spotlight
│   ├── ui/splite       — Spline 3D интеграция
│   └── ui/card         — glassmorphism карточки
└── lib/utils.ts        — clsx + tailwind-merge хелперы
```

## Стек

- Next.js 15 (App Router, SSR)
- TypeScript strict
- Tailwind CSS 3 + Framer Motion 11
- Spline 3D (`@splinetool/react-spline`)
- Деплой: Render.com (render.yaml в корне)
