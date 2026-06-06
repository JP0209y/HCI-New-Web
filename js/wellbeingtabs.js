
document.querySelectorAll('.feature-tabs .nav-link').forEach(tab => {
  tab.addEventListener('click', function () {

    const target = this.getAttribute('data-bs-target'); // #tab1
    const videoId = target + '-video'; // #tab1-video

    // remove active from all videos
    document.querySelectorAll('.chair-image-wrapper .tab-pane')
      .forEach(v => v.classList.remove('show','active'));

    // add active to selected video
    document.querySelector(videoId)
      .classList.add('show','active');

  });
});
