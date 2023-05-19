function()
{
    var config = {};
    var env = 'qa'

    // Switch statement to set different configurations based on the environment
    switch (env) {
      case 'dev':
        karate.log('Setting up configuration for dev environment');
        break;
      case 'qa':
        karate.log('Setting up configuration for qa environment');
        config.baseUrl='https://restful-booker.herokuapp.com';
        break;
      // Add more cases for other environments as needed
      default:
        karate.log('No matching environment found. Using default configuration.');
    }
    var res = karate.callSingle('classpath:authToken/postAuth.feature', config);
    karate.configure('headers', { Authorization: '' + res.token });
    return config;
}