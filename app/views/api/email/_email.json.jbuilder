json.extract! email, :id, :subject, :body
json.sender do
  json.partial! '/api/users/user', user: email.sender
end
