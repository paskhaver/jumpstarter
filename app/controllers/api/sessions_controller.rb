class Api::SessionsController < ApplicationController

  def create
    email    = params[:user][:email]
    password = params[:user][:password]
    @user = User.find_by_credentials(email, password)
    if @user.is_a?(User)
      login(@user)
      render "api/users/show"
    elsif @user == "Wrong password!"
      render json: ["Wrong password"], status: 401
    else
      render json: ["Wrong username", "Wrong password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["No user logged in!"]
    end
  end

end
