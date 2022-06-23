
# Minecraft server startup script
# For macOS or Linux

java="java"
jar="server.jar"
ram=1024
restartDelay=5

while true; do
    "$java" -Xmx${ram}M -Xms${ram}M -jar "$jar" nogui
    sleep ${restartDelay}s
done