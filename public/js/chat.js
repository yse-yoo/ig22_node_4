$(() => {
    const url = ''
    let socket = io.connect(url)
    console.log(socket)

    //HTMLタグ(Element）を取得
    const message = $('#message')
    const chatList = $('#chatList')

    //受信（じゅしん）処理（しょり）
    socket.on('message', (data) => {
        console.log(data)
        let chatElement = $('<p>').append(data.message)
        chatList.prepend(chatElement)
    })

    //ボタンクリック
    $('#send').on('click', () => {
        if (!message.val()) return
        //送信処理
        socket.emit('message', {
            message: message.val()
        })
        //メッセージクリア
        message.val('')
    })
})