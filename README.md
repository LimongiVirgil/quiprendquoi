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
Cette web API permet en somme de savoir quand l'élément ciblé entre dans le viewport et permet ainsi de déclecher des actions.

Pour ce faire, il faut 3 choses:

- L'observateur d'intersection

```
var observer = new IntersectionObserver(callback, options);
```

la variable `options` étant les options de l'observer:

```
var options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}
```

`root` => L'élément qui est utilisé comme zone d'affichage au moment d'évaluer la visibilité de la cible. Par défaut la valeur est `null`

`rootMargin` => La marge autour de `root`. Par défaut la margin est de 0.

`threshold` => A quel niveau de l'élément cible la fonction callback doit être appellée. `1.0` = tous les pixels visibles, 0.5 = moitié des pixels visibles. Peut-être un tableau `[0, 0.25, 0.5, 0.75, 1]`.

- L'élément à observer 

```
var target = document.querySelector('#MaCible');
observer.observe(target);
```

- La fonction callback

```
var callback = function(entries, observer) { 
  entries.forEach(entry => {
    // Ici les actions que vous voulez effectuer une fois l'élément cible dans le viewport
  });
};
```
