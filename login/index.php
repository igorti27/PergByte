<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="author" content="Muhamad Nauval Azhar">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<meta name="description" content="This is a login page template based on Bootstrap 5">
	<title>Bootstrap 5 Login Page</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>

<body>
	<section class="h-100">
		<div class="container h-100">
			<div class="row justify-content-sm-center h-100">
				<div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
					<div class="text-center my-5">
						<img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="logo" width="100">
					</div>
					<div class="card shadow-lg">
						<div class="card-body p-5">
							<h1 class="fs-4 card-title fw-bold mb-4">Login</h1>
						
								<div class="mb-3">
									<label class="mb-2 text-muted" for="email">E-Mail Address</label>
									<input id="email" type="email" class="form-control" name="email" value="" required autofocus>
									<div class="invalid-feedback">
										Email is invalid
									</div>
								</div>

								<div class="mb-3">
									<div class="mb-2 w-100">
										<label class="text-muted" for="password">Password</label>
									</div>
									<input id="password" type="password" class="form-control" name="password" required>
								    <div class="invalid-feedback">
								    	Password is required
							    	</div>
								</div>

								<div class="d-flex align-items-center">
									<div class="form-check">
										<input type="checkbox" name="remember" id="remember" class="form-check-input">
										<label for="remember" class="form-check-label">Remember Me</label>
									</div>
									<button type="button" id="loginBtn" class="btn btn-primary ms-auto">
										Login
									</button>
								</div>
							
						</div>
						<div class="card-footer py-3 border-0">
							<div class="text-center">
                                <div id="spinner" class="d-none spinner-border text-warning" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                <div id="resposta_sucesso" class="text-success text-center mt-3"></div>
                                <div id="resposta_erro" class="text-danger text-center mt-3"></div>
							</div>
						</div>
					</div>
					<div class="text-center mt-5 text-muted">
						Copyright &copy; 2017-2021 &mdash; Your Company 
					</div>
				</div>
			</div>
		</div>
	</section>

    <script>
        $(document).ready(function() {
            $('#loginBtn').click(function(evento) {
                //console.log(evento);

                $.ajax({
                    url: 'processa_login.php', // qual script no servidor irá processar a requisição
                    type: 'POST',
                    data: {
                        email: $('#email').val(),
                        password: $('#password').val()
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
        });
    </script>
</body>
</html>