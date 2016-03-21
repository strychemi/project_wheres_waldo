class Tag < ActiveRecord::Base
  belongs_to :photo
  belongs_to :character

  validates :character, presence: true
end
