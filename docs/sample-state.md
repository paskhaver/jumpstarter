```js
{
  session: {
    currentUser: {
        email: "boris.paskhaver@nyu.edu",
        name: "Boris Paskhaver"
    }    
  },

  errors:
    [
      "NAME cannot be blank!",
      "PASSWORD cannot be blank!"
    ],

  projects: {
    1: {
      title: "Recipe Book",
      blurb: "100+ family recipes",
      category: "Cooking",
      end_date: "12/31/2017",
      funding_goal: "3000",
      total_amount_raised: "2020",
      description: "A deluxe collection of fresh recipes"
    },

    2: {
      title: "Tech Gadget",
      blurb: "Fancy new piece of technology",
      category: "Technology",
      end_date: "05/31/2017",
      funding_goal: "10000",
      total_amount_raised: "5000",
      description: "Helps you with your day-to-day errands"
    },
  },

  rewards: [25, 26, 27, 28] // Project's associated reward_ids
}
```
