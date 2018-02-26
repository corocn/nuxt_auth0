# frozen_string_literal: true

module Api
  module V1
    class PingController < ApplicationController
      def index
        render json: {
            message: 'pong'
        }
      end
    end
  end
end
