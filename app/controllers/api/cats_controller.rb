class Api::CatsController < ApplicationController
  before_action :set_cat, only: [:show, :update,:destroy]

  def index
    render json: Cat.all
  end

  def show
    render json: @cat
  end

  def create
    @cat = Cat.new(cat_params)
    if(@cat.save)
      render json: @cat
    else
      render json: @cat.errors, status: 422
    end
  end


  def update
    if(@cat.update(cat_params))
      render json: @cat
    else
      render json: @cat.errors, status: 422
    end
  end

  def destroy
    render json: @cat.destroy
  end

  private

  def set_cat
    @cat = Cat.find(params[:id])
  end

  def cat_params
    params.require(:cat).permit(:name)
  end
end
