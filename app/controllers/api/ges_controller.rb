class Api::GesController < ApplicationController
  before_action :set_ge, only: [:show, :update, :destroy]


  def index
   render json: Ge.all
  end

  def show
    render json: @ge
  end

  def create
    @ge = Ge.new(ge_params)
    if(@ge.save)
      render json: @ge
    else
      render json:  @ge.errors.full_messages, status: 422
    end
  end

  def update
    if(@ge.update(ge_params))
      render json: @ge
    else
      render json: @ge.errors.full_messages, status: 422
    end
  end

  def destroy
    render json: @ge.destroy
  end


  private

  def set_ge
    @ge = Ge.find(params[:id])
  end


  def ge_params
    params.require(:ge).permit(:name, :description,:category)
  end

end
