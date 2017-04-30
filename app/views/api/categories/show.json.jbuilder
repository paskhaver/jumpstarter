json.array! @category_projects do |project|
  json.extract! project, :id, :title, :blurb, :end_date,
                         :funding_goal, :amount_raised,
                         :days_remaining, :percent_funded

  json.creator project.creator.name
end
