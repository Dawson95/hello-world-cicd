// Vérifie si l'utilisateur a déjà accepté les cookies
function checkCookieConsent() {
    if (!localStorage.getItem('cookie_consent')) {
      // Afficher la bannière ou la boîte de dialogue de consentement
      // et attacher un gestionnaire d'événements pour enregistrer le consentement de l'utilisateur
      showCookieConsent();
    }
  }
  
  // Affiche la bannière ou la boîte de dialogue de consentement
  function showCookieConsent() {
    // Ici, vous pouvez personnaliser la manière dont vous affichez la bannière ou la boîte de dialogue de consentement
    // Cela peut inclure l'utilisation de CSS pour styliser l'apparence
    const consentBanner = document.createElement('div');
    consentBanner.classList.add('cookie-consent-banner');
    consentBanner.innerHTML = `
      <p>Ce site utilise des cookies. En continuant à naviguer sur ce site, vous acceptez notre utilisation des cookies.</p>
      <button id="cookie-consent-button">Accepter</button>
    `;
    document.body.appendChild(consentBanner);
  
    // Attacher un gestionnaire d'événements au bouton d'acceptation
    const acceptButton = document.getElementById('cookie-consent-button');
    acceptButton.addEventListener('click', saveCookieConsent);
  }
  
  // Enregistre le consentement de l'utilisateur
  function saveCookieConsent() {
    localStorage.setItem('cookie_consent', true);
    
    // Supprimer la bannière ou la boîte de dialogue de consentement
    const consentBanner = document.querySelector('.cookie-consent-banner');
    if (consentBanner) {
      consentBanner.remove();
    }
  }
  
  // Appelle la fonction de vérification du consentement lors du chargement de la page
  window.onload = checkCookieConsent;
  