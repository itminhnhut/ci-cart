-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th10 08, 2017 lúc 04:34 PM
-- Phiên bản máy phục vụ: 5.7.20-0ubuntu0.16.04.1
-- Phiên bản PHP: 7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `ci_clothes`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `banner`
--

CREATE TABLE `banner` (
  `id` int(10) NOT NULL,
  `image` varchar(100) NOT NULL,
  `url` varchar(100) NOT NULL,
  `title` varchar(10) NOT NULL,
  `alt` varchar(10) NOT NULL,
  `order_image` tinyint(3) NOT NULL,
  `active` tinyint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `banner`
--

INSERT INTO `banner` (`id`, `image`, `url`, `title`, `alt`, `order_image`, `active`) VALUES
(1, '15098857870_1.jpg', '', '', '', 3, 0),
(2, '15098857881_2.jpg', '', '', '', 1, 0),
(3, '15098857880_1.jpg', '', '', '', 2, 0),
(4, '15099853110_1.png', '', '', '', 0, 0),
(5, '15099853220_1.png', '', '', '', 0, 0),
(6, '15099853560_1.png', '', '', '', 0, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `imagefooter`
--

CREATE TABLE `imagefooter` (
  `id` int(10) NOT NULL,
  `image` varchar(100) NOT NULL,
  `url` varchar(100) NOT NULL,
  `title` varchar(10) NOT NULL,
  `alt` varchar(10) NOT NULL,
  `order_image` tinyint(3) NOT NULL,
  `active` tinyint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `imagefooter`
--

INSERT INTO `imagefooter` (`id`, `image`, `url`, `title`, `alt`, `order_image`, `active`) VALUES
(6, '15098088410_1.jpg', '', '', '', 2, 1),
(7, '15098857250_1.jpg', '', '', '', 1, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `menu`
--

CREATE TABLE `menu` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `alt` varchar(100) NOT NULL,
  `des` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `img` varchar(100) NOT NULL,
  `menu_image` tinyint(3) NOT NULL,
  `status_menu_img` tinyint(3) NOT NULL,
  `order_menu` int(10) NOT NULL,
  `parent` int(10) NOT NULL,
  `status` tinyint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `menu`
--

INSERT INTO `menu` (`id`, `name`, `title`, `alt`, `des`, `slug`, `img`, `menu_image`, `status_menu_img`, `order_menu`, `parent`, `status`) VALUES
(1, 'Quần áo người lớn', 'Quần áo người lớn', 'Quần áo người lớn', 'Quần áo người lớn', 'Quần áo người lớn', '15100743790_1.jpg', 1, 1, 1, 0, 1),
(2, 'Quần áo người lớn 2', 'Quần áo người lớn 2', 'Quần áo người lớn 2', '', 'quan-ao-nguoi-lon 2', '15100663750_1.jpg', 2, 1, 4, 0, 1),
(3, 'Quần áo người lớn 3', 'Quần áo người lớn 3', 'Quần áo người lớn 3', '', 'quan-ao-nguoi-lon 3', '', 0, 0, 5, 0, 0),
(4, 'Quần áo người lớn 4', 'Quần áo người lớn 4', 'Quần áo người lớn 4', '', 'quan-ao-nguoi-lon 4', '', 0, 0, 3, 1, 0),
(5, 'Quần áo người lớn 6', 'Quần áo người lớn 6', 'Quần áo người lớn 6', 'Quần áo người lớn 6', 'quan-ao-nguoi-lon-6', '', 0, 0, 2, 1, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `idParent` int(100) NOT NULL,
  `idSubChild` int(100) NOT NULL,
  `idChild` int(100) NOT NULL,
  `des` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `keyword` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `price` int(100) NOT NULL,
  `salePrice` int(100) NOT NULL,
  `create_date` datetime NOT NULL,
  `status` tinyint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `slider`
--

CREATE TABLE `slider` (
  `id` int(10) NOT NULL,
  `image` varchar(100) NOT NULL,
  `url` varchar(100) NOT NULL,
  `title` varchar(10) NOT NULL,
  `alt` varchar(10) NOT NULL,
  `order_image` tinyint(3) NOT NULL,
  `active` tinyint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `slider`
--

INSERT INTO `slider` (`id`, `image`, `url`, `title`, `alt`, `order_image`, `active`) VALUES
(2, '15098083501_2.jpg', '', '', '', 2, 0),
(3, '15098850260_1.jpg', '', '', '', 3, 0),
(4, '15098857020_1.jpg', '', '', '', 4, 0),
(5, '15098857021_2.jpg', '', '', '', 1, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `user` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `group_admin` tinyint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `user`, `pass`, `group_admin`) VALUES
(1, 'admin', '827ccb0eea8a706c4c34a16891f84e7b', 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `imagefooter`
--
ALTER TABLE `imagefooter`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `slider`
--
ALTER TABLE `slider`
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
-- AUTO_INCREMENT cho bảng `banner`
--
ALTER TABLE `banner`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT cho bảng `imagefooter`
--
ALTER TABLE `imagefooter`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT cho bảng `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT cho bảng `slider`
--
ALTER TABLE `slider`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
