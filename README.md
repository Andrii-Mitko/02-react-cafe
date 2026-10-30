# Cafe Feedback

Застосунок для збору відгуків відвідувачів кафе: голосування за варіантами Good, Neutral та Bad зі статистикою.

🔗 **Демо:** [02-react-cafe-psi-ecru.vercel.app](02-react-cafe-psi-ecru.vercel.app)

## Можливості

- Голосування за три варіанти відгуку
- Статистика: кількість голосів кожного типу
- Повідомлення, коли відгуків ще немає

## Технології

- React 19, TypeScript
- Vite, React Compiler
- CSS Modules, clsx, modern-normalize

## Запуск локально

```bash
git clone https://github.com/Andrii-Mitko/02-react-cafe
cd 02-react-cafe
npm install
npm run dev
```

## Скрипти

| Команда           | Опис                              |
| ----------------- | --------------------------------- |
| `npm run dev`     | Режим розробки                    |
| `npm run build`   | Перевірка типів і продакшн-збірка |
| `npm run preview` | Локальний перегляд збірки         |
| `npm run lint`    | Перевірка ESLint                  |

## Структура проєкту

```
src/
├── components/   # App, CafeInfo, VoteOptions, VoteStats, Notification
├── types/        # типи голосів
└── main.tsx      # точка входу
```

## Автор

**Andrii Mitko** — Full Stack JavaScript Developer

- Портфоліо: [andrii-mitko-brand.vercel.app](https://andrii-mitko-brand.vercel.app/)
- GitHub: [@Andrii-Mitko](https://github.com/Andrii-Mitko)
- LinkedIn: [andrii-mitko](https://www.linkedin.com/in/andrii-mitko/)
