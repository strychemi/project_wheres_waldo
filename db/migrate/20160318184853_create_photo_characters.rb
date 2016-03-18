class CreatePhotoCharacters < ActiveRecord::Migration
  def change
    create_table :photo_characters do |t|
      t.integer :photo_id
      t.integer :character_id

      t.index [:photo_id, :character_id], unique: true

      t.timestamps null: false
    end
  end
end
