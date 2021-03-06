class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
  
  def show
    @user = User.find_by(email: user_params[:email])
    if @user
      render "api/users/show"
    else
      render json: ["Couldn't find your Hmail account"], status: 404
    end
  end

  # def update
  #   @user = User.find(params[:id])
  #   if @user.update(user_param)
  #     render "api/users/show"
  #   else
  #     render json: @user.errors.full_messages, status: 422
  #   end
  # end
  #
  # def show
  # end
  
  private
  
  def user_params
    params.require(:user).permit(:email, :fname, :lname, :password)
  end
end
