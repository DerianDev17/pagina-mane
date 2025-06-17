document.addEventListener('DOMContentLoaded', function () {
    const footerContent = `
    <div class="container-fluid bg-secondary text-white pt-5 px-sm-3 px-md-5" style="margin-top: 90px;">
        <div class="row mt-5">
            <div class="col-lg-4">
                <div class="d-flex justify-content-lg-center p-4" style="background: rgba(255, 255, 255, .05);">
                    <i class="fa fa-2x fa-map-marker-alt text-primary"></i>
                    <div class="ms-3">
                        <h5 class="text-white">Nuestra Oficina</h5>
                        <p class="m-0">Calle Lorenzo de Garaicoa y Colombia, Guayaquil - Ecuador</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="d-flex justify-content-lg-center p-4" style="background: rgba(255, 255, 255, .05);">
                    <i class="fa fa-2x fa-envelope-open text-primary"></i>
                    <div class="ms-3">
                        <h5 class="text-white">Correo Electrónico</h5>
                        <p class="m-0">manemoviafro@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="d-flex justify-content-lg-center p-4" style="background: rgba(255, 255, 255, .05);">
                    <i class="fa fa-2x fa-phone-alt text-primary"></i>
                    <div class="ms-3">
                        <h5 class="text-white">Llámanos</h5>
                        <p class="m-0">+593 999 391 945</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-5">
            <div class="col-lg-3 col-md-6 mb-5">
                <a href="index.html" class="navbar-brand">
                    <h1 class="m-0 mt-n2 display-4 text-primary text-uppercase">MANE</h1>
                </a>
                <p>Movimiento Afrodescendiente Nacional Ecuatoriano, trabajando por la igualdad y la justicia social.</p>
                <div class="d-flex justify-content-start mt-4">
                    <a class="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-lg btn-outline-light btn-lg-square" href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="font-weight-semi-bold text-primary mb-4">Enlaces Populares</h4>
                <div class="d-flex flex-column justify-content-start">
                    <a class="text-white mb-2" href="index.html"><i class="fa fa-angle-right mr-2"></i>Inicio</a>
                    <a class="text-white mb-2" href="about.html"><i class="fa fa-angle-right mr-2"></i>Acerca de</a>
                    <a class="text-white mb-2" href="service.html"><i class="fa fa-angle-right mr-2"></i>Servicios</a>
                    <a class="text-white mb-2" href="team.html"><i class="fa fa-angle-right mr-2"></i>Equipo</a>
                    <a class="text-white" href="contact.html"><i class="fa fa-angle-right mr-2"></i>Contacto</a>
                </div>
            </div>
        </div>
        <div class="row p-4 mt-5 mx-0" style="background: rgba(255, 255, 255, .05);">
            <div class="col-md-6 text-center text-md-left mb-3 mb-md-0">
                <p class="m-0 text-white">&copy; <a class="font-weight-bold" href="#">MANE</a>. Todos los derechos reservados.</p>
            </div>
            <div class="col-md-6 text-center text-md-right">
                <p class="m-0 text-white">Diseñado por <a class="font-weight-bold" href="https://github.com/DerianDev17">DerianDev17</a></p>
            </div>
        </div>
    </div>`;

    // Insertar el footer en el elemento con id "footer"
    document.getElementById('footer').innerHTML = footerContent;

    // Obtener la página actual sin parámetros
    const currentPage = window.location.pathname.split('/').pop().split('?')[0] || 'index.html';

    // Actualizar enlaces en el footer
    const footerLinks = document.querySelectorAll('#footer a');

    footerLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        if (!href || href === '#') {
            if (link.textContent.includes('Inicio')) {
                link.setAttribute('href', 'index.html');
            } else if (link.textContent.includes('Acerca de')) {
                link.setAttribute('href', 'about.html');
            } else if (link.textContent.includes('Servicios')) {
                link.setAttribute('href', 'service.html');
            } else if (link.textContent.includes('Equipo')) {
                link.setAttribute('href', 'team.html');
            } else if (link.textContent.includes('Contacto')) {
                link.setAttribute('href', 'contact.html');
            }
        }

        // Marcar el enlace activo
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
});
