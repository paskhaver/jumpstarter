class Pledge < ApplicationRecord

  validates :user, :reward,
    presence: true

  belongs_to :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :reward,
    class_name: "Reward",
    primary_key: :id,
    foreign_key: :reward_id

  has_one :project,
    through: :reward,
    source: :project

end
