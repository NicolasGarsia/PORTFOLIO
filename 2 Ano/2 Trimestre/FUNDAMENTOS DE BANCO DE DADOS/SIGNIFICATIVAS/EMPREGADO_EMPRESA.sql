CREATE TABLE empregado(
id_empregado_pk VARCHAR(11) NOT NULL,
nome_empregado VARCHAR(30) Not NULL,
horas_semanais VARCHAR(20) NOT NULL,
PRIMARY Key(id_empregado_pk)
)
Create TABLE empresa(
CEP_empresa VARCHAR(70) Not NULL,
Complemento_empresa VARCHAR(80) Not NULL,
Rua_empresa VARCHAR(38) Not NULL,
Bairro_empresa VARCHAR(56) Not NULL,
Numero_empresa VARCHAR(65) Not NULL,
Cidade_empresa VARCHAR(45) Not NULL,
id_empresa_pk VARCHAR(12) Not NULL,
PRIMARY Key(id_empresa_pk)
)
Create TABLE empregado_empresa(
id_empresa_fk VARCHAR(11) Not NULL,
id_empregado_fk VARCHAR(12) Not NULL,
FOREIGN key(id_empregado_fk) REFERENCES empregado(id_empregado_pk),
FOREIGN key(id_empresa_fk) REFERENCES empresa(id_empresa_pk)
)
        
INSERT INTO empregado(id_empregado_pk, nome_empregado, horas_semanais)
VALUES('1232131231', 'CleisonAdalbert', '16h')
        
INSERT INTO empresa(CEP_empresa, Complemento_empresa, Cidade_empresa, Numero_empresa, Rua_empresa, Bairro_empresa, id_empresa_pk)
VALUES('881109780', 'Do lado da casa Azul', 'Vancouver', '870', 'Rua. AdalbertoClenison', 'Pau da Lima', '43431232454' )
        
INSERT INTO empregado_empresa(id_empresa_fk, id_empregado_fk)
VALUES('43431232454','1232131231')
