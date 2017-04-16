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
| title               | string    | not null              |
| blurb               | string    | not null              |
| category            | string    | not null              |
| end_date            | date      | not null              |
| funding_goal        | integer   | not null              |
| total_amount_raised | integer   | not null              |
| description         | text      | not null              |

## rewards - tied to projects
