
module.exports = (sequelize, Sequelize) => {
	const Book = sequelize.define('book', {	
	  id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
    },
	  name: {
			type: Sequelize.STRING
	  },
	  editorial: {
			type: Sequelize.STRING
  	},
	  autor: {
			type: Sequelize.STRING
	  },
	  genero: {
			type: Sequelize.STRING
    },
      pais_autor: {
            type: Sequelize.STRING
    },
      no_pag: {
            type: Sequelize.INTEGER
    },
      ano_edicion: {
            type: Sequelize.DATE
    },
      precio: {
        type: Sequelize.FLOAT
    },
    copyrightby: {
      type: Sequelize.STRING,
      defaultValue: 'UMG Antigua'
    }
	});
	
	return Customer;
}