# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

  pw = "password"

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

  user1 = User.create(name: "Guest", email: "guest@example.com", password: pw)
  user2 = User.create(name: "Boris", email: "boris@example.com", password: pw)
  user3 = User.create(name: "Wilson", email: "wilson@example.com", password: pw)
  user4 = User.create(name: "Tassos", email: "tassos@folkman.com", password: pw)
  user5 = User.create(name: "Ron Burgundy", email: "ron@burgundy.com", password: pw)

  creators = [user1, user2, user3, user4, user5]

  project1 = Project.create(title: "My New Album", category: "Music",
                            creator: user4, residence: "United States",
                            description: description, blurb: "Fund the
                            new record from America's favorite folk hero")

  project2 = Project.create(title: "Hire Batman", category: "Comics",
                            creator: user1, residence: "Australia",
                            blurb: "Help raise funds to hire a superhero",
                            description: description)

  project3 = Project.create(title: "Spring Jeans Collection", category: "Crafts",
                            creator: user4, residence: "Germany",
                            blurb: "Stylish fashion items for all occasions",
                            description: description)

  project4 = Project.create(title: "Delicious Recipe Book", category: "Music",
                            creator: user2  , residence: "Singapore",
                            blurb: "1000+ family recipes in a deluxe 100+ page book",
                            description: description)

  100.times do |index|
    Project.create(title: "Help fund my #{title_options.sample}",
                   category: categories.sample,
                   creator: creators.sample,
                   residence: residencies.sample,
                   blurb: blurb,
                   description: description)
  end

  reward1 = Reward.create(project: project1, title: "Personal meet and greet",
  pledge_amount: 100, description: "One on one time with the folk hero",
  delivery_date: "2017/10/31", max_backers: 5)

  reward2 = Reward.create(project: project1, title: "Private concert",
  pledge_amount: 1000, description: "I'll play all your favorite Tassos hits",
  delivery_date: "2018/12/31", max_backers: 3)

  reward3 = Reward.create(project: project2, title: "Free comic book",
  pledge_amount: 1, description: "A digital copy of the comic book",
  delivery_date: "2017/10/01", max_backers: 500)

  reward4 = Reward.create(project: project3, title: "Pair of jeans",
  pledge_amount: 50, description: "First chance to shop our collection",
  delivery_date: "2018/04/15", max_backers: 1000)

  reward5 = Reward.create(project: project4, title: "Early access to book",
  pledge_amount: 25, description: "Get the book before anyone else",
  delivery_date: "2017/07/31", max_backers: 10000)

  pledge1 = Pledge.create(reward: reward2, user: user1)
  pledge2 = Pledge.create(reward: reward2, user: user2)
  pledge3 = Pledge.create(reward: reward2, user: user3)
  pledge4 = Pledge.create(reward: reward1, user: user3)
  pledge5 = Pledge.create(reward: reward4, user: user3)

end
