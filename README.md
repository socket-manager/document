# SOCKET-MANAGER Framework：高機能ソケット通信アプリ開発のための総合ガイド
※ **REST-API / RESTful-API サーバー開発にも正式対応**  
※ **IPC（プロセス間通信）・カスタムコマンド作成機能にも対応**

SOCKET-MANAGER Frameworkは、WebSocketやTCP/UDPといったリアルタイム通信に加え、  
**REST-API / RESTful-API サーバー開発にも対応したオープンソースフレームワーク**です。  

本フレームワークは、90,000 接続を 30 秒で処理する純粋性能に加え、  
CPU割当なし・128MBで 100,000 同時接続を維持する実運用スケール性能も備えており、  
高スループット・低レイテンシ・軽量性・堅牢性を同時に満たす通信基盤です。

フレームワーク本体には **ビルトインのステートマシン**が搭載されており、  
リアルタイム通信だけでなく、Chunked Transfer・SSE・Range送信など、  
REST-API で必要となる分割送信や状態遷移を伴う処理も効率的に実装できます。

さらに、**IPC（プロセス間通信）** や **カスタムコマンド作成機能** により、  
マルチサーバー構成やプロジェクト固有のスキャフォールディングにも柔軟に対応できます。

---

SOCKET-MANAGER Framework には、独自 IO ドライバと同期ランタイムを組み合わせた
**ハイパフォーマンスモード（High Performance Mode）** が搭載されています。
WebSocket 接続を 90,000 ・30 秒で処理し、10,000 接続維持でも 128MB 内に収まる
軽量メモリフットプリントを実現。Windows / Linux の両環境で同一コードが動作し、
リアルタイム通信に必要な高性能と堅牢性を PHP で両立します。

詳細はこちら：  
https://socket-manager.github.io/document/high-performance.html

---

## 【 概要 】
SOCKET-MANAGERは、リアルタイム通信を伴うサービス（チャット、ゲーム連携、通知システムなど）に加え、  
**REST-API / RESTful-API を含む Web API 開発**にも対応したフレームワークです。  
また、理想条件と実運用条件の両方で性能検証を行っており、高負荷環境でも破綻しない堅牢性を備えています。  
PSR-7準拠のHTTPメッセージ処理、イベントハンドラ、ステートマシン、IPC（プロセス間通信）を統合し、  
高速・柔軟・拡張性の高いアプリケーション開発を支援します。

---

## 【 できること（特徴） 】
- WebSocket、TCP/UDPを利用したリアルタイム通信の実装テンプレート  
- **ハイパフォーマンスモードによる大量接続・低レイテンシ処理（90,000 接続 / 30 秒）**
- 実運用スケールベンチマークによる **100,000 同時接続・0.55ms・18,000〜20,000 rps 相当の実効性能**
- **REST-API / RESTful-API サーバー開発環境（PSR-7準拠）**  
- **ステートマシンを利用したChunked Transfer / SSE / Range送信などの状態遷移処理**  
- **IPC（プロセス間通信）によるマルチサーバー連携・プロセス間メッセージング**  
- **カスタムコマンド作成機能によるプロジェクト固有のスキャフォールディング**  
- 初期化クラス、UNITパラメータ、プロトコル/コマンドUNITなどの実装ガイド  
- マルチサーバー構成やスケールを見据えたアーキテクチャ解説  
- マインクラフトと連携するデモ環境、コマンド仕様、設定例  
- PHP向けの技術ノウハウ（参照渡し、PHPDoc など）

---

## 【 ハイパフォーマンスモードについて 】

SOCKET-MANAGER Framework には、独自 IO ドライバと同期ランタイムを組み合わせた  
**ハイパフォーマンスモード（High Performance Mode）** が搭載されています。

- WebSocket 接続 **90,000 を 30 秒で処理**
- 単一スレッド・単一プロセスでの安定動作（スレッドプールなし）
- 10,000 接続維持でも **128MB 内に収まる軽量メモリフットプリント**
- Windows / Linux の両環境で同一コードが動作
- FFI + 独自拡張 / select 互換モードの自動切替

リアルタイム通信に必要な **高性能・堅牢性・再現性** を PHP で実現するための  
フレームワーク内蔵モードです。

詳細はこちら：  
https://socket-manager.github.io/document/high-performance.html

---

## 【 実運用スケールベンチマークについて 】

SOCKET-MANAGER Framework では、CPU割当なし（プロセスの CPU ピニングなし）・
メモリ 128MB という実運用に近い条件でのスケール特性も公開しています。

