# Development README - Jumpstarter

[Heroku Link](#)

[Trello Link](https://trello.com/b/BY6229t7/jumpstarter)

## Minimum Viable Product (MVP)

**Jumpstarter** is a web application inspired by the popular crowdfunding
site Kickstarter; its backend runs on Ruby on Rails and its frontend
is built in React / Redux.

- Hosting on Heroku
- New account creation, login and guest/demo login
- A production README
- Projects
  - Users can create, read, edit and delete projects
- Rewards
  - Users can pledge to a project by choosing a reward tied to a pledge amount
- Search
  - Users can use search bar on the main nav to dynamically load 4 projects
- Categories / Discover feature
  - Users can discover categories through an **Explore** page on main nav
  - Users can browse categories page to find top-funded projects
- **Bonus**: Likes
  - Users can like a project, which shows up on their profiles
- **Bonus**: Credit card payments

# Design Docs

[View Wireframes](./wireframes)

[API Endpoints](./api-endpoints.md)

[Component Hierarchy](./component-hierarchy.md)

[Sample State](./sample-state.md)

[Schema](./schema.md)

# Implementation Timeline

### Phase 1: Backend Setup and Front End User Authentication (2 days)
**Objective:** Functioning Rails backend for creating / logging in user
as well as frontend signup form and login form

### Phase 2: Projects (3 days)
**Objective:** Projects can be created, read, edited, and
destroyed through the API.

### Phase 3: Rewards (2 days)
**Objective:** Users can pledge to projects to receive
rewards. Rewards increment the project's raised amount

### Phase 4: Categories (1 day)
**Objective:** Category pages display projects underneath
them, sorted by highest-grossing

### Phase 5: Search / Discover (1 day)
**Objective:** Search bar on nav bar dynamically loads
top 4 search results for user term
