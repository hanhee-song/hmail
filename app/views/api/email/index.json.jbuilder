@emails.each do |email|
  json.set! email.id do
    json.partial! '/api/emails/email', email: email
  end
end
