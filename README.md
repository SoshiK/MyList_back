# My List

シンプルなリストを作るアプリです。

## Docker Composeでの起動方法

### 1. コンテナの起動

```bash
docker compose up -d
```

アプリ（ポート9000）とPostgreSQLが起動します。

### 2. マイグレーションの実行

```bash
docker compose exec app npm run migrate
```

### 3. 動作確認

```bash
curl http://localhost:9000/
```

### 4. 停止

```bash
docker compose down
```

データを削除する場合はボリュームも削除します。

```bash
docker compose down -v
```