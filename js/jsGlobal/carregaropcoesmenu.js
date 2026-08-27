const opcaoGerencialeitores = document.getElementById("leitores");
const opcaoGerenciabibliotecarios = document.getElementById("bibliotecarios");
const opcaoGerenciaemprestimos = document.getElementById("emprestimos");
const opcaoGerenciaexemplares = document.getElementById("exemplares");
const opcaoGerenciaestantes = document.getElementById("estantes");
const opcaoGerenciaclassificacao = document.getElementById("classificacoes");
const opcaoGerenciamentosecao = document.getElementById("secoes");

opcaoGerenciabibliotecarios.addEventListener("click", function () {
  let menu = document.getElementById("layoutSidenav_content");
  menu.innerHTML = "";
  menu.innerHTML = `
        <main class="container-fluid px-4 mt-5">
          <div class="container py-5">
      <!--Barra de Pesquisa-->
      <div class="row justify-content-center mb-4 mt-5">
        <div class="col-md-8">
          <div class="input-group mb-3 d-flex gap-2">
            <span class="input-group-text" id="gerenciamentoBibliotecariosLupa">
              <i class="fas fa-search"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Bibliotecários..."
              id="pesquisarBibliotecarios"
              name="pesquisadeBibliotecarios"
            />

            <button
              class="btn btn-warning fs-4 px-3"
              id="adicionarBibliotecario"
              data-bs-toggle="modal"
              data-bs-target="#cadastrarBibliotecario"
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

      <!--Janelas-->

      <!--Janela que exibe as informações-->
      <div class="modal" tabindex="-1" id="informacoesBibliotecario">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Informações</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex flex-column gap-2">
              <p class="mb-0 text-muted">Bibliotecário: João Silva</p>
              <p class="mb-0 text-muted">Email: joãosilva@example.com</p>
              <p class="mb-0 text-muted">Nível: Bibliotecário Administrador</p>
              <p class="mb-0 text-muted">CPF: 000.000.000-00</p>
              <p class="mb-0 text-muted">Data de Admissão: 00/00/0000</p>
              <p class="mb-0 text-muted">Data de Egresso: 00/00/0000</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                id="modalFechar"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Janela de confirmação de exclusão-->
      <div class="modal" tabindex="-1" id="avisoexclusao">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Excluindo...</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex flex-column gap-2">
              <p class="mb-0 text-muted">Bibliotecário: João Silva</p>
              <p class="mb-0 text-muted">Email: joãosilva@example.com</p>
              <p class="mb-0 text-muted">Nível: Bibliotecário Administrador</p>
              <p class="mb-0 text-muted">CPF: 000.000.000-00</p>
              <p class="mb-0 text-muted">Data de Admissão: 00/00/0000</p>
              <p class="mb-0 text-muted">Data de Egresso: 00/00/0000</p>
              <h4>Você realmente deseja excluir este bibliotecário ?</h4>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">Excluir</button>
            </div>
          </div>
        </div>
      </div>

      <!--Janela de edição-->
      <div class="modal" tabindex="-1" id="modificarInformacoesBibliotecario">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Editando...</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                action="#"
                target="_self"
                method="post"
                id="formularioEdicaoBibliotecario"
              >
              <div class="row g-3">
                  <div class="col-12">
                    <label for="nomeEdicaoBibliotecario" class="form-label">Nome:</label>
                    <input type="text" class="form-control" id="nomeEdicaoBibliotecario" name="nome" required>
                  </div>
                <div class="col-12">
                    <label for="emailEdicaoBibliotecario" class="form-label">E-mail:</label>
                    <input type="email" class="form-control" id="emailEdicaoBibliotecario" name="email" required>
                </div>
                
                <div class="col-12">
                  <label for="cpf" class="form-label">CPF:</label>
                  <input type="text"
                     class="form-control"
                     id="cpfEdicaoBibliotecario"
                     name="cpfEdicaoBibliotecario"
                     placeholder="000.000.000-00"
                     maxlength="14"
                     required>
                </div>
                <div class="col-md-6">
                  <label for="senhaEdicaoBibliotecario" class="form-label">Senha:</label>
                  <input type="password" class="form-control" id="senhaEdicaoBibliotecario" name="senha" required>
                </div>
                <div class="col-md-6">
                   <label for="confirmarSenhaEdicaoBibliotecario" class="form-label">Confirmar Senha:</label>
                   <input type="password" class="form-control" id="confirmarSenhaEdicaoBibliotecario" name="confirmarSenha" required>
                </div>
                <div class="col-6 d-flex flex-column">
                  <p>Nível do cargo:</p>
                  <div class="input-group d-flex flex-row gap-2">
                    <input type="radio" id="cargoComumEdicao" name="cargo" value="comum">
                    <label for="cargoComumEdicao">Comum</label>
                  </div>
                  <div class="input-group d-flex flex-row gap-2">
                    <input type="radio" id="cargoAdminEdicao" name="cargo" value="comum">
                    <label for="cargoAdminEdicao" id="labelCargoAdminEdicao">Admin</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">
                Salvar Alterações
              </button>
            </div>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    
      <!--Janela de Cadastro-->
      <div class="modal" tabindex="-1" id="cadastrarBibliotecario">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Cadastrando...</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                action="#"
                target="_self"
                method="post"
                id="formularioCadastroBibliotecario"
              >
              <div class="row g-3">
                  <div class="col-12">
                    <label for="nomeCadastroBibliotecario" class="form-label">Nome:</label>
                    <input type="text" class="form-control" id="nomeCadastroBibliotecario" name="nome" required>
                  </div>
                <div class="col-12">
                    <label for="emailCadastroBibliotecario" class="form-label">E-mail:</label>
                    <input type="email" class="form-control" id="emailCadastroBibliotecario" name="email" required>
                </div>
                <div class="col-12">
                  <label for="cpfCadastroBibliotecario" class="form-label">CPF:</label>
                  <input type="text"
                     class="form-control"
                     id="cpfCadastroBibliotecario"
                     name="cpfCadastroBibliotecario"
                     placeholder="000.000.000-00"
                     maxlength="14"
                     required>
                </div>
                <div class="col-md-6">
                  <label for="senhaCadastroBibliotecario" class="form-label">Senha:</label>
                  <input type="password" class="form-control" id="senhaCadastroBibliotecario" name="senha" required>
                </div>
                <div class="col-md-6">
                   <label for="confirmarSenhaCadastroBibliotecario" class="form-label">Confirmar Senha:</label>
                   <input type="password" class="form-control" id="confirmarSenhaCadastroBibliotecario" name="confirmarSenha" required>
                </div>
                <div class="col-6 d-flex flex-column">
                  <p>Nível do cargo:</p>
                  <div class="input-group d-flex flex-row gap-2">
                    <input type="radio" id="cargoComumEdicaoCadastro" name="cargo" value="comum">
                    <label for="cargoComumEdicaoCadastro">Comum</label>
                  </div>
                  <div class="input-group d-flex flex-row gap-2">
                    <input type="radio" id="cargoAdminEdicaoCadastro" name="cargo" value="comum">
                    <label for="cargoAdminEdicao" id="labelCargoAdminCadastro">Admin</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">
                Cadastrar Bibliotecario
              </button>
            </div>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>

      <!--Resultados da Pesquisa-->
      <div class="row justify-content-center">
        <div class="col-md-8 mt-3">
          <div class="card shadow-sm">
            <div
              class="card-body"
              id="resultadoPesquisa"
              data-bs-toggle="modal"
              data-bs-target="#informacoesBibliotecario"
            >
              <div class="border rounded p-3 mb-3">
                <div
                  class="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
                >
                  <!-- Foto -->
                  <img
                    class="rounded-circle"
                    alt="Imagem Usuário"
                    src="../../../Downloads/Designer.png"
                    width="110"
                    height="110"
                  />

                  <!-- Informações -->
                  <div class="flex-grow-1 d">
                    <h5 class="mb-1">João Silva</h5>
                    <p class="mb-0 text-muted">joao.silva@email.com</p>
                  </div>

                  <!-- Botões -->
                  <div class="d-flex flex-nowrap gap-2">
                    <div
                      class="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#modificarInformacoesBibliotecario"
                    >
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            fill="currentColor"
                            d="m19.71 8.04l-2.34 2.33l-3.75-3.75l2.34-2.33c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41M3 17.25L13.06 7.18l3.75 3.75L6.75 21H3zM16.62 5.04l-1.54 1.54l2.34 2.34l1.54-1.54zM15.36 11L13 8.64l-9 9.02V20h2.34z"
                          />
                        </svg>
                      </i>
                    </div>

                    <div
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#avisoexclusao"
                    >
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
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
      </div>
   </main>
`;
});

