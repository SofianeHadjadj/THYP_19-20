var etudiant = document.getElementById('etudiant');
var langue = document.getElementById('langue');
document.getElementById('photo').setAttribute("src", "img/banner/home-right.png");

var rien = '<ul class="star_rating mt-4 inlinelist">'
  +'<li class="disable"><span><i class="fas fa-star"></i></span></li>'
  +'<li class="disable"><span><i class="fas fa-star"></i></span></li>'
  +'<li class="disable"><span><i class="fas fa-star"></i></span></li>'
  +'<li class="disable"><span><i class="fas fa-star"></i></span></li>' 
+'</ul>';

var unpeu = '<ul class="star_rating mt-4 inlinelist">'
  +'<li><span><i class="fas fa-star"></i></span></li>'
  +'<li><span><i class="fas fa-star"></i></span></li>'
  +'<li class="disable"><span><i class="fas fa-star"></i></span></li>'
  +'<li class="disable"><span><i class="fas fa-star"></i></span></li>'  
+'</ul>';

var bien = '<ul class="star_rating mt-4 inlinelist">'
  +'<li><span><i class="fas fa-star"></i></span></li>'
  +'<li><span><i class="fas fa-star"></i></span></li>'
  +'<li><span><i class="fas fa-star"></i></span></li>'
  +'<li class="disable"><span><i class="fas fa-star"></i></span></li>'  
+'</ul>';

var tresbien = '<ul class="star_rating mt-4 inlinelist">'
  +'<li><span><i class="fas fa-star"></i></span></li>'
  +'<li><span><i class="fas fa-star"></i></span></li>'
  +'<li><span><i class="fas fa-star"></i></span></li>'
  +'<li><span><i class="fas fa-star"></i></span></li>'  
+'</ul>';

langues = ['anglais', 'arabe', 'chinois', 'espagnol', 'français', 'russe', 'tamazirth'];
languages = ['Android', 'C#', 'C++', 'C', 'Java', 'Objectif C', 'PHP', 'cobol', 'javascript', 'python'];
framework = [".Net", "Angular", "Bootstrap", "Django", "Flesk", "Hibernate", "Jenkins", "React", "Symphony", "Vue", "Zend", "laravel"];
outils = ['After Effect', 'Ansible', 'Blender', 'Bracket', 'Cordova', 'Dreamweaver', 'Eclipse', 'Final Cut', 'Flash', 'Gimp', 'Illustrator', 'In design', 'Inkscape', 'Kompozer', 'Ligne 29', 'Mamp', 'Photoshop', 'PhpMyAdmin', 'Premier', 'R', 'Sketchup', 'Sublime text', 'Unity', 'Visual Studio Code', 'Wamp', 'Xamp'];
competences = ["analyser des bases de données", "connaître les base du langage HTML 5", "connaître les bases du responsive web design (RWD)", "connaître les outils d’édition web (éditeurs html, CSS, …) ", "savoir faire fonctionner, sur un site, un service de type « e-commerce » (vente de produits, …)", "savoir gérer la publication à distance d’un site web", "savoir gérer un projet", "savoir gérer un site multilingue", "savoir gérer une communauté en ligne", "savoir intégrer, dans un page, des outils de diffusion web 2 (twitter, facebook, …)", "savoir mettre en place des enquêtes enligne", "savoir mettre en place et exploiter des outils de veille d’information", "savoir mettre en place et gérer un forum de discussion", "savoir mettre en place et gérer un service de type « newsletter » (impliquant la mise en place et la gestion d’un annuaire d’abonnés)", "savoir prototyper des innovations numériques", "savoir réaliser des podcasts", "savoir scénariser et réaliser les rubriques « statiques » d’un site web", "savoir travailler avec le RSS", "savoir utiliser correctement les métadonnées pour une meilleure diffusion des contenus du site", "savoir utiliser des cartes géographiques interactives", "savoir utiliser des outils de gestion d’accès aux rubriques (accès par mot de passe, …)", "savoir utiliser les programmes de liens sponsorisés", "utiliser les méthodes agiles de développement"];
