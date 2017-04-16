# Development README - Jumpstarter

[Heroku Link](#)

[Kickstarter Link](http://www.kickstarter.com)

## Minimum Viable Product (MVP)

**Jumpstarter** is a web application inspired by the popular crowdfunding
site Kickstarter; its backend runs on Ruby on Rails and its front-end
is built in React / Redux.

- New account creation, login and guest/demo login
- A production README
- Hosting on Heroku
- Projects
  - Users can create, read, and edit projects
- Backing projects & rewards
  - Users can invest in projects with monetary investments
  - Investments connect the user to a series of rewards
- Search
  - A search bar on main menu to dynamically load projects
- Categories / Discover feature
  - A categories page that lists top projects (by funding) for each category
- **Bonus**: Likes
- **Bonus**: Credit card payments

# Design Docs
=============

[API Endpoints](./api-endpoints.md)

[Component Hierarchy](./component-hierarchy.md)

[Sample State](./sample-state.md)

[Schema](./schema.md)

# Implementation Timeline
=========================

## Phase 1: Backend Setup and Front End User Authentication (2 days)
**Objective:** Rails backend for creating / logging in user
with session-token and front-end signup from