opcaoGerenciaemprestimos.addEventListener("click", function () {
  let menu = document.getElementById("layoutSidenav_content");
  menu.innerHTML = "";
  menu.innerHTML = `
    <main class="container-fluid px-4 mt-5">
           <div class="container-fluid py-5">
      <!--Barra de Pesquisa-->
      <div class="row justify-content-center mb-4 mt-5">
        <div class="col-9">
          <div class="input-group mb-3 d-flex gap-2">
            <span class="input-group-text" id="gerenciamentoEmprestimosLupa">
              <i class="fas fa-search"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Empréstimo.."
              id="pesquisarEmprestimo"
              name="pesquisadeEmprestimo"
            />

            <button
              class="btn btn-warning fs-4 px-3"
              data-bs-toggle="modal"
              data-bs-target="#cadastrarEmprestimo"
              id="adicionarEmprestimo"
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

      <!--Janelas-->

      <!--Janela que exibe as informações-->
      <div class="modal" tabindex="-1" id="informacoesEmprestimo">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Informações</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex flex-column gap-2">
              <p class="mb-0 text-muted"><strong>Empréstimo:</strong> 00001</p>
              <p class="mb-0 text-muted">
                <strong>Data de realização:</strong> 00/00/0000
              </p>
              <p class="mb-0 text-muted">
                <strong>Previsão de entrega:</strong> 00/00/0000
              </p>
              <p class="mb-0 text-muted">
                <strong>Data de entrega:</strong>00/00/0000
              </p>
              <p class="mb-0 text-muted"><strong>Leitor:</strong> XXXXXXXXX</p>
              <p class="mb-0 text-muted">
                <strong>CPF do Leitor:</strong>XXXXXXXXXXXX
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                id="modalFechar"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Janela de confirmação de exclusão-->
      <div class="modal" tabindex="-1" id="avisoexclusao">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Excluindo...</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex flex-column gap-2">
              <p class="mb-0 text-muted"><strong>Empréstimo:</strong> 00001</p>
              <p class="mb-0 text-muted">
                <strong>Data de realização:</strong> 00/00/0000
              </p>
              <p class="mb-0 text-muted">
                <strong>Previsão de entrega:</strong> 00/00/0000
              </p>
              <p class="mb-0 text-muted">
                <strong>Data de entrega:</strong>00/00/0000
              </p>
              <p class="mb-0 text-muted"><strong>Leitor:</strong> XXXXXXXXX</p>
              <p class="mb-0 text-muted">
                <strong>CPF do Leitor:</strong>XXXXXXXXXXXX
              </p>
              <h4>Você realmente deseja excluir este empréstimo ?</h4>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">Excluir</button>
            </div>
          </div>
        </div>
      </div>

      <!--Janela de edição-->
      <div class="modal" tabindex="-1" id="modificarInformacoesEmprestimo">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Editando...</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                action="#"
                target="_self"
                method="post"
                id="formularioEdicaoExemplar"
              >
                <div class="row g-3">
                  <div class="col-10">
                    <label for="leitorEdicaoEmprestimo" class="form-label"
                      >CPF do Leitor:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="leitorEdicaoEmprestimo"
                      name="leitorEdicaoEmprestimo"
                      required
                    />
                  </div>
                  <div class="col-10">
                    <label for="exemplar1EdicaoEmprestimo" class="form-label"
                      >Exemplar 01:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exemplar1EdicaoEmprestimo"
                      name="exemplar1EdicaoEmprestimo"
                      required
                    />
                  </div>
                  <div class="col-10">
                    <label for="exemplar2EdicaoEmprestimo" class="form-label"
                      >Exemplar 02:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exemplar2EdicaoEmprestimo"
                      name="exemplar2EdicaoEmprestimo"
                      required
                    />
                  </div>
                  <div class="col-10">
                    <label for="exemplar3EdicaoEmprestimo" class="form-label"
                      >Exemplar 03:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exemplar3EdicaoEmprestimo"
                      name="exemplar3EdicaoEmprestimo"
                      required
                    />
                  </div>
                  <div class="col-10">
                    <label for="exemplar4EdicaoEmprestimo" class="form-label"
                      >Exemplar 04:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exemplar4EdicaoEmprestimo"
                      name="exemplar4EdicaoEmprestimo"
                      required
                    />
                  </div>
                  <div class="col-10">
                    <label for="exemplar5EdicaoEmprestimo" class="form-label"
                      >Exemplar 05:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exemplar5EdicaoEmprestimo"
                      name="exemplar5EdicaoEmprestimo"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">
                Salvar Alterações
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Janela de Cadastro-->

      <div class="modal" tabindex="-1" id="cadastrarEmprestimo">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Cadastrando...</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                action="#"
                target="_self"
                method="post"
                id="formularioCadastroEmprestimo"
              >
                <div class="row g-3">
                  <div class="col-10">
                    <label for="leitorCadastroEmprestimo" class="form-label"
                      >CPF do Leitor:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="leitorCadastroEmprestimo"
                      name="leitorCadastroEmprestimo"
                      required
                    />
                  </div>
                  <div class="col-10">
                    <label for="exemplar1CadastroEmprestimo" class="form-label"
                      >Exemplar 01:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exemplar1CadastroEmprestimo"
                      name="exemplar1CadastroEmprestimo"
                      required
                    />
                  </div>
                  <div class="col-10">
                    <label for="exemplar2CadastroEmprestimo" class="form-label"
                      >Exemplar 02:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exemplar2CadastroEmprestimo"
                      name="exemplar2CadastroEmprestimo"
                      required
                    />
                  </div>
                  <div class="col-10">
                    <label for="exemplar3CadastroEmprestimo" class="form-label"
                      >Exemplar 03:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exemplar3CadastroEmprestimo"
                      name="exemplar3CadastroEmprestimo"
                      required
                    />
                  </div>
                  <div class="col-10">
                    <label for="exemplar4CadastroEmprestimo" class="form-label"
                      >Exemplar 04:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exemplar4CadastroEmprestimo"
                      name="exemplar4CadastroEmprestimo"
                      required
                    />
                  </div>
                  <div class="col-10">
                    <label for="exemplar5CadastroEmprestimo" class="form-label"
                      >Exemplar 05:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exemplar5CadastroEmprestimo"
                      name="exemplar5CadastroEmprestimo"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">
                Cadastrar Empréstimo
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Resultados da Pesquisa-->
      <div class="row justify-content-center">
        <div class="col-md-8 mt-3">
          <div class="card shadow-sm">
            <div
              class="card-body"
              id="resultadoPesquisa"
              data-bs-toggle="modal"
              data-bs-target="#informacoesEmprestimo"
            >
              <div class="border rounded p-3 mb-3">
                <div
                  class="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
                >
                  <!-- Informações -->
                  <div class="flex-grow-1 d">
                    <h5 class="mb-1">Empréstimo 001</h5>
                    <p class="mb-0 text-muted">
                      Data de realização: 00/00/0000
                    </p>
                    <p class="mb-0 text-muted">
                      Previsão de retorno: 00/00/0000
                    </p>
                    <p class="mb-0 text-muted">Data de entrega: 00/00/0000</p>
                    <p class="mb-0 text-muted">
                      Status: Atrasado/Entregue/Entregue com atraso
                    </p>
                    <p class="mb-0 text-muted">Leitor: XXXXXXXXX</p>
                    <p class="mb-0 text-muted">CPF do Leitor: XXXXXXXXX</p>
                  </div>

                  <!-- Botões -->
                  <div class="d-flex flex-nowrap gap-2">
                    <div
                      class="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#modificarInformacoesEmprestimo"
                    >
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            fill="currentColor"
                            d="m19.71 8.04l-2.34 2.33l-3.75-3.75l2.34-2.33c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41M3 17.25L13.06 7.18l3.75 3.75L6.75 21H3zM16.62 5.04l-1.54 1.54l2.34 2.34l1.54-1.54zM15.36 11L13 8.64l-9 9.02V20h2.34z"
                          />
                        </svg>
                      </i>
                    </div>

                    <div
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#avisoexclusao"
                    >
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
                          />
                        </svg>
                      </i>
                    </div>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                  id="circuloStatus"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
        </main>
      </div>
    </div>`;
});

