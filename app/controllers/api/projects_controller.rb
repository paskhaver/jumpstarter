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
    sleep(1)
    @project = Project.includes(rewards: :pledges)
                      .includes(:creator)
                      .order("rewards.pledge_amount")
                      .find_by(id: params[:id])
    if @project
      @amount_raised = Reward.find_by_sql("SELECT rewards.pledge_amount FROM rewards JOIN pledges ON pledges.reward_id = rewards.id WHERE rewards.project_id = #{params[:id]}").pluck(:pledge_amount).reduce(:+)
      @number_of_backers = Pledge.find_by_sql("SELECT DISTINCT pledges.user_id FROM pledges JOIN rewards ON pledges.reward_id = rewards.id WHERE rewards.project_id = #{params[:id]}").length
      render :show
    else
      render json: ["Project with that ID does not exist!"], status: 422
    end
  end

  def edit
    sleep(1)
    @project = Project.includes(:creator).find_by(id: params[:id])
    if @project
      render :edit
    else
      render json: ["Project with that ID does not exist!"], status: 422
    end
  end

  def update
    sleep(1)
    @project = Project.includes(:rewards)
                      .includes(:creator)
                      .order("rewards.pledge_amount")
                      .find_by(id: params[:id])

    if @project.update(project_params)
      @amount_raised = Reward.find_by_sql("SELECT rewards.pledge_amount FROM rewards JOIN pledges ON pledges.reward_id = rewards.id WHERE rewards.project_id = #{params[:id]}").pluck(:pledge_amount).reduce(:+)
      @number_of_backers = Pledge.find_by_sql("SELECT DISTINCT pledges.user_id FROM pledges JOIN rewards ON pledges.reward_id = rewards.id WHERE rewards.project_id = #{params[:id]}").length
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