- WebSocket **100,000 同時接続**を維持
- ラウンド間隔なしの連続バーストでも **平均 0.55ms の低レイテンシ**
- **18,000〜20,000 rps 相当の実効スループット**
  （10,000 接続あたり 1,800〜2,000 rps）
- 全テストで **エラー発生ゼロ**
- メモリは PHP 標準設定の **128MB のまま膨張なし**

純粋性能だけでなく、実運用に近い条件でも破綻しない
**堅牢性・再現性・軽量性** を備えていることを示すベンチマークです。

詳細はこちら：  
https://socket-manager.github.io/document/scale-test.html

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

REST-API 開発環境の詳細なドキュメントはこちら：  
https://socket-manager.github.io/document/rest-api/

---

## 【 IPC（プロセス間通信）について 】
SOCKET-MANAGER Framework は、TCP/UDP/WebSocket などの通信方式を  
**同一プロセス内で共存させるアーキテクチャ**を採用しており、  
IPC を特別扱いせず自然に実現できます。

- TCP / UDP / WebSocket を組み合わせたプロセス間通信  
- Webブラウザ同士の宛先指定メッセージング  
- Webブラウザ ⇔ Minecraft 統合版（Bedrock Edition）の双方向通信  
- マルチサーバー構成との親和性  
- Launcher による統合管理（CUEI/O の “/O” に該当）

詳細はこちら：  
https://socket-manager.github.io/document/ipc.html

---

## 【 カスタムコマンド作成機能 】
SOCKET-MANAGER Framework では、ビルトインコマンドに加えて  
**プロジェクト固有の CLI コマンドを自由に追加できる** 拡張機能を提供しています。

- command.php / params.php / template.php.tpl による簡易定義  
- プロジェクト固有のスキャフォールディング  
- REST API / IPC / ステートマシンユニットの雛形生成  
- チーム開発での共通タスク自動化

詳細はこちら：  
https://socket-manager.github.io/document/custom-command.html

---

## 【 ドキュメント（Reference） 】
フルドキュメントはこちら（ホストされた参照ページ）

- フレームワーク紹介: https://socket-manager.github.io/document/
- 設計コンセプト: https://socket-manager.github.io/document/concept.html
- アーキテクチャ: https://socket-manager.github.io/document/architecture.html
- 通信抽象化（Communication）: https://socket-manager.github.io/document/communication.html
- 共有基盤（Union）: https://socket-manager.github.io/document/union.html
- イベント駆動アーキテクチャ（Event）: https://socket-manager.github.io/document/event.html
- IPC（プロセス間通信 / Inter-Process Communication）: https://socket-manager.github.io/document/ipc.html
- カスタムコマンド作成機能: https://socket-manager.github.io/document/custom-command.html
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
- 初期化クラス: https://socket-manager.github.io/document/init-class.html
- UNITパラメータ: https://socket-manager.github.io/document/unit-parameter.html
- プロトコルUNIT / コマンドUNIT:  
  https://socket-manager.github.io/document/protocol-unit.html  
  https://socket-manager.github.io/document/command-unit.html
- メイン処理クラス: https://socket-manager.github.io/document/main.html

---

## 【 上級者向け（Advanced） 】
- 設計コンセプト: https://socket-manager.github.io/document/concept.html
- アーキテクチャ: https://socket-manager.github.io/document/architecture.html
- 通信抽象化: https://socket-manager.github.io/document/communication.html
- 共有基盤: https://socket-manager.github.io/document/union.html
- イベント駆動アーキテクチャ: https://socket-manager.github.io/document/event.html
- IPC（プロセス間通信）: https://socket-manager.github.io/document/ipc.html
- スケーラビリティとマルチサーバー設計: https://socket-manager.github.io/document/multi-server.html
- TCP/UDP 詳細: https://socket-manager.github.io/document/tcp-and-udp.html
- Laravel連携: https://socket-manager.github.io/document/laravel.html
- システム設定ファイル: https://socket-manager.github.io/document/system-setting.html
- カスタムコマンド作成機能: https://socket-manager.github.io/document/custom-command.html
- ハイパフォーマンスモード（大量接続・高速 IO ドライバ）: https://socket-manager.github.io/document/high-performance.html
- 実運用スケールベンチマーク（CPU割当なし・10万同時接続）: https://socket-manager.github.io/document/scale-test.html
- 技術版 ITIL としての CUEI/O: https://socket-manager.github.io/document/itil.html

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
