class SubCategoriesController < ApplicationController
  def index
    @sub_categories = SubCategory.all?
  end
  def new
    @sub_category = SubCategory.new
  end
  def create
  end
  def show
  end
  def edit
  end
  def update
  end

end
