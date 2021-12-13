$(() => {
    const url = ''
    let socket = io.connect(url)
    console.log(socket)

    //HTMLタグ(Element）を取得
    const message = $('#message')
    const chatList = $('#chatList')

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