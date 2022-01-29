const path = require('path');


module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', //실서비스 : production
    devtool: 'eval',
    
    entry: {
        app: ['./client.jsx','WordRelay.jsx'],
        
    }, // 입력
    output:{
        path: path.join(__dirname, 'dist'), //현재폴더안의 dist를 지정
        filename: 'app.js'
    }, //출력
}
