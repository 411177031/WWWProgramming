# 🐾 Paw War：貓派狗派戰爭觀測站

## 專案簡介

你是貓派還是狗派？本專題以「貓狗熱度戰爭」為主題，透過 Google Trends 的搜尋趨勢資料，從**地域**、**時間**與**語義**三個面向出發，分析不同地區人們對「貓」與「狗」的喜好程度。

除了資料視覺化外，也加入**投票互動功能**，讓使用者能在趣味中表達立場、探索資料。

---

##  本地端執行方式（推薦）

1. 將整個專案資料夾下載或 clone 至本地端。
2. 安裝並啟動 [XAMPP](https://www.apachefriends.org/index.html)，啟動 Apache 和 MySQL。 
3. 匯入提供的 catdog_user.sql：
   * 點左側「新增資料庫」→ 名稱輸入 catdog_user → 建立
   * 點選 catdog_user 資料庫 → 點「匯入」→ 上傳 .sql 檔 → 執行
4. 點 phpMyAdmin 上方「SQL」，貼上以下語法建立帳號：
   ```
   CREATE USER 'catdog_user'@'localhost' IDENTIFIED BY 'catdogcatdog';
   GRANT ALL PRIVILEGES ON catdog_user.* TO 'catdog_user'@'localhost';
   FLUSH PRIVILEGES;
   ```
5. 將專案資料夾放入 `htdocs` 資料夾中。
6. 在瀏覽器開啟以下網址：
   ```
   http://localhost/PawWar/index.html
   ```
7. 即可進入首頁，瀏覽互動式資料視覺化內容。

---

##  各頁面入口

| 功能         | 檔案名稱             | 說明                    |
| ---------- | ---------------- | --------------------- |
|  首頁      | `index.html`     | 包含貓狗投票、圖表切換介面         |
|  全球熱度地圖  | `map.html`       | 使用 Flourish iframe 呈現 |
|  熱度趨勢折線圖 | `trend.html`     | 使用 Flourish iframe 呈現搜尋趨勢    |
|  關鍵字文字雲  | `wordcloud.html` | 呈現關鍵字分析   |

---

##  專案檔案架構

```
📁 專案根目錄
├── index.html               # 首頁（投票介面與圖表切換）
├── script.js                # 首頁互動邏輯（投票與切換功能）
├── style.css                # 首頁樣式
├── vote.php                 # 處理投票資料（後端）
├── get_votes.php            # 提供目前票數資料（後端）
├── catdog_user.sql          # 儲存票數資料（資料庫）
│
├── map.html                 # 全球熱度地圖頁面
├── map.js                   # 地圖互動邏輯
├── map.css                  # 地圖頁面樣式
│
├── trend.html               # 時間趨勢折線圖頁面
├── trend.js                 # 趨勢圖互動邏輯
├── trend.css                # 趨勢圖樣式
│
├── wordcloud.html           # 關鍵字文字雲頁面
├── wordcloud.js             # 文字雲互動邏輯
└── wordcloud.css            # 文字雲樣式
```

---

## 專案需求與功能

###  全球熱度地圖（已完成）

* 呈現各國對「Cat」與「Dog」搜尋熱度的分布
* 使用 Google Trends 匯出資料製作互動式地圖

###  時間趨勢折線圖（已完成）

* 比較「Cat」與「Dog」在不同時間點的搜尋熱度
* 可顯示特定國家趨勢

###  關鍵字文字雲（已完成）

* 分析搜尋關鍵字（如 cat meme、dog training 等）並以文字雲顯示
* 呈現語義層次上的熱度焦點

###  投票系統（已完成）

* 使用者可投票支持貓派或狗派
* 票數即時統計顯示

###  圖表切換與展示（已完成）

* 單一頁面整合所有圖表
* 支援按鈕點擊切換展示圖表

---

## 🛠️ 使用技術與工具

| 技術                      | 用途          |
| ----------------------- | ----------- |
| HTML / CSS / JavaScript | 前端開發        |
| Flourish                | 製作互動式地圖與折線圖 |
| PHP                     | 投票系統後端 |
| XAMPP                   | 本地端伺服器測試    |
| VS Code                 | 程式開發環境      |
| GitHub Pages（未來）        | 可作為部署平台     |

---

##  資料來源

* **Google Trends**

  * Google 搜尋熱度
  * YouTube 熱度
* 關鍵字由熱門搜尋建議彙整（如 Instagram）

---

##  未來展望

*  **新增使用者上傳貓狗圖片功能**
*  **開設特定貓狗投票頁面（如柴犬 vs 美短）**
*  優化手機版互動與展示效果
*  後端儲存與分析投票結果
*  更多動態圖表與使用者參與機制

---

##  Demo 與展示

影片 Demo 與系統截圖請見：[點我前往](https://www.canva.com/design/DAGmxE2G1qY/bqAA8mcT-gMmMCZSmYy-eA/edit?utm_content=DAGmxE2G1qY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton))
