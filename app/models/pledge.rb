class Pledge < ApplicationRecord

  belongs_to :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :reward,
    class_name: "Reward",
    primary_key: :id,
    foreign_key: :reward_id

  belongs_to :project,
    through: :reward,
    source: :project

end
