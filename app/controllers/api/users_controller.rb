class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  # No NEW page --> rendered by React component
  def create

  end

  # No EDIT page --> rendered by React component
  def update

  end

  def destroy

  end
end
