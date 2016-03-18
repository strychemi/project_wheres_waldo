class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.string :name, unique: true

      t.index :name

      t.timestamps null: false
    end
  end
end
