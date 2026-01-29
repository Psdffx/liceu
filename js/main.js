// Inicializar AOS (Animate On Scroll) para animações
AOS.init({
    duration: 1000,
    once: true,
});

// Outras interações (ex.: carrossel já usa Bootstrap)
$(document).ready(function() {
    console.log("Scripts carregados com sucesso. Animações AOS ativas.");
});



$(document).ready(function() {
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        const nome = $('#nome').val();
        const telefone = $('#telefone').val();
        const email = $('#email').val();
        const mensagem = $('#mensagem').val();
        const texto = `Olá, meu nome é ${nome}. Telefone: ${telefone}. Email: ${email}. Mensagem: ${mensagem}`;
        const url = `https://wa.me/551935733330?text=${encodeURIComponent(texto)}`;
        window.open(url, '_blank');
    });
});