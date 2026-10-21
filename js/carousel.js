// --- Carousel Scrolling Logic ---
function scrollCarousel(direction) {
  const track = document.getElementById("bookCarousel");
  const scrollAmount = 300; // How many pixels to scroll per click

  track.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth",
  });
}
