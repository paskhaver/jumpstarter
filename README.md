# Jumpstarter

**Jumpstarter** is a clone of the popular crowdfunding site
[Kickstarter](http://www.kickstarter.com). Kickstarter allows users to
raise funds for projects by exchanging rewards for donations.

The app operates as follows:

  - Users create a project with a fundraising goal
  - Users attach limited **rewards** to the projects, each with a mimimum pledge amount
  - Other users make **pledges** to the project and receive the rewards in exchange for their financial support.

The Jumpstarter app can be found [here](https://aa-jumpstarter.herokuapp.com/)

## Features

- User authentication
  - A consistent NavBar component allows the user to login / signup from any page
  - Users are prohibited from certain actions (creating a project, pledging) if they are not signed in
- Projects
  - Users can create and edit projects, setting their titles, descriptions, end dates and more
  - The app calculates stats like the total amount raised and the days remaining
- Rewards
  - Users can attach rewards to projects, which other users can select
- Categories
  - An **Explore** section on the Nav allows users to see all categories
  - Each category page lists all projects within it and their current amount raised

## Languages, Frameworks, and Libraries
  - Backend
    - Ruby on Rails framework
    - PostgresSQL database
  - Frontend
    - React.js for visual components
    - Redux for state management
    - jQuery for AJAX requests
  - Gems
    - Bcrypt for user authentication
    - Jbuilder for custom JSON responses
    - Faker for randomly generated data

## Screenshots

![Sign up](/docs/screenshots/ShowProjectPage.png)
