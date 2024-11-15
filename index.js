<body class="min-h-screen bg-gradient-to-r from-primary to-secondary text-primary-foreground flex flex-col" style="background-color: #001f3f;">
  <header class="w-full bg-seafoam text-secondary-foreground shadow-md">
    <div class="max-w-6xl mx-auto flex justify-between items-center p-4">
      <div class="text-2xl font-bold">One-SporTV</div>
      <nav>
        <ul class="flex space-x-6">
          <li><a href="#home" class="hover:text-primary-foreground transition">Home</a></li>
          <li><a href="#News" class="hover:text-primary-foreground transition">News</a></li>
          <li><a href="#live" class="hover:text-primary-foreground transition">Live</a></li>
          <li class="relative group">
            <a href="#leagues" class="hover:text-primary-foreground transition">Leagues</a>
            <ul class="absolute left-0 mt-2 w-40 bg-card text-card-foreground shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <li><a href="#league1" class="block px-4 py-2 hover:bg-muted">League 1</a></li>
              <li><a href="#league2" class="block px-4 py-2 hover:bg-muted">League 2</a></li>
              <li><a href="#league3" class="block px-4 py-2 hover:bg-muted">League 3</a></li>
              <li><a href="#league4" class="block px-4 py-2 hover:bg-muted">League 4</a></li>
              <li><a href="#league5" class="block px-4 py-2 hover:bg-muted">League 5</a></li>
            </ul>
          </li>
          <li><a href="#about" class="hover:text-primary-foreground transition">About Us</a></li>
          <li><a href="#contact" class="hover:text-primary-foreground transition">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <main class="flex-1 flex flex-col items-center">
    <div class="w-full max-w-4xl mt-8 overflow-hidden rounded-lg shadow-lg">
      <div class="relative w-full h-64">
        <div class="absolute inset-0 flex transition-opacity duration-1000 ease-in-out" id="slideshow">
          <img src="https://placehold.co/800x400?text=Sports+Event+1" alt="Sports Event 1" class="w-full h-full object-cover transition-opacity duration-1000 ease-in-out" />
          <img src="https://placehold.co/800x400?text=Sports+Event+2" alt="Sports Event 2" class="w-full h-full object-cover opacity-0 transition-opacity duration-1000 ease-in-out" />
          <img src="https://placehold.co/800x400?text=Sports+Event+3" alt="Sports Event 3" class="w-full h-full object-cover opacity-0 transition-opacity duration-1000 ease-in-out" />
        </div>
      </div>
    </div>
    <div class="flex-1 flex flex-col items-center justify-center p-4">
      <h1 class="text-4xl font-bold mb-4 text-center">Welcome to One-SporTV</h1>
      <p class="text-lg text-muted-foreground mb-8 text-center">Your ultimate destination for live sports streaming.</p>
      <button class="bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/80 transition">Start Watching</button>
    </div>
  </main>
  <footer class="w-full bg-seafoam text-muted-foreground py-4">
    <div class="max-w-6xl mx-auto text-center">
      <p class="text-sm">&copy; 2024 One-SporTV. All rights reserved.</p>
      <a href="#privacy" class="hover:text-primary-foreground transition" id="privacy-link">Privacy Policy</a>
    </div>
  </footer>
  <section id="privacy" class="bg-card text-card-foreground py-8 hidden">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-4">Privacy Policy</h2>
      <p class="mb-4">At One-SporTV, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information.</p>
      <h3 class="text-2xl font-semibold mb-2">Information We Collect</h3>
      <p class="mb-4">We may collect personal information such as your name, email address, and payment details when you register for an account or make a purchase.</p>
      <h3 class="text-2xl font-semibold mb-2">How We Use Your Information</h3>
      <p class="mb-4">Your information is used to provide and improve our services, process transactions, and communicate with you about your account and our offerings.</p>
      <h3 class="text-2xl font-semibold mb-2">Security</h3>
      <p class="mb-4">We implement a variety of security measures to maintain the safety of your personal information.</p>
      <h3 class="text-2xl font-semibold mb-2">Changes to This Policy</h3>
      <p class="mb-4">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website.</p>
      <p>If you have any questions about this Privacy Policy, please contact us.</p>
    </div>
  </section>
  <script>
  // JavaScript for Slideshow
    const slides = document.querySelectorAll('#slideshow img');
    let currentSlide = 0;
    function showNextSlide() {
      slides[currentSlide].classList.add('opacity-0');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.remove('opacity-0');
    }
    setInterval(showNextSlide, 3000);
    // JavaScript for Privacy Policy Toggle
    const privacyLink = document.getElementById('privacy-link');
    const privacySection = document.getElementById('privacy');
    privacyLink.addEventListener('click', function(event) {
      event.preventDefault();
      privacySection.classList.toggle('hidden');
      privacySection.scrollIntoView({ behavior: 'smooth' });
    });
  </script>
</body>