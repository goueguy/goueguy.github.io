<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <title>GJ-ACCUEIL</title>
    </head>
<body>
    <!-- MENU -->
    <div id="main">
        <!-- NAVBAR -->
        <nav>
            <div class="navbar">
                <div class="logo"><h1>GJ</h1></div>
                <div class="openMenu"><i class="fa fa-bars"></i></div>
                <ul class="mainMenu">
                    <li><a href="index.html" class="active">Accueil</a></li>
                    <li><a href="realisations.html">Réalisations</a></li>
                    <li><a href="competences.html">Compétences</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <div class="closeMenu"><i class="fa fa-close"></i></div>
                    <span class="icons">
                        <i class="fa fa-linkedin-square fa-2x"></i>
                        <i class="fa fa-twitter-square fa-2x"></i>
                        <i class="fa fa-facebook-square fa-2x" ></i>
                        <i class="fa fa-github-square fa-2x"></i>
                    </span>
                </ul>
               
            </div>
        </nav>
        <section id="presentation">
                <div class="container">
                        <div class="grid-container">
                            <div id="block-left">
                                <div id="vertical-bar"></div>
                                <div class="infos">
                                    <p id="greating">Salut, je suis</p>
                                    <p id="function"><strong class="title-dev">Développeur </strong><span class="font-weight-bold" id="dev">WEB & MOBILE.</span></p>
                                    <p id="description">Je suis Goueguy Jean-Louis Alexis passionné<br>
                                        de développement web et mobile basé en <br>côte d’ivoire. Bienvenue sur mon porfolio.</p>
                                    <button type="button" class="btn-contact-me">CONTACTEZ-MOI</button>
                                </div>
                            </div>
                            <div>
                                <div class="content-right">
                                    <img src="images/me.png" class="font-weight-bold" id="picture" alt="">
                                </div>
                            </div>
                        </div>
                </div>
        </section>
        <!-- SERVICES -->
        <section id="services">
            <h2 class="services-title font-weight-bold"><span>Services</span></h2>
            <div class="container">
                <div class="services-container">
                    <div class="card anim">
                        <img src="images/code.png" class="img-fluid" alt="">
                        <h4 class="card-title">FRONTEND</h4>
                        <div>Grâce à mon approche centrée sur l’utilisateur votre application ou site web sera belle et agréable à utiliser</div>
                    </div>
                    <div class="card anim">
                        <img src="images/mobile.png" class="img-fluid" alt="">
                        <h4 class="card-title">APPLICATIONS MOBILE</h4>
                        <p>Je conçois des applications mobiles sécurisées dotées innovantes et performantes sur  IOS et Android.</p>
                    </div>
                    <div class="card anim">
                        <img src="images/seo.png" class="img-fluid" alt="">
                        <h4 class="card-title">SEO</h4>
                        <p>J’améliore le positionnement de vos pages, sites ou applications web dans la page des résultats des moteurs de recherches</p>
                    </div>
                    <div class="card anim">
                        <img src="images/training.png" class="img-fluid" alt="">
                        <h4 class="card-title">FORMATION</h4>
                        <p>J’organise des sessions de formations pour toutes personnes ayant le désir d’apprendre à coder</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- LANGAGES ET TECHNOLOGIES -->
        <section id="techno">
            <h2 class="langages-title">Langages et Technologies</h2>
            <div class="container">
                <div class="langages-container">
                        <!-- techno 1 -->
                    <div class="techno-card anim">
                        <img src="images/javascript.jpg" class="img-langages" alt="">
                        <div class="infos-techno">
                            <h4 class="techno-title">JAVASCRIPT</h4>
                            <p>Validation des formulaires, animations des pages etc..</p>
                        </div>
                    </div>
                    <!-- techno 2 -->
                    <div class="techno-card anim">
                        <img src="images/php.png" class="img-langages" alt="">
                        <div class="infos-techno">
                            <h4 class="techno-title">PHP</h4>
                            <p>Dynamiser le contenu le contenu de nos pages etc..</p>
                        </div>
                    </div>
                    <!-- techno 3 -->
                    <div class="techno-card anim">
                        <img src="images/bootstrap.png" class="img-langages" alt="">
                        <div class="infos-techno">
                            <h4 class="techno-title">BOOTSTRAP</h4>
                            <p>Interfaces Utilisateurs agréables et responsives.</p>
                        </div>
                    </div>
                    <!-- techno 4 -->
                    <div class="techno-card anim">
                        <img src="images/mysql.png" class="img-langages" alt="">
                        <div class="infos-techno">
                            <h4 class="techno-title">MYSQL</h4>
                            <p>Requêtes au niveau de la base de données etc...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- OFFERS -->
        <section id="offers">
                <div class="offers-container">
                    <div class="container">
                        <h3 class="title-offer">BESOIN DE PROFESSIONNEL POUR RÉALISER VOS PROJETS ?</h3>
                        <div class="content">
                            <p>
                                Offrez-vous le meilleur site internet ou application à votre projet !
                            </p>
                            <p>
                                Je vous offre une solution complète de site web pro, une application <br>qui s’adapte à votre business et qui est accessible partout
                            </p>
                        </div>
                        <button type="button" class="btn-contact-me">CONTACTEZ-MOI</button>
                    </div>
                </div>
        </section>
        <!-- STATISTICS -->
        <section id="statistics">
            <div class="container">
                <div class="statistics-container">
                        <div class="stats">
                            <p class="statistics-count" id="counter" countto="120"></p>
                            <p class="stats-title">Clients</p>
                        </div>
                        <div class="stats">
                            <p class="statistics-count" id="counter" countto="5"></p>
                            <p class="stats-title">Années d’Expériences</p>
                        </div>
                        <div class="stats">
                            <p class="statistics-count" id="counter" countto="20"></p>
                            <p class="stats-title">Projets</p>
                        </div>
                </div>
            </div>
        </section>
        <!-- LOADER -->
        <a href="#top" onclick="topFunction()" id="scrollTop" title="Aller en haut"><i class="fa fa-chevron-up fa-2x scroll" aria-hidden="true"></i></i></a>
        <!-- FOOTER -->
        <footer>
            <div id="part-one">
                <h3>Discutons Maintenant !</h3>
                <hr>
            </div>
            <div class="container">
                <div class="footer-container">
                    <div class="section-1">
                        <h2 class="logo-footer">GJ</h2>
                        <p class="copyright">Copyright @2021 | Conçu par </p>
                        <span class="author">Goueguy Jean-Louis A.</span>
                    </div>
                    <div class="section-2">
                        <ul>
                            <li><a href="#">Accueil</a></li>
                            <li><a href="#">Compétences</a></li>
                            <li><a href="#">Réalisations</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="section-3">
                        <ul>
                            <li><a href="#"> <i class="fa fa-map-marker"></i>Abidjan, Cocody-Blockhauss
                            <br> non loin de l’hôtel sofitel ivoire</a></li>
                            <li><a href="#"><i class="fa fa-envelope"></i>jlagoueguy@gmail.com</a></li>
                            <li><a href="#"><i class="fa fa-phone"></i>+225 0103663050 / 0709162396</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    <div id="loader-container">
        <div id="load" class="loader"></div>
    </div>
    <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js"></script>
    <script>
        var scroll = new SmoothScroll('a[href="#top"]', {
            speed: 300
        });
    </script>
    <script src="https://cdn.jsdelivr.net/npm/typeit@7.0.4/dist/typeit.min.js"></script>
    <script src="js/loader.js"></script>
    <script src="js/script.js"></script>
    <script src="js/type.js"></script>
</body>
</html>