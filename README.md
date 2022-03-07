# 市区町村・選挙区 地形データ
日本の行政区域（市区町村）・選挙区の地形ファイルをTopoJSONとGeoJSONで公開します。


## 背景

- 地図を用いたデータの可視化は、報道やデータ分析において最もポピュラーな表現の一つです。特定のデータに関する地理的な傾向を示すことや、ウェブサイトやアプリなどでは特定の地域の情報をより詳しく見るためのユーザーインターフェースなどに活用されています。

- このように地図データを可視化するためには、選挙区や行政区域など特定の範囲（地形）を示すデータが不可欠です。これらの地形データを用いることで、選挙区ごとの開票結果表示や市区町村別の統計データの可視化など、さまざまなデジタル表現が可能になります。

- これらの地形データは学術機関や行政機関より公開されている一方で、提供されるデータのファイルをそのままウェブサイトやアプリで使うことが難しいケースが多々あります。データの容量が大き過ぎる、ファイルの形式が異なる、飛び地など地形データに特有の調整が必要になる、など各種の加工を行わなければならないためです。

- そこでスマートニュース メディア研究所では、地形データを加工し、GitHubで誰でも無償で使えるオープンデータとして公開します。データを軽量化し、各種の調整を行ったファイルを提供することで、利用者が簡便に、地形データをウェブサイトやアプリで活用できるようになります。

- スマートニュース メディア研究所は、衆議院議員総選挙が近づく中で、289の衆議院小選挙区と、全国1909の市区町村（政令指定都市の行政区や北方領土などを含む）の地形データを無償で提供し、報道機関や個人開発者の方が、データ可視化の報道や分析に取り組むことを支援したいと考えています。



## 使い方

