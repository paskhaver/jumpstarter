json.array!(@rewards) do |reward|
  json.extract! reward, :id, :project_id, :title, :pledge_amount,
                        :description, :delivery_date, :max_backers
end
