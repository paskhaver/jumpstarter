class User < ApplicationRecord

  attr_reader :password

  validates :name, :email, :password_digest, :session_token,
    presence: true

  validates :password,
    length: { minimum: 6, allow_nil: true }

  has_many :projects,
    class_name: "Project",
    primary_key: :id,
    foreign_key: :creator_id

  has_many :pledges,
    class_name: "Pledge",
    primary_key: :id,
    foreign_key: :user_id

  has_many :rewards,
    through: :pledges,
    source: :reward

  has_many :supported_projects,
    through: :rewards,
    source: :project

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.valid_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def password=(new_password)
    @password = password
    self.password_digest = BCrypt::Password.create(new_password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = self.class.generate_session_token
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
