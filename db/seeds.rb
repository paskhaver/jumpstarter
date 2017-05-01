# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

  title_options = ["startup", "cookbook", "fashion item",
                   "film", "album", "novel", "video game", "artistic endeavor",
                  "charity", "political candidacy", "vacation", "meal",
                  "dentist visit", "restaurant bill", "shopping spree",
                  "shady business venture", "multinational corporation",
                  "TV pilot", "ego", "summer vacation", "school supply list",
                  "Ponzi scheme", "bank account", "marketing promotion",
                  "ransom", "Indiegogo project"]

  categories = ["Art", "Comics", "Crafts", "Dance", "Design", "Fashion",
                "Film", "Food", "Games", "Journalism", "Music",
                "Photography", "Publishing", "Technology", "Theater"]

  residencies = ["Australia", "Austria", "Belgium", "Canada", "Denmark",
                 "France", "Germany", "Hong Kong", "Ireland", "Italy",
                 "Luxembourg", "Mexico", "Netherlands", "New Zealand",
                 "Norway", "Singapore", "Spain", "Sweden", "Switzerland",
                 "United Kingdom", "United States"]

  blurb = ""

  description = "Hi good people, I'm launching a Jumpstarter for my cool
  new project. I'd greatly appreciate all the support I can get. Check
  out the rewards on the right and click on any of them to donate to the
  project. Make sure you're logged in. Afterwards, watch as my amount
  raised climbs up and up. Hooray!"

  User.destroy_all
  Project.destroy_all
  Reward.destroy_all
  Pledge.destroy_all

  user1 = User.create(name: "Guest", email: "guest@example.com", password: "password")

  500.times do
    User.create(name: Faker::Name.name,
                email: Faker::Internet.unique.email,
                password: Faker::Internet.password)
  end

  250.times do
    Project.create(title: "Help fund my #{title_options.sample}",
                   category: categories.sample,
                   creator: User.order("RANDOM()").first,
                   residence: residencies.sample,
                   blurb: "An incredible new project that will help us to " + Faker::Company.bs,
                   description: description,
                   funding_goal: rand(100...100000) / 100 * 100,
                   end_date: rand(30..500).days.from_now
                  )
  end

  1000.times do
    random_project = Project.order("RANDOM()").first
    random_project_end_date = random_project.end_date
    Reward.create(project: random_project,
                  title: Faker::Dessert.variety,
                  pledge_amount: rand(10..1000) / 10 * 10,
                  description: "Topped with #{Faker::Dessert.topping}",
                  delivery_date: (random_project_end_date + rand(1...366).days),
                  max_backers: rand(1..100) / 10 * 10
                  )
  end

  5000.times do
    Pledge.create(reward: Reward.order("RANDOM()").first,
                  user: User.order("RANDOM()").first
                 )
  end
end
