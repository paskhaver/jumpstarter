class CreatePledges < ActiveRecord::Migration[5.0]
  def change
    create_table :pledges do |t|
      t.integer :user_id, null: false
      t.integer :reward_id, null: false
      t.timestamps
    end
  end
end
