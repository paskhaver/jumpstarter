class Api::ProjectsController < ApplicationController

  def index
    @projects = Project.order("RAND()").first(6)
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
    @project = Project.includes(:creator, rewards: [:pledges])
                      .order("rewards.pledge_amount")
                      .find_by(id: params[:id])
    if @project
      render :show
    else
      render json: ["Project with that ID does not exist!"], status: 422
    end
  end

  def edit
    @project = Project.includes(:creator).find_by(id: params[:id])
    if @project
      render :edit
    else
      render json: ["Project with that ID does not exist!"], status: 422
    end
  end

  def update
    @project = Project.includes(:rewards)
                      .includes(:creator)
                      .order("rewards.pledge_amount")
                      .find_by(id: params[:id])

    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    render :show
  end

  private

  def project_params
    params.require(:project).permit(:creator_id, :title, :residence,
                                    :blurb, :category, :end_date,
                                    :funding_goal, :description)
  end

end
