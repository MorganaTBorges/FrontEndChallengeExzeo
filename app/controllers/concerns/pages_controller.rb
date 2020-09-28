class PagesController < ApplicationController
  require 'json'
  require 'open-uri'
  
    def home
      url = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json'
      file_serialized = open(url).read
      @file = JSON.parse(file_serialized)
      @albums = @file["feed"]["entry"]
    end
end
  