class Project < ApplicationRecord

  validates :creator, :title, :category, :residence,
    presence: true

  belongs_to :creator,
    class_name: "User",
    primary_key: :id,
    foreign_key: :creator_id

  has_many :rewards,
    class_name: "Reward",
    primary_key: :id,
    foreign_key: :project_id

end
