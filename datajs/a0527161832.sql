/*
 Navicat Premium Data Transfer

 Source Server         : cc
 Source Server Type    : MySQL
 Source Server Version : 50540
 Source Host           : localhost:3306
 Source Schema         : a0527161832

 Target Server Type    : MySQL
 Target Server Version : 50540
 File Encoding         : 65001

 Date: 12/02/2020 16:51:11
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article_list
-- ----------------------------
DROP TABLE IF EXISTS `article_list`;
CREATE TABLE `article_list`  (
  `articleListId` tinyint(40) NOT NULL,
  `articleListContent` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `articleListTitle` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`articleListId`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article_list
-- ----------------------------
INSERT INTO `article_list` VALUES (1, '這是一段測試數據', '測試數據1');
INSERT INTO `article_list` VALUES (2, '這是第二段測試數據', '測試數據2');
INSERT INTO `article_list` VALUES (3, '這是第三段測試數據', '測試數據3');
INSERT INTO `article_list` VALUES (4, '這是第四段測試數據', '測試數據4');
INSERT INTO `article_list` VALUES (5, '這是第五段測試數據', '測試數據5');
INSERT INTO `article_list` VALUES (6, '這是第六段測試數據', '測試數據6');
INSERT INTO `article_list` VALUES (7, '這是第七段測試數據', '測試數據7');

-- ----------------------------
-- Table structure for item_menu
-- ----------------------------
DROP TABLE IF EXISTS `item_menu`;
CREATE TABLE `item_menu`  (
  `itemMenuId` int(11) NULL DEFAULT NULL,
  `itemMenuName` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `itemMenuPath` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `itemMenuType` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `itemMenuFather` tinyint(2) NULL DEFAULT NULL,
  `itemMenuIcon` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `itemMenuRouterName` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of item_menu
-- ----------------------------
INSERT INTO `item_menu` VALUES (1, 'HTML', '/Html', '1', 1, 'el-icon-user-solid', 'Html');
INSERT INTO `item_menu` VALUES (2, 'CSS', '/Html', '1', 2, 'el-icon-s-data', 'Css');
INSERT INTO `item_menu` VALUES (3, 'JavaScript', '/Html', '1', 3, 'el-icon-s-shop', 'JavaScript');
INSERT INTO `item_menu` VALUES (4, 'JavaScript', '/Html', '1', 3, 'iconfont  icon-zhihu', 'JavaScript');
INSERT INTO `item_menu` VALUES (5, 'HTML', '/Html', '1', 1, 'el-icon-user-solid', 'Html');
INSERT INTO `item_menu` VALUES (6, 'Vue', '/Html', '1', 4, 'iconfont  icon-zhihu', 'Vue');
INSERT INTO `item_menu` VALUES (7, 'HTML', '/Html', '1', 1, 'el-icon-user-solid', 'Html');

-- ----------------------------
-- Table structure for login
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login`  (
  `userId` int(11) UNSIGNED NOT NULL,
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `menuId` int(5) NULL DEFAULT NULL,
  PRIMARY KEY (`userId`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES (1, 'admin', 1);
INSERT INTO `login` VALUES (2, 'test', 2);

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu`  (
  `menuId` int(5) NOT NULL,
  `menuName` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `menuPath` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `menuIcon` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `menuType` tinyint(2) NULL DEFAULT NULL,
  `menuItemMenu` tinyint(2) NULL DEFAULT NULL,
  `fatherMenuId` tinyint(2) UNSIGNED NULL DEFAULT NULL,
  PRIMARY KEY (`menuId`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES (1, '首页', '/index', 'iconfont icon-shouye', 0, 0, 0);
INSERT INTO `menu` VALUES (2, '文档', '/document', 'iconfont icon-document1', 0, 0, 0);
INSERT INTO `menu` VALUES (3, 'HTML', 'html', '.icon-html\r\n.icon-html\r\nicon-html iconfont', 1, 1, 0);
INSERT INTO `menu` VALUES (4, 'CSS', 'css', 'iconfont icon-css', 1, 2, 0);
INSERT INTO `menu` VALUES (6, '图标', '/home_icon', 'el-icon-s-management', 0, 0, 0);
INSERT INTO `menu` VALUES (5, 'JavaScript', 'JavaScript', 'iconfont icon--java-script', 1, 3, 0);
INSERT INTO `menu` VALUES (7, 'Vue', 'Vue', 'iconfont icon-vuejs-fill', 1, 4, 0);

-- ----------------------------
-- Table structure for rumor
-- ----------------------------
DROP TABLE IF EXISTS `rumor`;
CREATE TABLE `rumor`  (
  `rumorId` tinyint(5) NOT NULL,
  `rumorContener` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `rumorTitle` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `rumorState` tinyint(255) NOT NULL,
  `rumorApply` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `specialMedicalOrder` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`rumorId`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of rumor
-- ----------------------------
INSERT INTO `rumor` VALUES (1, 'test', '高锰酸钾消毒片', 0, '外用', '请不要吃进嘴里');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `userId` tinyint(10) UNSIGNED NOT NULL,
  `userName` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `userImgAvatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `loginTime` datetime NOT NULL,
  PRIMARY KEY (`userId`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'admin', 'http://969210177.cn/img/testUser.gif', '2019-12-27 21:44:33');
INSERT INTO `user` VALUES (2, 'test', 'http://969210177.cn/img/test2User.jpeg', '2019-12-27 21:48:52');

-- ----------------------------
-- Table structure for user_menuid
-- ----------------------------
DROP TABLE IF EXISTS `user_menuid`;
CREATE TABLE `user_menuid`  (
  `menuID` int(10) UNSIGNED NOT NULL,
  `menuOne` tinyint(2) UNSIGNED NOT NULL,
  `menuTwo` tinyint(2) UNSIGNED NOT NULL,
  `menuThree` tinyint(2) UNSIGNED NOT NULL,
  `menuFour` tinyint(2) NOT NULL,
  `menuFive` tinyint(2) NOT NULL,
  `menuSix` tinyint(2) NOT NULL,
  `menuSeven` tinyint(2) NOT NULL,
  `menuEight` tinyint(2) NOT NULL,
  `menuNight` tinyint(2) NOT NULL,
  `menuTen` tinyint(2) NOT NULL,
  `menuItem` tinyint(2) NOT NULL,
  PRIMARY KEY (`menuID`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of user_menuid
-- ----------------------------
INSERT INTO `user_menuid` VALUES (1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1);
INSERT INTO `user_menuid` VALUES (2, 1, 2, 3, 4, 5, 0, 7, 8, 9, 10, 2);

-- ----------------------------
-- Table structure for wel_img_url
-- ----------------------------
DROP TABLE IF EXISTS `wel_img_url`;
CREATE TABLE `wel_img_url`  (
  `imgID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `imgUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`imgID`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of wel_img_url
-- ----------------------------
INSERT INTO `wel_img_url` VALUES (1, 'http://969210177.cn/img/welBgImg.jpg');
INSERT INTO `wel_img_url` VALUES (2, 'http://969210177.cn/img/welBgImg1.jpg');
INSERT INTO `wel_img_url` VALUES (3, 'https://cdn.pixabay.com/photo/2020/01/06/03/51/lighthouse-4744502_960_720.jpg');
INSERT INTO `wel_img_url` VALUES (4, 'https://cdn.pixabay.com/photo/2013/07/16/17/12/leopard-163035_960_720.jpg');
INSERT INTO `wel_img_url` VALUES (5, 'http://969210177.cn/img/welBgImg2.jpg');
INSERT INTO `wel_img_url` VALUES (6, 'http://969210177.cn/img/welBgImg3.jpg');
INSERT INTO `wel_img_url` VALUES (7, 'http://969210177.cn/img/welBgImg4.jpg');
INSERT INTO `wel_img_url` VALUES (8, 'http://969210177.cn/img/welBgImg5.jpg');
INSERT INTO `wel_img_url` VALUES (9, 'http://969210177.cn/img/welBgImg6.jpg');

SET FOREIGN_KEY_CHECKS = 1;
