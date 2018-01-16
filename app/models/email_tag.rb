class EmailTag < ApplicationRecord
  belongs_to :recipient,
    foreign_key: :recipient_id,
    class_name: :User
  
  belongs_to :email
end
