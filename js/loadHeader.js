document.addEventListener('DOMContentLoaded', function() {
    // Contenido del header directamente en JavaScript
    const headerContent = `
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 d-none d-lg-block" style="background-color: #8e764c;">
                <div class="w-100 h-100 d-flex align-items-center justify-content-center">
                    <a href="index.html" class="d-flex align-items-center justify-content-center">
                        <img src="img/LogoMANE.webp" alt="Logo Mane" style="max-height: 100px; width: auto;">
                    </a>
                </div>
            </div>
            
            <div class="col-lg-9">
                <div class="row bg-white border-bottom d-none d-lg-flex">
                    <div class="col-lg-7 text-left">
                        <div class="h-100 d-inline-flex align-items-center py-2 px-3">
                            <i class="fa fa-envelope text-primary mr-2"></i>
                            <small>manemoviafro@gmail.com</small>
                        </div>
                        <div class="h-100 d-inline-flex align-items-center py-2 px-2">
                            <i class="fa fa-phone-alt text-primary mr-2"></i>
                            <small>+593 999 391 945</small>
                        </div>
                    </div>
                    <div class="col-lg-5 text-right">
                        <div class="d-inline-flex align-items-center p-2">
                            <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="https://www.facebook.com/profile.php?id=61559568765852">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="https://www.instagram.com/p/DINdh76usnL/?igsh=MXZxZTl3b25kbTRocQ== ">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <nav class="navbar navbar-expand-lg bg-white navbar-light p-0">
                    <a href="index.html" class="navbar-brand d-block d-lg-none">
                        <h1 class="m-0 display-4 text-primary text-uppercase">MANE</h1>
                    </a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav mr-auto py-0">
                            <a href="index.html" class="nav-item nav-link">inicio</a>
                            <a href="about.html" class="nav-item nav-link">Acerca de</a>
                            <a href="service.html" class="nav-item nav-link">Práctica</a>
                            <a href="team.html" class="nav-item nav-link">Equipos</a>
                            <a href="contact.html" class="nav-item nav-link">Contacto</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>`;

    // Insertar el header en el elemento con id "header"
    document.getElementById('header').innerHTML = headerContent;
    
    // Actualizar el enlace activo en el menú
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-item.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});