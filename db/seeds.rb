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

  user1 = User.create(name: "Guest", email: "guest@example.com", password: pw)
  user2 = User.create(name: "Boris", email: "boris@example.com", password: pw)
  user3 = User.create(name: "Wilson", email: "wilson@example.com", password: pw)
  user4 = User.create(name: "Tassos", email: "tassos@example.com", password: pw)

  project1 = Project.create(title: "My New Album", category: "Music",
                            creator: user4, residence: "United States")

  project2 = Project.create(title: "Batman", category: "Comics",
                            creator: user1, residence: "Australia")

  project3 = Project.create(title: "Spring Jeans Colllection", category: "Crafts",
                            creator: user4, residence: "Germany")

  project4 = Project.create(title: "Delicious Recipe Book", category: "Music",
                            creator: user2  , residence: "Singapore")


end
