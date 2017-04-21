# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

  pw = "password"
  User.destroy_all
  Project.destroy_all
  Reward.destroy_all

  user1 = User.create(name: "Guest", email: "guest@example.com", password: pw)
  user2 = User.create(name: "Boris", email: "boris@example.com", password: pw)
  user3 = User.create(name: "Wilson", email: "wilson@example.com", password: pw)
  user4 = User.create(name: "Tassos", email: "tassos@example.com", password: pw)

  project1 = Project.create(title: "My New Album", category: "Music",
                            creator: user4, residence: "United States")

  project2 = Project.create(title: "Batman", category: "Comics",
                            creator: user1, residence: "Australia")

  project3 = Project.create(title: "Spring Jeans Collection", category: "Crafts",
                            creator: user4, residence: "Germany")

  project4 = Project.create(title: "Delicious Recipe Book", category: "Music",
                            creator: user2  , residence: "Singapore")

  reward1 = Reward.create(project: project1, title: "Personal meet and greet",
  pledge_amount: 100, description: "One on one time with the folk hero",
  delivery_date: "2017/10/31", max_backers: 5)

  reward2 = Reward.create(project: project1, title: "Private concert",
  pledge_amount: 1000, description: "I'll play all your favorite Tassos hits",
  delivery_date: "2018/12/31", max_backers: 3)

  reward2 = Reward.create(project: project2, title: "Free comic book",
  pledge_amount: 1, description: "A digital copy of the comic book",
  delivery_date: "2017/10/01", max_backers: 500)

  reward4 = Reward.create(project: project3, title: "Pair of jeans",
  pledge_amount: 50, description: "First chance to shop our collection",
  delivery_date: "2018/04/15", max_backers: 1000)

  reward5 = Reward.create(project: project4, title: "Early access to book",
  pledge_amount: 25, description: "Get the book before anyone else",
  delivery_date: "2017/07/31", max_backers: 10000)

end
