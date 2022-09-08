const {GlobalKeyboardListener} = require("node-global-key-listener");
const {get_vk_audio, save_vk_audio} = require("./MusicSite/vk.com");
const {ПОДДЕРЖКА_ВК, ID_GROUP, TOKEN, ТИП_СТАТУСА_ВК, ПОДДЕРЖКА_СПИТИФИ, second_btn, first_btn, one_btn} = require("./config");
const {get_track} = require("./MusicSite/spotify");
const v = new GlobalKeyboardListener();


const SysTray = require("systray2").default;
const os = require("os");

const itemExit = {
    title: 'Отключить',
    tooltip: 'Закрывает скрипт',
    checked: false,
    enabled: true,
    click: () => {
        process.exit()
    }
}

const systray = new SysTray({
    menu: {
        icon: os.platform() === 'win32' ? './logo_s.ico' : './logo_s.png',
        isTemplateIcon: os.platform() === 'darwin',
        title: 'By MrNagaron',
        tooltip: 'MusicFavorite',
        items: [
            itemExit
        ]
    },
    debug: false,
    copyDir: false
})

systray.onClick(action => {
    if (action.item.click != null) {
        action.item.click()
    }
})

systray.ready().then(() => {
    //console.log('Софт запущен в трейлере!')
}).catch(err => {
    console.log('Ошибка при запуска софта в трейлере! ' + err.message)
})

v.addListener(async function (e, down) {
    if (
        e.state === "DOWN" &&
        e.name === first_btn && (one_btn ||
        (down["LEFT "+second_btn] || down["RIGHT "+second_btn]))
    ) {
        console.log("Press")
        if (ПОДДЕРЖКА_ВК) {
            let vk_response = await get_vk_audio(TOKEN, ТИП_СТАТУСА_ВК, ID_GROUP)
            if (!vk_response || vk_response["response"] !== undefined) {
                console.log(`Ваш текущий статус вк: ${vk_response.text}`)
                if (vk_response["response"].audio !== undefined) {
                    let r = await save_vk_audio(TOKEN, vk_response["response"].audio.id, vk_response["response"].audio.owner_id)
                    if (r.response !== undefined && r.response > 0) {
                        console.log(`Музыка ${vk_response["response"].text} добавлена в избранное!`)
                    }
                }
            }else{
                console.log(vk_response)
            }
        }else if (ПОДДЕРЖКА_СПИТИФИ) {
            get_track()
        }
        return true;
    }
});