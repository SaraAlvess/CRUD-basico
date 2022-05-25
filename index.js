var dados = []

function PopulaTabela() {
     if (Array.isArray(dados)) {


        localStorage.setItem("__dados__", JSON.stringify(dados))

        $("#tblDados tbody").html("")


         dados.forEach(function (item) {
            //template string
            $("tblDados tbody").append(`<tr>
                <td>${item.ID}</td>
                <td>${item.Nome}</td>
                <td>${item.Sobrenome}</td>
                <td>${item.DtNascimento}</td>
                <td>${item.Cidade}</td>
                <td>${item.Estado}</td>
                <td>${item.Formacao}</td>
            </tr>`)
         })
     }
}

$(function () {
    //executa ao carregar da tela
    dados = JSON.parse(localStorage.getItem("__dados__"))

    if (dados) {
         PopulaTabela()
    }

    $("#btnSalvar").click(function(){
        //evento click do botão salvar
        let Nome = $("#txtNome").val()
        let Sobrenome = $("#txtSobrenome").val()
        let DtNascimento = new Date($("txtDtNascimento").val()).toLocaleDateString("pt-br", { timeStyle: "UTC"})
        let Cidade = $("txtCidade").val()
        let Estado = $("txtEstado").val()
        let Formacao = $("txtFormacao").val()

        let registro = {}

        registro.Nome = Nome
        registro.Sobrenome = Sobrenome
        registro.DtNascimento = DtNascimento
        registro.Cidade = Cidade
        registro.Estado = Estado 
        registro.Formacao = Formacao

        if(dados.length === null){
            console.log("Bolsonaro pelado")
           }
        registro.ID = dados.length + 1
           
        dados.push(registro)

        alert("Registro salvo com sucesso")
        $("#modalRegistro").modal("hide")

        //limpeza dos
        $("#txtNome").val("")
        $("#txtSobrenome").val("")
        $("#txtDtNacimento").val("")
        $("#txtCidade").val("")
        $("#txtEstado").val("")
        $("#txtFormacao").val("")

        PopulaTabela()
    })

})


 
