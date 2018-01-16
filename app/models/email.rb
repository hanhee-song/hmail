class Email < ApplicationRecord
  belongs_to :sender,
    foreign_key: :sender_id,
    class_name: :User
  
  has_many :email_tags
  
  has_many :recipients,
    through: :email_tags,
    source: :recipient
end
