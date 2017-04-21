class CreateRewards < ActiveRecord::Migration[5.0]
  def change
    create_table :rewards do |t|
      t.integer :project_id,    null: false
      t.string  :title,         null: false
      t.integer :pledge_amount, null: false
      t.string  :description,   null: false
      t.date    :delivery_date, null: false
      t.integer :max_backers,   null: false
      t.timestamps
    end
  end
end
