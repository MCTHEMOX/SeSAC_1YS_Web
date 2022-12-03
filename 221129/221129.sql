use test;

create table member (
	ID int not null primary key,
    name varchar(10) not null,
    age int,
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2) default "x"
);

desc member;
desc user;

alter table member drop column birthday;

alter table member add column birthday date not null;

alter table member modify birthday date;

alter table member modify birthday date not null;

drop table member;

show tables;

show databases;

alter table member drop column age;

alter table member add interest varchar(100);

create table user(
	ID varchar(10) not null primary key,
    name varchar(5) not null,
    age int not null
);

show tables;
desc user;

insert into user(ID, name, age) values("h","현목",80);
insert into user values("d","아아아",00); 
# 42번줄 처럼 앞에 괄호 안쓰면 차례대로 들어감
select * from user;
select ID from user;
select ID, name from user;
select name, ID from user;
select * from user order by ID DESC;
select * from user where name="박현목" order by ID DESC;
select * from user where name="박현목" order by ID DESC limit 2;
select * from user where name="박현목" order by ID ASC limit 2;
select * from user where age>=80;
select * from user where age!=81;
select * from user where name in( '박현목','아아아' );
select * from user where name in( '아아아' );

select * from user where name like '박%';
select * from user where name like '%현_';
select * from user where name like '현_';

select * from user where not name is null;


update user set age = 20 where ID = "d";
delete from user where ID = "f";

truncate table user;

create table user (
	id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender ENUM( 'F', 'M', '') default' ',
    birthday DATE not null,
    age int(3) not null default 0
	);
select * from user;
insert into user values("hong1234","8o4bkg","홍길동","M","1990-01-31","33"); 
insert into user values("sexysung","87awjkdf","성춘향","F","1992-03-31","31"); 
insert into user values("power70","qxur8sda","변사또","M","1970-05-02","53");
insert into user values("hanjo","jk48fn4","한조","M","1984-10-18","39");
insert into user values("widowmaker","38ewifh3","위도우","F","1976-06-27","47");
insert into user values("dvadva","k3f3ah","송하나","F","2001-06-03","22");
insert into user values("jungkrat","4ifha7f","정크랫","M","1999-11-11","24");     
insert into user values("mcthemox","4ifha7f","박현목","M","1999-11-11","24");     
select * from user order by birthday ASC;
select name,gender from user where gender="M" order by name DESC;
select id,name from user where birthday like'%1990%';
select * from user where birthday like '%-06-%' order byid birthday ASC;
select name,gender,birthday from user where gender="M" and birthday like"%1970%";
select * from user order by age DESC limit 3;
delete from user where id="jungkrat";
select * from user where age>=25 and age<=50;
update user set pw="12345678" where id="hong1234";
delete from user where id="jungkrat";



# mysql 사용자 추가하기
CREATE USER 'user'@'%' IDENTIFIED BY '1q2w3e4r';
# DB 권한 부여 (모든 DB에 접근 가능하도록)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
# 현재 사용중인 MySQL의 캐시를 지우고 새로운 설정을 적용하기 위해 사용
FLUSH PRIVILEGES;
select host, user, plugin, authentication_string from mysql.user;
# mysql 계정 비밀번호를 바꾸고 싶을 때
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '1q2w3e4r';

use test;
create table visitor (
	ID int not null primary key auto_increment,
    name varchar(10) not null,
    comment mediumtext    
);
select * from visitor;
insert into visitor(name, comment) values("홍길동","내가왔다");

create table a (
	id varchar(10) not null,
    pw varchar(10) not null,
    name varchar(5)    
);