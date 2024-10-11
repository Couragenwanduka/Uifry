# uifry

**uifry** is a static site application built with Next.js. This application features multiple pages, including an About page, a Services page, a Contact page, and a Blog page. It offers a responsive design and an engaging user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Multi-page layout with:
  - About page
  - Services page
  - Contact page
  - Blog page
- Responsive design for optimal viewing on various devices
- Interactive map using Leaflet with routing functionality
- Clean and modern UI components

## Technologies Used

- **Frontend**:
  - [Next.js](https://nextjs.org/): A React framework for building server-rendered applications.
  - [React](https://reactjs.org/): A JavaScript library for building user interfaces.
  - [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript.
  - [Leaflet](https://leafletjs.com/): A JavaScript library for interactive maps.
  - [React-Leaflet](https://react-leaflet.js.org/): A React wrapper for Leaflet.
  - [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for styling.

## Installation

### Prerequisites

- Node.js (version X.X.X or higher)
- npm (Node package manager)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Couragenwanduka/Uifry.git
   cd uifry



2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

- Navigate through the application using the top navigation menu to access the About, Services, Contact, and Blog pages.
- The interactive map can be viewed on the designated page in the `content` folder, where users can input locations and get routing directions.

## Customization

You can customize various aspects of the application, including:

1. **Page Content**: Modify the content in the respective page components located in the `pages` directory.

2. **Map Settings**: Update the initial view and zoom level in the map component located in the `content` folder.

3. **Markers**: Change marker icons and their positions in the map component.

4. **Styling**: Adjust styles using Tailwind CSS classes as needed.

## Directory Structure

```plaintext
uifry/
├── public/
│   ├── favicon.ico
│   ├── marker-icon-2x.png
│   └── images/
├── src/
│   ├── components/
│   │   └── OtherComponent.tsx
│   ├── content/
│   │   └── MyMapWithDirections.tsx  # Map component
│   ├── pages/
│   │   ├── about.tsx
│   │   ├── services.tsx
│   │   ├── contact.tsx
│   │   ├── blog.tsx
│   │   └── index.tsx
│   ├── styles/
│   │   └── global.css
│   └── utils/
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature-branch
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m 'Add new feature'
   ```

4. Push to the branch:

   ```bash
   git push origin feature-branch
   ```

5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```


### Instructions for Use
1. **Replace Placeholders**: Update the placeholders (e.g., `your-username`) with your GitHub username.
2. **Adjust Features and Technologies**: Tailor the features and technologies sections based on your actual project details.
3. **Directory Structure**: Adjust the directory structure if your project layout is different.
4. **Additional Sections**: Add any additional sections relevant to your application.

Feel free to let me know if you need further modifications or additions!

```
