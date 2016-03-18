class TagsController < ApplicationController

  def create
    @tag = Tag.new(tag_params)
    respond_to do |format|
      if @tag.save
        format.html
        format.json { redirect_to photo_path(@tag.photo_id) }
      else
        format.html
        format.json { redirect_to photo_path(@tag.photo_id) }
      end
    end
  end


  private

  def tag_params
    params.require(:tag).permit(:character_id, :photo_id, :x, :y)
  end

end
