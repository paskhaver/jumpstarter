class Api::CategoriesController < ApplicationController

  def index
    @categories = Project.uniq.pluck(:category)
    render :index
  end
end
