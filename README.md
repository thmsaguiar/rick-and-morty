# Rick and Morty Characters
  
[![Netlify Status](https://api.netlify.com/api/v1/badges/5b7db7dd-5cf5-49f1-be2d-17da0d34873c/deploy-status)](https://app.netlify.com/sites/rickandmortyapi-thmsaguiar/deploys)
  ![GitHub last commit](https://img.shields.io/github/last-commit/thmsaguiar/rick-and-morty) ![GitHub top language](https://img.shields.io/github/languages/top/thmsaguiar/rick-and-morty) 
  
## Sobre

Uma das minhas animações preferidas é [Rick And Morty](https://rickandmorty.fandom.com/wiki/Rickipedia). Em Rick And Morty existem muitas dimensões, universos e multiversos diferentes, que nos traz muitas variações de um mesmo personagem. Então resolvi desenvolver um projeto simples para listar os diferentes tipos de um mesmo personagem, que tenha aparecido na série, apresentando sua espécie, origem e gênero. Para isso, foi utilizei a [API de Rick And Morty](https://rickandmortyapi.com/).

### A API Rick And Morty

Atualmente a API conta com um total de `826` personagens da série. Os atributos referente ao personagem utilizados neste projeto foram:

Key	| Type	| Description
----|-------|------------
name |	string	| The name of the character.
gender |	string |	The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
species |	string |	The species of the character.
origin |	object |	Name to the character's origin location.

#### Requisição

Para localizar todos os personagens foi feita uma requisição `GET` para
```
GET https://rickandmortyapi.com/api/character
```
Que retorna pra gente informações como a quantidade de personagens ( `count` ), lista de personagens ( `results` ), número de páginas ( `pages` ), página anterior ( `prev` ) e próxima ( `next` ).

#### Filtro

O filtro foi feito utilizando apenas o nome do personagem então foram incluidos na URL com `?name=<valorrecebidodoinput>`, para pesquisar o personagem Rick, o filtro é aplicado desta maneira
```
GET https://rickandmortyapi.com/api/character/?name=rick
```

Espero que tenham gostado!! Bons estudos!!

## Criador 

| [<img src="https://github.com/thmsaguiar.png?size=115" width=115><br><sub>@thmsaguiar</sub>](https://github.com/thmsaguiar) |
| :---: |
