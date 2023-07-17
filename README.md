# miku-sns

## 環境準備

### nodeバージョンの指定

``` bash
$ node -v
v18.16.0
```

### ローカル開発環境立ち上げ

``` bash
$ npm i
（パッケージのインストール）
$ npm run dev
（ローカル環境が立ち上がる）
```

### ビルド

``` bash
$ npm run build
（distディレクトリにビルドされる）
```

- `echo-netlify-basic-auth` はNetlifyの自動デプロイでBasic認証を設定するためのスクリプトのため、通常のビルド時には実行不要