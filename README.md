# Portfolio Website

This is a personal portfolio website built using **React**, which fetches data from the **GitHub API** to display a list of public repositories. Users can search repositories by name, description, readme, and topics. The website also includes routing for different pages and handles errors effectively.

## Demo

You can view a live demo of the website [by clicking here](https://portfolio-zaladeokins-projects.vercel.app/).

## Features

- **GitHub API Integration**: Fetches the list of public repositories for a specific user.
- **Search Functionality**: Allows searching repositories by Name, Description, Readme, and Topics
- **Routing**: Handled routing with **react-router-dom**.
- **FontAwesome**: Integrated for adding icons throughout the website.
- **HTML Parsing**: Parse README.md file as HTML with **html-react-parser** 

## Dependencies

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [GitHub API](https://docs.github.com/en/rest) - Used to fetch public repositories.
- [react-router-dom](https://reactrouter.com/web/guides/quick-start) - Library for handling routing in React.
- [react-error-boundary](https://www.npmjs.com/package/react-error-boundary) - A component-based error boundary for React.
- [html-react-parser](https://www.npmjs.com/package/html-react-parser) - Library converts an HTML string to one or more React elements.
- [FontAwesome](https://fontawesome.com/) - Library for icons.

## Pages

1. **Home Page**: 
   - The page is stylishly designed with a **typewriter effect**.
   
2. **About Page**: 
   - Displays information about the user.
   - A custom error is intentionally thrown here and handled gracefully by `react-error-boundary`.

3. **Portfolio Page**: 
   - Displays a list of public GitHub repositories.
   - Includes a search bar to find repositories based on name, description, readme, or topics. 
   - Features functionalities like **pagination** and **filter**.
   - Clicking on a project will navigate to a routes that render the content of the repository README.md content to supply detailed information about the project.

4. **Service Page**: 
   - Contains information about services offered.
   - Triggers a "Not Found" error and redirects to the custom 404 page.

5. **Contact Page**: 
   - Includes a form to contact the owner of the Portfolio website.
   - Also triggers a "Not Found" error handled by the 404 page.

6. **404 Error Page**: 
   - Displays when users navigate to an unknown route such as the `Service` or `Contact` pages.

## Installation

To run this project locally, follow the steps below:

1. Clone the repository:

   ```bash
    git clone https://github.com/zaladeokin/portfolio.git

   ```

2. Navigate to the project directory:

   ```bash
    cd your-portfolio

   ```

3. Install the dependencies:

   ```bash
    npm install

   ```

4. Create .env file with the following key=value in the root folder
```bash
    # OWNER INFO
    REACT_APP_FIRSTNAME_WITH_INITIALS=your_firstname_with_initials

    #SOCIAL LINKS
    REACT_APP_TWITTER=your_twitter_profile_link
    REACT_APP_FACEBOOK=your_facedbook_profile_link
    REACT_APP_INSTAGRAM=your_instagram_profile_link
    REACT_APP_LINKEDIN=your_linkedin_link
    REACT_APP_GITHUB=your_github_profile_link
    REACT_APP_GH_USERNAME=your_github_username

```

5. Run the project:

   ```bash
    npm start

   ```

6. Open the app in your browser at (http://localhost:3000)[http://localhost:3000].