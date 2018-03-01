# frozen_string_literal: true

module Api
  module V1
    class SecuredPingController < ApplicationController
      before_action :authenticate_user

      def index
        render json: {
            message: "ID: #{current_user.id}, SUB: #{current_user.sub}"
        }
      end
    end
  end
end
