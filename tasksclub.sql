-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th4 11, 2022 lúc 06:48 PM
-- Phiên bản máy phục vụ: 10.4.18-MariaDB
-- Phiên bản PHP: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `tasksclub`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lists`
--

CREATE TABLE `lists` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `name` text NOT NULL,
  `icon` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `lists`
--

INSERT INTO `lists` (`id`, `id_user`, `name`, `icon`) VALUES
(0, 1, 'hello', '2'),
(1, 1, 'học tập', '9'),
(2, 1, 'world', '3'),
(4, 1, 'test', '1'),
(22, 1, 'hi', 'folder'),
(23, 1, 'ad', 'folder'),
(24, 1, 'ad', 'pencil'),
(25, 1, 'adfa', 'pencil'),
(26, 1, 'abc', 'pencil');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `id_list` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `namelist` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `finish` int(11) NOT NULL DEFAULT 0,
  `star` int(11) NOT NULL DEFAULT 0,
  `date_add` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tasks`
--

INSERT INTO `tasks` (`id`, `id_list`, `id_user`, `namelist`, `content`, `finish`, `star`, `date_add`) VALUES
(9, 2, 1, 'word', 'test', 0, 0, '0000-00-00 00:00:00'),
(12, 2, 1, 'word', 'huy', 1, 0, '0000-00-00 00:00:00'),
(45, 2, 1, 'world', 'afewq', 1, 0, '00000000'),
(47, 2, 1, 'world', 'sds', 0, 0, '00000000'),
(54, 1, 1, 'học tập', 'vahjd', 1, 0, '00000000'),
(56, 1, 1, 'học tập', 'dg', 0, 0, '00000000'),
(57, 1, 1, 'học tập', 'af', 0, 0, '00000000'),
(58, 1, 1, 'học tập', 'ng', 1, 0, '00000000'),
(60, 0, 1, 'hello', 'ads', 0, 0, '00000000');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `token`
--

CREATE TABLE `token` (
  `id` int(11) NOT NULL,
  `id_token` varchar(255) NOT NULL,
  `id_user` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `token`
--

INSERT INTO `token` (`id`, `id_token`, `id_user`, `name`) VALUES
(1, '1981298', 1, 'trinhquochuy'),
(4, '10c72a9', 55, 'troioi'),
(5, 'bbbb3fd', 1, 'trinhquochuy'),
(6, 'c5fac50', 1, 'trinhquochuy'),
(7, '95263c8', 1, 'trinhquochuy'),
(8, 'ba2f88e', 1, 'trinhquochuy'),
(9, 'ef9c7d9', 1, 'trinhquochuy');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `avatar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `name`, `password`, `email`, `avatar`) VALUES
(1, 'trinhquochuy', 'cc0d45bc2f499fc4666d09691485a0f9', 'huy@gmail.com', 1),
(55, 'troioi', 'cc0d45bc2f499fc4666d09691485a0f9', 'trinhhuy5566ct@gmail.com', 1),
(60, 'hellohello', '4f8c565afacf6a904d9a5145a70e0c1f', 'trinhhuy5566@gmail.com', 1),
(61, '1', '1', '1@gmail.com', 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `lists`
--
ALTER TABLE `lists`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `lists`
--
ALTER TABLE `lists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT cho bảng `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT cho bảng `token`
--
ALTER TABLE `token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
