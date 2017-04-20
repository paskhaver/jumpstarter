class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.integer :creator_id, null: false

      t.string :title, null: false
      t.string :category, null: false
      t.string :residence, null: false

      t.string :blurb
      t.date :end_date
      t.integer :funding_goal
      t.text :description

      t.timestamps
    end
  end
end
