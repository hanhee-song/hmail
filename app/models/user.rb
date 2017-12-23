class User < ApplicationRecord
  validates :email, uniqueness: true, presence: true
  validates :auth_token, :password_digest, :fname, :lname, presence: true
  
  validates :password, length: { minimum: 6, allow_nil: true }
  
  attr_reader :password
  
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
