document.addEventListener("DOMContentLoaded", () => {
  // Add items Tratamentos
  const tratamentos = [
    {
      imgSrc: './images/cirurgia-estetica.png',
      title: 'Intradermoterapia / Mesoterapia',
      description: 'Injeção de medicamentos específicos diretamente no couro cabeludo, agindo no fortalecimento e crescimento dos fios. Os medicamentos são individualizados paciente a paciente.',
    },
    {
      imgSrc: './images/grafico.png',
      title: 'MMP (micro infusão de medicamentos na pele)',
      description: 'Utilização de aparelho eletrônico com múltiplas agulhas que facilitam a infusão de medicamentos de forma mais uniforme no couro cabeludo.',
    },
    {
      imgSrc: './images/remover.png',
      title: 'PRP (plasma rico em plaquetas)',
      description: 'Injeção de plasma do próprio paciente diretamente no couro cabeludo, com benefícios de Aumento do suprimento de sangue para o folículo piloso, Aumento da espessura da haste capilar, Estimulação da produção de colágeno, Aceleração da proliferação e renovação celular, Prolongamento da fase anágena do ciclo capilar.',
    },
    {
      imgSrc: './images/transplante.png',
      title: 'Microlyzer de pele',
      description: 'A mais nova tecnológica de microenxertos, utilizando de um aparelho projetado para realizar processamento de microenxertos de pele do couro cabeludo saudável com delicadeza, a fim de reduzir seus componentes a tamanhos microscópicos, porém mantendo e preservando a viabilidade tecidual, auxiliando na revitalização dos folículos pilosos.',
    },
    {
      imgSrc: './images/plantar.png',
      title: 'Cirurgia de Transplante Capilar',
      description: 'Utilização da técnica mais avançada e conhecida mundialmente para realização de transplante capilar, a técnica FUE (follicular unit extraction), o qual extrai-se folículos pilosos saudaveis um a um, e implanta nas regiões com falhas de calvice. Cirurgia segura, realizada com todos equipamentos de segurança.',
    },
  ];

  const contentSectionTratamento = document.querySelector('.section-tratamento__content');

  tratamentos.forEach((item) => {
    contentSectionTratamento.innerHTML += `
    <div class="section-tratamento__content__item">
      <div class="section-tratamento__content__item__image">
        <img src="${item.imgSrc}" alt="${item.title}" />
      </div>
      <article class="section-tratamento__content__item__article">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    </div>
  `;
  });

  // Add items Beneficíos
  const beneficios = [
    'Tem observado seu cabelo cair em maior quantidade nos últimos meses',
    'Notou áreas do couro cabeludo mais ralas e sem volume',
    'Percebe que está perdendo a linha de contorno do cabelo',
    'Já tentou diversos tratamentos, mas os resultados não foram satisfatórios',
    'Deseja uma solução definitiva para a calvície',
    'Está cansado de disfarçar a falta de cabelo com penteados ou acessórios',
    'Quer resgatar a confiança com uma aparência natural e jovem',
    'Procurou por soluções alternativas, mas não obteve o efeito desejado'
  ];

  const contentSectionBeneficios = document.querySelector('.section-beneficios__content');

  beneficios.forEach((item, index) => {
    contentSectionBeneficios.innerHTML += `
    <div class="section-beneficios__content__item">
      <div class="section-beneficios__content__item__image"></div>
      <article class="section-beneficios__content__item__article">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9427 2.12227L5.66671 12.3983L0.057373 6.78894L1.94271 4.9036L5.66671 8.62761L14.0574 0.236938L15.9427 2.12227Z" fill="white"/>
        </svg>
        <p>${item}</p>
      </article>
    </div>
  `;
  });

  // Add items Slide
  const imagesSlide = [
    "./images/3c2436f5-88c3-4694-8188-abcadeabfcbb.jpeg",
    "./images/7db65bd8-ea3e-47c8-88e6-ae5b9f700b58.jpeg",
    "./images/8eac755c-26a7-49ab-9f3a-d63de88e621b.jpeg",
    "./images/b294e73c-6146-4e81-93b3-1b780c122fa9.jpeg",
  ];

  const containerSlide = document.querySelector('.slider-container');
  console.log(containerSlide, imagesSlide);

  imagesSlide.forEach(item => {
    containerSlide.innerHTML += `<div class="slide fade"><img class="slide-image" src="${item}"></div>`;
  });

//   containerSlide.innerHTML += `
//   <div class="dot-container">
//     ${imagesSlide.forEach((item, index) =>
//     '<span class="dot" onclick="currentSlide(' + (index + 1) + '})"></span>'
//   )}
//   </div>
// `;

  // Slide
  let slideIndex = 1;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
  }

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  setInterval(() => plusSlides(1), 5000);
  showSlides(slideIndex);

  // Animation
  const element = document.querySelector(".framer-c6rbxn-container");
  element.style.animation = "rotateAnimation 9s linear infinite";
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes rotateAnimation {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
});
