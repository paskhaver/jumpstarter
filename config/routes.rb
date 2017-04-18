Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, except: [:new, :edit]
    resource :sessions, only: [:create, :destroy]
  end
end
