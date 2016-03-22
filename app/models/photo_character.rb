class PhotoCharacter < ActiveRecord::Base
  belongs_to :character
  belongs_to :photo
end
