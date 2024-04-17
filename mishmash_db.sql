-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 11, 2023 at 03:58 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mishmash_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `condition_cards`
--

CREATE TABLE `condition_cards` (
  `ID` int(11) NOT NULL,
  `Name` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `condition_cards`
--

INSERT INTO `condition_cards` (`ID`, `Name`) VALUES
(1, 'Wields Great Magic'),
(2, 'The Chosen One'),
(3, 'Scaredy-Cat'),
(4, 'Knows Too Much'),
(5, 'Seasoned Traveller'),
(6, 'Destroyer of Harvests'),
(7, 'Worthy of Ruling'),
(8, 'Smells Strange'),
(9, 'Impulsive'),
(10, 'Nerdy'),
(11, 'Has No Chill'),
(12, 'Loved By All'),
(13, 'Secretly a Martian'),
(14, 'Has a Kill Sat'),
(15, 'Wields a Gun'),
(16, 'Suffers from Arachnophobia'),
(17, 'Gets Sickly Sometimes'),
(18, 'Sweet Tooth'),
(19, 'Good at Mazes'),
(20, 'Professional Builder'),
(21, 'Hunts Cryptids'),
(22, 'Is an Abomination'),
(23, 'Watches Horror Movies'),
(24, 'Plays Dungeons and Dragons'),
(25, 'Leads a Revolution'),
(26, 'Inventor'),
(27, 'Messed With Time Itself'),
(28, 'Is Too Stressed Out'),
(29, 'Found Inner Peace'),
(30, 'Likes Numbers'),
(31, 'Has No Friends'),
(32, 'Bookworm');

-- --------------------------------------------------------

--
-- Table structure for table `mishmash_cards`
--

CREATE TABLE `mishmash_cards` (
  `ID` int(11) NOT NULL,
  `Name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mishmash_cards`
--

INSERT INTO `mishmash_cards` (`ID`, `Name`) VALUES
(1, 'Wolf'),
(2, 'Lightning'),
(3, 'Jungle'),
(4, 'Fuzzy Caterpillar'),
(5, 'Dried Raisin'),
(6, 'Popcorn'),
(7, 'Beanstalk'),
(8, 'Fire'),
(9, 'Stone Pillar'),
(10, 'Cannon'),
(11, 'War Elephant'),
(12, 'Ogre'),
(13, 'Slime'),
(14, 'Baguette'),
(15, 'Uranium'),
(16, 'Russia'),
(17, 'Tablecloth'),
(18, 'Spiderweb'),
(19, 'Anime Binger'),
(20, 'Eldritch'),
(21, 'Janitor'),
(22, 'Dracula'),
(23, 'Golf Cart'),
(24, 'Serial Killer'),
(25, 'Chip Offerer'),
(26, 'Sock Puppet'),
(27, 'Mafia Boss'),
(28, 'Social Bird'),
(29, 'Jetpack'),
(30, 'Garbage Can'),
(31, 'Ice Cream Truck'),
(32, 'Issac Newton'),
(33, 'Sherlock Holmes'),
(34, 'Living Armor'),
(35, 'Giant Robot'),
(36, 'Awesome Hat'),
(37, 'Police Officer'),
(38, 'Microwave'),
(39, 'USA'),
(40, 'Fairy'),
(41, 'Darth Vader'),
(42, 'Sandwich'),
(43, 'Fedora'),
(44, 'Mom\'s Spaghetti'),
(45, 'Normal Person'),
(46, 'Young Child'),
(47, 'Ghost'),
(48, 'Stardust'),
(49, 'Fish'),
(50, 'Pearl'),
(51, 'Pink Panther'),
(52, 'Soccer Ball'),
(53, 'Calendar'),
(54, 'Frost'),
(55, 'Doctor'),
(56, 'Mouse'),
(57, 'Cat'),
(58, 'Shadow'),
(59, 'Gold'),
(60, 'Laser'),
(61, 'Red Button'),
(62, 'University'),
(63, 'Hourglass'),
(64, 'Ferris Wheel');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `condition_cards`
--
ALTER TABLE `condition_cards`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `mishmash_cards`
--
ALTER TABLE `mishmash_cards`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `condition_cards`
--
ALTER TABLE `condition_cards`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `mishmash_cards`
--
ALTER TABLE `mishmash_cards`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
