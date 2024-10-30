const provaSelect = document.getElementById('prova');
const questionarioForm = document.getElementById('questionario-form');

provaSelect.addEventListener('change', (e) => {
    const provaSelecionada = e.target.value;
    // Carregar o questionário correspondente à prova selecionada
    fetch(`provas/${provaSelecionada}.pdf`)
        .then((response) => response.blob())
        .then((blob) => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${provaSelecionada}.pdf`;
            a.click();
        });
});
