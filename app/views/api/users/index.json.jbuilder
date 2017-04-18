@users.each do |user|
  json.set! user.id do
    json.extract! user, :name, :email
  end
end
