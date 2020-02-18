function DiaSemana(dia: number): string{

	let resposta: string = "";

	switch(dia){
		case 0:
			resposta = "Domingo";
		break;
		case 1:
			resposta = "Segunda";
		break;
		case 2:
			resposta = "Terça";
		break;
		case 3:
			resposta = "Quarta";
		break;
		case 4:
			resposta = "Quinta";
		break;
		case 5:
			resposta = "Sexta";
		break;
		case 6:
			resposta = "Sábado";
		break;
		default:
			resposta = "Não existe";
			break;
	}

	return resposta;
} 

console.log(DiaSemana(2));
