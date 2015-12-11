class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  protect_from_forgery with: :exception
   respond_to :json
  def authenticate_active_admin_user!

  end
  def after_sign_in_path_for(resource)
    if resource.role != "admin"
      root_path
    else
      admin_dashboard_path
    end
  end

end
