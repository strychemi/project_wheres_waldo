class TagsController < ApplicationController
  def show
    @tag = Tag.find(params[:id])
    respond_to do |format|
      format.html {}
      format.json { render json: @tag, status: 200 }
    end
  end

  def create
    @tag = Tag.new(tag_params)
    @characters = Character.all

    respond_to do |format|
      if @tag.save
        format.html { redirect_to @tag, notice: "Successfully created!" }
        format.json { render json: @tag, status: :created}
      else
        format.html { render :new }
        format.json { render @tag, status: 422 }
      end
    end
  end

  def destroy
    @tag = Tag.find(params[:id])

    respond_to do |format|
      if @tag.destroy
        format.json { render json: @tag, status: 200 }
      else
        format.json { render @tag, status: 422 }
      end
    end
  end


  private

  def tag_params
    params.require(:tag).permit(:character_id, :photo_id, :x, :y)
  end

end
