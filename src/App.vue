<template>
  <div id="app">
    <nav class="inf-nav navbar navbar-light bg-light navbar-expand-lg">
      <span style="border-right: 1px solid #d2dae2;"><i class="fas fa-envelope"></i>&nbsp;benhabibzakarya@yahoo.com</span>
      <span><i class="fas fa-phone" style="transform: rotate(90deg);"></i>&nbsp;+213697802429</span>
      <a class="social ml-auto" href="#"><i class="fab fa-facebook"></i></a>
      <a class="social" href="#"><i class="fab fa-github"></i></a>
      <a class="social" href="#"><i class="fab fa-linkedin-in"></i></a>
      <a class="social" href="#"><i class="fab fa-twitter"></i></a>

      <a href="#" class="login-button" data-toggle="modal" data-target="#exampleModal"><span><i class="fas fa-lock"></i>&nbsp;&nbsp;Se Connecter</span></a>
    </nav>
    <nav class="navbar main navbar-expand-lg navbar-dark primary" id="divid">
      <a class="navbar-brand" href="/"><img src="img/ntic.svg" width="100" alt=""></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

        </ul>
        <form class="form-inline search my-2 my-lg-0 mr-auto">
          <input id="squery" class="form-control mr-sm-2" type="text" placeholder="Rechercher Sur N’TIC">
          <a class="btn search btn-outline-success my-2 my-sm-0" onclick = "this.href='/shop/search/' + document.getElementById('squery').value"><i class="fas fa-search"></i></a>
        </form>
        <ul class="navbar-nav mr-0 nav-cont mt-2 mt-lg-0">
            <li class="nav-item">
                <a class="nav-link icn" href="/cart"><i class="fas fa-shopping-cart"></i>
                      0
                </a>
            </li>
        </ul>
      </div>
    </nav>
    <nav class="navbar white navbar-expand-lg navbar-light bg-light secondary">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle dt" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-bars"></i> TOUS LES PRODUITS
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">

            </div>
          </li>
          <li class="nav-item active">
            <router-link to="/" class="nav-link nav-linka"><i class="fas fa-home"></i> Acceuil</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/shop" class="nav-link nav-linka"><i class="fas fa-shopping-bag"></i> SHOP</router-link>
          </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link nav-linka"><i class="fas fa-shopping-bag"></i> CONTACT</router-link>
              </li>
            <li class="nav-item">
              <router-link to="/maintenance" class="nav-link nav-linka"><i class="fas fa-shopping-bag"></i> MAINTANANCE</router-link>
            </li>
          <li class="nav-item">
            <router-link to="/forum" class="nav-link nav-linka"><i class="fas fa-shopping-bag"></i> FORUM</router-link>
          </li>
        </ul>
      </div>
    </nav>


    <router-view/>
    <footer>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fab fa-facebook"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fab fa-github"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fab fa-linkedin-in"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fab fa-twitter"></i></a>
        </li>
      </ul>
      <hr width="80%">
      <div class="middle">
        <div class="row">
            <div class="col sm col-centered">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link" href="#">Acceuil</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Ordinataurs&Tablettes</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Bureautique</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Consoles</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Accessoires</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Sécurité</a>
                </li>
              </ul>
            </div>
            <div class="col sm col-centered">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link" href="#">Paramétres</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Aide & FAQ</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" data-toggle="modal" data-target="#exampleModal">Mon Compte</a>
                </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Conditions D'utilisation</a>
                  </li>
              </ul>
            </div>
            <div class="col sm col-centered">
              <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link" href="/contact">Contactez-Nous</a>
                  </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">A Propos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/services">Services</a>
                </li>
              </ul>
            </div>
        </div>
      </div>
      <div class="bottom">
        <p>2020 &copy; N'TIC</p>
      </div>
    </footer>

  </div>
</template>

<style lang="scss">
@import '/assets/stylesheets/sass/main.scss';
</style>
