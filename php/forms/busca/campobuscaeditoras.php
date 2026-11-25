<?php 
    
    include_once("../../bdphp/conecta_bd.php");
    include_once("../../funcoes/funcoes.php");

    $error = false;
    $reposta = "";

    sleep(5);

    $nomeEditora = $_GET['pesquisaEditoras'];
    $nomeEditora = validarDadosGeral($nomeEditora);

    if (empty($nomeEditora)) {

         $error = true;
         $reposta = 'nomeinvalido';

         mysqli_close($conexao);
  
         return json_encode(array('error' => true, 'reposta' => $respota));

    }else{

       $sql = "SELECT * FROM editora WHERE nome = $nomeEditora";

       $editoras = mysqli_query($conexao,$sql);

       if(mysqli_num_rows($editoras) > 0){

          $resp = "";

          while($tupla = mysqli_fetch_assoc($editoras)){

                $id = validarDadosGeral($tupla["id"]);
                $nome = validarDadosGeral($tupla["nome"]);
                $email = validarDadosGeral($tupla["email"]);
                $telefone = validarDadosGeral($tupla["telefone"]);
                $endereco = validarDadosGeral($tupla["endereco"]);
                $cnpj = validarDadosGeral($tupla["cnpj"]);

                $id = encrypt($id);

                $informacao = "informacaoEditora" . (string)$id;
                $exclusao = "exclusaoEditora" . (string)$id;
                $edicao = "edicaoEditora" . (string)$id;

                $btnFecharInformacao = "btnFecharInformacaoEditora".(string)$id;
                $btnSalvarAlteracoes = "btnSalvarAlteracoesEditora".(string)$id;
                $btnExluirEditora = "btnExcluirEditora". (string)$id;

                 $formularioEdicao = "formularioEdicaoEditora" . (string)$id;
                 $nomeformedicao = "nomeEdicaoEditora" . (string)$id;
                 $emailformedicao = "emailEdicaoEditora" . (string)$id;
                 $telefoneformedicao = "telefoneEdicaoEditora" . (string)$id;
                 $enderecoformedicao = "enderecoEdicaoEditora" . (string)$id;
                 $cnpjformedicao = "cnpjEdicaoEditora". (string)$id; 

                 $resultadoPesquisa = "resultadoPesquisaEditora" . (string)$id;

                 $resp .= "
                   
                    
      <!--Janelas-->

      <!--Janela que exibe as informações-->
      <div class='modal' tabindex='-1' id='$informacao'>
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title'>Informações</h5>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body d-flex flex-column gap-2'>
              <p class='mb-0 text-muted'><strong>Nome:</strong> $nome </p>

              <p class='mb-0 text-muted'><strong>CNPJ:</strong> $cnpj </p>

              <p class='mb-0 text-muted'>
                <strong>Endereço:</strong>
                $endereco
              </p>

              <p class='mb-0 text-muted'>
                <strong>E-mail:</strong> 
                 $email
              </p>

              <p class='mb-0 text-muted'>
                <strong>Telefone:</strong>
                 $telefone
              </p>
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-secondary'
                data-bs-dismiss='modal'
                id='$btnFecharInformacao'
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Janela de confirmação de exclusão-->
      <div class='modal' tabindex='-1' id='$exclusao'>
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title'>Excluindo...</h5>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body d-flex flex-column gap-2'>
              <p class='mb-0 text-muted'><strong>Nome:</strong> $nome </p>

              <p class='mb-0 text-muted'><strong>CNPJ:</strong> $cnpj </p>

              <p class='mb-0 text-muted'>
                <strong>Endereço:</strong>
                $endereco
              </p>

              <p class='mb-0 text-muted'>
                <strong>E-mail:</strong> 
                 $email
              </p>

              <p class='mb-0 text-muted'>
                <strong>Telefone:</strong>
                 $telefone
              </p>
              <h4>Deseja realmente excluir esta Editora?</h4>
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-danger'
                data-bs-dismiss='modal'
              >
                Cancelar
              </button>
               <button type='button' class='btn btn-primary btnExcluirEditora' id='$btnExluirEditora'>Excluir Autor</button>
            </div>
          </div>
        </div>
      </div>

      <!--Janela de edição-->
      <div class='modal' tabindex='-1' id='$edicao'>
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title'>Editando..</h5>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body'>
              <form
                action= 'div'
                target='_self'
                method='post'
                id='formularioEdicaoEditora'
              >
                <div class='row g-3'>
                  <div class='col-10'>
                    <label for='$nomeformedicao' class='form-label'
                      >Nome:</label
                    >
                    <input
                      type='text'
                      class='form-control'
                      id='$nomeformedicao'
                      name='nomeEdicaoEditora'
                      required
                    />
                  </div>
                  <div class='col-6'>
                    <label for='$cnpjformedicao' class='form-label'
                      >CNPJ:</label
                    >
                    <input
                      type='text'
                      class='form-control'
                      id='$cnpjformedicao'
                      name='cnpjEdicaoEditora'
                      required
                    />
                  </div>
                  <div class='col-8'>
                    <label for='$telefoneformedicao' class='form-label'
                      >Telefone:</label
                    >
                    <input
                      type='text'
                      class='form-control'
                      id='$telefoneformedicao'
                      name='telefoneEdicaoEditora'
                      required
                    />
                  </div>
                   <div class='col-10'>
                    <label for='$emailformedicao' class='form-label'
                      >Email:</label
                    >
                    <input
                      type='text'
                      class='form-control'
                      id='$emailformedicao'
                      name='emailEdicaoEditora'
                      required
                    />
                  </div>
                  <div class='col-8'>
                   <label for='enderecoEdicaoEditora' class='form-label'>Endereço:</label>
                   <input
                     type='text'
                     class='form-control'
                     id='enderecoEdicaoEditora'
                     name='enderecoEdicaoEditora'
                     required
                   >
                  </div>

                </div>
              </form>
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-danger'
                data-bs-dismiss='modal'
              >
                Cancelar
              </button>
              <button type='button' class='btn btn-primary'>
                Salvar Alterações
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Resultados da Pesquisa-->
      <div class='row justify-content-center ms-5'>
        <div class='col-md-8 mt-3'>
          <div class='card shadow-sm'>
            <div
              class='card-body'
              id='$resultadoPesquisa'
              data-bs-toggle='modal'
              data-bs-target='$informacao'
            >
              <div class='border rounded p-3 mb-3'>
                <div
                  class='d-flex flex-column flex-md-row align-items-center justify-content-between gap-3'
                >
                  <!-- Informações -->
                  <div class='flex-grow-1 d'>
                    <h5 class='mb-1'>$nome</h5>

                    <p class='mb-0 text-muted'><strong>Email:</strong> $email</p>

                    <p class='mb-0 text-muted'>
                      <strong>Telefone:</strong>
                      $telefone
                    </p>
                  </div>

                  <!--Botões-->
                  <div class='d-flex flex-nowrap gap-2'>
                    <div
                      class='btn btn-success'
                      data-bs-toggle='modal'
                      data-bs-target='#$edicao'
                      data-stop-propagation
                    >
                      <i>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='2em'
                          height='2em'
                          viewBox='0 0 24 24'
                        >
                          <path d='M0 0h24v24H0z' fill='none' />
                          <path
                            fill='currentColor'
                            d='m19.71 8.04l-2.34 2.33l-3.75-3.75l2.34-2.33c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41M3 17.25L13.06 7.18l3.75 3.75L6.75 21H3zM16.62 5.04l-1.54 1.54l2.34 2.34l1.54-1.54zM15.36 11L13 8.64l-9 9.02V20h2.34z'
                          />
                        </svg>
                      </i>
                    </div>

                    <div
                      class='btn btn-primary'
                      data-bs-toggle='modal'
                      data-bs-target='#$exclusao'
                      data-stop-propagation
                    >
                      <i>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='2em'
                          height='2em'
                          viewBox='0 0 24 24'
                        >
                          <path d='M0 0h24v24H0z' fill='none' />
                          <path
                            fill='none'
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3'
                          />
                        </svg>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>";


          }

       }else{
         
          $resp = "
            <div  class='card shadow-sm'>
             <div class='card-body'id='nadaencontrado'>
              <div class='border rounded p-3 mb-3'>
               <div class='d-flex flex-column flex-md-row align-items-center justify-content-between gap-3'>
                <!-- Informações -->
                <p>Nenhuma editora encontrada</p>
               </div>
             </div>
           </div>
          </div>
          ";

          mysqli_close($conexao);

          return json_encode(array('error' => false, 'resposta' => $resp));
     
       }
        
    }
