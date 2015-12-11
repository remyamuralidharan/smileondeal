class WelcomeController < ApplicationController
  layout "application"
  def index
    @response =Category.all
    respond_to do |format|
      format.json { render json: @response.to_json(:include => [:sub_categories => {:include => {:sections => {:include => {:products => {:include => :product_features}}}}}]) }
      format.html
    end
  end
  def show
    @products = Product.where(:section_id => params[:id])
    respond_to do |format|
      format.html
      format.json { render json: @products.to_json(:include => :product_features)}

    end
  end

end
