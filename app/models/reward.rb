class Reward < ApplicationRecord

  validates :project, :title, :pledge_amount,
            :description, :delivery_date, :max_backers,
    presence: true

  belongs_to :project,
    class_name: "Project",
    primary_key: :id,
    foreign_key: :project_id
end
