const routs = {
  users:'/users',
  demographic:'/users/age?item=',
  items:'./items'
} 

export default {
  getUsers: async () => {
    try {
      let usersList = await fetch(routs.users);
      usersList = await usersList.json()
      return usersList
    } catch (error) {
      
      console.log(error)
    }
  },
  getDemographic: async (perams) => {
    try {
      let demographicList = await fetch(routs.demographic + perams)
      demographicList = await demographicList.json()
      return demographicList
    } catch (error) {
      
    }
  },
  getItems: async () => {
    try {
      let itemsList = await fetch(routs.items)
      itemsList = itemsList.json()
      return itemsList
    } catch (error) {
      
    }
  }
}