class Api::PledgesController < ApplicationController

  def create
    @pledge = Pledge.new(pledge_params)
    if @pledge.save
      render :show
    else
      render json: @pledge.errors.full_messages
    end
  end

  private

  def pledge_params
    params.require(:pledge).permit(:user_id, :reward_id)
  end
end
