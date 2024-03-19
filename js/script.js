function Enviar() {
    var nome = document.getElementById("nome")
    var email = document.getElementById("email")
    var datanasc = document.getElementById("datanasc")
    var comentario = document.getElementById("comentario")
    var ok

    // valida se o nome esta com sobrenome o método trim() 
    //faz com que ao escrever so uma palavra com espaço de o preencha
    if (nome.value.trim().split(" ").length >= 2) {
        if (email.value.indexOf("@") != -1) {
            if (datanasc.value != "") {

                if (comentario.value.indexOf(" ") != -1) {
                    alert(nome.value + ", agradecemos o seu contato")
                    ok = true

                } else {
                    alert("Digite um comentário")
                    ok = false
                }
            } else {
                alert("Digite uma data")
                ok = false
            }
        }else {
            alert("Digite um email valido")
            ok = false
        }
    } else {
        alert("Preencha o seu nome completo")
        ok = false
    }
    return ok
}