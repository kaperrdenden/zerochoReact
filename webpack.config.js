const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', //실서비스 : production
    devtool: 'eval',
    resolve: {
        extensions: ['.js','jsx']
    },

    entry: {
        app: ['./client.jsx'],

    }, // 입력
    module:{
        rules:[{
            test: /\.jsx?/, 
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
                plugins:[
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                
                ]
            },
        }],
    },
    plugins:[
       new RefreshWebpackPlugin()
    ],
    output:{
        path: path.join(__dirname, 'dist'), //현재폴더안의 dist를 지정
        filename: 'app.js',
        publicPath: '/dist/',
    }, //출력
    devServer: {
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true
    }
}
