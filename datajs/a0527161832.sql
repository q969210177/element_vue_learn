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

 Date: 18/12/2019 23:27:19
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for itemmenu
-- ----------------------------
DROP TABLE IF EXISTS `itemmenu`;
CREATE TABLE `itemmenu`  (
  `itemMenuId` int(11) NULL DEFAULT NULL,
  `itemMenuName` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `itemMenuPath` varchar(5) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `itemMenuType` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `itemMenuFather` tinyint(2) NULL DEFAULT NULL,
  `itemMenuIcon` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of itemmenu
-- ----------------------------
INSERT INTO `itemmenu` VALUES (1, '用户管理', '/user', '1', 1, 'el-icon-us');
INSERT INTO `itemmenu` VALUES (2, '数据管理', '/home', '1', 1, 'el-icon-s-');
INSERT INTO `itemmenu` VALUES (3, '商户管理', '/shop', '1', 1, 'el-icon-s-');
INSERT INTO `itemmenu` VALUES (4, '知乎', '/look', '1', 2, 'iconfont i');

-- ----------------------------
-- Table structure for login
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login`  (
  `userId` int(11) UNSIGNED NOT NULL,
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `menuId` int(5) NULL DEFAULT NULL,
  PRIMARY KEY (`userId`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES (1, 'admin', 1);
INSERT INTO `login` VALUES (2, 'oneUser', 2);
INSERT INTO `login` VALUES (3, 'twoUser', 3);
INSERT INTO `login` VALUES (4, 'threeUser', 4);
INSERT INTO `login` VALUES (5, 'fourUser', 5);
INSERT INTO `login` VALUES (6, 'test', 2);

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu`  (
  `menuUserId` int(5) NOT NULL,
  `menuName` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `menuPath` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `menuIcon` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `menuType` tinyint(2) NULL DEFAULT NULL,
  `menuItemMenu` tinyint(2) NULL DEFAULT NULL,
  PRIMARY KEY (`menuUserId`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES (1, '首页', '/index', 'el-icon-location', 0, 0);
INSERT INTO `menu` VALUES (2, '文档', '/document', 'iconfont icon-document1', 0, 0);
INSERT INTO `menu` VALUES (3, '系统', '', 'el-icon-s-tools', 1, 1);
INSERT INTO `menu` VALUES (4, '看一', NULL, 'iconfont icon-shequ', 1, 1);
INSERT INTO `menu` VALUES (5, '图标', '/home_icon', 'el-icon-s-management', 0, 0);

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
  `menuItem` tinyint(2) NOT NULL,
  PRIMARY KEY (`menuID`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of user_menuid
-- ----------------------------
INSERT INTO `user_menuid` VALUES (1, 1, 2, 3, 4, 5, 1);

SET FOREIGN_KEY_CHECKS = 1;
