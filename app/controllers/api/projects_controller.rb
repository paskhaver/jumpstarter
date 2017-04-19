class Api::ProjectsController < ApplicationController

  def index
    @projects = Project.all
    render :index
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def show
    @project = Project.find(params[:id])
    render :show
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def delete
    @project = Project.find(params[:id])
    @project.destroy
    render :show
  end

  private

  def project_params
    params.require(:project).permit(:creator_id, :title,
                                    :blurb, :category, :end_date,
                                    :funding_goal, :description)
  end

end
