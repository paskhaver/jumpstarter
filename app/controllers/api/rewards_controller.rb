class Api::RewardsController < ApplicationController

  # Validated - returns array of objects representing rewards
  def index
    project_id = params[:project_id]
    @rewards = Reward.where(project_id: project_id)
                     .order(:pledge_amount)
    render :index
  end

  def show
    @reward = Reward.find_by(id: params[:id])
    if @reward
      render :show
    else
      render json: @reward.errors.full_messages, status: 422
    end
  end

  def create
    @reward = Reward.new(reward_params)
    if @reward.save
      render :show
    else
      render json: @reward.errors.full_messages, status: 422
    end
  end

  def update
    @reward = Reward.find(params[:id])
    if @reward.update(reward_params)
      render :show
    else
      render json: @reward.errors.full_messages, status: 422
    end
  end

  def destroy
    @reward = Reward.find(params[:id])
    @reward.destroy
    render :show
  end

  private

  def reward_params
    params.require(:reward).permit(:title, :pledge_amount,
    :description, :delivery_date, :max_backers)
  end
end
