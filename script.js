//подключаемся к серверу, объявляем переменные
var require = $.get("http://localhost:591/quote"),
	request = $.get("http://localhost:591/quote");
//при положительном ответе сервера
require.done(function(date) {
	//парсим строку в словарь
	var slovar = JSON.parse(date);
	//отправляем в заголовок номер цитаты
	$("title").text(slovar.num + 1);
	//oтправляем текст цитаты
	$("p").html(slovar.txt);
});
//выводим ошибку в консоль при не удачном подключении
require.fail(function(jqXHR,textStatus,errorThrown){
	console.log(textStatus,errorThrown);
});