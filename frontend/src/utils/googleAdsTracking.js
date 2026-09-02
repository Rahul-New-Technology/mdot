/**
 * Centralized Google Ads Conversion Tracking
 * 
 * This utility provides a single source of truth for all Google Ads conversion tracking
 * across the M DOT IT SOLUZIONE website.
 * 
 * Google Ads Account: AW-18349608095
 * Form Submission Conversion: AW-18349608095/Q4y9COmf3dkcEJ-Z461E
 * Phone Click Conversion: AW-18349608095/MOMmCPqqk-IcEJ-Z461E
 */

/**
 * Track Google Ads Form Submission Conversion
 * 
 * Fires ONLY after successful form submission.
 * Do NOT fire this on form validation errors or API failures.
 * 
 * @param {Object} options - Optional additional parameters
 */
export function trackGoogleAdsFormConversion(options = {}) {
  if (typeof window !== 'undefined' && window.gtag_report_form_conversion) {
    try {
      window.gtag_report_form_conversion();
      
      // Push to dataLayer for debugging
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'google_ads_form_submit',
          lead_type: 'website_form',
          timestamp: new Date().toISOString(),
          ...options
        });
      }
    } catch (error) {
      console.warn('Google Ads form conversion tracking failed:', error);
    }
  }
}

/**
 * Track Google Ads Phone Click Conversion
 * 
 * Fires when user clicks any phone number or Call Now button.
 * 
 * @param {string} phoneNumber - The phone number being called
 * @param {Object} options - Optional additional parameters
 */
export function trackGoogleAdsPhoneConversion(phoneNumber = '+917704949022', options = {}) {
  if (typeof window !== 'undefined' && window.gtag_report_call_conversion) {
    try {
      window.gtag_report_call_conversion();
      
      // Push to dataLayer for debugging
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'google_ads_phone_click',
          phone_number: phoneNumber,
          timestamp: new Date().toISOString(),
          ...options
        });
      }
    } catch (error) {
      console.warn('Google Ads phone conversion tracking failed:', error);
    }
  }
}

/**
 * Track WhatsApp Enquiry Click
 * 
 * Fires when user clicks any WhatsApp enquiry button.
 * Uses custom event since no dedicated WhatsApp conversion ID is currently configured.
 * 
 * @param {string} phoneNumber - The WhatsApp phone number
 * @param {Object} options - Optional additional parameters
 */
export function trackWhatsAppEnquiry(phoneNumber = '+917704949022', options = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      // Custom event for WhatsApp (not a Google Ads conversion)
      gtag('event', 'whatsapp_enquiry', {
        event_category: 'lead',
        event_label: 'WhatsApp enquiry',
        ...options
      });
      
      // Push to dataLayer for debugging
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'whatsapp_enquiry_click',
          phone_number: phoneNumber,
          timestamp: new Date().toISOString(),
          ...options
        });
      }
    } catch (error) {
      console.warn('WhatsApp enquiry tracking failed:', error);
    }
  }
}

/**
 * Track General Lead CTA Click
 * 
 * Fires when user clicks other lead generation CTAs.
 * 
 * @param {string} ctaType - Type of CTA (e.g., 'enquire', 'get_quote', 'contact')
 * @param {Object} options - Optional additional parameters
 */
export function trackLeadCtaClick(ctaType = 'lead_cta', options = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      gtag('event', 'lead_cta_click', {
        event_category: 'lead',
        event_label: ctaType,
        ...options
      });
      
      // Push to dataLayer for debugging
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'lead_cta_click',
          cta_type: ctaType,
          timestamp: new Date().toISOString(),
          ...options
        });
      }
    } catch (error) {
      console.warn('Lead CTA tracking failed:', error);
    }
  }
}

/**
 * Global Event Delegation for Phone Links
 * 
 * Automatically tracks all tel: link clicks throughout the website.
 * Call this once in your main App component or root layout.
 */
export function setupGlobalPhoneTracking() {
  if (typeof window === 'undefined') return;

  const handlePhoneClick = (event) => {
    const link = event.target.closest('a[href^="tel:"]');
    if (link) {
      const phoneNumber = link.getAttribute('href').replace('tel:', '');
      trackGoogleAdsPhoneConversion(phoneNumber);
    }
  };

  // Use event delegation to avoid duplicate listeners
  document.addEventListener('click', handlePhoneClick, true);
}

/**
 * Global Event Delegation for WhatsApp Links
 * 
 * Automatically tracks all WhatsApp link clicks throughout the website.
 * Call this once in your main App component or root layout.
 */
export function setupGlobalWhatsAppTracking() {
  if (typeof window === 'undefined') return;

  const handleWhatsAppClick = (event) => {
    const link = event.target.closest('a[href*="wa.me"], a[href*="api.whatsapp.com"]');
    if (link) {
      const href = link.getAttribute('href');
      // Extract phone number from WhatsApp URL if present
      const phoneMatch = href.match(/(\d{10,15})/);
      const phoneNumber = phoneMatch ? `+${phoneMatch[1]}` : '+917704949022';
      trackWhatsAppEnquiry(phoneNumber);
    }
  };

  // Use event delegation to avoid duplicate listeners
  document.addEventListener('click', handleWhatsAppClick, true);
}
