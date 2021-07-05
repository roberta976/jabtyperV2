function FraseDao(connection){
	this._connection = connection;
}

FraseDao.prototype.buscarFrases = function(callback){
	this._connection.query('select * from frases', callback);
}
FraseDao.prototype.InserirJogador = function(jogador, callback){
	this._connection.query('INSERT INTO jogadores values(?, ?, ? )',[jogador.nome, jogador.dificuldade, jogador.pontuacao], callback);
}
FraseDao.prototype.buscarJogadores = function(callback){
	this._connection.query('select * from jogadores', callback);
}
FraseDao.prototype.buscarJogadorespordificuldade = function(id,callback){
	this._connection.query('sele* from jogadores where id = ?'[1, callback])

}



module.exports = function(){
	return FraseDao;
}