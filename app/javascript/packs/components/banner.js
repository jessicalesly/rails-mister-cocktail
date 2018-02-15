import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Mojito", "Cosmopolitan", "Mai Tai", "Gin fizz", "London Mule"],
    typeSpeed: 80,
    loop: true
  });
  console.log("hello")
}

export { loadDynamicBannerText };
