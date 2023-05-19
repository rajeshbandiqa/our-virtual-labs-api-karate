Feature: Get Bookings

  Background:
    * url baseUrl

    @UT
  Scenario: Create a Booking
    * path 'booking'
    When method GET
    Then status 200
    And print 'Booking IDs:', response
