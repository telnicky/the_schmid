class PostsController < ApplicationController
  respond_to :json

  def index
    @posts = Post.all
    # respond_with @posts
  end

  def create
    @post = Post.new(params[:post])
  end

  def destroy
  end

  def update
  end

  def edit
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
  end
end
