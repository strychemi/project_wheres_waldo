class PhotosController < ApplicationController


  def index
    @photos = Photo.all

  end


  def show
    @characters = Character.all    
  end


end
