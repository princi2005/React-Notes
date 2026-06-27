import React from "react";
const UserContext = React.createContext(); // ye ek global variable h
export default UserContext;

<UserContext>
  // ye h ek provider //iske andr jitne bhi component honge vo direct
  UserContext ke through sare state ka access le skte h
</UserContext>;
