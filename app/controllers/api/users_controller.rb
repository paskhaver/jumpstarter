class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  # No NEW page --> rendered by React component
  def create
    @user = User.new(user_params)
    if @user.save
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  # No EDIT page --> rendered by React component
  def update

  end

  def destroy

  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
