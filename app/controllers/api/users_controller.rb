class Api::UsersController < ApplicationController

  # VALIDATED
  def index
    @users = User.all
    render :index
  end

  # No NEW page --> rendered by React component
  # VALIDATED
  def create
    @user = User.new(user_params)
    if @user.save
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  # VALIDATED
  def show
    @user = User.find(params[:id])
    render :show
  end

  # No EDIT page --> rendered by React component
  # VALIDATED -- but why can password be left blank?
  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  # VALIDATED
  def destroy
    @user = User.find(params[:id])
    @user.destroy
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
