# About 
 
> A simple NodeJS application running on multiple cores.  
 
## Background 


- The application uses the `cluster` Node module  which `allows easy creation of child processes that all share server ports`. [References](https://nodejs.org/docs/latest/api/cluster.html#cluster_cluster) 
- Also, being used is the `os` module which `provides a number of operating system-related utility methods`. [Reference](https://nodejs.org/docs/latest/api/os.html) 

## Running  

```bash 
$ npm start 
``` 
## Expected Results 

> Windows 

```bash  
 
> node app.js

User:
 Kennedy Otieno .
 Currently running on Windows_NT - x64 - win32

Available cores: 4
Master Process 18900 is up
Worker ID 16756 is up
Worker ID 8536 is up
Worker ID 10380 is up
Worker ID 2612 is up 

``` 

> Bash On Windows on Ubuntu 
 
```bash 

thebeachmaster@THEBEACHMASTER:/mnt/d/RepoMan/node-cluster$ npm start

> node-cluster@1.0.0 start /mnt/d/RepoMan/node-cluster
> node app.js

User:
 thebeachmaster .
 Currently running on Linux - x64 - linux

Available cores: 4
Master Process 118 is up
Worker ID 124 is up
Worker ID 125 is up
Worker ID 131 is up
Worker ID 137 is up
 
``` 