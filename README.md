# itx-ui-kit

📦 На проекте используется **pnpm**.

---

## 🚀 Архитектура кита

Кит организован по принципам **Atomic Design** для модульной и масштабируемой разработки интерфейсов (почитать можно тут [Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)).

```
src/
├─ components/
│  ├─ atoms/      # простейшие, неделимые компоненты, практически нет логики (Button, Tag).
│  ├─ molecules/  # комбинации атомов (например - TagGroup, Card, Accordion)
│  ├─ organisms/  # составные блоки из atoms и molecules (Header, Footer)
│  └─ templates/  # каркасы страниц (Layouts), собирают organisms, molecules, organisms и имеют слоты
├─ stories/
│  ├─ atoms/      # сторис для атомов
│  ├─ molecules/  # сторис для молекул
│  ├─ organisms/  # сторис для организмов
└─ └─ templates/  # сторис каркасов страниц

```
#### Основная идея:

Файлы сторис хранятся отдельно от компонентов в `src/stories`, чтобы:

- сохранять чистую структуру `src/components`;
- чёткое разделение контекста;
- централизованно управлять сторис и мок-данными;

---

### 🧩 Принципы Atomic Design

- **atoms** — простейшие, универсальные компоненты с минимальной стилизацией и практически без логики
- **molecules** — компоненты, состоящие из нескольких `atoms`
- **organisms** — составные компоненты из `atoms` и `molecules`
- **templates** — каркасы и layouts, собирающие `atoms`, `molecules`, `organisms`, имеют слоты

Основная идея:

- каждый уровень использует только нижележащие;
- атомы независимы и универсальны;
- молекулы и организмы формируют композицию;
- структура помогает масштабировать UI-kit и поддерживать единый визуальный стиль.

---

### 📦 Инкапсуляция и экспорт

Каждая группа компонентов инкапсулируется через `index.ts`:

```ts
// src/components/atoms/index.ts
export { default as Button } from './Button.vue';
export { default as Tag } from './Tag.vue';
```

Это позволяет импортировать компоненты централизованно:

```ts
import { Button, Tag } from '@/components';
```

- Когда добавляете новый компонент/токен не забываем его пробрасывать в index.ts соответствующей директории.

в `.storybook/preview.js` импортятся все стили.

```ts
//.storybook/preview.js
import '@/styles/index.ts';
```

