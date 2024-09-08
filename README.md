# **CompParts Hub  (Client Side)** 

## Parts Manufacturer Website

Welcome to the **Client Side** repository of the **CompParts Hub**, a MERN stack-based website for managing orders, products, and users in a parts manufacturing business.

## 🚀 **Key Features**

1. **Responsive Layout**: Separate user-friendly layouts for **Users** and **Admins**.
2. **Home Page Sections**: Display tools/parts, business summary, and user reviews.
3. **Authentication**: Email/password-based login and **Google** social login using Firebase.
4. **Order Management**: Users can place, update, and manage their orders.
5. **Admin Controls**: Admin can manage products, orders, and make other users admins.
6. **Secure Payment**: Stripe integration for processing payments.
7. **Dashboard**: Separate user and admin dashboards with tailored functionalities.
8. **Custom Reviews**: Users can add reviews, visible on the homepage.
9. **Protected Routes**: Private routing for secured pages (purchase page, dashboard).
10. **JWT Authentication**: Token-based authentication using **JSON Web Tokens (JWT)**.

---

## 📜 **Pages & Functionalities**

- **Home Page**:  
  Features header, banner, tools/parts, business summary, customer reviews, and additional custom sections. Tools/Parts section includes a list of products with purchase buttons.

- **Purchase Page**:  
  Available only for logged-in users. Shows product details and allows users to place an order by specifying the quantity. Minimum and maximum quantities are enforced.

- **User Dashboard**:  
  Contains options for managing **My Orders**, **Add A Review**, and **My Profile**. Orders can be canceled or paid via **Stripe** integration.

- **Admin Dashboard**:  
  Admins have access to **Manage All Orders**, **Add A Product**, **Manage Products**, and **Make Admin** features. Admins can update product status or delete unpaid orders.

- **Blogs**:  
  Contains answers to key questions about React, state management, prototypical inheritance, and more.

- **My Portfolio**:  
  Displays developer details, including **name**, **email**, **skills**, and project links.

- **404 Page**:  
  Custom-designed **404 Page** with a meaningful message and image.

---

## 🛠️ **Technologies Used**

1. **React (Vite)**: Frontend framework for building user interfaces.
2. **Tailwind CSS**: Styling framework for custom, responsive designs.
3. **Daisy UI**: UI components library for styling.
4. **Firebase**: Authentication (email/password and Google), and hosting.
5. **MongoDB Atlas**: Database for storing users, products, and orders.
6. **Node.js**: Backend server framework.
7. **Express.js**: Server-side framework for routing and handling API requests.
8. **Stripe**: Payment gateway for processing secure payments.
9. **JWT (JSON Web Token)**: Token-based user authentication and authorization.

---


## Live Website

* Firebase: https://parts-manufacturer-client.web.app/

* Netlify: https://parts-manufacturer-client-nion.netlify.app/

* Surge: https://acceptable-shoe.surge.sh/
## Getting Startted

### 📂 **Folder Structure**

```plaintext
📦client
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┣ 📂contexts
 ┃ ┣ 📂hooks
 ┃ ┣ 📂pages
 ┃ ┣ 📂routes
 ┃ ┣ 📂utils
 ┃ ┣ 📜App.jsx
 ┃ ┣ 📜index.css
 ┃ ┗ 📜main.jsx
 ┗ 📜vite.config.js
```

---
## Installation


## 📝 **Instructions**

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/comp-parts-hub-client.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Add environment variables in `.env.local` for Firebase and Stripe configurations.Absolutely, here's the section on commits with a potential improvement:

## Commits

This repository adheres to a structured commit message convention to enhance readability and maintainability. Here's an overview of the key commit types:

- **feat:** Introduces a new feature to the application.
- **fix:** Addresses a bug or issue identified in the codebase.
- **docs:** Encompasses changes made to documentation, such as updates, additions, or corrections.
- **style:** Covers formatting adjustments, whitespace changes, or fixing minor inconsistencies like missing semicolons.
- **refactor:** Represents code structure improvements without altering functionality. This can involve code organization, renaming variables or functions, or improving readability.
- **test:** Introduces new tests or updates existing tests to ensure code quality and maintainability.
- **chore:** Encompasses changes that don't directly affect the application's functionality, such as updating build tasks, package manager configurations, or dependency versions.

**Optional Improvement:**

Consider adopting a more comprehensive commit message convention like Conventional Commits ([https://www.conventionalcommits.org/en/v1.0.0-beta.4/](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)). This approach provides a standard format for commit messages, including type, scope (optional), and a clear description of the change, making it easier to generate changelogs, automate workflows, and collaborate effectively.

By following these guidelines and potentially adopting a more detailed convention, you'll ensure clear and consistent commit messages that benefit you and your team in the long run.
## Contributing

Contributions are always welcome!

Contributions are welcome! Please open a pull request for any improvements or features.

Please adhere to this project's `code of conduct`.


## License

This project is licensed under the [MIT License](LICENSE).


## Deployment

To deploy this project run

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Nadim-Nion/parts-manufacturer-client.git
git push -u origin main

```


## Tech Stack

**Client:** React+Vite, React Router, Firebase (Authentication & Hosting), Tailwind CSS, Daisy UI, Axios JS

**Server:** Express.js, Node.js, JWT, Stripe

**Database:** MongoDB

**Tools:** Vite, Vercel, npm, Surge, Netlify

**State Management:** Context API



## FAQ

#### Is this website reponsible?

Answer : Yes, the full website is responsive for the all devices (Desktop, Tablet and Phone)

#### Is this website store data to the database?

Answer : I have stored all the data in MongoDB.

## 🚀 About Me
Hi, I am Nadim Mahmud Nion. I have recently concluded my graduation from the department of Computer Science and Engineering (CSE) at the Daffodil International University (DIU). I have been learning MERN Stack Web Development since 2022. I am expertise in the following skills:

* React

* Express.js 

* Node.js 

* MongoDB

* JWT

* Stripe

* Vite

* React Router

* Firebase (Authentication & Hosting)

* Vercel

* JavaScript

* Advanced JavaScript

* Daisy UI 

* Bootstrap

* Tailwind

* HTML5

* CSS3

* Media Query

I have built multiple projects using these skills. You are invited to my GitHub profile to know about my projects and don't forget to give a star to my projects.

