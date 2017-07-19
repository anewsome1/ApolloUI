$('document').ready(function() {

  
    var webAuth = new auth0.WebAuth({
      domain: AUTH0_DOMAIN,
      clientID: AUTH0_CLIENT_ID,
      redirectUri: AUTH0_CALLBACK_URL,
      audience: 'https://' + AUTH0_DOMAIN + '/userinfo',
      responseType: 'token id_token',
      scope: 'openid',
      leeway: 60
    });

  
  
  
      webAuth.authorize();
 
  
    function setSession(authResult) {
      // Set the time that the access token will expire at
      var expiresAt = JSON.stringify(
        authResult.expiresIn * 1000000 + new Date().getTime()
      );
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
    }
  
    // function logout() {
    //   // Remove tokens and expiry time from localStorage
    //   localStorage.removeItem('access_token');
    //   localStorage.removeItem('id_token');
    //   localStorage.removeItem('expires_at');
    // }
  
    function isAuthenticated() {
      // Check whether the current time is past the
      // access token's expiry time
      var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
      return new Date().getTime() < expiresAt;
    }
  
    function handleAuthentication() {
      webAuth.parseHash(function(err, authResult) {
        if (authResult && authResult.accessToken && authResult.idToken) {
          window.location.hash = '';
          setSession(authResult);
        } else if (err) {
          homeView.css('display', 'inline-block');
          console.log(err);
          alert(
            'Error: ' + err.error + '. Check the console for further details.'
          );
        }

      });
    }

  
    handleAuthentication();
  });
  