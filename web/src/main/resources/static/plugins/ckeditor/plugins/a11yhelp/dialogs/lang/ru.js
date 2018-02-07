﻿﻿/*
 Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.plugins.setLang("a11yhelp", "ru", {
	title: "Горячие клавиши",
	contents: "Помощь. Для закрытия этого окна нажмите ESC.",
	legend: [{
		name: "Основное",
		items: [{
			name: "Панель инструментов",
			legend: "Нажмите ${toolbarFocus} для перехода к панели инструментов. Для перемещения между группами панели инструментов используйте TAB и SHIFT+TAB. Для перемещения между кнопками панели иструментов используйте кнопки ВПРАВО или ВЛЕВО. Нажмите ПРОБЕЛ или ENTER для запуска кнопки панели инструментов."
		}, {
			name: "Диалоги",
			legend: 'Внутри диалога, нажмите TAB чтобы перейти к следующему элементу диалога, нажмите SHIFT+TAB чтобы перейти к предыдущему элементу диалога, нажмите ENTER чтобы отправить диалог, нажмите ESC чтобы отменить диалог. Когда диалоговое окно имеет несколько вкладок, получить доступ к панели вкладок как части диалога можно нажатием или сочетания ALT+F10 или TAB, при этом активные элементы диалога будут перебираться с учетом порядка табуляции. При активной панели вкладок, переход к следующей или предыдущей вкладке осуществляется нажатием стрелки "ВПРАВО" или стрелки "ВЛЕВО" соответственно.'
		},
			{
				name: "Контекстное меню",
				legend: 'Нажмите ${contextMenu} или клавишу APPLICATION, чтобы открыть контекстное меню. Затем перейдите к следующему пункту меню с помощью TAB или стрелкой "ВНИЗ". Переход к предыдущей опции - SHIFT+TAB или стрелкой "ВВЕРХ". Нажмите SPACE, или ENTER, чтобы задействовать опцию меню. Открыть подменю текущей опции - SPACE или ENTER или стрелкой "ВПРАВО". Возврат к родительскому пункту меню - ESC или стрелкой "ВЛЕВО". Закрытие контекстного меню - ESC.'
			}, {
				name: "Редактор списка",
				legend: 'Внутри окна списка, переход к следующему пункту списка - TAB или стрелкой "ВНИЗ". Переход к предыдущему пункту списка - SHIFT+TAB или стрелкой "ВВЕРХ". Нажмите SPACE, или ENTER, чтобы задействовать опцию списка. Нажмите ESC, чтобы закрыть окно списка.'
			}, {
				name: "Путь к элементу",
				legend: 'Нажмите ${elementsPathFocus}, чтобы перейти к панели пути элементов. Переход к следующей кнопке элемента - TAB или стрелкой "ВПРАВО". Переход к предыдущей кнопку - SHIFT+TAB или стрелкой "ВЛЕВО". Нажмите SPACE, или ENTER, чтобы выбрать элемент в редакторе.'
			}]
	},
		{
			name: "Команды",
			items: [{name: "Отменить", legend: "Нажмите ${undo}"}, {name: "Повторить", legend: "Нажмите ${redo}"}, {
				name: "Полужирный",
				legend: "Нажмите ${bold}"
			}, {name: "Курсив", legend: "Нажмите ${italic}"}, {name: "Подчеркнутый", legend: "Нажмите ${underline}"}, {
				name: "Гиперссылка",
				legend: "Нажмите ${link}"
			}, {name: "Свернуть панель инструментов", legend: "Нажмите ${toolbarCollapse}"}, {
				name: "Команды доступа к предыдущему фокусному пространству",
				legend: 'Нажмите ${accessPreviousSpace}, чтобы обратиться к ближайшему недостижимому фокусному пространству перед символом "^", например: два смежных HR элемента. Повторите комбинацию клавиш, чтобы достичь отдаленных фокусных пространств.'
			},
				{
					name: "Команды доступа к следующему фокусному пространству",
					legend: "Press ${accessNextSpace} to access the closest unreachable focus space after the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces."
				}, {name: "Справка по горячим клавишам", legend: "Нажмите ${a11yHelp}"}]
		}],
	backspace: "Backspace",
	tab: "Tab",
	enter: "Enter",
	shift: "Shift",
	ctrl: "Ctrl",
	alt: "Alt",
	pause: "Pause",
	capslock: "Caps Lock",
	escape: "Esc",
	pageUp: "Page Up",
	pageDown: "Page Down",
	end: "End",
	home: "Home",
	leftArrow: "Стрелка влево",
	upArrow: "Стрелка вверх",
	rightArrow: "Стрелка вправо",
	downArrow: "Стрелка вниз",
	insert: "Insert",
	"delete": "Delete",
	leftWindowKey: "Левая клавиша Windows",
	rightWindowKey: "Правая клавиша Windows",
	selectKey: "Выбрать",
	numpad0: "Цифра 0",
	numpad1: "Цифра 1",
	numpad2: "Цифра 2",
	numpad3: "Цифра 3",
	numpad4: "Цифра 4",
	numpad5: "Цифра 5",
	numpad6: "Цифра 6",
	numpad7: "Цифра 7",
	numpad8: "Цифра 8",
	numpad9: "Цифра 9",
	multiply: "Умножить",
	add: "Плюс",
	subtract: "Вычесть",
	decimalPoint: "Десятичная точка",
	divide: "Делить",
	f1: "F1",
	f2: "F2",
	f3: "F3",
	f4: "F4",
	f5: "F5",
	f6: "F6",
	f7: "F7",
	f8: "F8",
	f9: "F9",
	f10: "F10",
	f11: "F11",
	f12: "F12",
	numLock: "Num Lock",
	scrollLock: "Scroll Lock",
	semiColon: "Точка с запятой",
	equalSign: "Равно",
	comma: "Запятая",
	dash: "Тире",
	period: "Точка",
	forwardSlash: "Наклонная черта",
	graveAccent: "Апостроф",
	openBracket: "Открыть скобку",
	backSlash: "Обратная наклонная черта",
	closeBracket: "Закрыть скобку",
	singleQuote: "Одинарная кавычка"
});