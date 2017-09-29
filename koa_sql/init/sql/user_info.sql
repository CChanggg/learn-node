create table user (
    user_id int(10) unsigned not null auto_increment,
    user_name varchar(100),
    primary key(user_id)
) default charset=utf8;

create table review (
    review_id int(10) unsigned not null auto_increment,
    review_content text,
    review_rate int(10) unsigned,
    user_id int(10) unsigned,
    film_id int(10) unsigned,
    primary key(review_id)
) default charset=utf8;

create table film (
    film_id int(10) unsigned not null auto_increment,
    film_name varchar(100),
    film_box int(10) unsigned,
    primary key(film_id)
) default charset=utf8;

create table people (
    people_id int(10) unsigned not null auto_increment,
    people_name varchar(100),
    people_birth date,
    people_location varchar(100),
    primary key(people_id)
) default charset=utf8;

create table film_people (
    film_id int(10) unsigned,
    people_id int(10) unsigned,
    job varchar(20)
) default charset=utf8;


insert into film(film_id, film_name, film_box) values 
(1, '少年派', 124976634),
(2, '雨果', 73820094),
(3, '无间行者', 132373442),
(4, '断背山', 83025853);

insert into user(user_id, user_name) values
(1, '王皓'),
(2, '小雪'),
(3, '张三');

insert into review(review_id, review_content, review_rate, user_id, film_id) values
(1, '李安导演的少年派，好导演，好故事，推荐看一下', 8, 1, 1),
(2, '今天跟王皓一起去看了少年派，电影好看，就是不习惯 3D 眼镜', 9, 2, 1),

(3, '马丁的雨果，很喜欢画面的风格', 8, 1, 2),
(4, '雨果！', 7, 2, 2), 
(5, '美国版的无间道，不错', 9, 1, 3),
(6, '看不懂！', 6, 2, 3);

insert into film_people(film_id, people_id, job) values
(1, 11, '导演'),
(2, 10, '导演'),
(3, 8, '演员'),
(3, 10, '导演');

insert into people(people_id, people_name, people_birth, people_location) values
(1, '丹泽尔·华盛顿', '1954-12-28', '美国'),
(2, '安吉丽娜·朱莉', '1975-06-04', '美国'),
(3, '马克·沃尔伯格', '1971-06-05', '美国'),
(4, '布拉德·皮特', '1965-12-18', '美国'),
(5, '克里斯蒂安·贝尔', '1974-01-30', '英国'),
(7, '凯特·温丝莱特', '1975-10-05', '英国'),
(8, '莱昂纳多·迪卡普里奥', '1974-11-11', '美国'),
(9, '休·杰克曼', '1968-10-12', '澳大利亚'),
(10, '马丁·斯科塞斯', '1942-11-17', '美国'),
(11, '李安', '1954-10-23', '台湾');
