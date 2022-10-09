2º) Execute e explique a execução dos seguintes comandos: 
    a) docker container run tomcat 
        O Docker pesquisaria a imagem no DockerHub se ela não estivesse sido baixada anteriormente, em seguida, criaria um container a partir da imagem e executaria o comando padrão do container.
    b) docker container ls 
        O Docker lista os containers em execução.
    c) docker image ls 
        O Docker lista as imagens baixadas.

3º) Realize os seguintes passos: 
    a. Criei uma aplicação java web e construa o artefato .war.
        Utilizei uma aplicação react que já tinha criado anteriormente.
    b. Crie um arquivo Dockerfile. (deve ser inserido o arquivo criado no passo 'a' 

    c. Construa uma nova image (deve ser utilizado o arquivo Dockerfile do passo b) 
    
    d. Execute o comando: docker container run -p 8080:8080 

4º) No arquivo README.md, inclua uma seção com um resumo das principais vantagens do uso de containers. 

5º) No arquivo README.md, inclua uma seção com as principais dificuldades que você enfrentou para concluir este roteiro.
    Tive problemas para construir a image do Docker, pois não me lembrei como fazer isso. Depois de pesquisar, inseri o que era necessário no arquivo Dockerfile para construir a image. Depois de criar o arquivo, rodei o comando build e consegui construir a image e por fim executar o container.