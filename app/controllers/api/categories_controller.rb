class Api::CategoriesController < ApplicationController

  def index
    debugger
    if params[:category]


    else
      @categories = Project.distinct.pluck(:category)
      render :index
    end
  end

  def show
    debugger
    category = params[:id]
    @category_projects = Project.where(category: category)
    render :show
  end
end
