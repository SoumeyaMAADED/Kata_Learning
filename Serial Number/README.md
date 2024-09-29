# Serial Number

Nous avons un tableau contenant une liste d'équipements ayant chacun un Sérial Number.

**Objectif**

Extraire une liste sans doublons de tous les codes réseaux existant dans la liste en sachant que:

- Le code réseau  qui est contenu dans le Sérial Number constitue les 9 premiers caractères de ce champ.

**Langage au choix**

Js, Python ou autre...

**Données entrée - Tableau Equipement:**

---------------------------------------------------------------------
|     **Serial Number**         |              **Nom**              |
|                               |                                   |
|     02080008000100005         |             Capteur 1             |
|                               |                                   |
|     02080008000100006         |             Capteur 2             |
|                               |                                   |
|     02090008000100008         |             Capteur 3             |
|                               |                                   |
|     02090009000100012         |             Capteur 4             |
|                               |                                   |
---------------------------------------------------------------------

**Données en sorties attendues:**

- 020800080
- 020900080
- 020900090