class Api::EmailController < ApplicationController
  def create
    user_id = current_user.id
    @email = Email.new(email_params)
    @email.sender_id = user_id
    if @email.save
      option_params[:user_ids].each do |id|
        EmailTag.create(recipient_id: id, email_id: @email.id)
      end
      render "api/emails/show"
    else
      render json: ["Could not send email"], status: 422
    end
  end
  
  private
  
  def email_params
    params.require(:email).permit(:subject, :body, { user_ids: [] })
  end
end
