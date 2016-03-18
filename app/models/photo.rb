class Photo < ActiveRecord::Base
  has_many :tags

  has_many :photo_characters
  has_many :characters, through: :photo_characters
end
