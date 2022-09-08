/**
 *  НАЗНАЧЕНИЕ КЛАВИШ
 */

let first_btn = "0", // A, B, C, ..., Z
                        // 1, 2, 3, ..., 0
                        // PAGE UP, PAGE DOWN, HOME, END
                        // F1, F2, ..., F24
                        // NUMPAD 0, NUMPAD 1, NUMPAD 2, NUMPAD 3, NUMPAD 4, NUMPAD 5, NUMPAD 6, NUMPAD 7, NUMPAD 8, NUMPAD 9
                        // NUMPAD EQUALS, NUMPAD DIVIDE, NUMPAD MULTIPLY, NUMPAD MINUS, NUMPAD PLUS, NUMPAD RETURN, NUMPAD DOT


    second_btn = "",// CTRL, ALT, SHIFT

    one_btn = true; // Активация только по одной кнопке без CTRL, ALT, SHIFT. Тогда переменная second_btn должна быть пуста

/**
 *  НАСТРОЙКИ ДЛЯ ВК
 *  Получить токен можно тут
 *  https://oauth.vk.com/authorize?client_id=6121396&scope=1073737727&redirect_uri=https://oauth.vk.com/blank.html&display=page&response_type=token&revoke=1
 */

const ПОДДЕРЖКА_ВК = false; // ВКЛЮЧИТЬ ПОДДЕРЖКУ ВК
const ТИП_СТАТУСА_ВК = false; // true - на личной странице вк | false - в группе вк
const TOKEN = ""; // Ваш токен от вк
const ID_GROUP = 197872530; // ID группы если ТИП_СТАТУСА_ВК = false без минуса

/**
 *  НАСТРОЙКИ ДЛЯ SPOTIFY
 */

const ПОДДЕРЖКА_СПИТИФИ = true; // ВКЛЮЧИТЬ ПОДДЕРЖКУ СПОТИФИ






// Для получения этих данных вам необходимо создать приложение по ссылке https://developer.spotify.com/dashboard/applications/
// После вы получите эти данные
const   clientId        = '9c7d632bc64f47e48717164ff7f0ce3c',
        clientSecret    = '6525b1f5ea86435ea4620db837080fda'


module.exports = {ПОДДЕРЖКА_ВК, ТИП_СТАТУСА_ВК, TOKEN, ID_GROUP, ПОДДЕРЖКА_СПИТИФИ, clientId, clientSecret, one_btn, second_btn, first_btn}
