   
<?php 
   include_once("global/header.php");
   include_once("global/menu.php");
?>
   
   <div id="layoutSidenav_content"> <!--Conteúdo principal-->
        <main class="container-fluid py-4 mt-5">

           <div class="mb-4 mx-5  mx-lg-auto  col-8 d-flex flex-row gap-3" style="positon: fixed">
             <button type="button" id="lupaPesquisaLivros" class="lupa p-2 ms-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
               <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
             </svg>
             </button>
             <input type="text" placeholder="Pesquisar livro..." class="form-control m-auto col-7" name="barraPesquisaLivros" id="barraPesquisaLivros">
           </div>

        <div id="resposta" class="d-flex flex-column gap-3 w-100 h-100">
           <div class="spinner-border text-secondary mt-5" role="status" id="spinner" style="margin-left:50%"></div>

           

        </div>

        </main>
   </div>

   <?php 
     include_once("global/footer.php");
   ?>
