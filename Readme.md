# Интернет-магазин на Vue.js
## Для запауска проекта необходимо:
Установить зависимости комндой:
```
npm i
```
---
Запустить проект командой:
```
npm start 
```
или deploy
```
npm run build
```
---
Загрузить фейковые данные из папки db.json командой:
```
json-server --watch db.json
```
## Тестовое задание на позицию frontend-разработчика
Технические требования:
- при выполнении тестового задания использовать VueJS (без использования Vue CLI)
- разрешено использовать Bootstrap, jQuery
- верстка должна максимально соответствовать предоставленному макету и ui-киту. Желательно PixelPerfect. Адаптивная
- результат должен корректно отображаться во всех популярных браузерах, включая IE 11 версии
- при работе над заданием обязательно использование средств автоматизации (webpack или gulp). Конфигурация должна корректно работать на 16 версии Node.js


Кнопка “купить” должна реализовывать следующий функционал:
- на 2 сек вместо надписи “купить” должен появляться прелоадер. Внешний вид прелоадера необходимо продумать самостоятельно
- затем внешний вид кнопки должен меняться на состояние: “в корзине”
- после перезагрузки страницы состояния товаров (в корзине он или нет) должно сохраняться

При клике на название товара, открывается модалка с карточкой товара, кратким описанием, ценой и слайдером из 2-х - 3-х картинок. Дизайн продумать самостоятельно

БОНУС: реализовать функционал поиска по товарам с исп. debounce
