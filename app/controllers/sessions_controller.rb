class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login!(@user)
      render '/api/users/show'
    else
      render json: ["Invalid email or password"], status: 422
    end
  end

  def destroy
    user = current_user
    if user
      logout!
      render "api/users/show"
    else
      render json: ["No user to sign out"], status: 422
    end
  end
end
