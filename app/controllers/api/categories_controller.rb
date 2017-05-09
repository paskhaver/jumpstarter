class Api::CategoriesController < ApplicationController

  def index
    if params[:category]
      @category_projects = Project.includes(:creator, :rewards, :pledges)
                                  .where(category: params[:category])

      render :show
    else
      @categories = Project.group(:category).count
      render :index
    end
  end

end
