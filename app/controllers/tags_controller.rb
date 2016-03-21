class TagsController < ApplicationController

  def create
    @tag = Tag.new(tag_params)
    char_id = @tag.character_id
    photo_id = @tag.photo_id
    previousInstance = Tag.find_by(photo_id: photo_id, character_id: char_id)
    previousInstance.destroy if previousInstance
    respond_to do |format|
      if @tag.save
        format.html { redirect_to @tag, notice: "Successfully created!" }
        format.json { render json: @tag, status: :created }
      else
        format.html { render :new }
        format.json { redirect_to photo_path(@tag.photo_id) }
      end
    end
  end


  private

  def tag_params
    params.require(:tag).permit(:character_id, :photo_id, :x, :y)
  end

end
