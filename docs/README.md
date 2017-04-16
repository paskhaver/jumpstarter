# Development README - Jumpstarter

[Heroku Link](#)

[Trello Link](https://trello.com/b/BY6229t7/jumpstarter)

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
  - Users can pledge to a project by choosing a reward
  - The reward is tied to a pledge amount
  - The aggregate of pledge amounts across a project is its funding total
- Search
  - A search bar on the main nav dynamically loads 4 projects at  atime
- Categories / Discover feature
  - A main nav offers consistent access to an **Explore** page with all categories
  - A single categories page includes top projects in that category, sorted by amount raised
- **Bonus**: Likes
- **Bonus**: Credit card payments

# Design Docs

[API Endpoints](./api-endpoints.md)

[Component Hierarchy](./component-hierarchy.md)

[Sample State](./sample-state.md)

[Schema](./schema.md)

# Implementation Timeline

## Phase 1: Backend Setup and Front End User Authentication (2 days)
**Objective:** Rails backend for creating / logging in user
with session-token and front-end signup from

## Phase 2: Create Project Page

## Phase 3: User Backing Projects

## Phase 4: Categories

## Phase 5: Search / Discover (1 day)
**Objective:**
