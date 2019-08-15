Projeto para o desafio liftbank:

Este projeto contêm uma api node com as seguintes funcionalidades:

Login: Logar o usuário
Listar transações: Listar os objetos transações de cada usuário
Listar recebíveis: As transações viram um recebível com o valor da taxa descontado, o recebível deve ter uma campo que diz se ele já foi pago ou não.
Antecipar recebíveis: Muda a data de pagamento e o valor à ser pago do objeto recebível.
Exportar Relatório, exportar em CSV os dados de transações e recebíveis.

Para login foi usado o jwt (jeson web token) para efetuar a autenticação.

Arquivo postman e os exemplos de csv exportados estão contidos na pasta example files.

Link para documentação da api no postman: https://documenter.getpostman.com/view/4737860/SVYxnavx?version=latest