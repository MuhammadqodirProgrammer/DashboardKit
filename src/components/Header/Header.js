import "./Header.scss"

const dataHeader =[
    {
     name:"Unresolved",
     num:60   
    },
    {
        name:"Overdue",
        num:16  
       },
       {
        name:"Open",
        num:43   
       },
       {
        name:"On hold",
        num:64   
       },
]

  function Header() {
    return(
        <>
            <div className="header_boxs">
         {
            dataHeader.map(el => <div className="header_box">
            <p>{el.name}</p>
            <p>{el.num}</p>
            </div>)
         }
            </div>
        </>
    )
}
export default Header

