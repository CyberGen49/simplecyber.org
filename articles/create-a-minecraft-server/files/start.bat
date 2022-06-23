@echo off

:: Minecraft server startup script
:: For Windows

set java=java
set jar=server.jar
set ram=1024
set restartDelay=5

:loop
    "%java%" -Xmx%ram%M -Xms%ram%M -jar "%jar%" nogui
    timeout /t %restartDelay% /nobreak
goto loop