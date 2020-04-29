<b>API REST com Node js</b>

Esse projeto consiste em uma API REST que cria, lista, e deleta transações de entrada ou saída de valores.<br>
A API também possibilita o Upload de arquivos com extensão .csv contendo uma lista de transações que serão adicionadas<br>
às transaçes já existentes.

<hr></hr>

<b>Tecnologias utilizadas</b><br>
<ul>
	<li><b>Node:</b> Lidar com as requisições HTTP provindas do front-end;<br></li>
	<li><b>Docker:</b> Utilizado para criar uma imagem do Postgres para armazenamento das transações<br></li>
	<li><b>Postgres:</b> Banco de dados utiizado <br></li>
</ul>


<hr></hr>

<b>Inicialização</b><br>
Para utilizar, realize um clone do projeto e execute o comando <code>yarn</code> no seu terminal para instalar todas as dependências necessárias.<br>
Você também deve instalar o docker, iniciar uma imagem do Postgres e criar uma base de dados com o nome "gostack_desafio06"<br>
<b>ATENÇÃO:</b> a imagem do Postgres deve utilizar a porta <b>5433</b>.<br> 
Após isso, execute o comando <code>yarn dev:server</code> para iniciar o servidor na porta <b>3333</b><br>
do endereço<br>

<hr></hr>

<b>Rotas</b><br>

Para importar um arquivo de transações. Basta fazer uma requisição para o endpoint <code>/import</code> passando no corpo da requisição o arquivo com extensão <b>.csv</b><br>

Os recursos em relação as transaçes se encontram no endpoint <code>/transactions</code>, onde os verbos HTTP vão diferenciar qual o recurso está sendo solicitado.<br>
<ul>
	<li><b>Get:</b> Lista todas as transações<br>O retorno será um objeto do tipo <b>JSON</b> semelhante a este:<br><br><img src="/Screenshot from 2020-04-29 17-11-12.png">
		<br><br>As informações retornadas são:<br>
			<b>transactions->id:</b> o id da transação<br>
			<b>transactions->title:</b> título da transação.<br>
			<b>transactions->type:</b> o tipo da transação que pode ser "income" que indica uma entrada ou "outcome" que indica uma retirada.<br>
			<b>transactions->value:</b> valor da transação.<br>
			<b>transactions->category_id:</b> id categoria da transação.<br>
			<b>transactions->created_at:</b> data e hora da criação da transação.<br>
			<b>transactions->updated_id:</b> data e hora da criação da ultima atualização da transação.<br><br>
			<b>balance->income:</b> valor total de entradas.<br>
			<b>balance->outcome:</b> valor total de saídas.<br>
			<b>balance->total:</b> valor total de entradas menos as saídas.<br><br>
	</li>
	<li>
		<b>Delete:</b> Deleta uma transação<br>Para deletar uma transação você deve passar como parametro o id da transação.<br>
		Observe um exemplo abaixo:<br>
		<code>http://localhost:3333/transactions/15032a7a-e7e4-40b4-8988-c192fca90885</code>
	</li><br>
	<li><b>Post:</b> Cria uma nova transação<br></li>
		Para criar uma nova transação um objeto no formato <b>JSON</b> deve ser enviado no <b>corpo</b> da requisição, assim como no exemplo abaixo:<br>
		<br>
		<img src="/Screenshot from 2020-04-29 16-23-50.png">
		<br><br>
		As informações que devem ser enviadas são:<br>
			<b>id:</b> será gerado um id do tipo uuid. Então, você deve passar a string fixa "uuid"<br>
			<b>title:</b> título da transação.<br>
			<b>value:</b> valor da transação sem formatações.<br>
			<b>type:</b> o tipo da transação que pode ser "income" que indica uma entrada ou "outcome" que indica uma retirada.<br>
			<b>category:</b> categoria da transação.<br>
			
		
</ul>


	
