class ArticlesController < ApplicationController
  def index

uri = URI("https://api.nytimes.com/svc/search/v2/articlesearch.json")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true
uri.query = URI.encode_www_form({
  "api-key" => "9dbb30d38943454a81d7278ba9b333c3",
  "q" => "#{params[:q]}",
  "sort" => "newest"

})

request = Net::HTTP::Get.new(uri.request_uri)
@result = JSON.parse(http.request(request).body)
puts @result.inspect
render json: @result


  end
end
