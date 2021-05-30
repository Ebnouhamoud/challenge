const routs = {
  users:'/users',
  demographic:'/users/age?item=',
  items:'./items'
};

export default {
  getUsers: async (handleSuccess, handleError) => {
    try {
      let usersList = await fetch(routs.users);
      if(!usersList.ok) {
        usersList = await usersList.json();
        throw Error(usersList.message);
      }
      usersList = await usersList.json();
      return handleSuccess(usersList);
    } catch (error) {
      return handleError(error.message);
    };
  },
  getDemographic: async (perams, handleSuccess, handleError) => {
    try {
      let demographicList = await fetch(routs.demographic + perams);
      if(!demographicList.ok) {
        demographicList = await demographicList.json();
        throw Error(demographicList.message);
      };
      demographicList = await demographicList.json();
      return handleSuccess(demographicList);
    } catch (error) {
      return handleError(error);
    };
  },
  getItems: async (handleSuccess, handleError) => {
    try {
      let itemsList = await fetch(routs.items);
      if(!itemsList.ok) {
        itemsList = await itemsList.json();
        throw Error(itemsList.message);
      }
      itemsList = await itemsList.json();
      return handleSuccess(itemsList);
    } catch (error) {
      return handleError(error);
    };
  }
};