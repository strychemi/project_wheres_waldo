class PhotosController < ApplicationController


  def index
    @photos = Photo.all

  end


  def show
    @tag = Tag.new
    @characters = Character.all    
  end


end
