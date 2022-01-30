const path = require('path');

module.exports ={
    mode: 'development',
    devtool: 'eval',
    resolve:{
        extensions: ['.jsx', '.js'],
    },
    entry:{
        app: './client',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets:[
                    ['@babel/preset-env',{
                        targets:{
                            browsers:['> 5% in KR', 'last 2 chrome versions'],
                            // 오직 크롬의 마지막, 마지막-1 버전만 호환되게
                        },
                        // preset env가 자동으로 옛 브라우저들을 지원해주는데
                        //좀더 구체적으로 써줄 수가 있다.
                        debug: true, // 개발용에서는 이거 사용
                    }],
                    '@babel/preset-react'],
                plugins: [],
            }
        }],
    },
    output:{
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },

}