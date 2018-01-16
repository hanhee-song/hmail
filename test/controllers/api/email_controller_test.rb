require 'test_helper'

class Api::EmailControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_email_create_url
    assert_response :success
  end

end
