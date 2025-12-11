function calcular() {
    let veiculo = document.getElementById("veiculo").value;
    let horas = Number(document.getElementById("horas").value);
    let mensalista = document.getElementById("mensalista").checked;
    let resultado = document.getElementById("resultado");

    // Zerar resultado
    resultado.innerHTML = "";

    // ❌ Erro: horas inválidas
    if (horas <= 0) {
        resultado.innerHTML = "Informe uma quantidade de horas válida!";
        return;
    }

    let total = 0;

    // 🚗 Regras para CARRO
    if (veiculo === "carro") {
        if (horas <= 2) {
            total = 10;
        } else {
            total = 10 + (horas - 2) * 3;
        }
    }

    // 🏍️ Regras para MOTO
    if (veiculo === "moto") {
        if (horas <= 2) {
            total = 8;
        } else {
            total = 8 + (horas - 2) * 2;
        }
    }

    // 💳 Desconto para mensalista
    if (mensalista) {
        total = total * 0.9; // 10% de desconto
    }

    resultado.innerHTML = `Valor total: R$ ${total.toFixed(2)}`;
}
