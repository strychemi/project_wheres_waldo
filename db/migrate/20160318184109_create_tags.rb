class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.integer :character_id
      t.integer :photo_id
      t.float :x
      t.float :y

      t.index [:character_id, :photo_id]

      t.timestamps null: false
    end
  end
end
