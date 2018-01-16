json.partial! '/api/emails/email', email: @email
json.recipients do
  json.array! @email.recipients do |recipient|
    json.partial! '/api/users/user', user: recipient
  end
end
