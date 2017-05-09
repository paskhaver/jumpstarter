json.extract! @project, :id, :creator_id, :title, :category, :residence,
                        :blurb, :end_date, :funding_goal, :description

json.amount_raised @amount_raised
json.number_of_supporters @number_of_supporters
json.days_remaining @days_remaining
json.percent_funded @percent_funded

json.creator_name @project.creator.name

json.set! :rewards do
  json.array! @project.rewards do |reward|
    json.extract! reward, :title, :pledge_amount, :description,
                          :delivery_date, :max_backers, :id

    json.pledge_count reward.pledges.length
  end
end