opcaoGerenciaexemplares.addEventListener("click", function () {
  let menu = document.getElementById("layoutSidenav_content");
  menu.innerHTML = "";
  menu.innerHTML = `
     
        <main class="container-fluid px-4 mt-5">
           <div class="container">
      <!--Barra de Pesquisa-->
      <div class="row mb-4 mt-5">
        <div class="col-md-8 ms-auto me-auto mb-4">
          <div class="input-group mb-3 d-flex gap-2">
            <span class="input-group-text" id="gerenciamentoExemplarLupa">
              <i class="fas fa-search"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Exemplares..."
              id="pesquisarExemplares"
              name="pesquisadeExemplares"
            />

            <button
              class="btn btn-warning fs-4 px-3"
              data-bs-toggle="modal"
              data-bs-target="#cadastrarExemplar"
              id="adicionarExemplar"
            >
              <i>
                <svg
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

      <!--Janelas-->

      <!--Janela que exibe as informações-->
      <div class="modal" tabindex="-1" id="informacoesExemplar">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Informações</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex flex-column gap-2">
              <p class="mb-0 text-muted">
                <strong>Livro:</strong> Alice no País das Maravilhas
              </p>
              <p class="mb-0 text-muted">
                <strong>Autor:</strong> Lewis Carroll
              </p>
              <p class="mb-0 text-muted"><strong>Edição:</strong> 4</p>
              <p class="mb-0 text-muted">
                <strong>ISBN da Biblioteca:</strong>XXXXXXX
              </p>
              <p class="mb-0 text-muted">
                <strong>ISBN mundial:</strong> XXXXXXXXX
              </p>
              <p class="mb-0 text-muted"><strong>Seção:</strong> XXXXXXX</p>
              <p class="mb-0 text-muted"><strong>Editora:</strong> XXXXXX</p>
              <p class="mb-0 text-muted">
                <strong>Sinopse:</strong> Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Modi cumque reiciendis officia?
                Molestias culpa deserunt, corporis velit laboriosam fugiat
                excepturi, amet, possimus totam aliquam est voluptates eius
                incidunt repellendus quaerat!
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                id="modalFechar"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Janela de confirmação de exclusão-->
      <div class="modal" tabindex="-1" id="avisoexclusao">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Excluindo...</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex flex-column gap-2">
              <p class="mb-0 text-muted">
                <strong>Livro:</strong> Alice no País das Maravilhas
              </p>
              <p class="mb-0 text-muted">
                <strong>Autor:</strong> Lewis Carroll
              </p>
              <p class="mb-0 text-muted"><strong>Edição:</strong> 4</p>
              <p class="mb-0 text-muted">
                <strong>ISBN da Biblioteca:</strong>XXXXXXX
              </p>
              <p class="mb-0 text-muted">
                <strong>ISBN mundial:</strong> XXXXXXXXX
              </p>
              <p class="mb-0 text-muted"><strong>Seção:</strong> XXXXXXX</p>
              <p class="mb-0 text-muted"><strong>Editora:</strong> XXXXXX</p>
              <p class="mb-0 text-muted">
                <strong>Sinopse:</strong> Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Modi cumque reiciendis officia?
                Molestias culpa deserunt, corporis velit laboriosam fugiat
                excepturi, amet, possimus totam aliquam est voluptates eius
                incidunt repellendus quaerat!
              </p>
              <h4>Você realmente deseja excluir este exemplar ?</h4>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">Excluir</button>
            </div>
          </div>
        </div>
      </div>

      <!--Janela de edição-->
      <div class="modal" tabindex="-1" id="modificarInformacoesExemplar">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Editando...</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                action="#"
                target="_self"
                method="post"
                id="formularioEdicaoExemplar"
              >
                <div class="row-3 g-3">
                  <div class="col-10">
                    <label for="nomeEdicaoLeitor" class="form-label"
                      >Nome:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="nomeEdicaoLeitor"
                      name="nomeEdicaoLeitor"
                      required
                    />
                  </div>
                  <div class="col-10">
                    <label for="autorEdicaoLeitor" class="form-label"
                      >Autor:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="autorEdicaoLeitor"
                      name="autorEdicaoLeitor"
                      required
                    />
                    <div class="col-5">
                      <label for="edicaoEdicaoLeitor" class="form-label"
                        >Edição:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="edicaoEdicaoLeitor"
                        name="edicaoEdicaoLeitor"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-10">
                    <label for="isbnBibliotecaEdicaoLeitor" class="form-label"
                      >ISBN Biblioteca:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="isbnBibliotecaEdicaoLeitor"
                      name="isbnBibliotecaEdicaoLeitor"
                      required
                    />
                  </div>
                  <div class="col-10">
                    <label for="isbnMundialEdicaoLeitor" class="form-label"
                      >ISBN Mundial:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="isbnMundialEdicaoLeitor"
                      name="isbnMundialEdicaoLeitor"
                      required
                    />
                  </div>
                  <div class="col-12 d-flex flex-column">
                    <label for="edicaoSinopseExemlar" class="form-label"
                      >Sinopse:</label
                    >
                    <textarea
                      id="edicaoSinopseExemplar"
                      name="edicaoSinopseExemlar"
                      rows="7"
                      cols="7"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">
                Salvar Alterações
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Janela de cadastro-->
      <div class="modal" tabindex="-1" id="cadastrarExemplar">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Cadastrando...</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                action="#"
                target="_self"
                method="post"
                id="formularioCadastroExemplar"
              >
                <div class="row-3 g-3">
                  <div class="col-10">
                    <label for="nomeCadastroLeitor" class="form-label"
                      >Nome:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="nomeCadastroLeitor"
                      name="nomeCadastroLeitor"
                      required
                    />
                  </div>
                  <div class="col-10">
                    <label for="autorCadastroLeitor" class="form-label"
                      >Autor:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="autorCadastroLeitor"
                      name="autorCadastroLeitor"
                      required
                    />
                    <div class="col-5">
                      <label for="CadastroLeitor" class="form-label"
                        >Edição:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="CadastroLeitor"
                        name="CadastroLeitor"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-10">
                    <label for="isbnBibliotecaCadastroLeitor" class="form-label"
                      >ISBN Biblioteca:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="isbnBibliotecaCadastroLeitor"
                      name="isbnBibliotecaCadastroLeitor"
                      required
                    />
                  </div>
                  <div class="col-10">
                    <label for="isbnMundialCadastroLeitor" class="form-label"
                      >ISBN Mundial:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="isbnMundialCadastroLeitor"
                      name="isbnMundialCadastroLeitor"
                      required
                    />
                  </div>
                  <div class="col-12 d-flex flex-column">
                    <label for="CadastroSinopseExemlar" class="form-label"
                      >Sinopse:</label
                    >
                    <textarea
                      id="CadastroSinopseExemplar"
                      name="CadastroSinopseExemlar"
                      rows="7"
                      cols="7"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">
                Cadastrar Exemplar
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Resultados da Pesquisa-->
      <div class="row justify-content-center">
        <div class="col-md-8 ">
          <div class="card shadow-sm">
            <div
              class="card-body"
              id="resultadoPesquisa"
              data-bs-toggle="modal"
              data-bs-target="#informacoesExemplar"
            >
              <div class="border rounded p-3 mb-3">
                <div
                  class="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
                >
                  <!-- Foto -->
                  <img
                    class="img-fluid"
                    alt="Imagem Usuário"
                    src="../../../Downloads/Designer.png"
                    width="120"
                    height="120"
                  />

                  <!-- Informações -->
                  <div class="flex-grow-1 d">
                    <p class="mb-0 text-muted">
                      Livro: Alice no País das Maravilhas
                    </p>
                    <p class="mb-0 text-muted">Autor: Lewis Carroll</p>
                    <p class="mb-0 text-muted">Edição: 4</p>
                    <p class="mb-0 text-muted">ISBN da biblioteca: XXXXXXXXX</p>
                  </div>

                  <!-- Botões -->
                  <div class="d-flex gap-2 flex-nowrap">
                    <div
                      class="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#modificarInformacoesExemplar"
                      data-stop-propagation
                    >
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            fill="currentColor"
                            d="m19.71 8.04l-2.34 2.33l-3.75-3.75l2.34-2.33c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41M3 17.25L13.06 7.18l3.75 3.75L6.75 21H3zM16.62 5.04l-1.54 1.54l2.34 2.34l1.54-1.54zM15.36 11L13 8.64l-9 9.02V20h2.34z"
                          />
                        </svg>
                      </i>
                    </div>

                    <div
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#avisoexclusao"
                      data-stop-propagation
                    >
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
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
      </div>
        </main>
  
  `;
});

