// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = true;

import '../scss/style.scss';

import * as flsFunctions from './files/functions.js';
import * as addClass from './utils/addClass.js';

addClass.addWebp();

// .touch for <html> on mobile browser
// addClass.addTouch();

/* Добавление loaded для HTML после полной загрузки страницы */
// addClass.addLoaded();

/* Модуль для работы с меню (Бургер) */
// flsFunctions.menuInit();
/* Учет плавающей панели на мобильных устройствах при 100vh */
// flsFunctions.fullVHfix();

/*
Модуль работы со спойлерами
*/
// flsFunctions.spollers();

/*
Модуль работы с табами
*/
// flsFunctions.tabs();

/*
Модуль "показать еще"
*/
// flsFunctions.showMore();

/*
Попапы
*/
// import './libs/popup.js'

/*
Модуль параллакса мышью
*/
// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Работа с формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
// import * as flsForms from "./files/forms/forms.js";

/* Работа с полями формы */
// flsForms.formFieldsInit({ viewPass: false });

/* Oтправка формы */
// flsForms.formSubmit();

/* Модуль формы "колличество" */
// flsForms.formQuantity();

/* Модуль звездного рейтинга */
// flsForms.formRating();

/* Модуль работы с select. */
// import './libs/select.js'

/* (В работе) Модуль работы с масками.*/
/*
Подключение и настройка выполняется в файле js/files/forms/inputmask.js
Документация плагина: https://github.com/RobinHerbots/inputmask
*/
// import "./files/forms/inputmask.js";

/* Модуль работы с подсказками (tippy) */
/*
Подключение плагина Tippy.js и настройка выполняется в файле js/files/tippy.js
Документация плагина: https://atomiks.github.io/tippyjs/
*/
// import "./files/tippy.js";

// ========================================================================================================================================================================================================================================================
// Работа со слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Настройка подключения плагина слайдера Swiper и новых слайдеров выполняется в файле js/files/sliders.js
Документация плагина: https://swiperjs.com/
*/
// import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Модули работы с прокруткой страницы ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Изменение дизайна скроллбара
Документация по работе в шаблоне: В HTML добавляем к блоку атрибут data-simplebar
Документация плагина: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
*/
// import './files/scroll/simplebar.js';

// Ленивая (отложенная) загрузка картинок
// Документация плагина: https://github.com/verlok/vanilla-lazyload
// import './files/scroll/lazyload.js';

// Наблюдатель за объектами c атрибутом data-watch
// import './libs/watcher.js'

// Функции работы скроллом
// import * as flsScroll from "./files/scroll/scroll.js";

// Плавная навигация по странице
// flsScroll.pageNavigation();

// Функционал добавления классов к хедеру при прокрутке
// flsScroll.headerScroll();

// Функционал липкого блока
// flsScroll.stickyBlock();

// ========================================================================================================================================================================================================================================================
// Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документация плагина: https://www.lightgalleryjs.com/docs/
*/
// import "./files/gallery.js";

// ========================================================================================================================================================================================================================================================
// Прочие плагины ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Динамический адаптив */
// import "./libs/dynamic_adapt.js";

/* Форматирование чисел */
// import './libs/wNumb.min.js';

// ========================================================================================================================================================================================================================================================
// Прочее ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Подключаем файлы со своим кодом */
import './files/script.js';
// ============================================================================================================================================================================================================================================
