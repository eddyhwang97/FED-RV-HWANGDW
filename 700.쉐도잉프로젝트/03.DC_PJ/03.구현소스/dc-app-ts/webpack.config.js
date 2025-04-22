const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // 진입점
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // 빌드 시 dist 폴더 정리
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // JS, JSX 파일 처리
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.tsx?$/, // TS, TSX 파일 처리
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.s?css$/, // CSS, SCSS 파일 처리
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // 확장자 처리
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML 템플릿 경로
    }),
  ],
  devServer: {
    static: './dist',
    port: 3000, // 개발 서버 포트
    open: true, // 브라우저 자동 열기
    hot: true, // HMR 활성화
  },
};