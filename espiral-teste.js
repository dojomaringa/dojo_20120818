var vows = require('vows');
var assert = require('assert');

var espiral = require('./espiral.js').espiral;

vows.describe('Espiral').addBatch({
	'1 linha e uma coluna': function() {
		assert.deepEqual(espiral(1, 1), [['1']]);
	},
	'1 linha e 2 colunas': function() {
		assert.deepEqual(espiral(2,1), [['1', '2']]);
	},
	'2 linhas e 1 coluna' : function() {
	    assert.deepEqual(espiral(1,2), [['1'],['2']]);
	},
	'2 linhas e 2 colunas' : function() {
		assert.deepEqual(espiral(2,2), [['1','2'],['4','3']] )
	},
	'3 linhas e 3 colunas' : function() {
		assert.deepEqual(espiral(3,3), [['1','2','3'],['8','9','4'],['7','6','5']] )
	},
	'6 linhas e 5 colunas': function() {
		assert.deepEqual(espiral(5, 6), 
		 [['1', '2', '3', '4','5'],
		['18', '19', '20', '21', '6'],
		['17', '28', '29', '22',  '7'],
		['16', '27', '30', '23',  '8'],
		['15', '26', '25', '24',  '9'],
		['14', '13', '12', '11', '10']]);
	}
}).run();
