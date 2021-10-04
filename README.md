# japan-topography
日本の行政区画（市区町村）・選挙区の地形ファイルをTopoJSONとGeoJSONで公開します。



## 背景

- 地図を用いたデータの可視化は、報道やデータ分析において最もポピュラーな表現の一つです。特定のデータに関する地理的な傾向を示すことや、ウェブサイトやアプリなどでは特定の地域の情報をより詳しく見るためのユーザーインターフェースなどに活用されています。

- このように地図データを可視化するためには、選挙区や行政区域など特定の範囲（地形）を示すデータが不可欠です。これらの地形データを用いることで、選挙区ごとの開票結果表示や市区町村別の統計データの可視化など、さまざまなデジタル表現が可能になります。

- これらの地形データは学術機関や行政機関より公開されている一方で、提供されるデータのファイルをそのままウェブサイトやアプリで使うことが難しいケースが多々あります。データの容量が大き過ぎる、ファイルの形式が異なる、飛び地など地形データに特有の調整が必要になる、など各種の加工を行わなければならないためです。

- そこでスマートニュース メディア研究所では、地形データを加工し、GitHubで誰でも無償で使えるオープンデータとして公開します。データを軽量化し、各種の調整を行ったファイルを提供することで、利用者が簡便に、地形データをウェブサイトやアプリで活用できるようになります。

- スマートニュース メディア研究所は、衆議院議員総選挙が近づく中で、289の衆議院小選挙区と、全国1909の市区町村（政令指定都市の行政区や北方領土などを含む）の地形データを無償で提供し、報道機関や個人開発者の方が、データ可視化の報道や分析に取り組むことを支援したいと考えています。


## データの仕様

- 各ディレクトリ名の意味は以下の通り。
  - constituency：選挙区
  - municipality：市区町村
  - s0010：簡素化1％
  - s0001：簡素化0.1％
  - geojson：GeoJSONファイルを格納
  - topojson：TopoJSONファイルを格納

- ファイルを格納するフォルダは以下の通り。
  - (data / constituency / s0010 / geojson)[https://github.com/smartnews-smri/japan-topography/tree/main/data/constituency/geojson/s0010]：市区町村のGeoJSONファイル（簡素化1％）
  - (data / constituency / s0001 / geojson)[https://github.com/smartnews-smri/japan-topography/tree/main/data/constituency/geojson/s0001]：市区町村のGeoJSONファイル（簡素化0.1％）
  - (data / constituency / s0010 / topojson)[https://github.com/smartnews-smri/japan-topography/tree/main/data/constituency/topojson/s0010]：市区町村のTopoJSONファイル（簡素化1％）
  - (data / constituency / s0001 / topojson)[https://github.com/smartnews-smri/japan-topography/tree/main/data/constituency/topojson/s0001]：市区町村のTopoJSONファイル（簡素化0.1％）
  - (data / municipality / s0010 / geojson)[https://github.com/smartnews-smri/japan-topography/tree/main/data/municipality/geojson/s0010]：選挙区のGeoJSONファイル（簡素化1％）
  - (data / municipality / s0001 / geojson)[https://github.com/smartnews-smri/japan-topography/tree/main/data/municipality/geojson/s0001]：選挙区のGeoJSONファイル（簡素化0.1％）
  - (data / municipality / s0010 / topojson)[https://github.com/smartnews-smri/japan-topography/tree/main/data/municipality/topojson/s0010]：選挙区のTopoJSONファイル（簡素化1％）
  - (data / municipality / s0001 / topojson)[https://github.com/smartnews-smri/japan-topography/tree/main/data/municipality/topojson/s0001]：選挙区のTopoJSONファイル（簡素化0.1％）

- その他
  - Objectsのkeyはファイル名と同じ

## 加工内容

- 境界線を1％および0.1％に簡素化
- 飛び地はクリックですべて選択されるように、属性でグループ化
  - 同じ市区町村 / 選挙区で飛び地や離島を含む場合、どの地域を選択してもすべての地域がハイライトされる
- 地形の属性（都道府県コード、選挙区コードなど）は元データに従う

## 使い方

- データをダウンロードして各種のデータ可視化ツール（たとえば(Flourish)[https://flourish.studio/]など）に使用できます。
- ウェブサイト（HTML/CSS/JavaScript）で表示する場合、(表示サンプルページ)[https://smartnews-smri.github.io/japan-topography/viewer/]のソースコードを参照してください。




## データソース

加工の基となるデータは、以下より取得しています。

- 市区町村データ：国土交通省 国土数値情報
https://nlftp.mlit.go.jp/ksj/

- 選挙区データ：東京大学空間情報科学研究センター
https://home.csis.u-tokyo.ac.jp/~nishizawa/senkyoku/



## サンプルページ

- あわせて開発者への支援として、ウェブサイトでの使用例を簡潔に示すサンプルページを公開します。これにより、可視化や他の統計データとの組み合わせを促進することを意図しております。

スマートニュース メディア研究所 - 地形データ サンプルページ
https://smartnews-smri.github.io/japan-topography/viewer/



## クレジット

- データを使用する際に、加工者としてスマートニュースおよびスマートニュース メディア研究所の名前をクレジットする必要はありません。
- 商用・非商用にかかわらず、
- ただし市区町村データは、国土交通省の指示するクレジット記載が必要です。
  - その他、詳細は各データソースの利用規約を参照してください。
