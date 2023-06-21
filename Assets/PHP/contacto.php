<section class="contact section" id="contact">
            <h2 data-heading="Ponte en contacto" class="section__title">Contáctame</h2>

            <div class="contact__container container grid">
                <div>
                    <div class="contact__information">
                        <i class="uil uil-envelope contact__icon"></i>

                        <div>
                            <h3 class="contact__title">Email</h3>
                            <span class="contact__subtitle">felipeagudeloolaya@gmail.com</span>
                        </div>
                    </div>

                    <div class="contact__information">
                        <div class="contact__social">
                            <a href="https://dresk76.itch.io/the-artifact-seeker" target="_blank" class="contact__social-icon">
                                <i class='bx bx-game' ></i>
                            </a>
    
                            <a href="https://www.linkedin.com/in/dresk76/" target="_blank" class="contact__social-icon">
                                <i class='bx bxl-linkedin' ></i>
                            </a>
    
                            <a href="https://github.com/Dresk76" target="_blank" class="contact__social-icon">
                                <i class="uil uil-github-alt"></i>
                            </a>
    
                            <a href="https://twitter.com/Dresk76" target="_blank" class="contact__social-icon">
                                <i class="uil uil-twitter-alt"></i>
                            </a>
    
                            <a href="https://www.instagram.com/dresk_76/" target="_blank" class="contact__social-icon">
                                <i class="uil uil-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <div class="contact__information">
                        <i class="uil uil-map-marker contact__icon"></i>

                        <div>
                            <h3 class="contact__title">Ubicación</h3>
                            <span class="contact__subtitle">Colombia - Bogota</span>
                        </div>
                    </div>
                </div>

                <form action="envia_mail.php" method="POST" id="myForm" class="contact__form grid">
                    <div class="contact__inputs grid">
                        <div class="contact__content">
                            <input type="text" name="name" class="contact__input" required="required">
                            <label for="" class="contact__label">Nombre</label>
                            <span>Nombre</span>
                        </div>

                        <div class="contact__content">
                            <input type="email" name="email" class="contact__input" required="required">
                            <label for="" class="contact__label">Email</label>
                            <span>Email</span>
                        </div>
                    </div>

                    <div class="contact__content">
                        <input type="text" name="subject" class="contact__input" required="required">
                        <label for="" class="contact__label">Asunto</label>
                        <span>Asunto</span>
                    </div>

                    <div class="contact__content textarea">
                        <textarea name="massage" id="" class="contact__input" required="required"></textarea>
                        <label for="" class="contact__label">Mensaje</label>
                        <span>Mensaje</span>
                    </div>

                    <div class="about__buttons">
                        <button type="submit" class="button-neon portfolio__submit">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Enviar Mensaje
                            <i class="uil uil-message button__icon"></i>
                        </button>
                    </div>
                </form>
            </div>
        </section>