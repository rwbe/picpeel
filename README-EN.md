🌍 *[Português](README.md) ∙ [English](README-EN.md)*

<p align="center">
  <img src="public/PicPeel.png" alt="Logo" width="35%"/>
</p>

<h1 align="center">PicPeel - Image Background Removal</h1>

<div align="center">
  <strong>✂️ Remove the background from your images with a single click 🖼️</strong>
</div>

## 🔭 Overview

PicPeel is an online tool that offers a quick and efficient solution for removing image backgrounds. With advanced technology, PicPeel enables users to transform their photos by automatically removing the background with precision and ease.

<p align="center">
  <img src="public/Screenshot.png" alt="Captura de Tela do App" width="100%" />
</p>

## 🌐 Integration with remove.bg API

PicPeel utilizes the remove.bg API to provide the functionality of background removal from images. This API is a specialized service that uses advanced algorithms to detect and remove backgrounds from photos accurately.

### How It Works:

- When an image is uploaded to PicPeel, it is sent to the remove.bg API.
- The API processes the image, identifying and removing the background.
- The processed image is then returned to PicPeel, where the user can view and download the background-free photo.

> [!IMPORTANT]
> - The remove.bg API offers a limited number of free background removals per month. After reaching this limit, additional credits must be purchased to continue using the service.
- To use the API in the development environment, you will need a valid API key. Include your API key in the `.env` file following the example provided in `.env.example`.

## 🔗 Links 

- ✨ Try the tool here: [Demo](https://picpeel.netlify.app/)

## 💻 Technologies

- **JavaScript**: A versatile and powerful programming language used to create dynamic client-side interactions.
- **TypeScript**: A JavaScript superset that adds static typing, enhancing code security and scalability.
- **React.js**: A JavaScript library for building user interfaces with reactive and efficient components.
- **Next.js**: A React framework that provides server-side rendering and image optimization, improving performance and SEO.
- **Material-UI**: A React component library for agile and consistent interface development.
- **Emotion**: A styling library that allows writing CSS styles with JavaScript, offering a powerful and flexible development experience.
- **Axios**: A promise-based HTTP client for making API requests.
- **Formik**: A library for building forms in React, facilitating form state management.
- **Yup**: A schema builder for value parsing and validation.
- **Tailwind CSS**: A CSS framework for rapid and responsive styling with utility classes.
- **Radix UI**: A set of low-level components for building high-quality and accessible user interfaces.
- **Next Themes**: A library for implementing theme switching (light/dark) in Next.js applications.

## ⚙️ Environment Setup 

To run the project locally in a development environment, make sure you have Node.js and npm (or yarn) installed. Then, follow these steps:

1. Clone the project 
   ```
   git clone https://github.com/rwbe/picpeel
   ```
2. Navigate to the project directory:
   ```
   cd picpeel
   ```
3. Install the dependencies using npm or yarn:
   ```
   npm install ou yarn install
   ```
4. Start the development server:
   ```
   npm run dev ou yarn dev
   ```
5. Open the application in your browser. By default, it will be available at:
   ```
   http://localhost:3000
   ```

## 🚀 Author

> This project was created by [**Ricardo Willian**](https://github.com/rwbe).

## ⭐️ Support

If you liked PicPeel and wish to support the project, consider giving a star to the repository on GitHub or sharing it on social media. Additionally, contributions are always welcome! If you have suggestions for improvements, corrections, or new features, feel free to make a Pull Request or open an Issue in the repository.

## 📜 License

This project is distributed under the [MIT License](LICENSE), allowing free use, modification, and distribution, provided that the same license and acknowledgment of the original authors are maintained.

---