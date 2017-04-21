json.extract! @project, :id, :title, :category, :residence, :blurb

json.set! :rewards do
  json.array! @project.rewards do |reward|
    json.extract! reward, :title, :pledge_amount, :description,
                          :delivery_date, :max_backers
  end
end
