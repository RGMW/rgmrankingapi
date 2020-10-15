/*
.- Made by xRG_M | RGM#0001 | Powered by RGM Ranking Service. 
.- Discord Invite: https://rgmranking.xyz/invite.html
*/
var axios = require('axios');

exports.setRank = function(key,userid,rankid) {
  return new Promise((resolve, reject) => {
    if(!key) return reject(new Error('No Key  Provided'));
    if(!userid) return reject(new Error('No UserId  Provided'));
    if(!rankid) return reject(new Error('No RankId  Provided'));
    if(isNaN(userid) === true) return reject(new Error('UserId Must be a number.'));
    if(isNaN(rankid) === true) return reject(new Error('RankId Must be a number.'));

    axios.post('http://rank.rgmranking.xyz/api/setrank',{key:key,userId:Number(userid),rankId:Number(rankid)}).then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      reject(new Error('err: '+error))
    });
  })
}

exports.promote = function(key,userid) {
  return new Promise((resolve, reject) => {
    if(!key) return reject(new Error('No Key  Provided'));
    if(!userid) return reject(new Error('No UserId  Provided'));
    if(isNaN(userid) === true) return reject(new Error('UserId Must be a number.'))

  axios.post('http://rank.rgmranking.xyz/api/promote',{key:key,userId:Number(userid)}).then(function (response) {
    resolve(response.data)
  }).catch(function (error) {
    reject(new Error('err: '+error))
  });
  })
}

exports.demote = function(key,userid) {
  return new Promise((resolve, reject) => {
    if(!key) return reject(new Error('No Key  Provided'));
    if(!userid) return reject(new Error('No UserId  Provided'));
    if(isNaN(userid) === true) return reject(new Error('UserId Must be a number.'))

  axios.post('http://rank.rgmranking.xyz/api/demote',{key:key,userId:Number(userid)}).then(function (response) {
    resolve(response.data)
  }).catch(function (error) {
    reject(new Error('err: '+error))
  });
  })
}

exports.shout = function(key,message) {
  return new Promise((resolve, reject) => {
    if(!key) return reject(new Error('No Key  Provided'));
    if(!message) return reject(new Error('No Message  Provided'));

  axios.post('http://rank.rgmranking.xyz/api/shout',{key:key,message:message}).then(function (response) {
    resolve(response.data)
  }).catch(function (error) {
    reject(new Error('err: '+error))
  });
  })
}

exports.joinrequest = function(key,userid,bool) {
  return new Promise((resolve, reject) => {
    if(!key) return reject(new Error('No Key  Provided'));
    if(!userid) return reject(new Error('No UserId  Provided'));
    if(isNaN(userid) === true) return reject(new Error('UserId Must be a number.'))
    if(!bool === true || bool === false) return reject(new Error('Bool Must be a Boolean (true/false).'))

  axios.post('http://rank.rgmranking.xyz/api/joinrequest',{key:key,userId:userid,boolean:String(bool)}).then(function (response) {
    resolve(response.data)
  }).catch(function (error) {
    reject(new Error('err: '+error))
  });
  })
}