opcaoGerenciaestantes.addEventListener("click", function () {
  let menu = document.getElementById("layoutSidenav_content");
  menu.innerHTML = "";
  menu.innerHTML = `
     
  <main class="container-fluid px-4 mt-5">
            <div class="container py-5">
      <!--Barra de Pesquisa-->
      <div class="row justify-content-center mb-4 mt-5">
        <div class="col-md-8">
          <div class="input-group mb-3 d-flex gap-2">
            <span class="input-group-text" id="gerenciamentoEstantesLupa">
              <i class="fas fa-search"></i>
            </span>
            <input
              type="text"
              class="form-control"
              id="pesquisarEstantes"
              name="pesquisadeEstantes"
              placeholder="Estante..."
            />

            <button
              class="btn btn-warning fs-4 px-3"
              data-bs-toggle="modal"
              data-bs-target="#cadastrarEstante"
              id="adicionarEstante"
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

      <!--Janelas-->

      <!--Janela que exibe as informações-->
      <div class="modal" tabindex="-1" id="informacoesEstante">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Informações</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex flex-column gap-2">
              <p class="mb-0 text-muted"><strong>Estante:</strong> 1-C</p>

              <p class="mb-0 text-muted"><strong>Seção:</strong> XXXXXXXX</p>

              <p class="mb-0 text-muted">
                <strong>Livros Associdados:</strong> Alice no País das
                Maravilhas, Dom Casmurro, Jardim Secreto
              </p>

              <p class="mb-0 text-muted">
                <strong>Localização:</strong> XXXXXXXXXXXX
              </p>

              <p class="mb-0 text-muted">
                <strong>Observações:</strong> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Beatae ipsa commodi, non veniam
                ducimus incidunt asperiores voluptate nisi laudantium ratione
                harum enim sit reiciendis ut rem adipisci. Quibusdam, tempore
                officia.
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                id="modalFechar"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Janela de confirmação de exclusão-->
      <div class="modal" tabindex="-1" id="avisoexclusao">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Excluindo...</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex flex-column gap-2">
              <p class="mb-0 text-muted"><strong>Estante:</strong> 1-C</p>

              <p class="mb-0 text-muted"><strong>Seção:</strong> XXXXXXXX</p>

              <p class="mb-0 text-muted">
                <strong>Livros Associados:</strong> Alice no País das
                Maravilhas, Dom Casmurro, Jardim Secreto
              </p>

              <p class="mb-0 text-muted">
                <strong>Localização:</strong> XXXXXXXXXXXXXXX
              </p>

              <p class="mb-0 text-muted">
                <strong>Observações:</strong> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Beatae ipsa commodi, non veniam
                ducimus incidunt asperiores voluptate nisi laudantium ratione
                harum enim sit reiciendis ut rem adipisci. Quibusdam, tempore
                officia.
              </p>

              <h4>Você realmente deseja excluir esta estante ?</h4>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">Excluir</button>
            </div>
          </div>
        </div>
      </div>

      <!--Janela de cadastro-->
      <div class="modal" tabindex="-1" id="cadastrarEstante">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Cadastrando..</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                action="#"
                target="_self"
                method="post"
                id="formularioCadastroEstante"
              >
                <div class="row g-3">
                  <div class="col-6">
                    <label for="identificacaoCadastroEstante" class="form-label"
                      >Identificação:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="identificacaoCadastroEstante"
                      name="identificacaoCadastroEstante"
                      required
                    />
                  </div>
                  <div class="col-12">
                    <label for="localizacaoCadastroEstante" class="form-label"
                      >Localização:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="localizacaoCadastroEstante"
                      name="localizacaoCadastroEstante"
                      required
                    />
                  </div>
                  <div class="col-12">
                    <label for="secaoCadastroEstante" class="form-label"
                      >Seção:</label
                    >
                    <select
                      id="secaoCadastroEstante"
                      name="secaoCadastroEstante"
                    >
                      <option value="ficacaoCientifica">
                        Ficção Científica
                      </option>
                      <option value="filosofia">Filosofia</option>
                      <option value="historica">Histórica</option>
                      <option value="romance">Romance</option>

                      <option value="fantasia">Fantasia</option>

                      <option value="ficcaoCientifica">
                        Ficção Científica
                      </option>

                      <option value="terror">Terror</option>

                      <option value="suspense">Suspense</option>

                      <option value="poesia">Poesia</option>
                    </select>
                  </div>
                  <div class="col-12 d-flex flex-column">
                    <label
                      for="secaoDescricaoEstanteCadastro"
                      class="form-label"
                      >Descrição:</label
                    >
                    <textarea
                      id="secaoDescricaoEstanteCadastro"
                      name="secaoDescricaoEstanteCadastro"
                      rows="7"
                      cols="7"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">
                Cadastrar Estante
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Janela de edição-->
      <div class="modal" tabindex="-1" id="modificarEstante">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Cadastrando..</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                action="#"
                target="_self"
                method="post"
                id="formularioEdicaoEstante"
              >
                <div class="row g-3">
                  <div class="col-6">
                    <label for="identificacaoEdicaoEstante" class="form-label"
                      >Identificação:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="identificacaoEdicaoEstante"
                      name="identificacaoEdicaoEstante"
                      required
                    />
                  </div>
                  <div class="col-12">
                    <label for="localizacaoEdicaoEstante" class="form-label"
                      >Localização:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="localizacaoEdicaoEstante"
                      name="localizacaoEdicaoEstante"
                      required
                    />
                  </div>
                  <div class="col-12">
                    <label for="secaoEdicaoEstante" class="form-label"
                      >Seção:</label
                    >
                    <select id="secaoEdicaoEstante" name="secaoEdicaoEstante">
                      <option value="ficacaoCientifica">
                        Ficção Científica
                      </option>
                      <option value="filosofia">Filosofia</option>
                      <option value="historica">Histórica</option>
                      <option value="romance">Romance</option>

                      <option value="fantasia">Fantasia</option>

                      <option value="ficcaoCientifica">
                        Ficção Científica
                      </option>

                      <option value="terror">Terror</option>

                      <option value="suspense">Suspense</option>

                      <option value="poesia">Poesia</option>
                    </select>
                  </div>
                  <div class="col-12 d-flex flex-column">
                    <label for="secaoDescricaoEstanteEdicao" class="form-label"
                      >Descrição:</label
                    >
                    <textarea
                      id="secaoDescricaoEstanteEdicao"
                      name="secaoDescricaoEstanteEdicao"
                      rows="7"
                      cols="7"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">
                Salvar Alterações
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Resultados da Pesquisa-->
      <div class="row justify-content-center">
        <div class="col-md-8 mt-3">
          <div class="card shadow-sm">
            <div
              class="card-body"
              id="resultadoPesquisa"
              data-bs-toggle="modal"
              data-bs-target="#informacoesEstante"
            >
              <div class="border rounded p-3 mb-3">
                <div
                  class="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
                >
                  <!-- Informações -->
                  <div class="flex-grow-1 d">
                    <h5 class="mb-1">1-C</h5>

                    <p class="mb-0 text-muted">Localizacao: XXXXXXXXXXXXXXX</p>

                    <p class="mb-0 text-muted">
                      Livros Associados: Alice no País das Maravilhas, Dácrula,
                      Dom Casmurro
                    </p>
                  </div>

                  <!--Botões-->
                  <div class="d-flex flex-nowrap gap-2">
                    <div
                      class="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#modificarEstante"
                    >
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            fill="currentColor"
                            d="m19.71 8.04l-2.34 2.33l-3.75-3.75l2.34-2.33c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41M3 17.25L13.06 7.18l3.75 3.75L6.75 21H3zM16.62 5.04l-1.54 1.54l2.34 2.34l1.54-1.54zM15.36 11L13 8.64l-9 9.02V20h2.34z"
                          />
                        </svg>
                      </i>
                    </div>

                    <div
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#avisoexclusao"
                    >
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
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
      </div>
    </main>
  `;
});

