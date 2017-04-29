@categories.each do |category, project_count|
  json.set! category, project_count
end
