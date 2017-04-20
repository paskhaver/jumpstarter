# Schema Information

## users

| column name     | data type | details                   |
|-----------------|-----------|---------------------------|
| id              | integer   | not null, PRIMARY KEY     |
| name            | string    | not null                  |
| email           | string    | not null, indexed, unique |
| password_digest | string    | not null                  |
| session_token   | string    | not null, indexed, unique |

- A User `has_many` **projects** (the ones they create)
- A User `has_many` **pledges** (which connects them to rewards)
- A User `has_many` **rewards** (association through pledges)
- A User `has_many` **supported_projects** (association through rewards)

## projects

| column name         | data type | details               |
|---------------------|-----------|-----------------------|
| id                  | integer   | not null, PRIMARY KEY |
| creator_id          | integer   | not null, FOREIGN KEY |
| title               | string    | not null              |
| category            | string    | not null              |
| residence           | string    | not null              |
| blurb               | string    | optional              |
| end_date            | date      | optional              |
| funding_goal        | integer   | optional              |
| description         | text      | optional              |

FOREIGN KEY **creator_id** connects to PRIMARY KEY **id** in users table

- A Project `belongs_to` a User (the creator)
- A Project `has_many` **rewards**
- A Project `has_many` **pledges** (association through rewards)
- A Project `has_many` **supporters** (association through pledges)
- The **project's revenue** can be calculated with this formula:

number of pledges for a reward * pledge_amount = reward revenue

aggregate of all reward revenue = total project revenue

## rewards

| column name   | data type | details               |
|---------------|-----------|-----------------------|
| id            | integer   | not null, PRIMARY KEY |
| project_id    | integer   | not null, FOREIGN KEY |
| title         | string    | not null              |
| pledge_amount | integer   | not null              |
| description   | string    | not null              |
| delivery_date | date      | not null              |
| max_backers   | integer   | optional              |

FOREIGN KEY **project_id** related to PRIMARY KEY **id** in projects table

- A Reward `belongs_to` a **project**
- A Reward `has_many` **pledges**

## pledges

| column name | data type | details                           |
|-------------|-----------|-----------------------------------|
| id          | integer   | not null, primary key             |
| user_id     | integer   | not null, not unique, FOREIGN KEY |
| reward_id   | integer   | not null, not unique, FOREIGN KEY |

JOIN table connecting users and the projects they pledged to
FOREIGN KEY **user_id** related to PRIMARY KEY **id** in users table
FOREIGN KEY **reward_id** related to PRIMARY KEY **id** in rewards table

- A Pledge `belongs_to` a **User** (the supporter)
- A Pledge `belongs_to` a **Reward**
- A Pledge `has_one` **Project** (association through Reward)

Both the **user_id** and **reward_id** foreign keys are not unique.

- The same user can pledge more than once to acquire different rewards.
- The same user can pledge more than once for the same reward.
- A reward can have more than one user.

### Logic

- To pledge to a specific project, a user makes a donation in exchange for a reward. The **reward** is tied to a monetary amount.
- The connection between user and project is automatically available through the reward's connection with the project.

User ---->  Reward ----> Project
