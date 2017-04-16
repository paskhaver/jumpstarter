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

## rewards - tied to projects
