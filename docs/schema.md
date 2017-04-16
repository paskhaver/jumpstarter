# Schema Information

## users

| column name     | data type | details                   |
|-----------------|-----------|---------------------------|
| id              | integer   | not null, primary key     |
| name            | string    | not null                  |
| email           | string    | not null, indexed, unique |
| password_digest | string    | not null                  |
| session_token   | string    | not null, indexed, unique |

## projects

| column name         | data type | details               |
|---------------------|-----------|-----------------------|
| id                  | integer   | not null, primary key |
| creator_id          | integer   | not null, FOREIGN KEY |
| title               | string    | not null              |
| blurb               | string    | not null              |
| category            | string    | not null              |
| end_date            | date      | not null              |
| funding_goal        | integer   | not null              |
| total_amount_raised | integer   | not null              |
| description         | text      | not null              |

FOREIGN KEY **creator-id** related to PRIMARY KEY **id** in users table

In theory, the *total_amount_raised* column is not needed.
The project has a connection to the **rewards** table,
which has a connection to the **pledges** table. The
*total_amount_raised* can be calculated with data from
separate tables; duplication exists.

number of pledges for a reward * pledge_amount = revenue brought in by reward
aggregate of all revenue = total project revenue

At the same time, it seems intensive for the project to get ALL
of its rewards, then multiply each reward's required pledge amount by
the number of pledges for it, then aggregate that. This would occur
EVERYTIME the page is accessed.

Upon a user pledge, it seems simpler to
1) manually update the *total_amount_raised* in **projects** table
2) create a new row in the **pledges** table connecting user to their reward

## rewards

| column name   | data type | details               |
|---------------|-----------|-----------------------|
| id            | integer   | not null, primary key |
| project_id    | integer   | not null, FOREIGN key |
| title         | string    | not null              |
| pledge_amount | integer   | not null              |
| description   | string    | not null              |
| delivery_date | date      | not null              |
| max_backers   | integer   | default of 0          |

FOREIGN KEY **project-id** related to PRIMARY KEY **id** in projects table

## pledges

| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | integer   | not null, primary key |
| user_id     | integer   | not null, FOREIGN KEY |
| reward_id   | integer   | not null, FOREIGN KEY |

JOIN table connecting users and the projects they pledged to
FOREIGN KEY **user-id** related to PRIMARY KEY **id** in users table
FOREIGN KEY **reward-id** related to PRIMARY KEY **id** in rewards table

To contribute to a specific project, a user makes a donation
in exchange for a reward. The **reward** is tied to a monetary
amount. In my opinion, we do not need to store a connection between the user
and the project; it is automatically available through the reward.

User ---->  Reward ----> Project
