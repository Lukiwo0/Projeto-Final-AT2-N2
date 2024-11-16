const footer = 
`

<footer id="footer-padrao" class="footer-padrao">
<div class="box-footer">
  <div id="redes-sociais">
    <p>Acompanhe as redes sociais da UCB</p>

    <div class="icons-redes-sociais">
      <a href="https://www.facebook.com/catolicadebrasilia/" target="_blank">
        <i class="bi bi-facebook"></i>
      </a>

      <a href="https://www.linkedin.com/school/universidadecatolicadebrasilia" target="_blank">
        <i class="bi bi-linkedin"></i>
      </a>

      <a href="https://www.instagram.com/catolicadebrasilia/?hl=pt-br" target="_blank">
        <i class="bi bi-instagram"></i>
      </a>

      <a href="https://www.youtube.com/user/catolicadebrasilia" target="_blank">
        <i class="bi bi-youtube"></i>
      </a>

      <a href="https://www.tiktok.com/@catolicadebrasilia" target="_blank">
        <i class="bi bi-tiktok"></i>
      </a>
    </div>
  </div>
  <div id="endereco">
    <p>Ache-nos</p>

    <div class="text-endereco">
      <div class="text-taguatinga">
        <a href="https://g.co/kgs/dtAJYFP" target="_blank">
          Câmpus Taguatinga QS 07 – Lote 01 – EPCT – Taguatinga, Brasília/DF - CEP: 71966-700
        </a>
        <p>Telefone: 61 3356-9000</p>
      </div>

      <div class="text-ceilandia">
        <a href="https://g.co/kgs/4z9hHpq" target="_blank">
          Câmpus Ceilândia St. N QNN 31 - Ceilândia, Brasília - DF, CEP: 72225-310
        </a>
        <p>Telefone: 3356-9202</p>
      </div>
    </div>
  </div>
</div>
</footer>
`

// Inserir o rodapé no body
const body = document.getElementsByTagName('body')[0];
body.insertAdjacentHTML('afterend', footer);
