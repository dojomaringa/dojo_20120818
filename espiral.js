var espiral = function(coluna,linha)
{
	var retorno = new Array(linha);
	for(var i = 0; i < linha; i++) {
		retorno[i] = new Array(coluna);
	}

	var posicaoLinha = 0;
	var posicaoColuna = 0; 
	
	var limInfCol = 0, 
		limSupCol = coluna - 1, 
		limInfLin = 1, 
		limSupLin = linha - 1;
	
	var passos = {
	'direita' : function() {
		if (posicaoColuna == limSupCol)
				{
					passo = passos.desce;
					limSupCol--;
					posicaoLinha++;
				} else posicaoColuna++;
		},	
	'desce' : function() {
		if (posicaoLinha == limSupLin)
				{
					passo = passos.esquerda;
					limSupLin--;
					posicaoColuna--;
				} else posicaoLinha++;
		},
	'esquerda' : function() {
		if (posicaoColuna == limInfCol)
				{
					passo = passos.sobe;
					limInfCol++;
					posicaoLinha--;
				} else posicaoColuna--;
			
		
		},
	'sobe' : function() {
		if (posicaoLinha == limInfLin)
				{
					passo = passos.direita;
					limInfLin++;
					posicaoColuna++;
				} else posicaoLinha --;},
	}
	
	var passo = passos.direita;
	
	for (var i = 1; i <= linha * coluna; i++)
	{
		retorno[posicaoLinha][posicaoColuna] = i.toString();
		passo();
	
	}
	
	return retorno;
}

exports.espiral = espiral;
