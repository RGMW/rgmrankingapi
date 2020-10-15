# RGM Ranking Service


### ABOUT
rgmrankingservice package is a Roblox ranking API based on the RGM Ranking Service Ranking systems, with this you can make your own bot and more!

### PREREQUISITES
* node.js

#### INSTALLATION
```
# Run this to install the package to your local bot. 
$ npm i rgmrankingservice
 
# Run this to instead install the module globally so you can use it anywhere. 
$ npm i rgmrankingservice -g
```

### BASIC USAGE

```
var ranking = require('rgmrankingservice');

ranking.promote('key',865079958)
ranking.demote('key',865079958)
ranking.setRank('key',865079958,10)
ranking.shout('key','HELLO PEOPLE!')
ranking.joinrequest('key',865079958,true)
```
