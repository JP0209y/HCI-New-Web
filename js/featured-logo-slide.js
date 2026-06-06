/* =========================================
   AUTO DUPLICATE FOR PERFECT INFINITE LOOP
========================================= */

function createInfiniteMarquee(trackId){

  const track = document.getElementById(trackId);

  const originalContent = track.innerHTML;

  /* Duplicate multiple times */
  track.innerHTML += originalContent;
  track.innerHTML += originalContent;
  track.innerHTML += originalContent;

}

/* Apply on all tracks */

createInfiniteMarquee("track1");
createInfiniteMarquee("track2");