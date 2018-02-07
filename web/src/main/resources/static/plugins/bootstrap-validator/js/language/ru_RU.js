(function ($) {
	/**
	 * Russian language package
	 * Translated by @cylon-v. Improved by @stepin, @oleg-voloshyn
	 */
	$.fn.bootstrapValidator.i18n = $.extend(true, $.fn.bootstrapValidator.i18n, {
		base64: {
			'default': 'Пожалуйста, введите корректную строку base64'
		},
		between: {
			'default': 'Пожалуйста, введите значение от %s до %s',
			notInclusive: 'Пожалуйста, введите значение между %s и %s'
		},
		callback: {
			'default': 'Пожалуйста, введите корректное значение'
		},
		choice: {
			'default': 'Пожалуйста, введите корректное значение',
			less: 'Пожалуйста, выберите хотя бы %s опций',
			more: 'Пожалуйста, выберите не больше %s опций',
			between: 'Пожалуйста, выберите %s-%s опций'
		},
		color: {
			'default': 'Пожалуйста, введите правильный номер цвета'
		},
		creditCard: {
			'default': 'Пожалуйста, введите правильный номер кредитной карты'
		},
		cusip: {
			'default': 'Пожалуйста, введите правильный номер CUSIP'
		},
		cvv: {
			'default': 'Пожалуйста, введите правильный номер CVV'
		},
		date: {
			'default': 'Пожалуйста, введите правильную дату',
			min: 'Пожалуйста, введите дату после %s',
			max: 'Пожалуйста, введите дату перед %s',
			range: 'Пожалуйста, введите дату в диапазоне %s - %s'
		},
		different: {
			'default': 'Пожалуйста, введите другое значение'
		},
		digits: {
			'default': 'Пожалуйста, введите только цифры'
		},
		ean: {
			'default': 'Пожалуйста, введите правильный номер EAN'
		},
		emailAddress: {
			'default': 'Пожалуйста, введите правильный адрес эл. почты'
		},
		file: {
			'default': 'Пожалуйста, выберите файл'
		},
		greaterThan: {
			'default': 'Пожалуйста, введите значение большее или равное %s',
			notInclusive: 'Пожалуйста, введите значение больше %s'
		},
		grid: {
			'default': 'Пожалуйста, введите правильный номер GRId'
		},
		hex: {
			'default': 'Пожалуйста, введите правильное шестнадцатиричное число'
		},
		hexColor: {
			'default': 'Пожалуйста, введите правильный шестнадцатиричный номер цвета'
		},
		iban: {
			'default': 'Пожалуйста, введите правильный номер IBAN',
			countryNotSupported: 'Код страны %s не поддерживается',
			country: 'Пожалуйста, введите правильный номер IBAN в %s',
			countries: {
				AD: 'Андорре',
				AE: 'Объединённых Арабских Эмиратах',
				AL: 'Албании',
				AO: 'Анголе',
				AT: 'Австрии',
				AZ: 'Азербайджане',
				BA: 'Боснии и Герцеговине',
				BE: 'Бельгии',
				BF: 'Буркина-Фасо',
				BG: 'Болгарии',
				BH: 'Бахрейне',
				BI: 'Бурунди',
				BJ: 'Бенине',
				BR: 'Бразилии',
				CH: 'Швейцарии',
				CI: "Кот-д'Ивуаре",
				CM: 'Камеруне',
				CR: 'Коста-Рике',
				CV: 'Кабо-Верде',
				CY: 'Кипре',
				CZ: 'Чешская республика',
				DE: 'Германии',
				DK: 'Дании',
				DO: 'Доминикане Республика',
				DZ: 'Алжире',
				EE: 'Эстонии',
				ES: 'Испании',
				FI: 'Финляндии',
				FO: 'Фарерских островах',
				FR: 'Франции',
				GB: 'Великобритании',
				GE: 'Грузии',
				GI: 'Гибралтаре',
				GL: 'Гренландии',
				GR: 'Греции',
				GT: 'Гватемале',
				HR: 'Хорватии',
				HU: 'Венгрии',
				IE: 'Ирландии',
				IL: 'Израиле',
				IR: 'Иране',
				IS: 'Исландии',
				IT: 'Италии',
				JO: 'Иордании',
				KW: 'Кувейте',
				KZ: 'Казахстане',
				LB: 'Ливане',
				LI: 'Лихтенштейне',
				LT: 'Литве',
				LU: 'Люксембурге',
				LV: 'Латвии',
				MC: 'Монако',
				MD: 'Молдове',
				ME: 'Черногории',
				MG: 'Мадагаскаре',
				MK: 'Македонии',
				ML: 'Мали',
				MR: 'Мавритании',
				MT: 'Мальте',
				MU: 'Маврикии',
				MZ: 'Мозамбике',
				NL: 'Нидерландах',
				NO: 'Норвегии',
				PK: 'Пакистане',
				PL: 'Польше',
				PS: 'Палестине',
				PT: 'Португалии',
				QA: 'Катаре',
				RO: 'Румынии',
				RS: 'Сербии',
				SA: 'Саудовской Аравии',
				SE: 'Швеции',
				SI: 'Словении',
				SK: 'Словакии',
				SM: 'Сан-Марино',
				SN: 'Сенегале',
				TN: 'Тунисе',
				TR: 'Турции',
				VG: 'Британских Виргинских островах'
			}
		},
		id: {
			'default': 'Пожалуйста, введите правильный идентификационный номер',
			countryNotSupported: 'Код страны %s не поддерживается',
			country: 'Пожалуйста, введите правильный идентификационный номер в %s',
			countries: {
				BA: 'Боснии и Герцеговине',
				BG: 'Болгарии',
				BR: 'Бразилии',
				CH: 'Швейцарии',
				CL: 'Чили',
				CN: 'Китае',
				CZ: 'Чешская республика',
				DK: 'Дании',
				EE: 'Эстонии',
				ES: 'Испании',
				FI: 'Финляндии',
				HR: 'Хорватии',
				IE: 'Ирландии',
				IS: 'Исландии',
				LT: 'Литве',
				LV: 'Латвии',
				ME: 'Черногории',
				MK: 'Македонии',
				NL: 'Нидерландах',
				RO: 'Румынии',
				RS: 'Сербии',
				SE: 'Швеции',
				SI: 'Словении',
				SK: 'Словакии',
				SM: 'Сан-Марино',
				TH: 'Тайланде',
				ZA: 'ЮАР'
			}
		},
		identical: {
			'default': 'Пожалуйста, введите такое же значение'
		},
		imei: {
			'default': 'Пожалуйста, введите правильный номер IMEI'
		},
		imo: {
			'default': 'Пожалуйста, введите правильный номер IMO'
		},
		integer: {
			'default': 'Пожалуйста, введите правильное целое число'
		},
		ip: {
			'default': 'Пожалуйста, введите правильный IP-адрес',
			ipv4: 'Пожалуйста, введите правильный IPv4-адрес',
			ipv6: 'Пожалуйста, введите правильный IPv6-адрес'
		},
		isbn: {
			'default': 'Пожалуйста, введите правильный номер ISBN'
		},
		isin: {
			'default': 'Пожалуйста, введите правильный номер ISIN'
		},
		ismn: {
			'default': 'Пожалуйста, введите правильный номер ISMN'
		},
		issn: {
			'default': 'Пожалуйста, введите правильный номер ISSN'
		},
		lessThan: {
			'default': 'Пожалуйста, введите значение меньшее или равное %s',
			notInclusive: 'Пожалуйста, введите значение меньше %s'
		},
		mac: {
			'default': 'Пожалуйста, введите правильный MAC-адрес'
		},
		meid: {
			'default': 'Пожалуйста, введите правильный номер MEID'
		},
		notEmpty: {
			'default': 'Пожалуйста, введите значение'
		},
		numeric: {
			'default': 'Пожалуйста, введите корректное действительное число'
		},
		phone: {
			'default': 'Пожалуйста, введите правильный номер телефона',
			countryNotSupported: 'Код страны %s не поддерживается',
			country: 'Пожалуйста, введите правильный номер телефона в %s',
			countries: {
				BR: 'Бразилии',
				CN: 'Китае',
				CZ: 'Чешская республика',
				DE: 'Германии',
				DK: 'Дании',
				ES: 'Испании',
				FR: 'Франции',
				GB: 'Великобритании',
				MA: 'Марокко',
				PK: 'Пакистане',
				RO: 'Румынии',
				RU: 'России',
				SK: 'Словакии',
				TH: 'Тайланде',
				US: 'США',
				VE: 'Венесуэле'
			}
		},
		regexp: {
			'default': 'Пожалуйста, введите значение соответствующее шаблону'
		},
		remote: {
			'default': 'Пожалуйста, введите правильное значение'
		},
		rtn: {
			'default': 'Пожалуйста, введите правильный номер RTN'
		},
		sedol: {
			'default': 'Пожалуйста, введите правильный номер SEDOL'
		},
		siren: {
			'default': 'Пожалуйста, введите правильный номер SIREN'
		},
		siret: {
			'default': 'Пожалуйста, введите правильный номер SIRET'
		},
		step: {
			'default': 'Пожалуйста, введите правильный шаг %s'
		},
		stringCase: {
			'default': 'Пожалуйста, вводите только строчные буквы',
			upper: 'Пожалуйста, вводите только заглавные буквы'
		},
		stringLength: {
			'default': 'Пожалуйста, введите значение корректной длины',
			less: 'Пожалуйста, введите не больше %s символов',
			more: 'Пожалуйста, введите не меньше %s символов',
			between: 'Пожалуйста, введите строку длиной от %s до %s символов'
		},
		uri: {
			'default': 'Пожалуйста, введите правильный URI'
		},
		uuid: {
			'default': 'Пожалуйста, введите правильный номер UUID',
			version: 'Пожалуйста, введите правильный номер UUID версии %s'
		},
		vat: {
			'default': 'Пожалуйста, введите правильный номер ИНН',
			countryNotSupported: 'Код страны %s не поддерживается',
			country: 'Пожалуйста, введите правильный номер ИНН (VAT) в %s',
			countries: {
				AT: 'Австрии',
				BE: 'Бельгии',
				BG: 'Болгарии',
				BR: 'Бразилии',
				CH: 'Швейцарии',
				CY: 'Кипре',
				CZ: 'Чешская республика',
				DE: 'Германии',
				DK: 'Дании',
				EE: 'Эстонии',
				ES: 'Испании',
				FI: 'Финляндии',
				FR: 'Франции',
				GB: 'Великобритании',
				GR: 'Греции',
				EL: 'Греции',
				HU: 'Венгрии',
				HR: 'Хорватии',
				IE: 'Ирландии',
				IS: 'Исландии',
				IT: 'Италии',
				LT: 'Литве',
				LU: 'Люксембурге',
				LV: 'Латвии',
				MT: 'Мальте',
				NL: 'Нидерландах',
				NO: 'Норвегии',
				PL: 'Польше',
				PT: 'Португалии',
				RO: 'Румынии',
				RU: 'России',
				RS: 'Сербии',
				SE: 'Швеции',
				SI: 'Словении',
				SK: 'Словакии',
				VE: 'Венесуэле',
				ZA: 'ЮАР'
			}
		},
		vin: {
			'default': 'Пожалуйста, введите правильный номер VIN'
		},
		zipCode: {
			'default': 'Пожалуйста, введите правильный почтовый индекс',
			countryNotSupported: 'Код страны %s не поддерживается',
			country: 'Пожалуйста, введите правильный почтовый индекс в %s',
			countries: {
				AT: 'Австрии',
				BR: 'Бразилии',
				CA: 'Канаде',
				CH: 'Швейцарии',
				CZ: 'Чешская республика',
				DE: 'Германии',
				DK: 'Дании',
				FR: 'Франции',
				GB: 'Великобритании',
				IE: 'Ирландии',
				IT: 'Италии',
				MA: 'Марокко',
				NL: 'Нидерландах',
				PT: 'Португалии',
				RO: 'Румынии',
				RU: 'России',
				SE: 'Швеции',
				SG: 'Сингапуре',
				SK: 'Словакии',
				US: 'США'
			}
		}
	});
}(window.jQuery));