- データをダウンロードして各種のデータ可視化ツール（たとえば[Flourish](https://flourish.studio/)など）に使用できます。
- ウェブサイト（HTML/CSS/JavaScript）での表示例は、[表示サンプルページ](https://smartnews-smri.github.io/japan-topography/viewer/)に掲載しています。



## データの仕様

### 各ディレクトリ名の意味
- constituency：選挙区
- municipality：市区町村
- geojson：GeoJSONファイルを格納
- topojson：TopoJSONファイルを格納
- s0010：簡素化1％
- s0001：簡素化0.1％（全国版ファイルのみ）

### ファイルを格納するフォルダ
- [data / constituency / geojson / s0010](https://github.com/smartnews-smri/japan-topography/tree/main/data/constituency/geojson/s0010)：選挙区のGeoJSONファイル（簡素化1％）
- [data / constituency / geojson / s0001](https://github.com/smartnews-smri/japan-topography/tree/main/data/constituency/geojson/s0001)：選挙区のGeoJSONファイル（簡素化0.1％・全国のみ）
- [data / constituency / topojson / s0010](https://github.com/smartnews-smri/japan-topography/tree/main/data/constituency/topojson/s0010)：選挙区のTopoJSONファイル（簡素化1％）
- [data / constituency / topojson / s0001](https://github.com/smartnews-smri/japan-topography/tree/main/data/constituency/topojson/s0001)：選挙区のTopoJSONファイル（簡素化0.1％・全国のみ）
- [data / municipality / geojson / s0010](https://github.com/smartnews-smri/japan-topography/tree/main/data/municipality/geojson/s0010)：市区町村のGeoJSONファイル（簡素化1％）
- [data / municipality / geojson / s0001](https://github.com/smartnews-smri/japan-topography/tree/main/data/municipality/geojson/s0001)：市区町村のGeoJSONファイル（簡素化0.1％・全国のみ）
- [data / municipality / topojson / s0010](https://github.com/smartnews-smri/japan-topography/tree/main/data/municipality/topojson/s0010)：市区町村のTopoJSONファイル（簡素化1％）
- [data / municipality / topojson / s0001](https://github.com/smartnews-smri/japan-topography/tree/main/data/municipality/topojson/s0001)：市区町村のTopoJSONファイル（簡素化0.1％・全国のみ）

### その他の仕様
- ファイル名は元データに従う。都道府県コードが入っているものが都道府県別、そうでないものが全国版。
  - N03-21_**13**_210101.json：東京都の市区町村ファイル
  - N03-21_210101.json：全国の市区町村ファイル
  - senkyoku289polygon_**13**.json：東京都の選挙区ファイル
  - senkyoku289polygon.json：全国の選挙区ファイル
- Objectsのkeyはファイル名と同じ

### 政令指定都市の区を結合した全国版ファイルを追加（2021.11.30）
- 統計データの中には政令指定都市（たとえば神奈川県横浜市など）をひとつの単位としてデータを扱うものがあります。
- 元のデータでは「区」単位（たとえば神奈川県横浜市緑区など）までを区分していましたが、これらをひとつにまとめた形式の全国版ファイルを追加しました。
- ファイル末尾に「designated_city」がついたファイルが該当しますので、統計データの種類によって使い分けてご利用ください。

### 都道府県別のファイルを追加（2022.03.07）
- 市区町村・選挙区に加えて、都道府県別に地域をわけたファイルを追加しました。
  - [GeoJSON / 簡素化1％](https://raw.githubusercontent.com/smartnews-smri/japan-topography/main/data/municipality/geojson/s0010/prefectures.json)
  - [GeoJSON / 簡素化0.1％](https://raw.githubusercontent.com/smartnews-smri/japan-topography/main/data/municipality/geojson/s0001/prefectures.json)
  - [TopoJSON / 簡素化1％](https://raw.githubusercontent.com/smartnews-smri/japan-topography/main/data/municipality/topojson/s0010/prefectures.json)
  - [TopoJSON / 簡素化0.1％](https://raw.githubusercontent.com/smartnews-smri/japan-topography/main/data/municipality/topojson/s0001/prefectures.json)
- 市区町村ファイル（国土交通省・国土数値情報）を加工したものですので、クレジット等の扱いは市区町村ファイルと同様です。
- [表示サンプルページ](https://smartnews-smri.github.io/japan-topography/viewer/)でもセレクトボックスに「都道府県」を追加しました。
  - ページから直接ダウンロードもできるので、ご活用ください。

## 加工内容

- 境界線を1％および0.1％に簡素化
- 飛び地はクリックですべて選択されるように、属性でグループ化
  - 同じ市区町村 / 選挙区で飛び地や離島を含む場合、どの地域を選択してもすべての地域がハイライトされる
- 地形の属性（都道府県コード、選挙区コードなど）は元データに従う



## データソース

加工の基となるデータは、以下より取得しています。

- 市区町村データ：国土交通省 国土数値情報（行政区域） https://nlftp.mlit.go.jp/ksj/ （2021年9月28日取得）
- 選挙区データ：東京大学空間情報科学研究センター 西沢明 客員研究員 https://home.csis.u-tokyo.ac.jp/~nishizawa/senkyoku/ （2021年9月28日取得）



## サンプルページ

- https://smartnews-smri.github.io/japan-topography/viewer/
- ウェブサイトでの使用例を簡易的に示すサンプルページです。
- ファイルの選択と表示、個別のファイルダウンロードなどが可能です。



## クレジット

- データを使用する際に、加工者としてスマートニュースおよびスマートニュース メディア研究所の名前をクレジットする必要はありません。
- 商用・非商用にかかわらず、無償でお使いいただけます。
- ただし市区町村データは、国土交通省の指示するクレジット記載が必要です。
  - その他、詳細は各データソースの利用規約を参照してください。


## 利用事例ご報告のお願い
- 利用実態を把握するため、[市区町村・選挙区地形データ 利用事例ご報告フォーム](https://forms.gle/sojrPte7PLjpwjm67)までご報告をお願いしております。
- データの利用にあたって回答は必須ではありませんが、ご協力いただければ幸いです。
- なお、ご報告に対して弊社から返信や許可・不許可を行うことは原則としてありません。
