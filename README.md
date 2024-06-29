# Проект README

## О проекте

### Название проекта

"Интернет-магазин товаров для дома и сада" (Garden Products)

### Ссылки

- [Макет проекта](https://www.figma.com/design/SDNWLzCWkh9ZXdCpWEaByv/project-frontend?node-id=7102-25841&t=8I7XJHj2kg8snkKu-0)
- [Техническое задание (ТЗ) или требования](https://docs.google.com/document/d/1of1D3n_a93wm-7BHfWKqkVa5oe8dUPHJ/edit)
- [Задеплоенная реализация](https://garden-products-yzsu.onrender.com)

### Общее описание

Наш "Интернет-магазин товаров для дома и сада" упрощает покупку товаров для дома и сада. Магазин предлагает скидки на различные товары и позволяет покупателям удобно фильтровать и выбирать продукты. С простым интерфейсом и эффективными фильтрами, нахождение нужного товара становится быстрым и легким.

### Основной функционал

- Маршрутизация
- Фильтрация
- Покупка товаров


## Реализованные функциональные требования

### Главная страница

- **Отображение списка из 4-х категорий**:
  - На главной странице отображается список из 4-х категорий товаров с соответствующими изображениями и названиями.
- **Форма на получение скидки 5% с валидацией вводимых данных на клиентской стороне**:
  - Реализована форма для получения скидки, включающая поля для ввода имени, электронной почты и номера телефона.
  - Валидация данных осуществляется с использованием библиотеки React Hook Form, проверяя корректность введенных данных (например, формат email).
- **Отображение 4 случайных товаров со скидкой**:
  - На главной странице отображаются 4 случайных товара, имеющих скидку, выбранных из базы данных.

### Категории товаров

- **Просмотр списка всех доступных категорий товаров**:
  - Создана отдельная страница, на которой отображаются все доступные категории товаров.
- **Возможность перехода в раздел "Товары по категориям"**:
  - При клике на карточку категории происходит переход в соответствующий раздел с товарами данной категории.

### Товары по категориям

- **Отображение списка товаров в выбранной категории**:
  - На странице категории отображается список всех товаров, относящихся к выбранной категории.
- **Возможность сортировки товаров**:
  - Реализованы опции сортировки товаров: по умолчанию, по убыванию цены, по возрастанию цены, по алфавиту.
- **Возможность фильтрации товаров**:
  - Реализованы фильтры для товаров: по наличию скидки и по диапазону цен.
- **Возможность перехода к подробному описанию конкретного товара**:
  - При клике на карточку товара пользователь перенаправляется на страницу с подробным описанием товара.

### Все товары

- **Отображение полного списка товаров**:
  - Создана страница, на которой отображаются все товары, доступные на сайте.
- **Возможность сортировки товаров**:
  - Реализованы те же опции сортировки, что и для товаров по категориям.
- **Возможность фильтрации товаров**:
  - Реализованы те же фильтры, что и для товаров по категориям.

### Товары со скидкой

- **Отображение списка товаров со скидкой**:
  - Создана отдельная страница для отображения всех товаров, имеющих скидку.
- **Возможность сортировки товаров**:
  - Реализованы те же опции сортировки, что и для других разделов.
- **Возможность фильтрации товаров по диапазону цен**:
  - Реализован фильтр для выбора товаров в определенном диапазоне цен.

### Подробное описание товара

- **Полная информация о выбранном товаре**:
  - На странице товара отображается название, цена, полное описание и изображения товара.
- **Возможность добавления товара в корзину**:
  - Реализована кнопка для добавления товара в корзину.

### Корзина

- **Отображение списка выбранных товаров с их количеством и общей стоимостью**:
  - В корзине отображаются все добавленные товары, их количество и общая стоимость.
- **Возможность изменения количества товаров, удаления товаров из корзины**:
  - Пользователь может изменять количество товаров или удалять их из корзины.
- **Расчет и отображение общей стоимости товаров в корзине**:
  - Корзина автоматически пересчитывает общую стоимость при изменении количества или удалении товаров.
- **Возможность отправки данных о заказе**:
  - Реализована форма для отправки данных о заказе, которая включает все необходимые поля для оформления заказа.

### Страница не найдена

- **Отображение страницы с сообщением о том, что запрашиваемая страница не найдена**:
  - Создана страница 404, которая отображается при попытке доступа к несуществующей странице.
- **Возможность вернуться на главную страницу**:
  - На странице 404 предусмотрена ссылка для возвращения на главную страницу.

## Дополнительные требования

- **Мобильная адаптивность**:
  - Все страницы и элементы сайта адаптированы для корректного отображения на различных устройствах, включая мобильные телефоны и планшеты.
- **Комментарии в коде**:
  - Код проекта содержит комментарии, объясняющие ключевые части логики и структуры.

## Ожидаемые результаты

- **Реализованное веб-приложение**:
  - Веб-приложение создано в соответствии с описанными требованиями.
- **Код проекта на GitHub**:
  - Код проекта загружен в репозиторий на GitHub.
- **Отчет по проекту**:
  - Подготовлен отчет, включающий описание реализованных функциональностей, сложности, решенных проблем и дальнейших планов.



## Стек технологий

### Перечисление используемых технологий и их использование

- **Frontend:**

  - **Html/SCSS:** Верстка и стилизация приложения
  - **JavaScript:** Динамическое поведение на клиентской стороне
  - **React:** Создание компонентов пользовательского интерфейса
  - **Redux-toolkit:** Управление состоянием приложения

- **Инструменты разработки:**

  - **Git:** Система контроля версий
  - **Webpack:** Сборка и оптимизация ресурсов

  **Библиотеки:**
  **react-router-dom:** Для отслеживания Роутинга
  **react-hook-form** Для валидации
  **classnames** Для управления аттрибута(class) || classnames
  **react-error-boundary** Для отслеживания и обработки ошибки
  **Redux-toolkit:** Управление состоянием приложения
- 
**Деплоймент:**
  - **Render:** Хостинг и развертывание приложения

## Авторы проекта

### Имя, фамилия: Хуршед Ахмаджонов

- **Контакты:** khurshedahmadjonov@gmail.com
- **LinkedIn:** [Хуршед Ахмаджонов](https://www.linkedin.com/in/khurshedahmadjonov/)
- **Вклад в проект:**
  - Реализация frontend компонентов
  - Настройка взаимодействия с backend
  - Стилизация приложения
  - Система добавления и удаления лайков
  - Добавление и удаление товаров из корзины
  - Управление маршрутизацией
  - Фильтрация через URL параметры
  - Приятный дизайн
  - Возможность читать о продукте

---

Если у вас будут вопросы или предложения, пожалуйста, свяжитесь со мной через указанные контакты. Мы всегда рады вашим отзывам!

---

# Project README

## About the Project

### Project Name

"Online store of goods for home and garden" (Garden goods)

### Links

- [Project Design](https://www.figma.com/design/SDNWLzCWkh9ZXdCpWEaByv/project-frontend?node-id=7102-25841&t=8I7XJHj2kg8snkKu-0)
- [Technical Specifications (TS) or Requirements](https://docs.google.com/document/d/1of1D3n_a93wm-7BHfWKqkVa5oe8dUPHJ/edit)
- [Deployed Application](https://garden-products-yzsu.onrender.com)

### General Description

Our "Home and Garden Products Online Store" makes it easy to shop for home and garden items. The store offers discounts on various products and allows customers to filter and choose products conveniently. With a simple interface and effective filters, finding the right product is quick and easy.

### Key Features

- Routing
- Filtration
- Products purchase

## Technology Stack

### List of Used Technologies and Their Purposes

- **Frontend:**

  - **Html/SCSS:** Markup and styling of the application
  - **JavaScript:** Client-side dynamic behavior
  - **React:** Building user interface components
    **Redux-toolkit:** Building user interface components

- **Development Tools:**

  - **Git:** Version control system
  - **Webpack:** Resource bundling and optimization

  **Libraries:**

- **react-router-dom:** For routing
- **react-hook-form:** For validation
- **classnames:** For managing the class attribute
  **react-error-boundary** for tracking and handling errors
- **Deployment:**
  - **Render:** Hosting and deployment of the application

## Project Authors

### Name, Surname: Khurshed Ahmadjonov

- **Contact:** khurshedahmadjonov@gmail.com
- **LinkedIn:** [Khurshed Ahmadjonov](https://www.linkedin.com/in/khurshedahmadjonov/)
- **Contribution to the Project:**
  - Implementation of frontend components
  - Setting up interaction with the backend
  - Styling the application
  - System for adding and removing likes
  - Adding and removing items from the cart
  - Managing routing
  - Filtering through URL parameters
  - Pleasant design
  - Ability to read about the product

---

If you have any questions or suggestions, please contact me through the provided details. I always welcome your feedback!

---

# Projekt README

## Über das Projekt

### Projektname

"Online-Shop für Haus- und Gartenprodukte" (Garden goods)

### Links

- [Projektdesign](https://www.figma.com/design/SDNWLzCWkh9ZXdCpWEaByv/project-frontend?node-id=7102-25841&t=8I7XJHj2kg8snkKu-0)
- [Technische Spezifikationen (TS) oder Anforderungen](https://docs.google.com/document/d/1of1D3n_a93wm-7BHfWKqkVa5oe8dUPHJ/edit)
- [Bereitgestellte Anwendung](https://garden-products-yzsu.onrender.com)

### Allgemeine Beschreibung

Unser "Online-Shop für Haus- und Gartenprodukte" macht das Einkaufen von Haus- und Gartenartikeln einfach. Der Shop bietet Rabatte auf verschiedene Produkte und ermöglicht es Kunden, Produkte bequem zu filtern und auszuwählen. Mit einer einfachen Benutzeroberfläche und effektiven Filtern ist das Finden des richtigen Produkts schnell und einfach.

### Hauptfunktionen

- Routing
- Filtration
- Produktauswahl


## Implemented Functional Requirements

### Main Page

- **Display a list of 4 categories**:
  - The main page displays a list of 4 product categories with corresponding images and names.
- **Form to get a 5% discount with client-side validation**:
  - A form for obtaining a discount is implemented, including fields for entering name, email, and phone number.
  - Data validation is done using the React Hook Form library, ensuring the correctness of the entered data (e.g., email format).
- **Display 4 random discounted products**:
  - The main page shows 4 random discounted products selected from the database.

### Product Categories

- **View a list of all available product categories**:
  - A separate page is created displaying all available product categories.
- **Ability to navigate to the "Products by Category" section**:
  - Clicking on a category card takes the user to the respective category section with products of that category.

### Products by Category

- **Display a list of products in the selected category**:
  - The category page shows a list of all products belonging to the selected category.
- **Ability to sort products**:
  - Sorting options are implemented: default, descending price, ascending price, alphabetical.
- **Ability to filter products**:
  - Filters are implemented for products: by availability of discount and by price range.
- **Ability to navigate to the detailed description of a specific product**:
  - Clicking on a product card redirects the user to the page with a detailed description of the product.

### All Products

- **Display the full list of products**:
  - A page is created displaying all products available on the site.
- **Ability to sort products**:
  - The same sorting options as for products by category are implemented.
- **Ability to filter products**:
  - The same filters as for products by category are implemented.

### Discounted Products

- **Display a list of discounted products**:
  - A separate page is created to display all discounted products.
- **Ability to sort products**:
  - The same sorting options as for other sections are implemented.
- **Ability to filter products by price range**:
  - A filter is implemented to select products within a certain price range.

### Detailed Product Description

- **Full information about the selected product**:
  - The product page displays the name, price, full description, and images of the product.
- **Ability to add a product to the cart**:
  - A button is implemented to add the product to the cart.

### Cart

- **Display a list of selected products with their quantity and total cost**:
  - The cart displays all added products, their quantity, and the total cost.
- **Ability to change the quantity of products, remove products from the cart**:
  - The user can change the quantity of products or remove them from the cart.
- **Calculate and display the total cost of products in the cart**:
  - The cart automatically recalculates the total cost when the quantity is changed or products are removed.
- **Ability to submit order data**:
  - A form for submitting order data is implemented, including all necessary fields for order processing.

### Page Not Found

- **Display a page with a message that the requested page was not found**:
  - A 404 page is created that is displayed when trying to access a non-existent page.
- **Ability to return to the main page**:
  - The 404 page includes a link to return to the main page.

## Additional Requirements

- **Mobile responsiveness**:
  - All pages and elements of the site are adapted for correct display on various devices, including mobile phones and tablets.
- **Code comments**:
  - The project code contains comments explaining key parts of the logic and structure.

## Expected Results

- **Implemented web application**:
  - The web application is created in accordance with the described requirements.
- **Project code on GitHub**:
  - The project code is uploaded to a repository on GitHub.
- **Project report**:
  - A report is prepared, including a description of the implemented functionalities, challenges, solved problems, and future plans.

---

# E-Commerce-Webanwendung

## Implementierte Funktionale Anforderungen

### Hauptseite

- **Anzeige einer Liste von 4 Kategorien**:
  - Auf der Hauptseite wird eine Liste von 4 Produktkategorien mit entsprechenden Bildern und Namen angezeigt.
- **Formular zum Erhalt eines 5%-Rabattes mit Client-seitiger Validierung**:
  - Ein Formular zum Erhalt eines Rabattes wird implementiert, das Felder zum Eingeben von Name, E-Mail und Telefonnummer enthält.
  - Die Datenvalidierung erfolgt mit der Bibliothek React Hook Form, die die Korrektheit der eingegebenen Daten überprüft (z.B. E-Mail-Format).
- **Anzeige von 4 zufälligen Produkten mit Rabatt**:
  - Auf der Hauptseite werden 4 zufällige, rabattierte Produkte aus der Datenbank angezeigt.

### Produktkategorien

- **Anzeigen einer Liste aller verfügbaren Produktkategorien**:
  - Eine separate Seite wird erstellt, auf der alle verfügbaren Produktkategorien angezeigt werden.
- **Möglichkeit, zum Abschnitt "Produkte nach Kategorien" zu navigieren**:
  - Beim Klicken auf eine Kategorienkarte gelangt der Benutzer zum entsprechenden Abschnitt mit Produkten dieser Kategorie.

### Produkte nach Kategorien

- **Anzeige einer Liste von Produkten in der ausgewählten Kategorie**:
  - Auf der Kategorieseite wird eine Liste aller Produkte angezeigt, die zur ausgewählten Kategorie gehören.
- **Möglichkeit, Produkte zu sortieren**:
  - Sortieroptionen werden implementiert: Standard, absteigender Preis, aufsteigender Preis, alphabetisch.
- **Möglichkeit, Produkte zu filtern**:
  - Filter für Produkte werden implementiert: nach Verfügbarkeit eines Rabattes und nach Preisspanne.
- **Möglichkeit, zur detaillierten Beschreibung eines bestimmten Produkts zu navigieren**:
  - Beim Klicken auf eine Produktkarte wird der Benutzer zur Seite mit der detaillierten Produktbeschreibung weitergeleitet.

### Alle Produkte

- **Anzeige der vollständigen Produktliste**:
  - Eine Seite wird erstellt, auf der alle verfügbaren Produkte der Website angezeigt werden.
- **Möglichkeit, Produkte zu sortieren**:
  - Dieselben Sortieroptionen wie für Produkte nach Kategorien werden implementiert.
- **Möglichkeit, Produkte zu filtern**:
  - Dieselben Filter wie für Produkte nach Kategorien werden implementiert.

### Rabattierte Produkte

- **Anzeige einer Liste von Produkten mit Rabatt**:
  - Eine separate Seite wird erstellt, auf der alle rabattierten Produkte angezeigt werden.
- **Möglichkeit, Produkte zu sortieren**:
  - Dieselben Sortieroptionen wie in anderen Abschnitten werden implementiert.
- **Möglichkeit, Produkte nach Preisspanne zu filtern**:
  - Ein Filter zur Auswahl von Produkten innerhalb einer bestimmten Preisspanne wird implementiert.

### Detaillierte Produktbeschreibung

- **Vollständige Informationen über das ausgewählte Produkt**:
  - Auf der Produktseite werden der Name, der Preis, die vollständige Beschreibung und die Bilder des Produkts angezeigt.
- **Möglichkeit, ein Produkt in den Warenkorb zu legen**:
  - Eine Schaltfläche zum Hinzufügen des Produkts in den Warenkorb wird implementiert.

### Warenkorb

- **Anzeige einer Liste ausgewählter Produkte mit deren Menge und Gesamtkosten**:
  - Im Warenkorb werden alle hinzugefügten Produkte, deren Menge und die Gesamtkosten angezeigt.
- **Möglichkeit, die Menge der Produkte zu ändern, Produkte aus dem Warenkorb zu entfernen**:
  - Der Benutzer kann die Menge der Produkte ändern oder sie aus dem Warenkorb entfernen.
- **Berechnung und Anzeige der Gesamtkosten der Produkte im Warenkorb**:
  - Der Warenkorb berechnet automatisch die Gesamtkosten, wenn die Menge geändert oder Produkte entfernt werden.
- **Möglichkeit, Bestelldaten zu übermitteln**:
  - Ein Formular zur Übermittlung der Bestelldaten wird implementiert, das alle notwendigen Felder für die Auftragsabwicklung enthält.

### Seite nicht gefunden

- **Anzeige einer Seite mit der Nachricht, dass die angeforderte Seite nicht gefunden wurde**:
  - Eine 404-Seite wird erstellt, die angezeigt wird, wenn versucht wird, auf eine nicht existierende Seite zuzugreifen.
- **Möglichkeit, zur Hauptseite zurückzukehren**:
  - Auf der 404-Seite ist ein Link vorgesehen, um zur Hauptseite zurückzukehren.

## Zusätzliche Anforderungen

- **Mobile Anpassungsfähigkeit**:
  - Alle Seiten und Elemente der Website sind für die korrekte Darstellung auf verschiedenen Geräten, einschließlich Mobiltelefonen und Tablets, angepasst.
- **Kommentare im Code**:
  - Der Projektcode enthält Kommentare, die wichtige Teile der Logik und Struktur erklären.

## Erwartete Ergebnisse

- **Implementierte Webanwendung**:
  - Die Webanwendung wird gemäß den beschriebenen Anforderungen erstellt.
- **Projektcode auf GitHub**:
  - Der Projektcode wird in ein Repository auf GitHub hochgeladen.
- **Projektbericht**:
  - Ein Bericht wird vorbereitet, der eine Beschreibung der implementierten Funktionalitäten, Herausforderungen, gelösten Probleme und zukünftigen Pläne enthält.


## Technologiestack

### Liste der verwendeten Technologien und deren Zwecke

- **Frontend:**

  - **Html/SCSS:** Markup und Styling der Anwendung
  - **JavaScript:** Dynamisches Verhalten auf der Client-Seite
  - **React:** Erstellen von Benutzeroberflächenkomponenten
    **Redux-toolkit:** Zustandverwaltung der Anwendung

- **Entwicklungstools:**

  - **Git:** Versionskontrollsystem
  - **Webpack:** Ressourcenerstellung und -optimierung

  **Bibliotheken:**

- **react-router-dom:** Für Routing
- **react-hook-form:** Für Validierung
- **classnames:** Für die Verwaltung des class-Attributs
- **react-error-boundary** zur Verfolgung und Behandlung von Fehlern

- **Bereitstellung:**
  - **Render:** Hosting und Bereitstellung der Anwendung

## Projektautoren

### Name, Nachname: Khurshed Ahmadjonov

- **Kontakt:** khurshedahmadjonov@gmail.com
- **LinkedIn:** [Khurshed Ahmadjonov](https://www.linkedin.com/in/khurshedahmadjonov/)
- **Beitrag zum Projekt:**
  - Implementierung der Frontend-Komponenten
  - Einrichtung der Interaktion mit dem Backend
  - Styling der Anwendung
  - System zum Hinzufügen und Entfernen von Likes
  - Hinzufügen und Entfernen von Artikeln aus dem Warenkorb
  - Verwaltung der Routing
  - Filtern durch URL-Parameter
  - Angenehmes Design
  - Möglichkeit, Informationen über das Produkt zu lesen

---

Wenn Sie Fragen oder Vorschläge haben, kontaktieren Sie uns bitte über die angegebenen Kontaktdaten. Wir freuen uns immer über Ihr Feedback!

---
