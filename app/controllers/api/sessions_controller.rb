class Api::SessionsController < ApplicationController

  def create
    email    = params[:user][:email]
    password = params[:user][:password]
    @user = User.find_by_credentials(email, password)
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid credentials. Check email and password!"], status: 401
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
