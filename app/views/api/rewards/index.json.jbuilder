@rewards.each do |reward|
  json.set! reward.id do
    json.extract! reward, :id, :project_id, :title, :pledge_amount,
                          :description, :delivery_date, :max_backers
  end
end
