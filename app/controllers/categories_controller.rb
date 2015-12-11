class CategoriesController < ApplicationController
  def new
  end
  def create
  end
  def edit
  end
  def update
  end
  def show
  end
  def index
    @categories = Category.all
  end
end