opcaoGerenciaclassificacao.addEventListener("click", function () {
  let menu = document.getElementById("layoutSidenav_content");
  menu.innerHTML = "";
  menu.innerHTML = `
     
        <main class="container-fluid px-4 mt-5">
           <div class="container py-5">
      <!--Barra de Pesquisa-->
      <div class="row justify-content-center mb-4 mt-5">
        <div class="col-md-8">
          <div class="input-group mb-3 d-flex gap-2">
            <span class="input-group-text" id="gerenciamentoClassificacaoLupa">
              <i class="fas fa-search"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Classificação..."
              id="pesquisarClassificacao"
              name="barraPesquisadeClassificacao"
            />

            <button class="btn btn-warning fs-4 px-3"  data-bs-toggle="modal"
            data-bs-target="#cadastrarClassificacao" id="adicionarClassificacao">
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
                  />
                  </svg
              ></i>
            </button>
          </div>
        </div>
      </div>

      <!--Janelas-->

      <!--Janela que exibe as informações-->
      <div class="modal" tabindex="-1" id="informacoesClassificacao">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Informações</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex flex-column gap-2">
              <p class="mb-0 text-muted"><strong>Classificação:</strong> 68.9</p>
              <p class="mb-0 text-muted">
                <strong>Nome:</strong> Literatura Inglesa
              </p class="mb-0 text-muted">
               <p class="mb-0 text-muted"><strong>Descrição:</strong>Lorem ipsum dolor sit amet 
                consectetur, adipisicing elit.Laudantium culpa voluptates nesciunt 
                natus! Porro nisi suscipit, quae aut harum consequuntur quo libero? 
                Reiciendis ratione veritatis provident a maxime excepturi blanditiis.
              </p>
              <p class="mb-0 text-muted">
                <strong>Livros Associados:</strong>
                Drácula, Frankenstin, O Corvo
              </p>
              <p class="mb-0 text-muted"><strong>Descrição:</strong>Lorem fwhw ifhuqwiuqwu uisufwfuiweif ufqwfhuhufiquwfuq</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                id="modalFechar"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Janela de confirmação de exclusão-->
      <div class="modal" tabindex="-1" id="avisoexclusao">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Excluindo...</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex flex-column gap-2">
              <p class="mb-0 text-muted"><strong>Classificação</strong> 68.9</p>
              <p class="mb-0 text-muted">
                <strong>Nome:</strong> Literatura Inglesa
              </p class="mb-0 text-muted">
              <p class="mb-0 text-muted">
                <strong>Livros Associados:</strong>
                Drácula, Frankenstin, O Corvo
              </p>
              <p class="mb-0 text-muted"><strong>Descrição:</strong>Lorem ipsum dolor sit amet 
                consectetur, adipisicing elit.Laudantium culpa voluptates nesciunt 
                natus! Porro nisi suscipit, quae aut harum consequuntur quo libero? 
                Reiciendis ratione veritatis provident a maxime excepturi blanditiis.
              </p>
              <h5>Você realmente deseja excluir esta classificação ?</h5>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">Excluir</button>
            </div>
          </div>
        </div>
      </div>

      <!--Janela de edição-->
      <div class="modal" tabindex="-1" id="modificarInformacoesClassificacao">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Editando...</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                action="#"
                target="_self"
                method="post"
                id="formularioEdicaoClassificacao"
              >
               <div class="row g-3">
                 <div class="col-4">
                    <label for="numeroEdicaoClassificacao" class="form-label">Num. Classificação:</label>
                    <input type="text" class="form-control" id="numeroEdicaoClassificacao" name="numeroEdicaoClassificao" required>
                  </div>
                  <div class="col-12">
                    <label for="nomeEdicaoClassificacao" class="form-label">Nome:</label>
                    <input type="text" class="form-control" id="nomeEdicaoClassificacao" name="nomeEdicaoClassificacao" required>
                  </div>
                   <div class="col-12 d-flex flex-column">
                    <label for="edicaoDescricaoClassificacao" class="form-label">Descrição:</label>
                    <textarea id="edicaoDescricaoClassificao" name="edicaoDescricaoClassificacao" rows="7" cols="7"></textarea>
                  </div>
               </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">
                Salvar Alterações
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Janela de Cadastro-->
      <div class="modal" tabindex="-1" id="cadastrarClassificacao">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Editando...</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                action="#"
                target="_self"
                method="post"
                id="formularioCadastroClassificacao"
              >
               <div class="row g-3">
                 <div class="col-4">
                    <label for="numeroCadastroClassificacao" class="form-label">Num. Classificação:</label>
                    <input type="text" class="form-control" id="numeroCadastroClassificacao" name="numeroCadastroClassificacao" required>
                  </div>
                  <div class="col-12">
                    <label for="nomeCadastroClassificacao" class="form-label">Nome:</label>
                    <input type="text" class="form-control" id="nomeCadastroClassificacao" name="nomeCadastroClassificacao" required>
                  </div>
                   <div class="col-12 d-flex flex-column">
                    <label for="cadastroDescricaoClassificacao" class="form-label">Descricao:</label>
                    <textarea id="cadastroDescricaoClassificao" name="cadastroDescricaoClassificacao" rows="7" cols="7"></textarea>
                  </div>
               </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">
                Cadastrar Classificação
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Resultados da Pesquisa-->
      <div class="row justify-content-center">
        <div class="col-md-8 mt-3">
          <div class="card shadow-sm">
            <div
              class="card-body"
              id="resultadoPesquisa"
              data-bs-toggle="modal"
              data-bs-target="#informacoesClassificacao"
            >
              <div class="border rounded p-3 mb-3">
                <div
                  class="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
                >
                  <!-- Informações -->
                  <div class="flex-grow-1 d">
                    <h5 class="mb-1">Classificação: 68.9</h5>
                    <p class="mb-0 text-muted">
                      <strong>Nome:</strong> Literatura Inglesa
                    </p>
                    <p class="mb-0 text-muted">
                      <strong>Livros Associados:</strong>
                      Drácula, Frankenstin, O Corvo
                    </p>
                  </div>

                  <!-- Botões -->
                  <div class="d-flex flex-nowrap gap-2">
                    <div
                      class="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#modificarInformacoesClassificacao"
                    >
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            fill="currentColor"
                            d="m19.71 8.04l-2.34 2.33l-3.75-3.75l2.34-2.33c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41M3 17.25L13.06 7.18l3.75 3.75L6.75 21H3zM16.62 5.04l-1.54 1.54l2.34 2.34l1.54-1.54zM15.36 11L13 8.64l-9 9.02V20h2.34z"
                          />
                        </svg>
                      </i>
                    </div>

                    <div
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#avisoexclusao"
                    >
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
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
      </div>
        </main>
     
  `;
});

