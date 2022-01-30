const path = require('path');

module.exports = {
    name:'wordrelay-setting',
    // 웹팩 설정의 이름. 이 웹팩설정이 어떤걸 의미하는 웹팩설정인지. 여기서는 끝말잇기대한 설정이라는 의미
    mode: 'development', //개발용의 모드라는 의미. 나중에 실서비스할 때는 production으로 바꾸면됨
    devtool: 'eval', //빠르게 하겠다는 의미
    
    resolve:{       
        extensions: ['.js', '.jsx'], //이렇게하면 아래의 entry 내부의 app 내부에서 client파일을
        //적을 때 내가 직접 js나 jsx확장자를 적지 않아도 웹팩이 찾아준다.
    },
  
    entry:{
        // app: ['./client.jsx', 'WordRelay.jsx'],  // 이 두개의 파일을 합친다는 의미 이게 오리지널이나
        app: ['./client.jsx'], //이렇게만 적어도 실행됨 그 이유는 이미 client.jsx파일에서 WordRelay.jsx를
        //불러오고 있기 때문이다.

    }, //입력                client.jsx와 webpack.config.js를 입력해서 
    module: {// entry에 있는 파일을 읽고 거기에 있는 module을 적용한후 출력한다는 문맥을 위해서
                // entry와 output의 사이에 존재
            rules: [{
                test: /\.jsx?/, 
                loader:'babel-loader',
                options:{
                    presets: ['@babel/preset-env', '@babel/preset-react']
                },
            }],
        
        },
        
    output: {
        path: path.join(__dirname, 'dist'),//__dirname: 현재의 폴더경로 즉 지금으로써는 webpackself폴더
                                        //webpackself 폴더 아래에 dist폴더를 만든다는 것
        filename: 'app.js'           //dist아래에 app.js를 생성함
    }, //출력                app.js를 만든다
    // entry와 output 여기가 젤 중요
};