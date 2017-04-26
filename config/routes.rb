Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, except: [:new, :edit]
    resource :session, only: [:create, :destroy]

    resources :projects, except: [:new, :edit] do
      resources :rewards, except: [:new, :edit, :show]
      resources :pledges, only: [:create]
    end

  end
end
