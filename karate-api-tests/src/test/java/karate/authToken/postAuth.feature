@ignore
Feature: Authentication Token API

  Background:
    * url baseUrl
    * header Content-Type = 'application/json'

  Scenario: Obtain Authentication Token
    * path 'auth'
    Given request
    """
    {
      "username": "admin",
      "password": "password123"
    }
    """
    When method POST
    Then status 200
    And match response.token != null
    And def token = response.token
    And print 'Authentication Token:', token