# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

  title_options = ["Startup", "Cookbook", "Fashion Item",
                   "Film", "Album", "Novel"]

  categories = ["Art", "Comics", "Crafts", "Dance", "Design", "Fashion",
                "Film & Video", "Food", "Games", "Journalism", "Music",
                "Photography", "Publishing", "Technology", "Theater"]

  residencies = ["Australia", "Austria", "Belgium", "Canada", "Denmark",
                 "France", "Germany", "Hong Kong", "Ireland", "Italy",
                 "Luxembourg", "Mexico", "Netherlands", "New Zealand",
                 "Norway", "Singapore", "Spain", "Sweden", "Switzerland",
                 "United Kingdom", "United States"]

  blurb = "Random blurb"

  description = "Cronut hexagon hoodie bespoke kogi meditation, mumblecore salvia. Yuccie chia fingerstache retro, shoreditch hexagon PBR&B farm-to-table hella pinterest four loko pug 8-bit kickstarter everyday carry. Blue bottle etsy venmo craft beer tilde. Ugh keffiyeh craft beer plaid, williamsburg lomo paleo pickled. Letterpress hammock church-key live-edge. Keffiyeh kale chips vice, single-origin coffee semiotics small batch wolf tousled pinterest health goth cred vegan biodiesel. Keytar chillwave sustainable woke, bespoke cold-pressed fingerstache marfa dreamcatcher 90's.

  Chambray before they sold out chillwave, +1 gochujang hammock copper mug. Semiotics pug pabst, fixie squid retro farm-to-table. Plaid master cleanse health goth yr coloring book, cornhole asymmetrical. Tattooed irony etsy locavore fam. Art party fingerstache glossier, church-key fixie beard kale chips ramps vice tumblr letterpress chambray cray chillwave. Cliche succulents gochujang gastropub ugh, disrupt +1 authentic actually church-key scenester try-hard cold-pressed franzen. Beard distillery ennui flexitarian, leggings tumblr chicharrones activated charcoal cliche iPhone."


  User.destroy_all
  Project.destroy_all
  Reward.destroy_all
  Pledge.destroy_all

  user1 = User.create(name: "Guest", email: "guest@example.com", password: "password")

  1000.times do
    User.create(name: Faker::Name.name,
                email: Faker::Internet.unique.email,
                password: Faker::Pokemon.name)
  end

  #
  # project1 = Project.create(title: "My New Album", category: "Music",
  #                           creator: user4, residence: "United States",
  #                           description: description, blurb: "Fund the
  #                           new record from America's favorite folk hero")
  #

  300.times do
    Project.create(title: "Help fund my #{title_options.sample}",
                   category: categories.sample,
                   creator: User.order("RANDOM()").first,
                   residence: residencies.sample,
                   blurb: blurb,
                   description: description,
                   funding_goal: rand(100...100000) / 100 * 100,
                   end_date: rand(30..500).days.from_now
                  )
  end

  1500.times do
    random_project = Project.order("RANDOM()").first
    random_project_end_date = random_project.end_date
    Reward.create(project: random_project,
                  title: "Reward #{('A'..'Z').to_a.sample}",
                  pledge_amount: rand(1..1000),
                  description: "Description",
                  delivery_date: (random_project_end_date + rand(1...366).days),
                  max_backers: rand(1..1000)
                  )
  end

  10000.times do
    Pledge.create(reward: Reward.order("RANDOM()").first,
                  user: User.order("RANDOM()").first
                 )
  end
end
