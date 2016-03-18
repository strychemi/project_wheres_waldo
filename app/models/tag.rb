class Tag < ActiveRecord::Base
  belongs_to :photo
  belongs_to :character
  
  validates :character_id, inclusion: { in: [1,2,3,4,5] }
end
