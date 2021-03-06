class User < ApplicationRecord
  validates :email, uniqueness: true, presence: true
  validates :auth_token, :password_digest, :fname, :lname, presence: true
  
  validates :password, length: { minimum: 6, allow_nil: true }
  
  attr_reader :password
  
  has_many :sent_emails,
    foreign_key: :sender_id,
    class_name: :Email
  
  # has_many :messaged_people,
  #   through: :sent_emails,
  #   source: :recipients
  
  has_many :email_tags,
    foreign_key: :recipient_id,
    class_name: :EmailTag
  
  has_many :received_emails,
    through: :email_tags,
    source: :email
  
  after_initialize :ensure_token
  
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def ensure_token
    self.auth_token ||= generate_token
  end
  
  def reset_token!
    self.auth_token = generate_token
    self.save!
    self.auth_token
  end
  
  private
  
  def generate_token
    SecureRandom::urlsafe_base64
  end
end
