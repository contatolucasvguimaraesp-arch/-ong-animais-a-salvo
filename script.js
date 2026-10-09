```javascript
const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");
const cep = document.getElementById("cep");
const formulario = document.getElementById("formulario-voluntario");
const mensagem = document.getElementById("mensagem");

// Formata o CPF automaticamente
if (cpf) {
    cpf.addEventListener("input", function () {
        let valor = this.value.replace(/\D/g, "").slice(0, 11);

        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        this.value = valor;
    });
}

// Formata o telefone automaticamente
if (telefone) {
    telefone.addEventListener("input", function () {
        let valor = this.value.replace(/\D/g, "").slice(0, 11);

        if (valor.length > 10) {
            valor = valor.replace(
                /^(\d{2})(\d{5})(\d{0,4}).*/,
                "($1) $2-$3"
            );
        } else if (valor.length > 6) {
            valor = valor.replace(
                /^(\d{2})(\d{4})(\d{0,4}).*/,
                "($1) $2-$3"
            );
        } else if (valor.length > 2) {
            valor = valor.replace(/^(\d{2})(\d+)/, "($1) $2");
        }

        this.value = valor;
    });
}

// Formata o CEP automaticamente
if (cep) {
    cep.addEventListener("input", function () {
        let valor = this.value.replace(/\D/g, "").slice(0, 8);

        if (valor.length > 5) {
            valor = valor.replace(/^(\d{5})(\d+)/, "$1-$2");
        }

        this.value = valor;
    });
}

// Simula o envio do formulário
if (formulario) {
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        mensagem.textContent =
            "Cadastro demonstrativo concluído! Nenhum dado foi enviado ou armazenado. Obrigado pelo interesse na preservação da fauna.";

        formulario.reset();

        // Restaura o endereço genérico após limpar o formulário
        document.getElementById("endereco").value = "Rua São Paulo, 123";
        document.getElementById("cidade").value = "São Paulo";
        document.getElementById("estado").value = "SP";
    });
}
```
