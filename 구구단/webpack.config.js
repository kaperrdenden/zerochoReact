const path = require('path');
const { webpack } = require('webpack');

module.exports ={
    mode: 'development',
    devtool: 'eval',
    resolve:{
        extensions: ['.jsx', '.js'],
    },
    //  이 위의 세개는 웹팩에 대한 도움정도.
    // entry , module, output이 메인 
    // 여기서 더 알아둘게 plugins. 이 플러그인은 바벨의 plugins가 아님
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
    plugins: [
        // new webpack.LoaderOptionsPlugin({debug: true}),
    ],
    output:{
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },

}