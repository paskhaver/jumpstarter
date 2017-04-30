json.array! @category_projects do |project|
  json.extract! project, :id, :title, :blurb, :end_date,
                         :funding_goal, :end_date
end
