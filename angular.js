'use strict';

module.exports = {
	'parser': 'babel-eslint',
	'extends': [
		'6river',
		'angular',
	],
	'rules': {
		'no-invalid-this': 'off',
		'babel/new-cap': 'warn',
		'angular/module-setter': 'off',
		'angular/module-getter': 'off',
		'angular/no-service-method': 'off',
		'angular/log': 'off',
	},
	'env': {
		'browser': true,
	},
	'globals': {
		'angular': false
	},
	'plugins': [
		'babel'
	],
};