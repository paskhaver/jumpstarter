json.extract! @project, :id, :creator_id, :title, :category, :residence,
                        :blurb, :end_date, :funding_goal, :description

json.amount_raised @amount_raised
json.number_of_backers @number_of_backers

json.set! :rewards do
  json.array! @project.rewards do |reward|
    json.extract! reward, :title, :pledge_amount, :description,
                          :delivery_date, :max_backers, :id
  end
end
