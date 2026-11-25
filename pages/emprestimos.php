<?php
   include_once("global/header.php");
   include_once("global/menu.php");
?>

<div id="layoutSidenav_content">
    <main class="container-fluid px-4 mt-5 d-flex">
      <div class="container d-flex flex-column py-5">
         <div class="row justify-content-center mb-4 mt-5 ms-2">
        <div class="col-md-9">
          <div class="mb-3 d-flex justify-content-sm-center gap-2">

          <div id="tablet" class="d-none d-md-flex flex-row gap-2 ms-5 w-100">
            <button type="button" class="input-group-text lupa" id="lupaEmprestimo">
              <i class="fas fa-search">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
              </i>
            </button>
          
            <input
              type="text"
              class="form-control barraPesquisaGerenciamento"
              placeholder="Leitor..."
              id="pesquisaEmprestimos"
              name="pesquisaEmprestimos"
            />

            <select>
               <option value="-">Status</option>
               <option value="em andamento">Em Andamento</option>
               <option value="entregue">Entregue</option>
               <option value="entregue com atraso">Entregue com Atraso</option>
            </select>

            <button
              class="btn btn-warning fs-4 px-3"
              data-bs-toggle="modal"
              data-bs-target="#cadastrarEmprestimo"
              id="adicionarEmprestimo"
              type="button"
            >
              <i
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.7em"
                  height="0.7em"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M12 3.5A1.5 1.5 0 0 1 13.5 5v5.5H19a1.5 1.5 0 0 1 0 3h-5.5V19a1.5 1.5 0 0 1-3 0v-5.5H5a1.5 1.5 0 0 1 0-3h5.5V5A1.5 1.5 0 0 1 12 3.5"
                    clip-rule="evenodd"
                  /></svg
              ></i>
            </button>
            </div>

            <div id="movel" class="d-flex flex-column d-md-none gap-2 ms-2">
                
            <input
              type="text"
              class="form-control barraPesquisaGerenciamento"
              placeholder="Leitor..."
              id="pesquisaEmprestimos"
              name="pesquisaEmprestimos"
            />

            <select>
               <option value="-">Status</option>
               <option value="em andamento">Em Andamento</option>
               <option value="entregue">Entregue</option>
               <option value="entregue com atraso">Entregue com Atraso</option>
            </select>

            <button type="button" class="input-group-text lupa d-flex justify-content-center" id="lupaEmprestimo" style="height: 2.5em">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </button>

            <button
              class="btn btn-warning fs-4 px-3"
              data-bs-toggle="modal"
              data-bs-target="#cadastrarEmprestimo"
              id="adicionarEmprestimo"
              type="button"
            >
              <i
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.7em"
                  height="0.7em"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M12 3.5A1.5 1.5 0 0 1 13.5 5v5.5H19a1.5 1.5 0 0 1 0 3h-5.5V19a1.5 1.5 0 0 1-3 0v-5.5H5a1.5 1.5 0 0 1 0-3h5.5V5A1.5 1.5 0 0 1 12 3.5"
                    clip-rule="evenodd"
                  /></svg
              ></i>
            </button>
            </div>



          </div>
        </div>
      </div>



      </div>
    </main>
</div>

<?php 
  include_once("global/footer.php");
?>