# Jumpstarter

**Jumpstarter** is a clone of the popular crowdfunding site
[Kickstarter](http://www.kickstarter.com). The app allows users to
raise funds for projects by exchanging rewards for monetary donations.

The app operates as follows:

  - Users create a project with a fundraising goal
  - Users attach limited **rewards** to the projects, each with a mimimum pledge amount
  - Other users make **pledges** to the project and receive the rewards in exchange for their financial support.

The Jumpstarter app can be found [here](https://aa-jumpstarter.herokuapp.com/).

## Features

- User authentication
  - A consistent NavBar component allows the user to login / signup from any page
  - Users are prohibited from certain actions (creating a project, pledging) unless signed in
- Projects
  - Users can create and edit projects with titles, descriptions, end dates and more.
  - The app calculates stats like the total amount raised and days until the end date/
- Rewards
  - Users can create, edit and delete rewards for their own projects,
  - Other users can select a pledge, which increments the project's revenue
- Categories
  - An **Explore** section on the Nav allows users to see all categories
  - Each category page lists all projects within it and their current amount raised

## Languages, Frameworks, and Libraries
  - Backend
    - Ruby on Rails framework
    - PostgreSQL database
  - Frontend
    - React.js for visual components
    - Redux for state management
    - jQuery for AJAX requests
  - Gems
    - Bcrypt for user authentication
    - Jbuilder for custom JSON responses
    - Faker for randomly generated data

## Screenshots

![Project Page](/docs/screenshots/ShowProjectPage.png)
![Project Rewards](/docs/screenshots/ProjectRewards.png)
![Add Reward](/docs/screenshots/AddReward.png)
![Sign Up](/docs/screenshots/SignUp.png)
