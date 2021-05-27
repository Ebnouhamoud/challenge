'use strict';
const _ = require('lodash');
const db = require('./db.js');


// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
    return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (itemToLookup) => {
    
    const dataAccessMethod = () => {
       const usersObjByUsername = generateUsersByUsername();
       const listOfUsers = generateListofUsersByItem(itemToLookup);
       return generateUsersAgeFrequency(usersObjByUsername, listOfUsers);
    };
    return mockDBCall(dataAccessMethod);
};

const getItems = () => {
    const dataAccessMethod = () => {
        const items=[];
        const seenItems={};
        const data = db.itemsOfUserByUsername;
        for(const user in data) {
            for(const item of data[user]){
                if(!seenItems[item]) {
                    items.push(item);
                    seenItems[item] = true;
                };
            };
        };
        return items
    };
    return mockDBCall(dataAccessMethod);
}

const generateUsersAgeFrequency = (usersObjByUsername,listOfUsers) => {
    const ageFrequencyObj = {};
    listOfUsers.forEach(username => {
        const usersAge = usersObjByUsername[username];
        if(ageFrequencyObj[usersAge]) ageFrequencyObj[usersAge] +=1;
        else ageFrequencyObj[usersAge] = 1;
    });
    const ageFrequencyList = [];
    for(const age in ageFrequencyObj) {
        const frequency = ageFrequencyObj[age];
        ageFrequencyList.push({age,frequency});
    };
    return ageFrequencyList;
};

const generateListofUsersByItem = (itemToLookup) => {
    const users = [];
    for(const user in db.itemsOfUserByUsername) {
        for(const item of db.itemsOfUserByUsername[user]) {
            if(item === itemToLookup) users.push(user);
        };
    };
    return users;
};

const generateUsersByUsername = () => {
    const usersObj = {};
    for(const userId in db.usersById) {
        const username = db.usersById[userId].username;
        usersObj[username] = db.usersById[userId].age;
    };
    return usersObj;
};

module.exports = {
    getUsers,
    getListOfAgesOfUsersWith,
    getItems
};
