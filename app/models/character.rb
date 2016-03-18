class Character < ActiveRecord::Base
  has_many :photo_characters
  has_many :photos, through: :photo_characters

  has_many :tags
end
