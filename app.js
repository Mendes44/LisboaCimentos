function redirectWhatsApp(produto, descricao) {
    const mensagem = `Olá, gostaria de saber mais sobre ${produto}: ${descricao}`;
    const url = `https://api.whatsapp.com/send?phone=553133690000&text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const motivo = document.getElementById('motivo').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    const emailBody = `Nome: ${nome}\nMotivo: ${motivo}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;
    const mailtoLink = `mailto:lisboacimentos@gmail.com?subject=Contato do Site&body=${encodeURIComponent(emailBody)}`;

    window.open(mailtoLink, '_blank');
    alert('Formulário enviado com sucesso!');
});
