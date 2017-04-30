@search_projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :blurb
  end
end
