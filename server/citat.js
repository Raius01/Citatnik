//подключаем модуди, создаем переменные
var express = require("express"),
	cors = require("cors"),
	fs = require("fs"),
	sf = require("fs");
var app = express(), 
	cock,
	nC;
app.use(cors());
//получаем из файла все цитаты и загружаем их в массив
fs.readFile("database.txt", "utf-8", function(err, content) {
	if (err) {
		throw err
	};
	//Обрабатываем GET запрос /quote и отправляем ответ
	app.get("/quote", function(request, response) {
		response.send(RandomCitat(content));
	});
});
//получаем из файла всех авторов и загружаем их в массив
sf.readFile("database1.txt", "utf-8", function(content) {
	app.get("/quote", function(request, response) {
		response.send(Avtor(content));
	});
});
//функция рандомного извлечения цитаты и формирования строки
function RandomCitat(text) {
	//парсим строку в массив
	var split = text.split("\n");
	//генерируем случайное целое число в пределах размера массива
	var nCitate = (Math.floor(Math.random() * (split.length))),
		txt = split[nCitate];
	nC = nCitate;
	//Создаем словарь ответа
	var pull = {
		num:nCitate,
		txt:split[nCitate]
	};
	//Преобразуем словарь в строку
	return JSON.stringify(pull);
};
//функция извлечения автора и формирования строки
function Avtor(text) {
	var slip = text.split("\n");
	var nAvt = nC,
		txt = split[nAvt];
	var push = {
		txt:split[nAvt]
	};
	return JSON.stringify(push);
};
app.listen(591);