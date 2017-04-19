# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

  User.destroy_all

  User.create(name: "Boris", email: "boris@example.com", password: "password")
  User.create(name: "Wilson", email: "wilson@example.com", password: "password")
  User.create(name: "Tassos", email: "tassos@example.com", password: "password")

end