opcaoGerenciamentosecao.addEventListener("click", function () {
  let menu = document.getElementById("layoutSidenav_content");
  menu.innerHTML = "";
  menu.innerHTML = `
      <main class="container-fluid px-4 mt-5">
           <div class="container py-5">
      <!--Barra de Pesquisa-->
      <div class="row justify-content-center mb-4 mt-5">
        <div class="col-md-8">
          <div class="input-group mb-3 d-flex gap-2">
            <span class="input-group-text" id="gerenciamentoSecaoLupa">
              <i class="fas fa-search"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Seções..."
              id="pesquisarSecao"
              name="pesquisadeSecao"
            />

            <button class="btn btn-warning fs-4 px-3"  data-bs-toggle="modal" data-bs-target="#cadastrarSecao" id="adicionarSecao">
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

      <!--Janelas-->

      <!--Janela que exibe as informações-->
      <div class="modal" tabindex="-1" id="informacoesSecao">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Informações</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex flex-column gap-2">
              <p class="mb-0 text-muted"><strong>Seção:</strong> Infantil</p>

              <p class="mb-0 text-muted"><strong>ID:</strong> 001</p>

              <p class="mb-0 text-muted"><strong>Sigla:</strong> TR</p>

              <p class="mb-0 text-muted">
                <strong>Classificação Temática:</strong> 68.9
              </p>

              <p class="mb-0 text-muted">
                <strong>Localização:</strong> Primeiro Andar
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                id="modalFechar"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Janela de confirmação de exclusão-->
      <div class="modal" tabindex="-1" id="avisoexclusao">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Excluindo...</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex flex-column gap-2">
              <p class="mb-0 text-muted"><strong>Seção:</strong> Infantil</p>

              <p class="mb-0 text-muted"><strong>ID:</strong> 001</p>

              <p class="mb-0 text-muted"><strong>Sigla:</strong> TR</p>

              <p class="mb-0 text-muted">
                <strong>Classificação Temática:</strong> 68.9
              </p>

              <p class="mb-0 text-muted">
                <strong>Localização:</strong> Primeiro Andar
              </p>

              <h4>Você realmente deseja excluir esta seção ?</h4>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">Excluir</button>
            </div>
          </div>
        </div>
      </div>

       
      <!--Janela de Cadastro-->
      <div class="modal" tabindex="-1" id="cadastrarSecao">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Cadastrando...</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                action="#"
                target="_self"
                method="post"
                id="formularioCadastroSecao"
              >
                <div class="row g-3">
                  <div class="col-6">
                    <label for="nomeCadastroSecao" class="form-label"
                      >Seção:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="nomeCadastroSecao"
                      name="nomeCadastroSecao"
                      required
                    />
                  </div>
                  <div class="col-6">
                    <label for="siglaCadastroSecao" class="form-label"
                      >Sigla:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="siglaCadastroSecao"
                      name="siglaCadastroSecao"
                      required
                    />
                  </div>
                  <div class="col-12">
                    <label for="localizacaoEdicaoSecao" class="form-label"
                      >Localização:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="localizacaoCadastroSecao"
                      name="localizacaoCadastroSecao"
                      required
                    />
                  </div>
                  <div class="col-12 d-flex flex-column">
                    <label for="descricaoSecaoCadastro" class="form-label"
                      >Descrição:</label
                    >
                    <textarea
                      id="descricaoSecaoEdicao"
                      name="descricaoSecaoEdicao"
                      rows="7"
                      cols="7"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">
                Salvar Alterações
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Janela de edição-->
      <div class="modal" tabindex="-1" id="modificarInformacoesSecao">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Editando...</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                action="#"
                target="_self"
                method="post"
                id="formularioEdicaoSecao"
              >
                <div class="row g-3">
                  <div class="col-6">
                    <label for="nomeEdicaoSecao" class="form-label"
                      >Seção:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="nomeEdicaoSecao"
                      name="nomeEdicaoSecao"
                      required
                    />
                  </div>
                  <div class="col-6">
                    <label for="siglaEdicaoSecao" class="form-label"
                      >Sigla:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="siglaEdicaoSecao"
                      name="siglaEdicaoSecao"
                      required
                    />
                  </div>
                  <div class="col-12">
                    <label for="localizacaoEdicaoSecao" class="form-label"
                      >Localização:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="localizacaoEdicaoSecao"
                      name="localizacaoEdicaoSecao"
                      required
                    />
                  </div>
                  <div class="col-12 d-flex flex-column">
                    <label for="descricaoSecaoEdicao" class="form-label"
                      >Descrição:</label
                    >
                    <textarea
                      id="descricaoSecaoEdicao"
                      name="descricaoSecaoEdicao"
                      rows="7"
                      cols="7"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">
                Salvar Alterações
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Resultados da Pesquisa-->
      <div class="row justify-content-center">
        <div class="col-md-8 mt-3">
          <div class="card shadow-sm">
            <div
              class="card-body"
              id="resultadoPesquisa"
              data-bs-toggle="modal"
              data-bs-target="#informacoesSecao"
            >
              <div class="border rounded p-3 mb-3">
                <div
                  class="d-flex flex-column flex-md-row align-items-center gap-3"
                >
                 
                  <!-- Informações -->
                  <div class="flex-grow-1 d">
                    <h5 class="mb-1">Infantil</h5>

                    <p class="mb-0 text-muted">Sigla: IF</p>

                    <p class="mb-0 text-muted">Localização: Primeiro Andar</p>
                  </div>

                  <!-- Botões -->
                  <div>
                    <div
                      class="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#modificarInformacoesSecao"
                    >
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            fill="currentColor"
                            d="m19.71 8.04l-2.34 2.33l-3.75-3.75l2.34-2.33c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41M3 17.25L13.06 7.18l3.75 3.75L6.75 21H3zM16.62 5.04l-1.54 1.54l2.34 2.34l1.54-1.54zM15.36 11L13 8.64l-9 9.02V20h2.34z"
                          />
                        </svg>
                      </i>
                    </div>

                    <div
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#avisoexclusao"
                    >
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
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
      </div>
    </main>
    
    `;
});

