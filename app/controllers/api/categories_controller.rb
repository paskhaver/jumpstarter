class Api::CategoriesController < ApplicationController

  def index
    @categories = Project.select("DISTINCT category").pluck(:category)
    render :index
  end
end
