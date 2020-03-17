if(navigator.share) {
  document.querySelectorAll('[data-share-url]').forEach(($shareEl) => {
    const $buttonShare = document.createElement('button');
    $buttonShare.innerHTML = 'Partager';
    $shareEl.parentNode.append($buttonShare);

    $buttonShare.addEventListener(
      'click',
      shareEvent.bind(this, $shareEl)
    );
  });
} else {
  console.warn("Pas de support de partage :(")
}


function shareEvent($shareEl) {
  navigator
  .share({
    title: $shareEl.getAttribute('data-share-title'),
    text: $shareEl.getAttribute('data-share-text'),
    url: $shareEl.getAttribute('data-share-url'),
  })
}