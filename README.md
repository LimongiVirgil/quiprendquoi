# Qui prend quoi

## Installation

`npm install`

`npm run start`

## Améliorations apportées

_Pour chaque amélioration, un message type "message de commit" et si pertinent le nom des fichiers principalement concernés_

- 17.a Ajout d'un item
- 17.b Affichage des items
- 17.c Suppression d'un item
- 29.a - Ajout d'un mode fullscreen (`fullscreen.js`)
- 29.c Un petit coup de peinture

## Article personnel

### Sujet : Intersection Observer web API

Le sujet dont je vais vous parler est la web API Intersection Observer, une web API que j'ai utilisé pour le projet fil rouge.
Cette web API permet en somme de savoir quand un élément ciblé entre dans le viewport et permet ainsi de déclecher des actions.

Pour ce faire, il faut 3 choses:

- L'observateur d'intersection

```
var options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

var observer = new IntersectionObserver(callback, options);
```

