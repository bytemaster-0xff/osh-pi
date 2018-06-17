# osh-pi
Instructions and Resources on Setting up Open Sensor Hub on a Raspberry Pi

1. Update package manager
sudo apt-get update

1. Install Java SDK 
sudo apt-get install default-jdk

1. Set path to java
/usr/lib/jvm/default-java/bin


2. Install in /usr/local/bin
```cd /usr/local/bin```

2. Install Open Sensor Hub Files 
```wget https://github.com/opensensorhub/osh-core/releases/download/v1.3.1/osh-base-install-1.3.1.zip```

3. unzip file into directory

4. copy osh.sh into root install

5. Add the service Osh.service to /lib/systemd/system
```sudo chmod 644 /lib/systemd/system/Osh.service```

```
sudo systemctl daemon-reload
sudo systemctl enable Osh.service
```

6. After fully qualifing the path to java, we can start with 

```sudo ./launch.sh```

