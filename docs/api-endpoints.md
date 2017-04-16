# API Endpoints

## HTML API

### Root
- `GET /` - Loads React web app

## JSON API

### Users
- `POST /api/users`       <!-- UsersController#create -- Create new user -->
- `PATCH /api/users/:id`  <!-- UsersController#update -- Update user details -->

| Route                  | Action                                        |
|------------------------|-----------------------------------------------|
| `POST /api/users`      | UsersController#create -- Create new user     |
| `PATCH /api/users/:id` | UsersController#update -- Update user details |

### Session
- `POST /api/session`    <!-- SessionsController#create -- Create new session(login) -->
- `DELETE /api/session`  <!-- SessionsController#create -- Delete session(logout) -->

### Projects
- `GET /api/projects`        <!--- ProjectsController#index -- Get all projects --->
- `POST /api/project`        <!--- ProjectsController#create -- Create new project (no new form) -->
- `GET /api/projects/:id`    <!--- ProjectsController#show  -- Get specific project --->
- `PATCH /api/project/:id`   <!--- ProjectsController#update -- Update specific project (no edit form) -->
- `DELETE /api/projects/:id` <!--- ProjectsController#destroy -- Destroy specific project -->

### Rewards
  - A project's rewards will be included in the project show template
- `GET /api/projects/:project_id/rewards`  <!-- RewardsController#index -- Get all rewards for project -->
- `POST /api/projects/:project_id/rewards` <!-- RewardsController#create -- Create new reward for project -->
- `DELETE /api/projects/:project_id/rewards/:id` <!-- RewardsController#destroy -- Delete specific reward for project -->
- `DELETE /api/projects/:project_id/rewards/:id` <!-- RewardsController#patch -- Update specific reward for project -->


### Pledges
