class Api::CategoriesController < ApplicationController

  def index
    if params[:category]
      @category_projects = Project.include(:creator).where(category: params[:category])
      render :show
    else
      @categories = Project.group(:category).count
      render :index
    end
  end


  # Hash-map where key is reward id and value is its amount
  # Project.find(5).rewards.group(:id).sum(:pledge_amount)
  # h1 = {733=>396, 1198=>299, 1408=>333}

  # Hash map where key is rewaird and value is its count
  # Project.find(5).pledges.group(:reward_id).count
  # h2 = {733=>3, 1198=>6, 1408=>7}

  h1.each do |reward_id


end
