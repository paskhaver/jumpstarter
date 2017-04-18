class Api::SessionsController < ApplicationController

  def create
    form_email = params[:user][:email]
    form_password = params[:user][:password]
    @user = User.find_by_credentials(form_email, form_password)
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
