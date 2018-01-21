CREATE TABLE user_list (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    pass VARCHAR(50) NOT NULL,
    credit INT NOT NULL,
    gender ENUM('Male', 'Female') NOT NULL,
    birthday DATE NOT NULL,
    country VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    picture_path VARCHAR(255) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE friend_list (
    id INT NOT NULL AUTO_INCREMENT,
    id_user_1 INT NOT NULL,
    id_user_2 INT NOT NULL,
    friends INT NOT NULL DEFAULT 0,
    PRIMARY KEY (id, id_user_1, id_user_2),
    CONSTRAINT fk_friend_list_user_1 FOREIGN KEY (id_user_1) REFERENCES user_list (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_friend_list_user_2 FOREIGN KEY (id_user_2) REFERENCES user_list (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE table_live (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE chat (
    id INT NOT NULL AUTO_INCREMENT,
    msg VARCHAR(255) NOT NULL,
    id_user INT NOT NULL,
    id_table_live INT NOT NULL,
    PRIMARY KEY (id, id_user, id_table_live),
    CONSTRAINT fk_chat_user FOREIGN KEY (id_user) REFERENCES user_list (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_chat_table_live FOREIGN KEY (id_table_live) REFERENCES table_live (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);


CREATE TABLE table_seats (
    id INT NOT NULL AUTO_INCREMENT,
    id_table_live INT NOT NULL,
    id_user INT NOT NULL,
    PRIMARY KEY (id, id_table_live, id_user),
    CONSTRAINT fk_table_seats_table_live FOREIGN KEY (id_table_live) REFERENCES table_live (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_table_seats_user FOREIGN KEY (id_user) REFERENCES user_list (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);