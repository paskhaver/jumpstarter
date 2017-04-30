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

  attr_reader :amount_raised, :number_of_supporters, :days_remaining

  def amount_raised
    reward_values = rewards.group(:id).sum(:pledge_amount)
    reward_counts = pledges.group(:reward_id).count
    amount_raised = 0

    reward_counts.each do |reward_id, reward_count|
      amount_raised += reward_count * reward_values[reward_id]
    end
    amount_raised
  end

  def number_of_supporters
    supporters.uniq.length
  end

  def days_remaining
    (end_date - Date.today).to_i
  end


end
