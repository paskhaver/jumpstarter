Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :categories, only: [:index]
    resources :search, only: [:index]

    resources :projects, except: [:new] do
      resources :rewards, except: [:new, :edit, :show]
      resources :pledges, only: [:create]
    end

  end
end
