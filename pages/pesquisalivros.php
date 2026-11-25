<?php 
   include_once("global/header.php");
?>

    <div class="container mt-4 d-flex gap-5">

    <!-- Dados do Livro -->
    <div class="card p-4 mb-4">

        <div class="row g-4 align-items-start">

            <!-- Capa -->
            <div class="col-md-3 text-center">
               <img
               src="../images.png"
               alt="Imagem do Livro"
               class="w-50"
               id="imagemLivro">
            </div>

            <!-- Curtidas -->
            <div class="col-md-2 d-flex justify-content-center">
                <button class="btn btn-outline-none">
                    <i class="bi bi-heart-fill"></i>
                    <span class="ms-2" id="numeroCurtidas">0</span>
                </button>
            </div>

            <!-- Informações -->
            <div class="col-md-7">

                <h2 class="mb-4">Dom Casmurro</h2>

                <table class="table table-borderless"> <!--Remove todas as bordas da tabela-->
                    <tbody>
                        <tr>
                            <th class="col-1">Autor(es):</th>
                            <td class="col-6">X</td>
                        </tr>
                        <tr>
                            <th class="col-1">Classificação:</th>
                            <td class="col-6">X</td>
                        </tr>
                        <tr>
                            <th class="col-1">Class. Indicativa:</th>
                            <td class="col-6">X</td>
                        </tr>
                      </tbody>
                  </table>
             </div>

             <div class=""></div>
          </div>
        <div class="row g-4 align-items-start gap-3 flex-column">
           <h4>Sinopse:</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni placeat est dignissimos, possimus voluptas, molestias deleniti provident sit sunt fugiat alias, rem veniam nam quos perferendis debitis nesciunt sint veritatis!</p>
        </div>
        <hr>
      <div class="table-responsive mt-3">
        <table class="table" id="tabelaExemplares" style="overflow-x: auto;">
          <thead>
            <tr>
              <th>
                <p class="text-center mb-0">Exemplar</p>
              </th>
              <th>
                <p class="text-center mb-0">Status</p>
              </th>
              <th>
                <p class="text-center mb-0">Estante</p>
              </th>
            </tr>
          </thead>
          <tbody>
           <tr>
             <td>
              <p class="text-center mb-0">0000000000000</p>
             </td>
             <td>
              <p class="text-center mb-0">Em empréstimo</p>
             </td>
             <td>
              <p class="text-center mb-0">1-C</p>
             </td>
           </tr>
         </tbody>
       </table>
      </div>
      <hr>
     
   <div class="card mt-4">

    <div class="card-header">
        <h4 class="mb-0">Comentários</h4>
    </div>

    <div class="card-body">

        <!-- Comentário -->
        <div class="d-flex mb-3">

            <div class="me-3">
                <img src="../images.png" alt="Img-User" style="border-radius: 50%; width: 3.5em; height: 3.5em;">
                   
                </img>
            </div>

            <div>
                <h6 class="mb-1">Maria Silva</h6>
                <p class="mb-0">
                    Gostei muito desse livro. Recomendo a leitura!
                </p>
                <small class="text-muted">
                    18/08/2026 14:30
                </small>
            </div>
        </div>

        <hr>

        <!-- Comentário -->
        <div class="d-flex mb-3">

            <div class="me-3">
                <i class="bi bi-person-circle fs-1"></i>
            </div>

            <div>
                <h6 class="mb-1">João Souza</h6>
                <p class="mb-0">
                    Muito interessante. A sinopse me chamou atenção!
                </p>
                <small class="text-muted">
                    18/08/2026 16:10
                </small>
            </div>

        </div>

        <hr>

        <!-- Novo comentário -->
        <div class="mt-4">

            <h5>Adicionar comentário:</h5>

            <textarea
                class="form-control"
                rows="4"
                placeholder="Comentário..."
                style="resize: none;"
                id="comentarioUsuario"
                name="comentarioUsuario"
            ></textarea>

            <button class="btn btn-primary mt-4" id="botaoEnviarComentario">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                </svg>
                Comentar
            </button>
        </div>
      </div>

</div>
  </body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</html>
