class TagsController < ApplicationController

  def create
    @tag = Tag.new(tag_params)
    char_id = @tag.character_id
    photo_id = @tag.photo_id
    @characters = Character.all

    previous_instance = Tag.find_by(photo_id: photo_id, character_id: char_id)
    previous_instance.destroy if previous_instance

    respond_to do |format|
      if @tag.save
        format.html { redirect_to @tag, notice: "Successfully created!" }
        format.js
      else
        format.html { render :new }
        format.js { render @tag, status: 422 }
      end
    end
  end


  private

  def tag_params
    params.require(:tag).permit(:character_id, :photo_id, :x, :y)
  end

end
