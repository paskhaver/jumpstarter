class Api::SearchController < ApplicationController

  def index
    query = params[:query]
    sql_string = "title LIKE (?) OR description LIKE (?) OR blurb LIKE (?)"
    @search_projects = Project.where(sql_string, "%#{query}%", "%#{query}%", "%#{query}%")
                              .first(20)
    render :index
  end
end
