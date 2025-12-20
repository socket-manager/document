# SOCKET-MANAGER Framework：高機能ソケット通信アプリ開発のための総合ガイド
※ **REST-API / RESTful-API サーバー開発にも正式対応**

SOCKET-MANAGER Frameworkは、WebSocketやTCP/UDPといったリアルタイム通信に加え、  
**REST-API / RESTful-API サーバー開発にも対応したオープンソースフレームワーク**です。  
フレームワーク本体には **ビルトインのステートマシン**が搭載されており、  
リアルタイム通信だけでなく、Chunked Transfer・SSE・Range送信など、  
REST-API で必要となる分割送信や状態遷移を伴う処理も効率的に実装できます。

---

## 【 概要 】
SOCKET-MANAGERは、リアルタイム通信を伴うサービス（チャット、ゲーム連携、通知システムなど）に加え、  
**REST-API / RESTful-API を含む Web API 開発**にも対応したフレームワークです。  
PSR-7準拠のHTTPメッセージ処理、イベントハンドラ、ステートマシンを統合し、  
高速・柔軟・拡張性の高いアプリケーション開発を支援します。

---

## 【 できること（特徴） 】
- WebSocket、TCP/UDPを利用したリアルタイム通信の実装テンプレート  
- **REST-API / RESTful-API サーバー開発環境（PSR-7準拠）**  
- **ステートマシンを利用したChunked Transfer / SSE / Range送信などの状態遷移処理**  
- 初期化クラス、UNITパラメータ、プロトコル/コマンドUNITなどの実装ガイド  
- マルチサーバー構成やスケールを見据えたアーキテクチャ解説  
- マインクラフトと連携するデモ環境、コマンド仕様、設定例  
- PHP向けの技術ノウハウ（参照渡し、PHPDoc など）

---

## 【 REST-API / RESTful-API 対応について 】  
SOCKET-MANAGER Framework は、REST-API / RESTful-API を構築するための  
**専用の開発環境（socket-manager/rest-api）** を提供しています。

- PSR-7準拠のリクエスト／レスポンス  
- イベントハンドラ型 / ステートマシン型の2種類の実装方式  
- Chunked Transfer、SSE、Range送信などの分割送信処理  
- IPC（サーバー間通信）を含む状態遷移処理  
- サンプルプロジェクトによる動作確認

特にステートマシン型は、通常のPHPアプリケーションでは困難な  
**確実な分割送信（Chunked Transfer）** や **SSEの再接続処理** を自然に実装できます。

REST-API 開発環境はこちら：  
https://github.com/socket-manager/rest-api/

---

## 【 ドキュメント（Reference） 】
フルドキュメントはこちら（ホストされた参照ページ）
- フレームワーク紹介: https://socket-manager.github.io/document/
- イベントハンドラ: https://socket-manager.github.io/document/event-handler.html
- アーキテクチャ: https://socket-manager.github.io/document/architecture.html
- マルチサーバー: https://socket-manager.github.io/document/multi-server.html
- WebSocket環境: https://socket-manager.github.io/document/websocket.html
- マインクラフト専用環境: https://socket-manager.github.io/document/minecraft-contents/

（その他のページはサイト内のメニューを参照してください）

---

## 【 導入（Quick Start） 】
1. 新規プロジェクトを展開:
   composer create-project socket-manager/new-project <展開先のディレクトリ名>
2. メイン処理クラスを作成:
   php worker craft:main MainForTest
3. サンプルプロジェクト（demo-project）を参考にローカルで動作確認

補足（WebSocketサーバー開発）
- WebSocketサーバーを開発する場合は、専用プロジェクトを利用することを推奨します。WebSocket用の開発テンプレートと設定例を用意しています。
  - プロジェクトを展開: composer create-project socket-manager/websocket-project <展開先のディレクトリ名>
  - ドキュメント（手順・設定）: https://socket-manager.github.io/document/websocket.html

詳しい手順はドキュメント内の以下のページを参照してください
- 新規開発環境: https://socket-manager.github.io/document/new-project.html
- メイン処理クラス: https://socket-manager.github.io/document/main.html

※ REST-API 開発の場合は以下を参照：  
https://github.com/socket-manager/rest-api/

---

## 【 実装ガイド（Implement） 】
- 初期化クラスの実装: https://socket-manager.github.io/document/init-class.html
- UNITパラメータ: https://socket-manager.github.io/document/unit-parameter.html
- プロトコルUNIT / コマンドUNIT: https://socket-manager.github.io/document/protocol-unit.html / https://socket-manager.github.io/document/command-unit.html
- メイン処理クラス: https://socket-manager.github.io/document/main.html

## 【 上級者向け（Advanced） 】
- スケーラビリティとマルチサーバー設計: https://socket-manager.github.io/document/multi-server.html
- TCP/UDP 詳細: https://socket-manager.github.io/document/tcp-and-udp.html
- Laravel連携: https://socket-manager.github.io/document/laravel.html
- システム設定ファイル: https://socket-manager.github.io/document/system-setting.html

---

## 【 関連リポジトリ 】
- library — SOCKET-MANAGER Framework のライブラリ  
  https://github.com/socket-manager/library/
- demo-project — マインクラフト連携のデモサーバー  
  https://github.com/socket-manager/demo-project/
- websocket-project — WebSocketサーバー開発環境  
  https://github.com/socket-manager/websocket-project/
- new-project — 新規開発テンプレート  
  https://github.com/socket-manager/new-project/
- contents-project — マインクラフト専用コンテンツ環境  
  https://github.com/socket-manager/contents-project/
- rest-api — REST-API / RESTful-API サーバー開発環境  
  https://github.com/socket-manager/rest-api/

---

## 【 Contact Us 】
バグ報告やご要望などは<a href="mailto:lib.tech.engineer@gmail.com">`こちら`</a>から受け付けております。

---

## 【 License 】
本ドキュメントは Creative Commons Attribution 4.0 International (CC BY 4.0) の下で提供されています。  
詳細: https://creativecommons.org/licenses/by/4.0/

