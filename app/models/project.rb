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

  def number_of_supporters
    self.pledges.pluck(:user_id).uniq.length
  end

  def percent_funded
    if self.funding_goal.nil?
      0
    else
      ((self.amount_raised.to_f / self.funding_goal) * 100).round(1)
    end
  end

  def days_remaining
    self.end_date.nil? ? 0 : (self.end_date - Date.today).to_i
  end

  def amount_raised
    amount_raised = 0
    self.rewards.each do |reward|
      reward_value = reward.pledge_amount
      reward_count = self.pledges.select { |pledge| pledge.reward_id == reward.id}.length
      amount_raised = reward_value * reward_count
    end
    amount_raised
  end

end
