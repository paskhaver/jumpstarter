json.array! @category_projects do |project|
  json.extract! project, :title, :blurb, :end_date, :funding_goal
end