opcaoGerencialeitores.addEventListener("click", function () {
  let menu = document.getElementById("layoutSidenav_content");
  menu.innerHTML = "";
  menu.innerHTML = `
          <main class="container-fluid px-4 mt-5">
             <div class="container py-5">
      <!--Barra de Pesquisa-->
      <div class="row justify-content-center mb-4 mt-5">
        <div class="col-md-8">
          <div class="input-group mb-3 d-flex gap-2">
            <span class="input-group-text" id="gerenciamentoLeitoresLupa">
              <i class="fas fa-search"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Leitores..."
              id="pesquisarLeitores"
              name="pesquisadeLeitores"
            />

            <button class="btn btn-warning fs-4 px-3" id="adicionarLeitor" data-bs-toggle="modal" data-bs-target="#cadastrarLeitor">
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

      <!--Janelas-->

      <!--Janela de Informações-->

      <div class="modal" tabindex="-1" id="informacoesLeitor">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Excluindo...</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex flex-column gap-2">
              <p class="mb-0 text-muted"><strong>Leitor:</strong> João Silva</p>
              <p class="mb-0 text-muted">
                <strong>Data de Nascimento:</strong> 00/00/00
              </p>
              <p class="mb-0 text-muted">
                <strong>Email:</strong> joãosilva@example.com
              </p>
              <p class="mb-0 text-muted">
                <strong>CPF:</strong> 000.000.000-00
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Janela de confirmação de exclusão-->
      <div class="modal" tabindex="-1" id="avisoexclusao">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Excluindo...</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex flex-column gap-2">
              <p class="mb-0 text-muted"><strong>Leitor:</strong> João Silva</p>
              <p class="mb-0 text-muted">
                <strong>Data de Nascimento:</strong> 00/00/00
              </p>
              <p class="mb-0 text-muted">
                <strong>Email:</strong> joãosilva@example.com
              </p>
              <p class="mb-0 text-muted">
                <strong>CPF:</strong> 000.000.000-00
              </p>
              <h4>Você realmente deseja excluir este leitor ?</h4>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">Excluir</button>
            </div>
          </div>
        </div>
      </div>

      <!--Janela de Cadastro-->
       <div class="modal" tabindex="-1" id="cadastrarLeitor">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Cadastrando...</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                action="#"
                target="_self"
                method="post"
                id="formularioCadastroLeitor"
                class="d-flex flex-column align-items-center gap-3"
              >
                <div class="row g-3">
                  <div class="col-12">
                    <label for="nomeCadastroLeitor" class="form-label">Nome:</label>
                    <input type="text" class="form-control" id="nomeCadastroLeitor" name="nomeCadastroLeitor" required>
                  </div>
                <div class="col-12">
                    <label for="emailCadastroLeitor" class="form-label">E-mail:</label>
                    <input type="email" class="form-control" id="emailCadastroLeitor" name="emailCadastroLeitor" required>
                </div>
                <div class="col-md-6">
                   <label for="dataNascimentoCadastroLeitor" class="form-label">Data de Nascimento:</label>
                   <input type="date" class="form-control" id="dataNascimentoCadastroLeitor" name="dataNascimentoCadastroLeitor" required>
                </div>
                <div class="col-md-6">
                  <label for="cpfCadastroLeitor" class="form-label">CPF:</label>
                  <input type="text"
                     class="form-control"
                     id="cpfCadastroLeitor"
                     name="cpf"
                     placeholder="000.000.000-00"
                     maxlength="14"
                     required>
                </div>
                <div class="col-md-6">
                  <label for="senhaCadastroLeitor" class="form-label">Senha:</label>
                  <input type="password" class="form-control" id="senhaCadastroLeitor" name="senha" required>
                </div>
                <div class="col-md-6">
                   <label for="confirmarSenhaCadastroLeitor" class="form-label">Confirmar Senha:</label>
                   <input type="password" class="form-control" id="confirmarSenhaCadastroLeitor" name="confirmarSenha" required>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">
                Cadastrar Leitor
              </button>
            </div>
          </form>
          </div>
          </div>
        </div>
      </div>

      <!--Janela de edição-->
      <div class="modal" tabindex="-1" id="modificarInformacoesLeitor">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Editando...</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                action="#"
                target="_self"
                method="post"
                id="formularioEdicaoLeitor"
                class="d-flex flex-column align-items-center gap-3"
              >
                <div class="row g-3">
                  <div class="col-12">
                    <label for="nomeEdicaoLeitor" class="form-label">Nome Completo:</label>
                    <input type="text" class="form-control" id="nomeEdicaoLeitor" name="nomeEdicaoLeitor" required>
                  </div>
                <div class="col-12">
                    <label for="emailEdicaoLeitor" class="form-label">E-mail:</label>
                    <input type="email" class="form-control" id="emailEdicaoLeitor" name="emailEdicaoLeitor" required>
                </div>
                <div class="col-md-6">
                   <label for="dataNascimentoEdicaoLeitor" class="form-label">Data de Nascimento:</label>
                   <input type="date" class="form-control" id="dataNascimentoEdicaoLeitor" name="dataNascimentoEdicaoLeitor" required>
                </div>
                <div class="col-md-6">
                  <label for="cpfEdicaoLeitor" class="form-label">CPF:</label>
                  <input type="text"
                     class="form-control"
                     id="cpfEdicaoLeitor"
                     name="cpfEdicaoLeitor"
                     placeholder="000.000.000-00"
                     maxlength="14"
                     required>
                </div>
                <div class="col-md-6">
                  <label for="senhaEdicaoLeitor" class="form-label">Senha:</label>
                  <input type="password" class="form-control" id="senhaEdicaoLeitor" name="senhaEdicaoLeitor" required>
                </div>
                <div class="col-md-6">
                   <label for="confirmarSenhaEdicaoLeitor" class="form-label">Confirmar Senha:</label>
                   <input type="password" class="form-control" id="confirmarSenhaEdicaoLeitor" name="confirmarSenhaEdicaoLeitor" required>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">
                Salvar Alterações
              </button>
            </div>
          </form>
          </div>
          </div>
        </div>
      </div>

      <!--Resultados da Pesquisa-->
      <div class="row justify-content-center">
        <div class="col-md-8 mt-3">
          <div class="card shadow-sm">
            <div
              class="card-body"
              id="resultadoPesquisa"
              data-bs-toggle="modal"
              data-bs-target="#informacoesLeitor"
            >
              <div class="border rounded p-3 mb-3">
                <div
                  class="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
                >
                  <!-- Foto -->
                  <img
                    class="rounded-circle"
                    alt="Imagem Usuário"
                    src="../../../Downloads/Designer.png"
                    width="110"
                    height="110"
                  />

                  <!-- Informações -->
                  <div class="flex-grow-1 d">
                    <h5 class="mb-1">João Silva</h5>
                    <p class="mb-0 text-muted">Email: joao.silva@email.com</p>
                  </div>

                  <!-- Botões -->
                  <div class="d-flex flex-nowrap gap-2">
                    <div
                      class="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#modificarInformacoesLeitor"
                    >
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            fill="currentColor"
                            d="m19.71 8.04l-2.34 2.33l-3.75-3.75l2.34-2.33c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41M3 17.25L13.06 7.18l3.75 3.75L6.75 21H3zM16.62 5.04l-1.54 1.54l2.34 2.34l1.54-1.54zM15.36 11L13 8.64l-9 9.02V20h2.34z"
                          />
                        </svg>
                      </i>
                    </div>

                    <div
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#avisoexclusao"
                    >
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
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
      </div>
    </main>
       
       `;
});
