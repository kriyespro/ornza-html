/* ORNZA shared site footer + newsletter — injected on all pages */
(function () {
  const mount = document.getElementById('ornza-site-footer');
  if (!mount) return;

  mount.innerHTML = `
<section class="nl-v2" id="newsletter">
  <div class="nl-v2-inner">
    <div class="sec-eyebrow">Stay in the Loop</div>
    <h2 class="nl-v2-title">Get Early Access &amp; <em>Exclusive Offers</em></h2>
    <p class="nl-v2-sub">Join 5,000+ subscribers who get first access to new arrivals, seasonal sales, and secret discount codes.</p>
    <div class="nl-form">
      <input type="email" class="nl-email" id="nl-email" placeholder="Your email address">
      <button type="button" class="nl-submit" id="nl-submit">Subscribe</button>
    </div>
    <div class="nl-note" id="nl-msg">No spam, ever. Unsubscribe anytime.</div>
  </div>
</section>
<footer class="footer-v2">
  <div class="footer-v2-top">
    <div>
      <a href="index.html" class="footer-brand-logo">ORN<span>Z</span>A</a>
      <p class="footer-brand-desc">Where gold meets brilliance. Handcrafted artificial jewellery from Surat — for the woman who celebrates herself every day.</p>
      <div class="footer-socials">
        <a href="https://instagram.com/ornza.com2026" class="footer-social" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
        <a href="https://facebook.com/ornza" class="footer-social" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
        <a href="https://wa.me/919999999999" class="footer-social" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">WA</a>
        <a href="https://youtube.com/@ornza" class="footer-social" target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶</a>
      </div>
    </div>
    <div>
      <div class="footer-col-title">Collections</div>
      <ul class="footer-links">
        <li><a href="women.html">Women's Jewellery</a></li>
        <li><a href="men.html">Men's Collection</a></li>
        <li><a href="silver925.html">925 Silver</a></li>
        <li><a href="hampers.html">Gift Hampers</a></li>
        <li><a href="women.html#mangalsutras">Mangalsutras</a></li>
        <li><a href="women.html#pearl">Pearl Collection</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Customer Care</div>
      <ul class="footer-links">
        <li><a href="track-order.html">Track My Order</a></li>
        <li><a href="reviews.html">Customer Reviews</a></li>
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="#">Return Policy</a></li>
        <li><a href="#">Shipping Info</a></li>
        <li><a href="#">Size Guide</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Company</div>
      <ul class="footer-links">
        <li><a href="about.html">Our Story</a></li>
        <li><a href="collections.html">All Collections</a></li>
        <li><a href="#">Wholesale Enquiry</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Get in Touch</div>
      <div class="footer-contact-item">
        <span class="footer-contact-icon">📍</span>
        <div class="footer-contact-text">Surat, Gujarat, India — 395001</div>
      </div>
      <div class="footer-contact-item">
        <span class="footer-contact-icon">📞</span>
        <div class="footer-contact-text"><a href="https://wa.me/919999999999">+91 99999 99999</a></div>
      </div>
      <div class="footer-contact-item">
        <span class="footer-contact-icon">✉</span>
        <div class="footer-contact-text"><a href="mailto:ornzza.com@gmail.com">ornzza.com@gmail.com</a></div>
      </div>
      <div class="footer-contact-item">
        <span class="footer-contact-icon">🕐</span>
        <div class="footer-contact-text">Mon–Sat, 10am–7pm IST</div>
      </div>
      <div class="footer-payments">
        <div class="footer-payments-label">We Accept</div>
        <div class="footer-payments-badges">
          <span>UPI</span><span>Visa</span><span>Mastercard</span><span>COD</span>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-v2-bottom">
    <div class="footer-copy">© 2025 ORNZA. All rights reserved. Made with ♥ in Surat.</div>
    <div class="footer-legal">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Return Policy</a>
    </div>
  </div>
</footer>`;

  document.getElementById('nl-submit')?.addEventListener('click', subscribeNL);
  document.getElementById('nl-email')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') subscribeNL();
  });
})();

function subscribeNL() {
  const email = document.getElementById('nl-email')?.value.trim();
  const msg = document.getElementById('nl-msg');
  if (!msg) return;
  if (!email || !email.includes('@')) {
    msg.textContent = 'Please enter a valid email address.';
    msg.style.color = '#ff8080';
    return;
  }
  msg.textContent = "✓ You're subscribed! Welcome to the ORNZA family.";
  msg.style.color = '#6bcb77';
  const input = document.getElementById('nl-email');
  if (input) input.value = '';
}
