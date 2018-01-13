CREATE TABLE user_list (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    pass VARCHAR(50) NOT NULL,
    credit INT NOT NULL,
    gender ENUM('Musko', 'Zensko') NULL,
    birthday DATE NULL,
    country VARCHAR(100) NULL,
    email VARCHAR(100) NOT NULL,
    picture VARCHAR(255) NULL
);

CREATE TABLE chat (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    msg VARCHAR(255) NOT NULL,
    fk_user INT NOT NULL,
    fk_table INT NOT NULL,
    CONSTRAINT fk_chat_user FOREIGN KEY (fk_user) REFERENCES user_list (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_chat_table FOREIGN KEY (fk_table) REFERENCES live_table (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE live_table (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE user_table (
    fk_table INT NOT NULL,
    fk_user INT NOT NULL,
    CONSTRAINT fk_user_table_table FOREIGN KEY (fk_table) REFERENCES live_table (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_user_table_user FOREIGN KEY (fk_user) REFERENCES user_list (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);