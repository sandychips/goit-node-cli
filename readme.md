# 📒 GOIT Node.js CLI

[![Node.js](https://img.shields.io/badge/Node.js-20.x-green?logo=node.js)](https://nodejs.org/)  
[![npm](https://img.shields.io/badge/npm-%5E9.0.0-red?logo=npm)](https://www.npmjs.com/)  
[![Dependencies](https://img.shields.io/david/your-username/goit-node-cli)](https://github.com/your-username/goit-node-cli)  
[![License](https://img.shields.io/github/license/your-username/goit-node-cli)](./LICENSE)  

Простий навчальний CLI-додаток для роботи зі списком контактів.  
Проєкт реалізований у рамках домашнього завдання з курсу **Node.js**.  

---

## ⚡ Функціонал
- Отримання списку всіх контактів у вигляді таблиці  
- Пошук контакту за `id`  
- Додавання нового контакту (з автоматично згенерованим `id`)  
- Видалення контакту за `id`  

Дані зберігаються у файлі [`db/contacts.json`](./db/contacts.json).  

---

## 🛠 Використані модулі
- [**fs/promises**](https://nodejs.org/api/fs.html) – для роботи з файловою системою (читання/запис JSON)  
- [**path**](https://nodejs.org/api/path.html) – для формування шляхів у проекті  
- [**uuid**](https://www.npmjs.com/package/uuid) – для генерації унікальних `id`  
- [**yargs**](https://www.npmjs.com/package/yargs) – для зручного парсингу аргументів командного рядка  

---

## 🚀 Встановлення
```bash
git clone https://github.com/your-username/goit-node-cli.git
cd goit-node-cli
npm install
```

---

## 📌 Використання

### 1. Список контактів
```bash
node index.js -a list
```
> Виведе всі контакти у вигляді таблиці (`console.table`).

---

### 2. Отримати контакт по `id`
```bash
node index.js -a get -i 05olLMgyVQdWRwgKfg5J6
```
> Виведе у консоль знайдений об’єкт контакту або `null`.

---

### 3. Додати контакт
```bash
node index.js -a add -n "Mango" -e "mango@gmail.com" -p "322-22-22"
```
> Створить новий контакт та виведе його у консоль.

---

### 4. Видалити контакт
```bash
node index.js -a remove -i qdggE76Jtbfd9eWJHrssH
```
> Видалить контакт за `id` та виведе об’єкт видаленого контакту або `null`.

---

## 📂 Структура проєкту
```
goit-node-cli/
├── db/
│   └── contacts.json   # База контактів
├── contacts.js         # Логіка роботи з контактами
├── index.js            # CLI-інтерфейс
├── package.json
└── README.md
```

---

## ✨ Приклад роботи
(додай сюди скріншоти роботи у терміналі, щоб виглядало наочно 😉)  

---

## 📜 Ліцензія
Цей проєкт поширюється під ліцензією [MIT](./LICENSE).

