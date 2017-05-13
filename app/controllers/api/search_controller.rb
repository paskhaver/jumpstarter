class Api::SearchController < ApplicationController

  def index
    query = params[:query].downcase
    sql_string = "LOWER(title) LIKE (?) OR LOWER(description) LIKE (?) OR LOWER(blurb) LIKE (?)"
    @search_projects = Project.where(sql_string, "%#{query}%", "%#{query}%", "%#{query}%")
                              .first(12)
    render :index
  end
end
