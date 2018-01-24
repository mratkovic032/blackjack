CREATE TABLE user_list (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    pass VARCHAR(50) NOT NULL,
    credit INT NOT NULL,
    bet INT NOT NULL DEFAULT 0,
    gender ENUM('male', 'female') NOT NULL,
    birthday DATE NOT NULL,
    country VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    picture_path VARCHAR(255) NULL,
    notification INT NOT NULL DEFAULT 0,
    points INT NULL,    
    PRIMARY KEY (id)
);

CREATE TABLE cards (
    id INT NOT NULL AUTO_INCREMENT,
    id_user INT NOT NULL,
    card_1 VARCHAR(20) NULL,
    card_2 VARCHAR(20) NULL,
    card_3 VARCHAR(20) NULL,
    card_4 VARCHAR(20) NULL,
    card_5 VARCHAR(20) NULL,
    split_11 VARCHAR(20) NULL,
    split_12 VARCHAR(20) NULL,
    split_13 VARCHAR(20) NULL,
    split_14 VARCHAR(20) NULL,
    split_15 VARCHAR(20) NULL,
    split_21 VARCHAR(20) NULL,
    split_22 VARCHAR(20) NULL,
    split_23 VARCHAR(20) NULL,
    split_24 VARCHAR(20) NULL,
    split_25 VARCHAR(20) NULL,
    PRIMARY KEY (id, id_user),
    CONSTRAINT fk_cards_user FOREIGN KEY (id_user) REFERENCES user_list (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE relationship (
    id INT NOT NULL AUTO_INCREMENT,
    id_user_1 INT NOT NULL,
    id_user_2 INT NOT NULL,
    status INT NOT NULL DEFAULT 0,
    id_action_user INT NOT NULL,
    PRIMARY KEY (id, id_user_1, id_user_2),
    CONSTRAINT fk_friend_list_user_1 FOREIGN KEY (id_user_1) REFERENCES user_list (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_friend_list_user_2 FOREIGN KEY (id_user_2) REFERENCES user_list (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
    UNIQUE INDEX (id_user_1, id_user_2)
);

CREATE TABLE dealer (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    status INT NULL,
    points INT NULL,
    card_1 VARCHAR(20) NULL,
    card_2 VARCHAR(20) NULL,
    card_3 VARCHAR(20) NULL,
    card_4 VARCHAR(20) NULL,
    card_5 VARCHAR(20) NULL
);

CREATE TABLE game (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    seats_taken INT NOT NULL,
    id_dealer INT NOT NULL,
    CONSTRAINT fk_game_dealer FOREIGN KEY (id_dealer) REFERENCES dealer (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);


CREATE TABLE chat (
    id INT NOT NULL AUTO_INCREMENT,
    msg VARCHAR(255) NOT NULL,
    id_user INT NOT NULL,
    game INT NOT NULL,
    PRIMARY KEY (id, id_user, game),
    CONSTRAINT fk_chat_user FOREIGN KEY (id_user) REFERENCES user_list (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_chat_game FOREIGN KEY (game) REFERENCES game (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);


CREATE TABLE game_users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_game INT NOT NULL,
    id_user INT NOT NULL,
    move INT NOT NULL,
    status INT NULL,
    CONSTRAINT fk_game_users_game FOREIGN KEY (id_game) REFERENCES game (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_game_users_user FOREIGN KEY (id_user) REFERENCES user_list (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE move (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    id_game INT NOT NULL,
    id_user INT NOT NULL,
    move INT NOT NULL,
    CONSTRAINT fk_move_game FOREIGN KEY (id_game) REFERENCES game (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_move_user FOREIGN KEY (id_user) REFERENCES user_list (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);