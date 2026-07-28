props component ko bnta h reusable
componet bnya h card ka 
fir app.jsx me jsx bnya pr usme <Card/> lgya do bar
then prop chahiye tha do br tb 
(props return krta  empty object)
Car1d({usrname}){
    return(
        <>
        {username}
        ab mno value nhi di to {username || "priya"}
        </>
    )
} destructuring kr rha h 
function h n App(){
    let myObj = {
        user="p",
        age="2"
    }
    return (
          <>
        <Card channel="chai" obj={myobj} />
        <Card1 username="princy" />
    )
      
    
}