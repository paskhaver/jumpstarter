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

  has_many :pledges,
    through: :rewards,
    source: :pledges

  has_many :supporters,
    through: :pledges,
    source: :user

  def self.amount_raised(rewards, pledges)
    amount_raised = 0
    rewards.each do |reward|
      reward_value = reward.pledge_amount
      reward_count = pledges.count { |pledge| pledge.reward_id == reward.id }
      amount_raised = reward_value * reward_count
    end
    amount_raised
  end

  def self.days_remaining(project)
    if project.end_date.nil?
      0
    else
      (project.end_date - Date.today).to_i
    end
  end

end
