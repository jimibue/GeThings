class Api::ThingsController < ApplicationController
  before_action :set_ge
  before_action :set_thing, only: [:show, :update, :destroy]
  
  def index
    render json: {ge: @ge, things:@ge.things}
  end
  
  def show
    render json: @thing
  end

  def create
    @thing = @ge.things.new(thing_params)
    if(@thing.save)
      render json: @thing
    else
      render json: @thing.errors, status: 422
    end
  end

  def update
    if(@thing.update(thing_params))
      render json: @thing
    else
      render json: @thing.errors, status: 422
    end
  end

  def destroy
    render json: @thing.destroy
  end

  private
  
  def thing_params
    params.require(:thing).permit(:name)
  end
  
  def set_ge
   @ge = Ge.find(params[:ge_id])
  end
  def set_thing
    @thing = @ge.things.find(params[:id])
   end
end
