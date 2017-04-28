```js
{

  errors:
    [
      "NAME cannot be blank!",
      "PASSWORD cannot be blank!",
      "Project needs a title!",
      "Reward needs a pledge amount"
    ],

  session: {
    currentUser: {
      id: 1,
      name: "Boris Paskhaver"
      email: "boris.paskhaver@nyu.edu",
    }    
  },

  user: {
    projects: [],
    pledges: [],
    rewards: [],
    supported_projects: []
  },

  project: {
    id: 1
    blurb: "",
    category: "",
    creator_id: 1,
    creator_name: "",
    description: "",
    end_date: "",
    funding_goal: "",
    residence: "",
  },

  rewards: {
    1: {
      id: 1,
      delivery_date: "2017-10-31",
      description: "One on one time with the folk hero",
      max_backers: 5,
      pledge_amount: 100,
      project_id: 1,
      title: "Personal meet and greet"
    },

    2: {
      id: 2,
      delivery_date: "2018-05-18",
      description: "You'll get a free copy of the new album",
      max_backers: 100,
      pledge_amount: 50,
      project_id: 1,
      title: "Free copy of the new album"
    }
  },

  category: {
    name: "Art"
    projects: [{}, {}, {}]
  }

}
```
