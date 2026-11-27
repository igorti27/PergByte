
$(document).ready(function() {
            $('#lupaAutor').click(function(evento) {
                $.ajax({
                    url: '../php/forms/busca/campobuscaautor.php', // qual script no servidor irá processar a requisição
                    type: 'GET',
                    data: {
                        pesquisaAutores: $('#pesquisaAutores').val()
                        
                    },
                    beforeSend: function() {
                        $('#spinner').toggleClass('d-none'); // mostra o spinner
                        $('#resposta_sucesso').html(''); // limpa a div de resposta
                        $('#resposta_erro').html(''); // limpa a div de resposta
                    },
                    success: function(resposta) {
                        if (resposta == 'login realizado com sucesso!') {
                            $('#resposta_sucesso').html(resposta); // exibe a resposta do servidor
                        } else {
                            $('#resposta_erro').html(resposta); // exibe a resposta do servidor
                        }
                        //alert(resposta); // resposta com sucesso
                    },
                    error: function(xhr, status, erro) {
                        $('#resposta_erro').html('<span class="text-danger">Erro: ' + erro + '</span>'); // exibe o erro na div de resposta
                        //alert('Erro: ' + erro); // falha na requisição
                    },
                    complete: function() {
                        $('#spinner').toggleClass('d-none'); // esconde o spinner
                        // código a ser executado após a requisição, independentemente do sucesso ou falha
                    }
                });
            });
            
            $('#btnCadastroAutor').click(function(e){

                 $.ajax({

                     url: "../php/forms/cadastros/cadastroautor.php",
                     type: 'GET',
                     data: {

                        nomeCadastroAutor: $('# nomeCadastroAutor').val(),
                        descricaoCadastroAutor: $('#descricaoCadastroAutor').val(),
                        nacionalidadeCadastroAutor: $('#nacionalidadeCadastroAutor').val()
                         
                     },
                     beforeSend: function(){
                        
                        $('.notificacoesAutor').text('');

                     },
                     success: function(reposta){
                         
                         if(resposta.error == true){

                            if(resposta.campo == "nome"){

                            }

                            if(resposta.campo == "descricao"){

                            }

                            if(resposta.campo == "nacionalidade"){

                            }
                              
                         }else{

                             Toastify.info({

                                text: resposta.msg,
                                gravity: "top",
                                close: "true",
                                style: {
                
                                    background: blue,
                                }


                             }).showToast();
                         }
                     }


                 })

            });
});
