<h1 align="center">Hi there, I'm <a href="https://vk.com/danil_sobolev1998" target="_blank">Danil</a>

## Shop app

Тестовый проект

## Технологии

-   React
-   Redux/Toolkit
-   TypeScript
-   Material UI
-   SCSS
-   Vite

## Использование

Для работы требуется node.js версии 8+ и выше.

Откройте корневую папку проекта и выполните команду:

```
npm i or npm install
```

из той же папки выполните команду:

```
npm start
```
чтобы начать работать, перейдите на http://localhost:5173/shop

## Создание билда

Чтобы выполнить продакшн сборку, выполинте команду:

```
npm run build
```

## Форматирование ошибок

чтобы выполнить форматирование ошибок, выполните команду:

```
npm run fix
```

## Структура папок и файлов
- **public/**
    - **404.html**
-   **src/**
    -   **app/**
        -   **providers/**
            - **ErrorBoundary**
            - **RouteProvider**
            - **StoreProvider**
        -   **styles/**
            - **App.scss**
            - **main.scss**
            - **reset.scss**
            - **variables.scss**
        -   **types/**
        -   **variables/**
        -   app.tsx
    -   **entities/**
        -   **Basket/**
        -   **Catalog/**
    -   **pages/**
        -   **ui/**
            - **Basket**
            - **Catalog**
            - **ErrorPage**
            - **NotFound**
        -   index.ts
    -   **shared/**
        -   **config/**
            -   routerConfig
        -   **lib/**
            -   **classnames/**
            -   **getFromLocalStorage/**
            -   **setItemInLocalStorage/**
- **.eslint.cjs**
- **.prettierrc**
- **index.html**
- **package-lock.json**
- **tsconfig.ts**
- **tsconfig.node.json**
- **viteconfig.ts**


