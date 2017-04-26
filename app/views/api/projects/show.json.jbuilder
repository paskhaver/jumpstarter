json.extract! @project, :id, :title, :category, :description,
                        :residence, :blurb, :funding_goal

json.amount_raised @amount_raised
json.number_of_backers @number_of_backers

json.set! :rewards do
  json.array! @project.rewards do |reward|
    json.extract! reward, :title, :pledge_amount, :description,
                          :delivery_date, :max_backers, :id
  end
end
