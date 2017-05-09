class Api::ProjectsController < ApplicationController

  # Validated
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

  # Validated
  def show
    @project = Project.includes(rewards: [:pledges])
                      .includes(:creator)
                      .includes(:supporters)
                      .order("rewards.pledge_amount")
                      .find_by(id: params[:id])
    if @project
      @amount_raised = Project.amount_raised(@project.rewards, @project.pledges)
      @number_of_supporters = @project.supporters.uniq.length
      @days_remaining = Project.days_remaining(@project)
      @percent_funded = ((@amount_raised.to_f /  @project.funding_goal) * 100).round(1)
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
