# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170421230313) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "pledges", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "reward_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projects", force: :cascade do |t|
    t.integer  "creator_id",   null: false
    t.string   "title",        null: false
    t.string   "category",     null: false
    t.string   "residence",    null: false
    t.string   "blurb"
    t.date     "end_date"
    t.integer  "funding_goal"
    t.text     "description"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "rewards", force: :cascade do |t|
    t.integer  "project_id",    null: false
    t.string   "title",         null: false
    t.integer  "pledge_amount", null: false
    t.string   "description",   null: false
    t.date     "delivery_date", null: false
    t.integer  "max_backers",   null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name",            null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  end

end
