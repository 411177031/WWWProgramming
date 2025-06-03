-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2025-06-03 09:52:59
-- 伺服器版本： 10.4.32-MariaDB
-- PHP 版本： 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `catdog_user`
--

-- --------------------------------------------------------

--
-- 資料表結構 `votes`
--

CREATE TABLE `votes` (
  `id` int(11) NOT NULL,
  `animal` varchar(10) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `votes`
--

INSERT INTO `votes` (`id`, `animal`, `timestamp`) VALUES
(42, 'cat', '2025-06-02 02:41:19'),
(43, 'dog', '2025-06-02 02:41:21'),
(44, 'cat', '2025-06-02 02:49:33'),
(45, 'cat', '2025-06-02 03:14:55'),
(46, 'dog', '2025-06-02 03:14:58'),
(47, 'dog', '2025-06-02 03:14:59'),
(48, 'dog', '2025-06-02 03:40:15'),
(49, 'cat', '2025-06-02 03:44:24'),
(50, 'dog', '2025-06-02 03:44:26'),
(51, 'cat', '2025-06-02 03:44:26'),
(52, 'cat', '2025-06-02 07:10:27'),
(53, 'cat', '2025-06-02 07:10:31'),
(54, 'dog', '2025-06-02 07:10:36'),
(55, 'cat', '2025-06-02 07:13:04'),
(56, 'cat', '2025-06-02 07:13:07'),
(57, 'dog', '2025-06-02 07:13:11'),
(58, 'dog', '2025-06-03 07:29:02');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `votes`
--
ALTER TABLE `votes`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `votes`
--
ALTER TABLE `votes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
